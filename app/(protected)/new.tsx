import {View,Text, TextInput, Pressable, KeyboardAvoidingView,Platform} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function NewPostScreen() {
  return (
    <SafeAreaView className="p-4 flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0}
      >
      <Text className="text-white font-bold">username</Text>

      <TextInput
        placeholder='What is on your mind?'
        placeholderTextColor='gray'
        className='text-white text-lg'
        multiline
        numberOfLines={4}
      />

      <View className='mt-auto'>
        <Pressable className='bg-white rounded-full p-3 px-6 self-end' 
          onPress={() => console.log("Post created!")}>
          <Text className='text-black font-bold'>Post</Text>
        </Pressable>
      </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}