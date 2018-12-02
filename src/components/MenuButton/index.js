import React from 'react';

import { TouchableOpacity, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from 'styles';

import styles from './styles';

const MenuButton = () => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      Alert.alert('Menu button pressed!');
    }}
  >
    <Icon name="menu" size={24} color={colors.secondary} />
  </TouchableOpacity>
);

export default MenuButton;
