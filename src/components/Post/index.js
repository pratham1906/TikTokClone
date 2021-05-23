import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
const Post = (props) => {
const {post}=props;

  const [paused, setPaused] = useState(false);
  const onplayPausePress = () => {
    setPaused(!paused);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onplayPausePress}>
        <Video
          source={{
            uri: post.videoUri,
          }}
          style={styles.video}
          onError={e => console.log(e)}
          resizeMode="cover"
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View
          style={{
            alignSelf: 'flex-end',
            height: 320,
            justifyContent: 'space-between',
            marginRight: 5,
          }}>
          <Image
            source={{
              uri:post.user.imageUri,
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: 'white',
              alignSelf: 'center',
            }}
          />

          <View style={styles.iconContainer}>
            <AntDesign name="heart" size={30} color="white" />
            <Text style={styles.statsLabel}>{post.likes}</Text>
          </View>
          <View style={styles.iconContainer}>
            <FontAwesome name="commenting" size={30} color="white" />
            <Text style={styles.statsLabel}>{post.comments}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Fontisto name="share-a" size={25} color="white" />
            <Text style={styles.statsLabel}>{post.shares}</Text>
          </View>
        </View>

        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontWeight: '700',
                marginBottom: 10,
              }}>
              {post.user.username}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '300',
                marginBottom: 10,
              }}>
              {post.description}
            </Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Entypo name="beamed-note" size={24} color="white" />
              <Text style={{color: 'white', fontSize: 16, marginLeft: 5}}>
               {post.songName}
              </Text>
            </View>
          </View>

          <Image
            source={{
              uri: post.songImage,
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 5,
              borderColor: '#4c4c4c',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Post;
