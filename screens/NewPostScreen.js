import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddNewPost from '../components/newPost/AddNewPost';

const NewPostScreen = ({ navigation }) => {
	return (
		<View style={{ backgroundColor: 'black', flex: 1, paddingTop: 20 }}>
			<AddNewPost navigation={navigation} />
		</View>
	);
};

export default NewPostScreen;

const styles = StyleSheet.create({});
