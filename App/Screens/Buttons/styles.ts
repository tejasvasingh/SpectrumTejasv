import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 100,
  },
  variations: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  simpleButtonStyle: {
    width: width - 40,
    marginTop: 10
  },
  textButtonStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  secondButtonStyle: {
    marginBottom: 10,
    backgroundColor: '#34424a',
    width: width - 40,
  },
  thirdButtonStyle: {
    marginBottom: 10,
    backgroundColor: '#6eb1f7',
    width: width - 40,
  },
})