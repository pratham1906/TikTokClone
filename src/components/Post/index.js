import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Video from 'react-native-video'
import styles from './styles'
const Post = () => {
    return (
        <View style={styles.container}>
           <Video
           source={{uri:'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4'}}
           style={styles.video}
           onError={(e)=>console.log(e)}
           resizeMode='cover'
           />
        </View>
    )
}


export default Post


