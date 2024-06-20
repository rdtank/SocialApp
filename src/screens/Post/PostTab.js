import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostItem from '../../components/PostItem';
import {POST} from '../../utils/Constants';

const PostTab = ({navigation}) => {
  const [posts, setPosts] = useState(POST);

  const updateLikeCount = id => {
    const updatedPost = posts.map(post => {
      if (post.id === id) {
        if (post.liked) {
          post.likes -= 1;
          post.liked = false;
        } else {
          post.likes += 1;
          post.liked = true;
        }
      }
      return post;
    });
    setPosts(updatedPost);
  };

  const onCreatePost = () => {
    navigation.navigate('Create');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={POST}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <PostItem post={item} onLike={updateLikeCount} />
        )}
      />
      <View style={styles.bottomIconContiner}>
        <TouchableOpacity style={styles.addButton} onPress={onCreatePost}>
          <Ionicons name="add" size={35} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomIconContiner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: 'dodgerblue',
    padding: 15,
    borderRadius: 30,
  },
});
