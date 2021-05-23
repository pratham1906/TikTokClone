import React from 'react';
import {StyleSheet, Text, View,FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post/index';
import posts from '../../../Data/posts'
const HomeScreen = () => {
  return (
    <View>
      <FlatList
      data={posts}
      renderItem={({item})=><Post post={item}/>}
      showsVerticalScrollIndicator={false}
      snapToInterval={Dimensions.get('window').height}
      snapToAlignment={'start'}
      decelerationRate={'normal'}
      keyExtractor={item=>item.id.toString()}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
