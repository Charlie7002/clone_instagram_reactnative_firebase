import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/posts';

console.log('ta race');
export default HomeScreen = () => {
	return (
		//just width ios safeareaview
		<View style={styles.container}>
			<Header />
			<Stories />
			<ScrollView>
				{POSTS.map((post, i) => {
					return <Post key={i} post={post} />;
				})}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		flex: 1,
	},
});
