import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  Image,
  Alert,
} from 'react-native';

import BackButton from 'components/BackButton';
import HeaderTitle from 'components/HeaderTitle';
import SearchButton from 'components/SearchButton';
import Rating from 'components/Rating';
import FavButton from 'components/FavButton';
import Button from 'components/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BookAction } from 'store/ducks/book';

import { colors } from 'styles';

import styles from './styles';

class Detail extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
    getBookRequest: PropTypes.func.isRequired,
    book: PropTypes.shape({
      volumeInfo: PropTypes.shape({
        imageLinks: PropTypes.shape({
          smallThumbnail: PropTypes.string,
        }),
        pageCount: PropTypes.number,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string),
        saleInfo: PropTypes.shape({
          saleability: PropTypes.string,
          listPrice: PropTypes.shape({
            amount: PropTypes.number,
          }),
        }),
        description: PropTypes.string,
      }),
    }).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  static navigationOptions = {
    headerLeft: <BackButton />,
    headerTitle: <HeaderTitle text="Foton Library" />,
    headerRight: <SearchButton />,
  };

  async componentDidMount() {
    const { navigation, getBookRequest } = this.props;
    const bookId = navigation.getParam('bookId');

    getBookRequest(bookId);
  }

  render() {
    const { book, loading } = this.props;

    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator style={styles.loading} size="small" color={colors.secondary} />
        ) : (
          book.volumeInfo && (
            <View style={styles.wrapper}>
              <View style={styles.header}>
                <View style={styles.leftColumn}>
                  <View style={styles.imageContainer}>
                    {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail ? (
                      <Image
                        style={styles.bookImage}
                        source={{ uri: book.volumeInfo.imageLinks.smallThumbnail }}
                        resizeMode="cover"
                      />
                    ) : (
                      <View style={styles.placeholder}>
                        <Text style={styles.placeholderText}>No image available</Text>
                      </View>
                    )}
                  </View>

                  <Text style={styles.pageCounter}>{book.volumeInfo.pageCount} pages</Text>
                </View>

                <View style={styles.rightColumn}>
                  <View style={styles.infoContainer}>
                    <Text style={styles.title} numberOfLines={3}>
                      {book.volumeInfo.title}
                      {book.volumeInfo.subtitle && `: ${book.volumeInfo.subtitle}`}
                    </Text>

                    {book.volumeInfo.authors && (
                      <Text style={styles.author} numberOfLines={1}>
                        by {book.volumeInfo.authors.join(', ')}
                      </Text>
                    )}

                    <View style={styles.priceContainer}>
                      {book.saleInfo.saleability === 'FOR_SALE' && (
                        <Text style={styles.price}>${book.saleInfo.listPrice.amount}</Text>
                      )}

                      <Rating />
                    </View>
                  </View>

                  <View style={styles.buttonsContainer}>
                    {book.saleInfo.saleability !== 'NOT_FOR_SALE' ? (
                      <Button
                        text={book.saleInfo.saleability === 'FREE' ? 'FREE' : 'BUY'}
                        onPress={() => {
                          Alert.alert('Buy button pressed!');
                        }}
                      />
                    ) : (
                      <Text style={styles.notForSale}>NOT FOR SALE</Text>
                    )}

                    <FavButton />
                  </View>
                </View>
              </View>

              <ScrollView style={styles.scroll}>
                <View style={styles.content}>
                  <Text style={styles.description}>
                    {book.volumeInfo.description || 'There is no description'}
                  </Text>
                </View>
              </ScrollView>
            </View>
          )
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book.data,
  loading: state.book.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(BookAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
