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
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import actionCreators from '../store/actions/combine';
import {Theme, useThemeAwareObject} from '../theme';
import {PostProps} from '../utils/storeInterface';

interface RowProps extends TouchableOpacityProps {
  cat: PostProps;
  isFav?: boolean;
  onFavourite?: (fav: boolean) => void;
}

export const FavBox: React.FC<RowProps> = props => {
  const dispatch = useDispatch();
  const {styles} = useThemeAwareObject(createStyles);
  const {addFav} = bindActionCreators(actionCreators, dispatch);

  const {cat, isFav} = props;
  return (
    <View style={styles.container} testID="cat_name">
      <FastImage
        style={styles.icon}
        resizeMode="cover"
        source={{uri: cat.image.url}}
      />

      <View style={styles.name_section}>
        <Text style={styles.name}>{cat.name}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => addFav(cat)}>
          <Image
            style={styles.fav_icon}
            source={require('../assets/images/love_filled.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createStyles = (theme: Theme) => {
  const {color} = theme;
  const styles = StyleSheet.create({
    container: {
      width: '47%',
      paddingVertical: 20,
      backgroundColor: color.bg,
      alignItems: 'center',
    },
    name_section: {
      marginTop: 12,
      flexDirection: 'row',
    },
    name: {
      fontSize: 15,
      fontWeight: '400',
      color: color.text,
      // paddingHorizontal: 12,
      flex: 1,
    },
    icon: {
      height: 150,
      flex: 1,
      width: '100%',
      // width: '100%',
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
