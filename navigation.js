import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
	headerShown: false,
};

const SignedInStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="LogInScreen"
				screenOptions={screenOptions}
			>
				<Stack.Screen name="LogInScreen" component={LogInScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="NewPostScreen" component={NewPostScreen} />
				<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default SignedInStack;

const styles = StyleSheet.create({});
