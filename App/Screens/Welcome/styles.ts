import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eb5862',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  textInputContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 20,
    borderWidth: 1,
    color: 'white',
    borderColor: '#702453',
    borderRadius: 10,
    width: width - 100,
    textAlign: 'center',
  },
  saveButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eb5862',
  },
});