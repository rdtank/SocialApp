import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MediaView from '../Elements/MediaView';
import LikeButton from '../Elements/LikeButton';
import Card from '../Elements/Card';

const PostItem = ({post}) => {
  return (
    <Card style={styles.cardContainer}>
      <MediaView media={post.media} />
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.description}
      </Text>
      <LikeButton postId={post.id} likes={post.likes} />
    </Card>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});
