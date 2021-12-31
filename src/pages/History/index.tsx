import {focusListGetAll} from '@src/api/focusListGetAll';
import {FocusInfoType} from '@src/store/reducer/focus';
import format from '@utils/format';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';

export const History = () => {
  const [list, setList] = useState<Array<FocusInfoType>>([]);

  useEffect(() => {
    async function getData() {
      const listData = await focusListGetAll();
      setList(listData);
    }
    getData();
  }, []);

  return (
    <View>
      {list.map((item, index) => {
        return (
          <Card key={index}>
            <Card.Title>专注目的:{item.aim}</Card.Title>
            <Text>
              时长: {format(item.endDate - item.startDate, 'hh小时mm分钟ss秒')}
            </Text>
          </Card>
        );
      })}
    </View>
  );
};

export default History;
