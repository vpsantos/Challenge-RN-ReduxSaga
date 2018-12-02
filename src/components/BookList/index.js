import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList, View, ActivityIndicator } from 'react-native';

import BookItem from 'components/BookItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksActions } from 'store/ducks/books';

import { colors } from 'styles';

import styles from './styles';

class BookList extends Component {
  renderFooter = () => {
    const { loading } = this.props;

    if (!loading) {
      return null;
    }

    return (
      <View>
        <ActivityIndicator style={styles.loading} size="small" color={colors.secondary} />
      </View>
    );
  };

  render() {
    const {
      data, onRefresh, loadMore, refreshing,
    } = this.props;

    return (
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={book => book.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <BookItem book={item} />}
        onRefresh={onRefresh}
        refreshing={refreshing}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

BookList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
  onRefresh: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(BookList);
