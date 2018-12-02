import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { withNavigation } from 'react-navigation';

import { colors } from 'styles';

import styles from './styles';

const SearchButton = ({ navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      navigation.navigate('Search');
    }}
  >
    <Icon name="search" size={24} color={colors.secondary} />
  </TouchableOpacity>
);

SearchButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(SearchButton);
