import React from 'react';
import {
	Alert,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

import { firebase, db } from '../../firebase';

import * as yup from 'yup';
import validator from 'email-validator';
import { Formik } from 'formik';

const SignUpForm = ({ navigation }) => {
	const signUpSchema = yup.object().shape({
		email: yup.string().email().required('A email is required'),
		username: yup.string().required().min(2, 'A username is required'),
		password: yup
			.string()
			.required()
			.min(6, 'Your password has to have at least 6 characters'),
	});

	//just use for the picture
	const getRandomProfilePicture = async () => {
		const response = await fetch('https://randomuser.me/api');
		const data = await response.json();
		return data.results[0].picture.large;
	};

	const onSignup = async (email, username, password) => {
		try {
			const authUser = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);
			console.log('fire create coool' + email + password + username);
			db.collection('users')
				.doc(authUser.user.email)
				.set({
					owner_uid: authUser.user.uid,
					username: username,
					email: authUser.user.email,
					profile_picture: await getRandomProfilePicture(),
				});
		} catch (error) {
			Alert.alert('😕... ' + error.message);
		}
	};

	return (
		<View style={styles.wrapper}>
			<Formik
				initialValues={{ email: '', username: '', password: '' }}
				onSubmit={values => {
					onSignup(values.email, values.username, values.password);
					console.log(
						`email:${values.email}, username:${values.username}, password:${values.password}`,
					);
				}}
				validationSchema={signUpSchema}
				validateOnMount={true}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					isValid,
				}) => (
					<>
						<View
							style={[
								styles.inputField,
								{
									borderColor:
										values.email.length < 1 ||
										validator.validate(values.email)
											? 'lightgrey'
											: 'red',
								},
							]}
						>
							<TextInput
								placeholder="Phone number, username or email"
								placeholderTextColor="#444"
								autoCapitalize="none"
								keyboardType="email-address"
								textContentType="emailAddress"
								autoFocus={true}
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								value={values.email}
							/>
						</View>

						<View
							style={[
								styles.inputField,
								{
									borderColor:
										values.username.length > 2 ||
										values.username.length === 0 ||
										validator.validate(values.username)
											? 'lightgrey'
											: 'red',
								},
							]}
						>
							<TextInput
								placeholder="Username"
								placeholderTextColor="#444"
								autoCapitalize="none"
								keyboardType="default"
								textContentType="username"
								autoFocus={true}
								onChangeText={handleChange('username')}
								onBlur={handleBlur('username')}
								value={values.username}
							/>
						</View>
						<View
							style={[
								styles.inputField,
								{
									borderColor:
										values.password.length === 0 ||
										values.password.length > 5 ||
										validator.validate(values.password)
											? 'lightgrey'
											: 'red',
								},
							]}
						>
							<TextInput
								placeholder="Password"
								placeholderTextColor="#444"
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry={true}
								textContentType="password"
								onChangeText={handleChange('password')}
								onBlur={handleBlur('password')}
								value={values.password}
							/>
						</View>

						<Pressable
							style={styles.button(isValid)}
							onPress={handleSubmit}
						>
							<Text style={styles.text}>Sign Up</Text>
						</Pressable>

						<View style={styles.signUpContainer}>
							<Text style={{ color: 'grey' }}>
								Already have an account?
							</Text>
							<TouchableOpacity>
								<Text
									style={{ color: '#1E90FF', paddingLeft: 5 }}
									onPress={() => navigation.goBack()}
								>
									Log In
								</Text>
							</TouchableOpacity>
						</View>
					</>
				)}
			</Formik>
		</View>
	);
};

export default SignUpForm;

const styles = StyleSheet.create({
	wrapper: { marginTop: 80, width: '95%' },
	inputField: {
		borderRadius: 4,
		padding: 12,
		backgroundColor: '#fafafa',
		marginBottom: 10,
		borderWidth: 1,
		borderColor: 'lightgrey',
	},
	button: isValid => ({
		backgroundColor: isValid ? '#1E90FF' : '#d4d4d4',
		paddingVertical: 12,
		paddingHorizontal: 32,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
	}),
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
	signUpContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		marginTop: 50,
	},
});
