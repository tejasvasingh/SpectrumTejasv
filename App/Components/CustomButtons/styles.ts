import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnLarge: {
    width: 150,
  },
  btnText: {
    fontSize: 12,
    letterSpacing: 0.25,
    textTransform: 'uppercase',
  },
  btnShadow: {
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
  },
});
