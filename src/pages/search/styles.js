import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  form: {
    margin: metrics.basePadding,
  },

  searchInput: {
    height: 42,
    backgroundColor: colors.secondary,
    borderRadius: 24,
    paddingHorizontal: metrics.basePadding,
    color: colors.white,
  },

  loading: {
    marginTop: metrics.basePadding,
  },

  message: {
    fontFamily: 'Roboto',
    color: colors.primary,
  },
});

export default styles;
