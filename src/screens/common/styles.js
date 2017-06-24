import { StyleSheet } from 'react-native';

import colors from '../colors';

export const CHEVRON_SIZE = 25;
export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primaryText
  },
  phone: {
    fontSize: 13,
    color: colors.subtleText
  },
  separator: {},
  chevronContainer: {
    justifyContent: 'flex-end',
    flexGrow: 1
  },
  chevron: {
    alignSelf: 'flex-end'
  }
});
