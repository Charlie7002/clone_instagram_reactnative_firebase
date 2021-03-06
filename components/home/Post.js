import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { firebase, db } from '../../firebase';
import { POSTS } from '../../data/posts';

const ICONS = [
	{
		name: 'Like',
		imageUrl:
			'https://img.icons8.com/fluency-systems-regular/48/ffffff/like--v1.png',
		likedImageUrl: 'https://img.icons8.com/material/48/fa314a/like--v1.png',
	},
	{
		name: 'Comment',
		imageUrl: 'https://img.icons8.com/ios/50/ffffff/speech-bubble--v1.png',
	},
	{
		name: 'Send',
		imageUrl:
			'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-send-email-flatart-icons-outline-flatarticons.png',
	},
	{
		name: 'Bookmark',
		imageUrl:
			'https://img.icons8.com/fluency-systems-regular/48/ffffff/bookmark-ribbon--v1.png',
	},
];

const Post = ({ post }) => {
	console.log(post);
	const handleLike = post => {
		//includes cherche dans array et renvoi tru||false
		const currentLikeStatus = !post.likes_by_users.includes(
			firebase.auth().currentUser.email,
		);
		db.collection('users')
			.doc(post.owner_email)
			.collection('posts')
			.doc(post.id)
			.update({
				likes_by_users: currentLikeStatus
					? firebase.firestore.FieldValue.arrayUnion(
							firebase.auth().currentUser.email,
					  )
					: firebase.firestore.FieldValue.arrayRemove(
							firebase.auth().currentUser.email,
					  ),
			})
			.then(() => {
				console.log('cest bien update');
			})
			.catch(error => {
				console.log('error:' + error);
			});
	};

	useEffect(() => {}, [handleLike]);

	return (
		<View style={{ marginBottom: 30 }}>
			<Divider witdh={1} orientation="vertical" />
			<PostHeader post={post} />
			<PostImage post={post} />
			<View style={{ marginHorizontal: 15, marginTop: 10 }}>
				<PostFooter post={post} handleLike={handleLike} />
				<Likes post={post} />
				<Caption post={post} />
				{post.comments.length > 0 && <CommentsSection post={post} />}
			</View>
		</View>
	);
};

const PostHeader = ({ post: { user, profile_picture } }) => (
	<View
		style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			margin: 5,
			alignItems: 'center',
		}}
	>
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			<Image style={styles.img} source={{ uri: profile_picture }} />
			<Text style={{ color: 'white', marginLeft: 7, fontWeight: '700' }}>
				{user}
			</Text>
		</View>
		<Text style={{ color: 'white', fontWeight: '900', marginRight: 5 }}>
			{' '}
			...
		</Text>
	</View>
);

const PostImage = ({ post: { imageUrl } }) => (
	<View style={{ width: '100%', height: 450 }}>
		<Image
			source={{
				uri: imageUrl,
			}}
			style={{ height: '100%', resizeMode: 'cover' }}
		/>
	</View>
);

const PostFooter = ({ post, handleLike }) => (
	<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
		<View style={styles.leftFooterIconContainer}>
			<TouchableOpacity onPress={() => handleLike(post)}>
				<Image
					style={styles.footerIcon}
					source={{
						uri: post.likes_by_users.includes(
							firebase.auth().currentUser.email,
						)
							? ICONS[0].likedImageUrl
							: ICONS[0].imageUrl,
					}}
				/>
			</TouchableOpacity>

			<Icon imgStyle={styles.footerIcon} imgUrl={ICONS[1].imageUrl} />
			<Icon imgStyle={styles.footerIcon} imgUrl={ICONS[2].imageUrl} />
		</View>
		<View>
			<Icon imgStyle={styles.footerIcon} imgUrl={ICONS[3].imageUrl}></Icon>
		</View>
	</View>
);

const Icon = ({ imgStyle, imgUrl }) => (
	<TouchableOpacity>
		<Image style={imgStyle} source={{ uri: imgUrl }} />
	</TouchableOpacity>
);

const Likes = ({ post: { likes_by_users } }) => (
	<View style={{ flexDirection: 'row', marginTop: 4 }}>
		<Text style={{ color: 'white', fontWeight: '600' }}>
			{likes_by_users.length.toLocaleString('fr')} likes
		</Text>
	</View>
);

const Caption = ({ post: { caption, user } }) => (
	<View style={{ marginTop: 5 }}>
		<Text style={{ color: 'white' }}>
			<Text style={{ fontWeight: '700' }}>{user}</Text>
			<Text> {caption}</Text>
		</Text>
	</View>
);

const CommentsSection = ({ post: { comments } }) => (
	<View style={{ marginTop: 5 }}>
		<Text style={{ color: 'gray' }}>
			{comments && comments.length > 1
				? `View all ${comments.length} comments`
				: comments && comments.length === 1
				? `View comment`
				: ``}
		</Text>
		<Comments comments={comments} />
	</View>
);

const Comments = ({ comments }) => (
	<>
		{comments.map((comment, i) => (
			<View key={i} style={{ flexDirection: 'row', marginTop: 5 }}>
				<Text style={{ color: 'white' }} key={i}>
					<Text style={{ fontWeight: 'bold' }}> {comment.user}</Text>
					<Text> {comment.comment}</Text>
				</Text>
			</View>
		))}
	</>
);

const styles = StyleSheet.create({
	img: {
		width: 35,
		height: 35,
		borderRadius: 50,
		marginLeft: 6,
		backgroundColor: 'pink',
		borderWidth: 1.6,
		borderColor: '#ff8501',
	},
	footerIcon: {
		height: 33,
		width: 33,
	},
	leftFooterIconContainer: {
		flexDirection: 'row',
		width: '32%',
		justifyContent: 'space-between',
	},
});

export default Post;
