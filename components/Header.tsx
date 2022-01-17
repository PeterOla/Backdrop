import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Theme, useThemeAwareObject} from '../theme';

interface RowProps {
  title: string;
}

export const Header: React.FC<RowProps> = props => {
  const {styles} = useThemeAwareObject(createStyles);
  return (
    <View style={[styles.container, {}]}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const createStyles = (theme: Theme) => {
  const {color} = theme;

  const styles = StyleSheet.create({
    container: {
      height: 64,
      width: '100%',
      justifyContent: 'center',
    },
    title: {
      color: color.text,
      fontWeight: '600',
      fontSize: 16,
    },
  });
  return {styles, color};
};
