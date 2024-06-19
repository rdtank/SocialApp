import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostItem from '../../components/PostItem';

const POST = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
  {
    id: 2,
    title: 'qui est esse',
    description:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    description:
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
  {
    id: 4,
    title: 'eum et est occaecati',
    description:
      'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
  {
    id: 5,
    title: 'nesciunt quas odio',
    description:
      'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
    likes: 23,
    media: [],
  },
  {
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    description:
      'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
    likes: 23,
    media: ['https://picsum.photos/seed/picsum/200/200'],
  },
  {
    id: 7,
    title: 'magnam facilis autem',
    description:
      'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
  {
    id: 8,
    title: 'dolorem dolore est ipsam',
    description:
      'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
  {
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
    description:
      'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
  {
    id: 10,
    title: 'optio molestias id quia eum',
    description:
      'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
  {
    id: 11,
    title: 'et ea vero quia laudantium autem',
    description:
      'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi',
    likes: 23,
    media: [],
  },
  {
    id: 12,
    title: 'in quibusdam tempore odit est dolorem',
    description:
      'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
  {
    id: 13,
    title: 'dolorum ut in voluptas mollitia et saepe quo animi',
    description:
      'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
  {
    id: 14,
    title: 'voluptatem eligendi optio',
    description:
      'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
  {
    id: 15,
    title: 'eveniet quod temporibus',
    description:
      'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae',
    likes: 23,
    media: [
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
      'https://picsum.photos/seed/picsum/200/200',
    ],
  },
];

const PostTab = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={POST}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <PostItem post={item} />}
      />
      <View style={styles.bottomIconContiner}>
        <TouchableOpacity style={styles.addButton}>
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
