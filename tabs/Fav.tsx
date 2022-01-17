import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FavBox} from '../components/FavBox';
import {Header} from '../components/Header';
import actionCreators from '../store/actions/combine';
import {Theme, useThemeAwareObject} from '../theme';
import {PostProps, StoreProps} from '../utils/storeInterface';

export const Fav: React.FC<any> = props => {
  const dispatch = useDispatch();
  const {feed, favFeed} = useSelector((state: StoreProps) => state.feed);
  const {setFeed} = bindActionCreators(actionCreators, dispatch);
  const {styles, color} = useThemeAwareObject(createStyles);

  const keyExtractor = useCallback((item: PostProps) => item.name, []);
  const renderItem = useCallback(
    ({item}) => {
      return (
        <FavBox key={item.name} cat={item} isFav={favFeed?.includes(item)} />
      );
    },
    [feed, favFeed],
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header title={'Cats I Like'} />
        <FlatList
          // style={{flex: 1}}
          columnWrapperStyle={styles.list_column}
          // contentContainerStyle={{flex: 1}}
          showsVerticalScrollIndicator={false}
          data={favFeed}
          numColumns={2}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};

const createStyles = (theme: Theme) => {
  const {color} = theme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      backgroundColor: color.bg,
    },
    list_column: {
      justifyContent: 'space-between',
    },
  });
  return {styles, color};
};
