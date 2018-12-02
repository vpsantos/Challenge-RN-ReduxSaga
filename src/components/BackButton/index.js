import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';

import { colors } from 'styles';

import styles from './styles';

const BackButton = ({ navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      navigation.goBack();
    }}
  >
    <Icon name="long-arrow-left" size={24} color={colors.secondary} />
  </TouchableOpacity>
);

BackButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(BackButton);
