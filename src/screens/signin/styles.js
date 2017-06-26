import { StyleSheet, Platform } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: colors.grayBackground,
    flex: 1
  },
  textStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: colors.green,
    fontSize: 30,
    fontFamily: 'Helvetica-Bold'
  },
  iconContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10
  },
  cardContainer: {
    padding: 0,
    borderRadius: 10,
    paddingBottom: 30,
    paddingTop: 10
  },
  button: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, 0.4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1
      },
      android: {
        elevation: 2
      }
    }),
    marginTop: 20,
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: colors.green
  }
});
