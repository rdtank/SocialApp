import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LikeButton = ({postId, likes}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    // Implement like/dislike logic using Redux actions
  };

  return (
    <View style={styles.buttonContiner}>
      <TouchableOpacity onPress={toggleLike} style={styles.heart}>
        <Ionicons
          name={liked ? 'heart' : 'heart-outline'}
          size={22}
          color="tomato"
        />
      </TouchableOpacity>
      <Text>{likes}</Text>
    </View>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  buttonContiner: {
    flexDirection: 'row',
  },
  heart: {
    marginEnd: 5,
  },
});
