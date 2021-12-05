import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {addInfo, FocusInfoType} from '../../../../store/reducer/focus';

export const InfoArea = () => {
  const [inputData, setInputData] = useState<FocusInfoType>({aim: ''});

  const dispatch = useDispatch();

  const updateStoreData = (data: FocusInfoType) => {
    dispatch(addInfo(data));
  };

  return (
    <View style={style.container}>
      <Card>
        <Card.Title>专注内容描述</Card.Title>
        <Input
          placeholder="目的"
          autoCompleteType="aim"
          value={inputData.aim}
          onChangeText={(value: string) => {
            setInputData(pre => {
              updateStoreData({
                ...pre,
                aim: value,
              });
              return {
                ...pre,
                aim: value,
              };
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
