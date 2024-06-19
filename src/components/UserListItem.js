import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FollowButton from '../Elements/FollowButton';

const UserListItem = ({user}) => {
  return (
    <View key={user.id} style={styles.continer}>
      <Text style={styles.username}>{user.name}</Text>
      <FollowButton userId={user.id} isFollowing={user.isFollowing} />
    </View>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
