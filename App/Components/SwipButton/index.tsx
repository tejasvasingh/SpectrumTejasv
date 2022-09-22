import React from 'react';

import {SafeAreaView, View, Text, StyleSheet, Alert} from 'react-native';

import SwipeButton from 'rn-swipe-button';

const SwipButton = () => {
  return (
    <SwipeButton
      disabled={false}
      swipeSuccessThreshold={70}
      height={45}
      width={330}
      title="Swipe to Right"
      titleColor="white"
      onSwipeSuccess={() => {
        Alert.alert('Swiped Successfully!');
      }}
      railFillBackgroundColor="#c1c1c1"
      railFillBorderColor="#c1c1c1"
      thumbIconBackgroundColor="#ffffff"
      thumbIconBorderColor="#c1c1c1"
      railBackgroundColor="#767888"
      railBorderColor="#c1c1c1"
    />
  );
};

export default SwipButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',

    padding: 10,

    alignItems: 'center',

    justifyContent: 'center',
  },

  title: {
    fontSize: 28,

    fontWeight: 'bold',

    textAlign: 'center',

    padding: 10,
  },
});
