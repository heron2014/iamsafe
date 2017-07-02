import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow
  },
  contentContainer: {
    marginHorizontal: 10,
    marginBottom: 50,
    marginTop: 40
  },
  separator: {
    borderTopColor: '#4f5aa8',
    borderStyle: 'solid',
    borderTopWidth: 0.5
  },
  text: {
    letterSpacing: 1.2,
    fontWeight: 'bold',
    fontSize: 16,
    padding: 2,
    color: '#616163'
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 15
  }
});
