import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MediaView from '../../Elements/MediaView';
import Button from '../../Elements/Button';

const CreatePost = ({navigation}) => {
  const [description, setDescription] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create Post</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <TextInput
          placeholder="Please enter description"
          style={styles.textInput}
          multiline
          numberOfLines={5}
          onChangeText={text => setDescription(text)}
          value={description}
        />
      </View>
      <MediaView media={[]} />
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton}>
          <Icon
            name="cloud-upload"
            color="#CCC"
            size={80}
            style={styles.icon}
          />
          <View style={styles.uploadFirstLine}>
            <Text style={styles.normalText}>Drop File here or </Text>
            <Text style={styles.linkText}>click</Text>
          </View>
          <Text style={styles.linkText}>here to upload</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.goBack()} title="Cancel" style={styles.cancel} />
        <Button onPress={() => {}} title="Done" style={styles.done} />
      </View>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#EFEFEF',
    marginVertical: 30,
    marginHorizontal: 40,
    alignItems: 'center',
    borderRadius: 15,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  descriptionContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  textInput: {
    width: '90%',
    paddingStart: 10,
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: 'top',
  },
  icon: {
    marginTop: 20,
  },
  uploadContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  uploadFirstLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalText: {
    fontSize: 16,
  },
  linkText: {
    fontSize: 16,
    color: 'blue',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  cancel: {
    backgroundColor: 'tomato',
  },
  done: {
    backgroundColor: 'dodgerblue',
  },
});
