import { StyleSheet } from 'react-native';

import colors from '../colors';

export const ICON_SIZE = 25;

export default StyleSheet.create({
  actionContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
    backgroundColor: colors.grayBackground
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  actionInfo: {
    flexDirection: 'column'
  },
  actionIcons: {
    flexDirection: 'row'
  },
  actionIcon: {
    marginLeft: 13
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
  infoContainer: {
    paddingVertical: 15
  }
});
