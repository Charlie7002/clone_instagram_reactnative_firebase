import React from 'react';
import { firebase } from '../../firebase';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const handleSignOut = async () => {
	try {
		await firebase
			.auth()
			.signOut()
			.then(() => console.log('sign out !'));
	} catch (error) {
		console.log(error);
	}
};

const Header = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleSignOut}>
				<Image
					style={styles.logo}
					source={require('../../assets/logo.png')}
				/>
			</TouchableOpacity>

			<View style={styles.iconsContainer}>
				<TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
					<AntDesign
						name="plussquareo"
						size={24}
						color="white"
						style={{ paddingRight: 13 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<AntDesign
						name="hearto"
						size={24}
						color="white"
						style={{ paddingRight: 13 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.unreadBadge}>
						<Text style={styles.unreadBadgeText}>11</Text>
					</View>
					<Image
						source={{
							uri: 'https://img.icons8.com/windows/64/ffffff/facebook-messenger--v1.png',
						}}
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
		paddingTop: 40,
	},
	logo: {
		height: 50,
		width: 100,
		resizeMode: 'contain',
	},

	iconsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		height: 32,
		width: 32,
	},
	unreadBadge: {
		backgroundColor: '#FF3250',
		position: 'absolute',
		left: 20,
		bottom: 18,
		width: 25,
		height: 18,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 100,
	},
	unreadBadgeText: {
		color: 'white',
		fontWeight: '600',
	},
});

export default Header;
