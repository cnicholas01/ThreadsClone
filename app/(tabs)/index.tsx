import PostListItem from "@/components/PostListItem";
import { dummyPosts } from "@/dummyData";
import { FlatList, Text, View } from "react-native";
 
export default function HomeScreen() {
  return (
    <View className="flex-1 m-2">
      <FlatList
    data={dummyPosts}
    renderItem={({item}) => (
      <PostListItem post={item} />
    )}
    />
    </View>
  );
}