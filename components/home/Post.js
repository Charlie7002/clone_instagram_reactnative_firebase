import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

const Post = ({ post }) => {
	return (
		<View style={{ marginBottom: 30 }}>
			<Divider witdh={1} orientation="vertical" />
			<PostHeader post={post} />
		</View>
	);
};

const PostHeader = ({ post: { user, imageUrl, profile_picture } }) => (
	<View>
		<View>
			<Image style={styles.img} source={profile_picture} />
			<Text style={{ color: 'white' }}>{user}</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	img: {
		width: 70,
		height: 70,
		borderRadius: 50,
		marginLeft: 6,
		backgroundColor: 'pink',
		borderWidth: 3,
		borderColor: '#ff8501',
	},
});

export default Post;
