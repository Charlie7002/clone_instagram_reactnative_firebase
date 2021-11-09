import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FormikPostUploader from './FormikPostUploader';

const AddNewPost = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header navigation={navigation} />
			<FormikPostUploader navigation={navigation} />
		</View>
	);
};

const Header = ({ navigation }) => (
	<View style={styles.headerContainer}>
		<TouchableOpacity
			onPress={() => {
				navigation.goBack();
			}}
		>
			<Ionicons name="md-chevron-back-sharp" size={30} color="white" />
		</TouchableOpacity>
		<Text style={styles.headerText}>NEW POST</Text>
		<Text></Text>
	</View>
);

export default AddNewPost;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerText: {
		color: 'white',
		fontWeight: '700',
		fontSize: 20,
		marginRight: 27,
	},
});
