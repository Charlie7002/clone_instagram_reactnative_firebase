import React from 'react';
import {
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

import * as yup from 'yup';
import validator from 'email-validator';
import { Formik } from 'formik';

const SignUpForm = ({ navigation }) => {
	let signUpSchema = yup.object().shape({
		email: yup.string().email().required('A email is required'),
		username: yup.string().required().min(2, 'A username is required'),
		password: yup
			.string()
			.required()
			.min(6, 'Your password has to have at least 6 characters'),
	});

	return (
		<View style={styles.wrapper}>
			<Formik
				initialValues={{ email: '', username: '', password: '' }}
				onSubmit={values => {
					console.log(values);
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
										values.username.length > 2 ||
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
								keyboardType="email-adress"
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
