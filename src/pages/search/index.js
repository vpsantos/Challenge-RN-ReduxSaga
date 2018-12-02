import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SearchActions } from 'store/ducks/search';

import { View, TextInput } from 'react-native';

import BackButton from 'components/BackButton';
import HeaderTitle from 'components/HeaderTitle';
import BookList from 'components/BookList';

import { colors } from 'styles';

import styles from './styles';

class Search extends Component {
  static navigationOptions = {
    headerLeft: <BackButton />,
    headerTitle: <HeaderTitle text="Search" />,
    headerRight: <View />,
  };

  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
    search: PropTypes.shape({
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

  constructor(props) {
    super(props);

    const { searchRequest } = this.props;

    this.searchRequest = debounce(searchRequest, 500);
  }

  state = {
    searchInput: '',
  };

  search = (searchInput) => {
    this.setState({ searchInput });

    if (searchInput === '') {
      return;
    }

    this.searchRequest({ term: searchInput, startIndex: 0 });
  };

  render() {
    const { searchInput } = this.state;
    const { search } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search for books..."
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            value={searchInput}
            onChangeText={this.search}
          />
        </View>

        <BookList
          data={search.data}
          refreshing={search.refreshing}
          loading={search.loading}
          totalItems={search.totalItems}
          onRefresh={() => {
            if (searchInput === '') {
              return;
            }

            this.searchRequest({ term: searchInput, startIndex: 0, refreshing: true });
          }}
          loadMore={() => {
            if (searchInput === '' || search.data.length === search.totalItems) {
              return;
            }

            this.searchRequest({ term: searchInput, startIndex: search.data.length });
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
