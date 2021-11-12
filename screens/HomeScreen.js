import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BottomTab, { bottomTabIcons } from '../components/home/BottomTab';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/posts';
import { db } from '../firebase';

export default HomeScreen = ({ navigation }) => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		db.collectionGroup('posts')
			.orderBy('createdAt', 'desc')
			.onSnapshot(snapshot => {
				setPosts(
					snapshot.docs.map(post => ({ id: post.id, ...post.data() })),
				);
			});
	}, []);
	return (
		<View style={styles.container}>
			<Header navigation={navigation} />
			<Stories />
			<ScrollView>
				{posts.map((post, i) => {
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
