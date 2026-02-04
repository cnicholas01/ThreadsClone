import PostListItem from "@/components/PostListItem";
import { dummyPosts } from "@/dummyData";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
 
export default function HomeScreen() {
  return (

    <View className="flex-1 m-3">
          <Link href="/(protected)/new">
      <Text className="text-blue-500 text-lg font-bold mb-4">
        Create a New Post
      </Text>
    </Link>
      <FlatList
    data={dummyPosts}
    renderItem={({item}) => (
      <PostListItem post={item} />
    )}
    />
    </View>
  );
}