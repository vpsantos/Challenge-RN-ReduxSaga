import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.page,
    paddingHorizontal: 0,
    flex: 1,
  },

  loading: {
    marginTop: metrics.basePadding,
  },

  wrapper: {
    flex: 1,
  },

  header: {
    paddingVertical: 25,
    paddingHorizontal: 18,
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },

  leftColumn: {
    marginRight: 23,
  },

  imageContainer: {
    shadowColor: colors.orangeTransparent,
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 33,
    elevation: 15,
  },

  bookImage: {
    width: 100,
    height: 130,
  },

  placeholder: {
    width: (metrics.screenWidth - 80) / 3,
    height: 130,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholderText: {
    fontFamily: 'Roboto',
    color: colors.secondary,
    textAlign: 'center',
  },

  pageCounter: {
    marginTop: 20,
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colors.tertiary,
    lineHeight: 25,
    textAlign: 'center',
  },

  rightColumn: {
    flex: 1,
  },

  infoContainer: {
    height: 130,
  },

  title: {
    width: 202,
    marginTop: -5,
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
  },

  author: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colors.tertiary,
    lineHeight: 25,
  },

  priceContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    marginRight: 12,
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
  },

  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  notForSale: {
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
  },

  scroll: {
    backgroundColor: colors.white,
  },

  content: {
    flex: 1,
    padding: 18,
  },

  description: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 30,
    color: colors.gray,
  },
});

export default styles;
