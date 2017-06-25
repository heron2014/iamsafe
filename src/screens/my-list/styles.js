import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.grayBackground,
    flex: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.green,
    fontSize: 20,
    marginTop: 20,
    fontFamily: 'Helvetica-Bold'
  }
});
