import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

export const Ripple = () => {
  const rippleHeight = useRef(new Animated.Value(0)).current;
  const rippleWidth = useRef(new Animated.Value(0)).current;
  const rippleOpacity = useRef(new Animated.Value(1)).current;

  const duration = 2000;
  const easing = Easing.out(Easing.ease);
  const useNativeDriver = false;

  const animate = () => {
    rippleHeight.setValue(0);
    rippleWidth.setValue(0);
    rippleOpacity.setValue(1);
    Animated.parallel([
      Animated.timing(rippleHeight, {
        toValue: 200,
        duration,
        easing,
        useNativeDriver,
      }),
      Animated.timing(rippleWidth, {
        toValue: 300,
        duration,
        easing,
        useNativeDriver,
      }),
      Animated.timing(rippleOpacity, {
        toValue: 0,
        duration,
        easing,
        useNativeDriver,
      }),
    ]).start();
  };

  useEffect(() => {
    animate();
  });

  return (
    <Animated.View
      style={[
        style.ripple,
        {
          height: rippleHeight,
          width: rippleWidth,
          opacity: rippleOpacity,
        },
      ]}
    />
  );
};

const style = StyleSheet.create({
  ripple: {
    zIndex: -1,
    position: 'absolute',
    height: 0,
    width: 0,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
});

export default Ripple;
