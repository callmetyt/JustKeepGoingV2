import {FocusInfoType} from '@src/store/reducer/focus';
import React from 'react';
import {focusListDeleteOne} from '@api/focusListDeleteOne';
import {StyleSheet, Text, View, Alert, Share} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import formatDate from '@utils/formatDate';
import formatTime from '@utils/formatTime';
import {useAppSelector} from '@src/hooks';

interface ListCardItemProps {
  item: FocusInfoType;
  refreshData: () => Promise<void>;
}

export const ListCardItem = ({item, refreshData}: ListCardItemProps) => {
  const token = useAppSelector(state => state.users.token);

  const handleDeleteIcon = async (data: FocusInfoType) => {
    Alert.alert('提示', '是否删除该条专注记录', [
      {
        text: '是',
        onPress: async () => {
          await focusListDeleteOne({...data, token});
          await refreshData();
        },
      },
      {
        text: '否',
      },
    ]);
  };

  const handleShareIcon = async (data: FocusInfoType) => {
    try {
      await Share.share({
        message: `已在${data.aim}专注${formatTime(
          item.endDate - item.startDate,
          'hh小时mm分钟',
        )}`,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card containerStyle={style.card}>
      <Card.Title>专注目的:{item.aim}</Card.Title>
      <Text>开始时间: {formatDate(item.startDate)}</Text>
      <Text>
        时长: {formatTime(item.endDate - item.startDate, 'hh小时mm分钟ss秒')}
      </Text>
      <View style={style.actionGroup}>
        <Icon
          name="share"
          raised
          tvParallaxProperties={{}}
          onPress={() => {
            handleShareIcon(item);
          }}
        />
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
    width: '84%',
    marginLeft: '8%',
    marginRight: '8%',
  },
  actionGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default ListCardItem;
