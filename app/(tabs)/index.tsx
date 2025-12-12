import { ScrollView, View } from 'react-native';

import HeaderFeedComponent from '@/components/HeaderFeedComponent';
import PostComponent from '@/components/feed/post';

import CarouselHistoryComponent from '@/components/feed/carousel';

export default function FeedScreen() {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <HeaderFeedComponent />
        <CarouselHistoryComponent />
        <View style={{ gap: 24, paddingBottom: 16 }}>
          <PostComponent />
          <PostComponent />
        </View>
      </ScrollView>
    </View>
  )
}