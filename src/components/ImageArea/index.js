import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

import {imageHandler} from '../../../assets/images/imageHandler';

const BackImage = ({URI}) => {
  console.log(URI);
  return (
    <View style={styles.container}>
      <View style={styles.imageSize}>
        <Image source={imageHandler[URI]} style={styles.image} />
      </View>
    </View>
  );
};

export default BackImage;

const styles = StyleSheet.create({
  container: {
    height: "40%",
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
    // width: '80%',
    // height: '80%',
  },
});
