import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import users from '../../data/users';

const Stories = () => {
	return (
		<View style={{ marginBottom: 13 }}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{users.map((story, i) => {
					return (
						<View key={i} style={{ alignItems: 'center' }}>
							<Image source={story.image} style={styles.story} />
							<Text style={{ color: 'white' }}>
								{story.user.length > 11
									? story.user.slice(0, 6).toLocaleLowerCase() + ' ...'
									: story.user.toLocaleLowerCase()}
							</Text>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	story: {
		width: 70,
		height: 70,
		borderRadius: 50,
		marginLeft: 15,
		backgroundColor: 'pink',
		borderWidth: 3,
		borderColor: '#ff8501',
	},
});
export default Stories;
