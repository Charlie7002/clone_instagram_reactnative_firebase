import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import SignUpForm from '../components/signUp/SignUpForm';

const SignUpScreen = ({ navigation }) => (
	<View style={styles.container}>
		<View style={styles.logoContainer}>
			<Image
				source={require('../assets/instalogo.png')}
				style={{ height: 100, width: 100 }}
			/>
		</View>
		<SignUpForm navigation={navigation} />
	</View>
);

export default SignUpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 50,
		paddingHorizontal: 12,
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 60,
	},
});
