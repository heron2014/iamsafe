import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flex: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.green,
    fontSize: 20,
    marginTop: 20,
    fontFamily: 'Helvetica-Bold'
  },
  flatListContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10
  }
});
