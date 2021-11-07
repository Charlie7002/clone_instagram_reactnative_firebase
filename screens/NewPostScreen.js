import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AddNewPost from '../components/newPost/AddNewPost';

const NewPostScreen = () => {
	return (
		<View style={{ backgroundColor: 'black', flex: 1, paddingTop: 20 }}>
			<AddNewPost />
		</View>
	);
};

export default NewPostScreen;

const styles = StyleSheet.create({});
