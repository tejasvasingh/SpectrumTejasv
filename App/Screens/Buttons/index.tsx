import React from 'react';
import BaseLayout from '../../Components/BaseLayout';
import {Alert, Text, View} from 'react-native';
import {styles} from './styles';
import CustomButton from '../../Components/CustomButtons';
import SwipButton from '../../Components/SwipButton';

const Buttons = () => {
  const actionComplted = (number: string) => {
    Alert.alert(`You Pressed ${number} Button`);
  };
  return (
    <BaseLayout>
      <View style={styles.container}>
        <Text style={styles.variations}>4 Variations of button</Text>
        <CustomButton
          title="press me"
          style={styles.simpleButtonStyle}
          textStyle={styles.textButtonStyle}
          onPress={() => actionComplted('First')}
        />
        <CustomButton
          title="press me"
          style={styles.secondButtonStyle}
          textStyle={styles.textButtonStyle}
          onPress={() => actionComplted('Second')}
        />
        <CustomButton
          title="press me"
          style={styles.thirdButtonStyle}
          textStyle={styles.textButtonStyle}
          onPress={() => actionComplted('Third')}
        />
        <SwipButton />
      </View>
    </BaseLayout>
  );
};

export default Buttons;
