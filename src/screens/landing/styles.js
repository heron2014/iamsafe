import { StyleSheet, Platform } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1
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
    marginTop: 10,
    paddingVertical: 16,
    borderRadius: 30
  }
});
