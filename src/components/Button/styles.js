import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: 116,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderRadius: 18,
    shadowColor: colors.blueTransparent,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 15,
  },

  text: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
