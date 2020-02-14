import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  typography: {mainFont, hugeText},
} = THEME;
const styles = StyleSheet.create({
  page: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '83%',
    display: 'flex',
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: hugeText,
    fontFamily: mainFont,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  image: {
    resizeMode: 'contain',
    height: 80,
    width: 80,
    padding: 16,
  },
  infoListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 12,
  },
  text: {
    fontFamily: mainFont,
    padding: 20,
  },
});
export default styles;
