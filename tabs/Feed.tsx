import React, {useCallback, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CattBox} from '../components/CatBox';
import {Header} from '../components/Header';
import actionCreators from '../store/actions/combine';
import {Theme, useThemeAwareObject} from '../theme';
import {PostProps, StoreProps} from '../utils/storeInterface';

export const Feed: React.FC<any> = props => {
  const dispatch = useDispatch();
  const {feed, favFeed} = useSelector((state: StoreProps) => state.feed);
  const {setFeed} = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    setFeed();
  }, []);

  const {styles, color} = useThemeAwareObject(createStyles);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{}}>
        <Header title={'All Cats'} />
        <FlatList
          testID="cat-list"
          contentContainerStyle={styles.spacer}
          showsVerticalScrollIndicator={false}
          data={feed}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CattBox
              key={item.name}
              cat={item}
              isFav={favFeed?.includes(item)}
            />
          )}
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
    spacer: {
      paddingBottom: 120,
    },
  });
  return {styles, color};
};
