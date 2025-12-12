import { ThemedText } from '@/components/shared/ThemedText';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function PostComponent() {
   const [containerWidth, setContainerWidth] = useState(0);
  
   const [post, setPost] = useState({
    username: 'Username',
    subtitle: 'Publicidad',
    likes: 187,
    comments: 10,
    messages: 14,
    author: 'mycahfrn',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.',
    date: '4 de Noviembre',
    imageProfile: require('@/assets/images/app/profile.jpeg'),
    feedImage: require('@/assets/images/app/feedpost.png'),
    iconFavorite: require('@/assets/icons/favorite.svg'),
    iconComment: require('@/assets/icons/comment.svg'),
    iconMessage: require('@/assets/icons/message.svg'),
    iconBookmark: require('@/assets/icons/bookmark.svg'),
    aspectRatio: 1.2
  });

  const imageHeight = containerWidth ? containerWidth * post.aspectRatio: undefined; // 4:5 -> height = width * 5/4

  return (
    <View style={styles.layout}>
        <View style={styles.header}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={post.imageProfile} style={styles.image_profile}  />
            </View>
            <View style={{ paddingVertical: 8 }}>
                <ThemedText type="username">{post.username}</ThemedText>
                <ThemedText type="subtitle">{post.subtitle}</ThemedText>
            </View>
        </View>
         <View onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}>
            <Image
              source={post.feedImage}
              style={[styles.feedImage, imageHeight ? { height: imageHeight } : {}]}
              contentFit="cover"
            />
         </View>
         <View style={{ paddingHorizontal: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 }}>
              <View style={{ flexDirection: 'row', gap: 16 }}>
               <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Image source={post.iconFavorite} style={styles.icon} />
                <ThemedText type="metadata">{post.likes}</ThemedText>
               </View>
               <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                  <Image source={post.iconComment} style={styles.icon} />
                  <ThemedText type="metadata">{post.comments}</ThemedText>
               </View>
               <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                  <Image source={post.iconMessage} style={styles.icon} />
                  <ThemedText type="metadata">{post.messages}</ThemedText>
               </View>
                
            </View>
            <View>
              <Image source={post.iconBookmark} style={styles.icon} />
            </View>
            </View>
            <View>
              <ThemedText type="description">
                <ThemedText type="username">{post.author} </ThemedText>
                {post.caption}
              </ThemedText>
            </View>
            <View style={{ marginTop: 8 }}> 
              <ThemedText type="link">{post.date}</ThemedText>
            </View>
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
    layout: {
        
    },
    icon: {
        width: 24,
        height: 24,
        color: 'rgb(245, 245, 245)',
        tintColor: 'rgb(245, 245, 245)',
    },
    header: {
        paddingHorizontal: 12,
        display: 'flex',
        flexDirection: 'row',
        minHeight: 56,
    },
    image_profile: {
        width: 32,
        height: 32,
        borderRadius: 999,
        marginRight: 12,
    },
    feedImage: {
     width: '100%'
   }
})