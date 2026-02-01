import { View, Text, Image, Pressable } from 'react-native';
import { Post } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
export default function PostListItem({ post }: { post: Post }) {
  return (
    <View className='flex-row mt-3 border-b border-gray-800/70'>
      {/* User Avatar */}
      <View className='mr-3'>
        <Image
          source={{ uri: post.user.image }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      </View>

       <View>
        {/* User Info */}
        <View className='flex-row gap-2'>
          <Text className='text-white font-bold'>
            {post.user.username}
          </Text>
          <Text className=' text-white'>
            {dayjs(post.createdAt).fromNow()}
          </Text>
        </View>
      {/* Content */}
      <View className='mb-3'>
        {/* Post Content */}
        <Text className='text-white mt-1 mb-2'>{post.content}</Text>

        {/* Interaction Buttons */}
        <View className='flex-row gap-4'>
          <Pressable className='flex-row gap-2'>
            <Ionicons name='heart-outline' size={20} color='#d1d5db' />
            <Text className='text-white'>0</Text>
          </Pressable>

          <Pressable className='flex-row gap-2'>
            <Ionicons name='chatbubble-outline' size={20} color='#d1d5db' />
            <Text className='text-white'>{post.replies.length}</Text>
          </Pressable>

          <Pressable className='flex-row gap-2'>
            <Ionicons name='repeat-outline' size={20} color='#d1d5db' />
            <Text className='text-white'>0</Text>
          </Pressable>

          <Pressable className=''>
            <Ionicons name='paper-plane-outline' size={20} color='#d1d5db' />
          </Pressable>
        </View>
      </View>
    </View></View>
  );
}
