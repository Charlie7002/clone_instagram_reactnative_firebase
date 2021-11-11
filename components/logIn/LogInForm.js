import React from 'react';

import {
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Alert,
} from 'react-native';

import firebase from '../../firebase';

import * as yup from 'yup';
import validator from 'email-validator';
import { Formik } from 'formik';

const LogInForm = ({ navigation }) => {
	const LogInSchema = yup.object().shape({
		email: yup.string().email().required('A email is required'),
		password: yup
			.string()
			.required()
			.min(6, 'Your password has to have at least 6 characters'),
	});

	const onLogin = async (email, password) => {
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
			console.log('login cool', email, password);
		} catch (error) {
			Alert.alert(error.message);
		}
	};

	return (
		<View style={styles.wrapper}>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={values => {
					onLogin(values.email, values.password);
				}}
				validationSchema={LogInSchema}
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
								keyboardType="email-adress"
								textContentType="emailAdress"
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
										1 > values.password.length ||
										values.password.length >= 6 ||
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
						<View style={{ alignItems: 'flex-end', marginBottom: 60 }}>
							<Text style={{ color: '#1E90FF' }}>Forgot password ?</Text>
						</View>
						<Pressable
							style={styles.button(isValid)}
							onPress={handleSubmit}
						>
							<Text style={styles.text}>Log In</Text>
						</Pressable>

						<View style={styles.signUpContainer}>
							<Text style={{ color: 'grey' }}>
								Don't have a account?
							</Text>
							<TouchableOpacity>
								<Text
									style={{ color: '#1E90FF', paddingLeft: 5 }}
									onPress={() => navigation.push('SignUpScreen')}
								>
									Sign In
								</Text>
							</TouchableOpacity>
						</View>
					</>
				)}
			</Formik>
		</View>
	);
};

export default LogInForm;

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
