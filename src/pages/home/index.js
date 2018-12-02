import React from 'react';
import PropTypes from 'prop-types';

import { View, StatusBar, Text } from 'react-native';

import Button from 'components/Button';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from 'styles';

import styles from './styles';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />

    <View style={styles.logo}>
      <Icon name="local-library" size={70} color={colors.secondary} />

      <Text style={styles.logoText}>Foton Library</Text>
    </View>

    <Button
      text="JOIN"
      onPress={() => {
        navigation.navigate('List');
      }}
    />

    <Text style={styles.welcome}>Welcome ;)</Text>
  </View>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

Home.navigationOptions = {
  header: null,
};

export default Home;
