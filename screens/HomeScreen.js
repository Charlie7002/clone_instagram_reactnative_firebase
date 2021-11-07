import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BottomTab, { bottomTabIcons } from '../components/home/BottomTab';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/posts';

export default HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Stories />
			<ScrollView>
				{POSTS.map((post, i) => {
					return <Post key={i + Math.random()} post={post} />;
				})}
			</ScrollView>
			<BottomTab icons={bottomTabIcons} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		flex: 1,
	},
});
