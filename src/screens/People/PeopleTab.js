import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import UserListItem from '../../components/UserListItem';
import {PEOPLE} from '../../utils/Constants';

const PeopleTab = () => {
  const [peopleList, setPeopleList] = useState(PEOPLE);

  const followButtonHandler = user => {
    let data = peopleList.map(item => {
      if (item?.id === user?.id) {
        item.isFollowing = !user.isFollowing;
      }
      return item;
    });

    setPeopleList(data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={peopleList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <UserListItem
            user={item}
            followButtonHandler={() => followButtonHandler(item)}
          />
        )}
      />
    </View>
  );
};

export default PeopleTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
