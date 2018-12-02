import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from 'store/ducks/error';

import { colors } from 'styles';

import styles from './styles';

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
<View style={styles.container}>
  <Text style={styles.message}>{message}</Text>
  <TouchableOpacity style={styles.button} onPress={hideError}>
    <Icon name="times" size={20} color={colors.white} />
  </TouchableOpacity>
</View>
);

ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
