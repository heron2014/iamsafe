import { StyleSheet, Platform } from 'react-native';

import colors from '../../colors';

export const ICON_SIZE = 25;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple
  },
  infoText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    fontSize: 16
  },
  nameStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    fontSize: 30
  },
  actionInfo: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  actionLabel: {
    color: colors.subtleText,
    fontSize: 12,
    marginBottom: 3
  },
  actionBody: {
    fontSize: 16,
    color: colors.primaryText,
    marginBottom: 5
  },
  cardStyle: {
    borderRadius: 10,
    borderColor: colors.purple
  },
  warning: {
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
    color: '#f4f455'
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
