import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {existInArray} from '../helpers/util';
import actionCreators from '../store/actions/combine';
import {Theme, useThemeAwareObject} from '../theme';
import {PostProps, StoreProps} from '../utils/storeInterface';

interface RowProps extends TouchableOpacityProps {
  cat: PostProps;
  isFav?: boolean;
  onFavourite?: (fav: boolean) => void;
}

export const CattBox: React.FC<RowProps> = props => {
  const dispatch = useDispatch();
  const {styles} = useThemeAwareObject(createStyles);
  const {addFav} = bindActionCreators(actionCreators, dispatch);
  const {feed, favFeed} = useSelector((state: StoreProps) => state.feed);

  const {cat, isFav} = props;
  let checkFav = false;
  if (favFeed) {
    checkFav = existInArray(favFeed, cat, 'id');
  }

  return (
    <View style={styles.container}>
      {/* <Image style={styles.icon} source={{uri: cat.image.url}} /> */}
      <FastImage
        style={styles.icon}
        resizeMode="cover"
        source={{uri: cat.image.url}}
      />
      <Text style={styles.name}>{cat.name}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => addFav(cat)}
        testID="ADD_FAV">
        <Image
          style={styles.fav_icon}
          source={
            checkFav
              ? require('../assets/images/love_filled.png')
              : require('../assets/images/love_stroke.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const createStyles = (theme: Theme) => {
  const {color} = theme;
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      backgroundColor: color.bg,
      alignItems: 'center',
      flexDirection: 'row',
    },
    name: {
      fontSize: 15,
      fontWeight: '400',
      color: color.text,
      paddingHorizontal: 12,
      flex: 1,
    },
    icon: {
      height: 45,
      width: 45,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    fav_icon: {
      height: 15,
      width: 13,
      // tintColor: 'grey',
      resizeMode: 'contain',
    },
  });
  return {styles, color};
};
