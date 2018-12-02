import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from 'styles';

import styles from './styles';

class FavButton extends Component {
  state = {
    favorite: false,
  };

  handlePress = () => {
    const { favorite } = this.state;

    this.setState({ favorite: !favorite });
  };

  render() {
    const { favorite } = this.state;

    return (
      <TouchableOpacity style={styles.container} onPress={this.handlePress}>
        <Icon name={favorite ? 'favorite' : 'favorite-border'} size={20} color={colors.white} />
      </TouchableOpacity>
    );
  }
}

export default FavButton;
