import {focusListGetAll} from '@api/focusListGetAll';
import {useFocusEffect} from '@react-navigation/native';
import {useAppSelector} from '@src/hooks';
import {FocusInfoType} from '@src/store/reducer/focus';
import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ListCardItem from './components/listCardItem';

export const History = () => {
  const [list, setList] = useState<Array<FocusInfoType>>([]);
  const [refreshing, setRefreshing] = useState(false);
  const token = useAppSelector(state => state.users.token);

  useFocusEffect(
    useCallback(() => {
      refreshData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const refreshData = async () => {
    setRefreshing(true);
    const listData = await focusListGetAll({token});
    setList(listData);
    setRefreshing(false);
  };

  return (
    <View style={style.container}>
      <FlatList
        style={style.flatList}
        data={list}
        renderItem={({item}) => {
          return <ListCardItem item={item} refreshData={refreshData} />;
        }}
        refreshing={refreshing}
        onRefresh={() => {
          refreshData();
        }}
        ListEmptyComponent={() => (
          <Text style={style.listText}>暂无专注记录</Text>
        )}
        ListFooterComponent={() => {
          return list.length > 4 ? (
            <Text style={style.listText}>已经到底了哦~</Text>
          ) : null;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  flatList: {
    width: '100%',
  },
  listText: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default History;
