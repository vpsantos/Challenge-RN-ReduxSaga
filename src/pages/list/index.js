import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import MenuButton from 'components/MenuButton';
import HeaderTitle from 'components/HeaderTitle';
import SearchButton from 'components/SearchButton';
import BookList from 'components/BookList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksActions } from 'store/ducks/books';

import styles from './styles';

class List extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getBooksRequest: PropTypes.func.isRequired,
    books: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
        }),
      ),
      refreshing: PropTypes.bool,
      totalItems: PropTypes.number,
      loading: PropTypes.bool,
    }).isRequired,
  };

  static navigationOptions = {
    headerLeft: <MenuButton />,
    headerTitle: <HeaderTitle text="Foton Library" />,
    headerRight: <SearchButton />,
  };

  async componentDidMount() {
    const { getBooksRequest } = this.props;

    getBooksRequest({ startIndex: 0 });
  }

  render() {
    const { books, getBooksRequest } = this.props;

    return (
      <View style={styles.container}>
        <BookList
          data={books.data}
          refreshing={books.refreshing}
          loading={books.loading}
          totalItems={books.totalItems}
          onRefresh={() => {
            getBooksRequest({ startIndex: 0, refreshing: true });
          }}
          loadMore={() => {
            if (books.data.length === books.totalItems) {
              return;
            }

            getBooksRequest({ startIndex: books.data.length });
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
