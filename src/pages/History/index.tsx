import {focusListGetAll} from '@api/focusListGetAll';
import {FocusInfoType} from '@src/store/reducer/focus';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCardItem from './components/listCardItem';

export const History = () => {
  const [list, setList] = useState<Array<FocusInfoType>>([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const listData = await focusListGetAll();
    setList(listData);
  };

  return (
    <View style={style.container}>
      {list.length ? (
        list.map((item, index) => {
          return (
            <ListCardItem
              item={item}
              index={index}
              refreshData={refreshData}
              key={index}
            />
          );
        })
      ) : (
        <Text style={style.noneListText}>暂无专注记录</Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  noneListText: {
    marginTop: 30,
    fontSize: 20,
  },
});

export default History;
