import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
	headerShown: false,
};

const SignedInStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="HomeScreen"
				screenOptions={screenOptions}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="NewPostScreen" component={NewPostScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default SignedInStack;

const styles = StyleSheet.create({});
