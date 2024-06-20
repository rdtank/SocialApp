import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MediaView = ({media}) => {
  const [showModal, setshowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const viewImage = url => {
    setSelectedImage(url);
    setshowModal(true);
  };

  const closeModal = () => {
    setshowModal(false);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <Image
            resizeMode="contain"
            source={{uri: selectedImage}}
            style={styles.modalImage}
          />
          <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
            <Ionicons name="close-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </Modal>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={media}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.imageContiner}
            key={index}
            onPress={() => viewImage(item)}>
            <Image source={{uri: item}} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MediaView;
const styles = StyleSheet.create({
  imageContiner: {
    marginEnd: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  modalImage: {
    height: 400,
    width: 400,
    marginBottom: 100,
  },
  closeIcon: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000090',
  },
});
