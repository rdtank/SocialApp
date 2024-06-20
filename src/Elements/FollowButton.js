import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const FollowButton = ({userId, isFollowing, onClick}) => {
  const toggleFollow = () => onClick();
  return (
    <TouchableOpacity
      onPress={toggleFollow}
      style={[
        styles.buttonContiner,
        isFollowing ? styles.follow : styles.unfollow,
      ]}>
      <Text style={styles.textStyle}>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </Text>
    </TouchableOpacity>
  );
};

export default FollowButton;

const styles = StyleSheet.create({
  buttonContiner: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: 90,
  },
  follow: {
    backgroundColor: '#3E3E3E',
  },
  unfollow: {
    backgroundColor: 'dodgerblue',
  },
  textStyle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});
