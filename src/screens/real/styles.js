import { StyleSheet, Platform } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.grayBackground,
    flex: 1
  },
  textContainer: {
    marginTop: 20,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.green,
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 30
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
    borderRadius: 30,
    backgroundColor: colors.green
  }
});
