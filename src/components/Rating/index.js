import React, { Component } from 'react';

import { View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from 'styles';

import styles from './styles';

class Rating extends Component {
  state = {
    stars: 0,
  };

  createStars = () => {
    const { stars } = this.state;
    const starElements = [];

    for (let i = 0; i < 5; i++) {
      starElements.push(
        <TouchableOpacity
          key={i}
          style={styles.star}
          onPress={() => {
            this.handleStarsPress(i + 1);
          }}
        >
          <Icon name="star" size={16} color={stars > i ? colors.enabled : colors.disabled} />
        </TouchableOpacity>,
      );
    }

    return starElements;
  };

  handleStarsPress = (stars) => {
    this.setState({ stars });
  };

  render() {
    return <View style={styles.container}>{this.createStars()}</View>;
  }
}

export default Rating;
