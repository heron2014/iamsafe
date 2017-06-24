import { StyleSheet } from 'react-native';

import colors from '../../colors';

export const ICON_SIZE = 25;

export default StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
    backgroundColor: colors.grayBackground
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
  }
});
