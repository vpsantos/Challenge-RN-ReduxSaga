import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginHorizontal: metrics.baseMargin,
  },

  bookImage: {
    width: (metrics.screenWidth - 80) / 3,
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
});

export default styles;
