import { StyleSheet, Platform } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
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
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 30
  },
  welcomeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    // textDecorationLine: 'underline',
    color: '#fff',
    fontSize: 26,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 30,
    marginTop: 10
  },
  buttonsContainer: {
    flexGrow: 1,
    justifyContent: 'center'
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
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 16,
    borderRadius: 50,
    height: 120,
    width: 120
  }
});
