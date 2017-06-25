import { StyleSheet, Platform } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.lightGray,
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
    color: colors.purple,
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 35
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
