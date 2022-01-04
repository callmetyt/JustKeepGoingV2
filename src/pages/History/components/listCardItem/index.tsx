import {FocusInfoType} from '@src/store/reducer/focus';
import React from 'react';
import {focusListDeleteOne} from '@api/focusListDeleteOne';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import formatDate from '@utils/formatDate';
import formatTime from '@utils/formatTime';

interface ListCardItemProps {
  item: FocusInfoType;
  index: number;
  refreshData: () => Promise<void>;
}

export const ListCardItem = ({item, index, refreshData}: ListCardItemProps) => {
  const handleDeleteIcon = async (data: FocusInfoType) => {
    Alert.alert('提示', '是否删除该条专注记录', [
      {
        text: '是',
        onPress: async () => {
          await focusListDeleteOne(data);
          await refreshData();
        },
      },
      {
        text: '否',
      },
    ]);
  };

  return (
    <Card key={index} containerStyle={style.card}>
      <Card.Title>专注目的:{item.aim}</Card.Title>
      <Text>开始时间: {formatDate(item.startDate)}</Text>
      <Text>
        时长: {formatTime(item.endDate - item.startDate, 'hh小时mm分钟ss秒')}
      </Text>
      <View style={style.actionGroup}>
        <Icon
          name="delete"
          raised
          tvParallaxProperties={{}}
          onPress={() => {
            handleDeleteIcon(item);
          }}
        />
      </View>
    </Card>
  );
};

const style = StyleSheet.create({
  card: {
    width: '85%',
  },
  actionGroup: {
    display: 'flex',
    alignItems: 'flex-end',
  },
});

export default ListCardItem;
