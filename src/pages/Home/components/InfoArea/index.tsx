import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Input} from 'react-native-elements';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {FocusInfoType, updateFocusInfo} from '@src/store/reducer/focus';

export const InfoArea = () => {
  const focusData = useAppSelector(state => state.focus);
  const dispatch = useAppDispatch();

  const updateStoreData = (data: FocusInfoType) => {
    dispatch(updateFocusInfo(data));
  };

  return (
    <View style={style.container}>
      <Card>
        <Card.Title>专注内容描述</Card.Title>
        <Input
          placeholder="目的"
          autoCompleteType="aim"
          value={focusData.aim}
          onChangeText={(value: string) => {
            updateStoreData({
              ...focusData,
              aim: value,
            });
          }}
        />
      </Card>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default InfoArea;
