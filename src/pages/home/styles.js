import { StyleSheet } from 'react-native';
import { general, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.page,
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
  },

  welcome: {
    position: 'absolute',
    bottom: 40,
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colors.tertiary,
  },
});

export default styles;
