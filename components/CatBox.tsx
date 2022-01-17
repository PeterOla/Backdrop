import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
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

export const CattBox: React.FC<RowProps> = props => {
  const dispatch = useDispatch();
  const {styles} = useThemeAwareObject(createStyles);
  const {addFav} = bindActionCreators(actionCreators, dispatch);

  const {cat, isFav} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={{uri: cat.image.url}} />
      <Text style={styles.name}>{cat.name}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => addFav(cat)}>
        <Image
          style={styles.fav_icon}
          source={
            isFav
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
      resizeMode: "cover",
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
