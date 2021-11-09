import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LogInForm from '../components/logIn/LogInForm';

const LogInScreen = () => (
	<View style={styles.container}>
		<View style={styles.logoContainer}>
			<Image
				source={require('../assets/instalogo.png')}
				style={{ height: 100, width: 100 }}
			/>
			<LogInForm />
		</View>
	</View>
);

export default LogInScreen;

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
