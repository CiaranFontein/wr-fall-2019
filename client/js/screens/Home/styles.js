import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  carousel: {
    maxHeight: 250,
    maxWidth: '100%',
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
  },
  categories: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: '800',
    margin: 20,
  },
  headerImage: {
    resizeMode: 'contain',
    width: 150,
    height: 100,
  },
  categoryImage: {
    resizeMode: 'contain',
    width: '95%',
    height: 200,
  },
  catLayout: {
    flex: 0.5,
    flexDirection: 'column',
  },
});
export default styles;
