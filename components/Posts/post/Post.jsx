import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Avatar, NetworkImage, EmoState } from "../../../components/index";
import { AntDesign } from "@expo/vector-icons";

const Post = ({ count, like }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.contentBar}>
          <Avatar />
          <View>
            <TouchableOpacity></TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="ellipsis1" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <NetworkImage
            source={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1s1XVTBlElw03WteknfOXybCMRmQtoztSug&usqp=CAU"
            }
            height={200}
            width={"100%"}
            mode={"cover"}
          />
          <View style={styles.content}>
            <EmoState />

            {like ? (
              <Text style={{ marginVertical: 8, color: "#000000" }}>
                {like} lượt thích
              </Text>
            ) : (
              <Text style={{ marginVertical: 8, color: "#000000" }}>0</Text>
            )}

            <TouchableOpacity>
              <Text numberOfLines={1}>
                Đừng dài dòng hay cắt xén bài viết qúa ngắn. Hầu hết các website
                directory đều yêu cầu độ dài các bài viết. Khi viết thư tin tức
              </Text>
              <TouchableOpacity>
                <Text style={styles.txt}>Xem tất cả {count} bình luận</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  contentBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 14,
    marginVertical: 13,
  },
  content: {
    marginHorizontal: 10,
  },
  txt: {
    color: "#4D4C4C",
    marginVertical: 8,
  },
});
