import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import BaseLayout from '../../Components/BaseLayout';
import {ScreenName} from '../../Constant/ScreenName';
import {styles} from './styles';

const Welcome = ({navigation}) => {
  const [name, setName] = useState('');
  return (
    <BaseLayout>
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <Text style={styles.buttonText}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Enter your name"
          />
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => Alert.alert(name)}>
            <Text style={styles.buttonText}>Buttons</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate(ScreenName.buttons)}>
            <Text style={styles.buttonText}>Buttons</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate(ScreenName.main)}>
            <Text style={styles.buttonText}>Main</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BaseLayout>
  );
};
export default Welcome;
