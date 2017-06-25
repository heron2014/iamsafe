import { StyleSheet, Platform } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.pastelGreen,
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
  contactContainer: {
    borderBottomColor: '#fff',
    padding: 10,
    borderBottomWidth: 0.5,
    borderStyle: 'solid'
  },
  contactText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
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
    marginTop: 30,
    borderRadius: 30
  }
});
