import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 23,
    color: colors.secondary,
  },

  separator: {
    width: 129,
    height: 2,
    backgroundColor: colors.yellow,
  },
});

export default styles;
