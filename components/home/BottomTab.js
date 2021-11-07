import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';

export const bottomTabIcons = [
	{
		name: 'Home',
		active:
			'https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png',
		inactive:
			'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
	},
	{
		name: 'Search',
		active: 'https://img.icons8.com/ios-filled/50/ffffff/search--v1.png',
		inactive: 'https://img.icons8.com/ios/50/ffffff/search--v1.png',
	},
	{
		name: 'Reels',
		active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
		inactive: 'https://img.icons8.com/ios/50/ffffff/instagram-reel.png',
	},
	{
		name: 'Shop',
		active:
			'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
		inactive:
			'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
	},
	{
		name: 'Profile',
		active: 'https://picsum.photos/300',
		inactive: 'https://picsum.photos/300?grayscale',
	},
];

const BottomTab = ({ icons }) => {
	const [activeTab, setActiveTab] = useState('Home');

	const Icon = ({ icon }) => (
		<TouchableOpacity onPress={() => setActiveTab(icon.name)}>
			<Image
				source={{
					uri: activeTab === icon.name ? icon.active : icon.inactive,
				}}
				style={[
					styles.icon,
					icon.name === 'Profile' ? styles.profilePic() : 'null',
					activeTab === 'Profile' && icon.name === activeTab
						? styles.profilePic(activeTab)
						: null,
				]}
			/>
		</TouchableOpacity>
	);

	return (
		<View style={styles.wrapper}>
			<Divider width={1} orientation="vertical" />
			<View style={styles.container}>
				{icons.map((icon, i) => (
					<Icon key={i} icon={icon} />
				))}
			</View>
		</View>
	);
};

export default BottomTab;

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		width: '100%',
		bottom: 0,
		zIndex: 999,
		backgroundColor: 'black',
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: 50,
		paddingTop: 10,
	},
	icon: {
		width: 30,
		height: 30,
	},
	profilePic: (activeTab = '') => ({
		borderRadius: 50,
		borderWidth: activeTab === 'Profile' ? 2 : 0,
		borderColor: '#fff',
	}),
});
