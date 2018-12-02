import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import styles from './styles';

const HeaderTitle = ({ text }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{text}</Text>
    </View>

    <View style={styles.separator} />
  </View>
);

HeaderTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeaderTitle;
