import React from 'react';
import BaseLayout from '../../Components/BaseLayout';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

const Main = () => {
  const {name} = useSelector((state: any) => state);
  return (
    <BaseLayout>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </BaseLayout>
  );
};

export default Main;
