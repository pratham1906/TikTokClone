import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Post from '../../components/Post/index';

const post1 = {
  id: 'p1',
  user: {
    id: 'u1',
    username: 'daviddobrik',
    imageUri:'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA_400x400.jpg'
  },
  description: 'hahahha oh boy @borat',
  song: 'NF -The search',
  songImage: '',
  likes: 123,
  comments: 12,
  shares: 44,
  videoUri:
    'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
    songImage:'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA_400x400.jpg'
};
const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Post post={post1} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
