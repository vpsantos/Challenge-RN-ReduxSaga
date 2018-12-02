import React from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity, Image, View, Text,
} from 'react-native';

import { withNavigation } from 'react-navigation';

import styles from './styles';

const BookItem = ({ book, navigation }) => (
  <TouchableOpacity
    key={book.id}
    style={styles.container}
    onPress={() => {
      navigation.navigate('Detail', { bookId: book.id });
    }}
  >
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
  </TouchableOpacity>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    volumeInfo: PropTypes.shape({
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(BookItem);
