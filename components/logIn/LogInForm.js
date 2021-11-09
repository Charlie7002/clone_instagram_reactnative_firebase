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

const LogInForm = () => {
	let LogInSchema = yup.object().shape({
		email: yup.string().email().required('A email is required'),
		password: yup
			.string()
			.required()
			.min(8, 'Your password has to have at least 8 characters'),
	});

	return (
		<View style={styles.wrapper}>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={values => {
					console.log(values);
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
						<View style={styles.inputField}>
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
							{errors.email && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.email}
								</Text>
							)}
						</View>
						<View style={styles.inputField}>
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
							{errors.password && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.password}
								</Text>
							)}
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
								<Text style={{ color: '#1E90FF', paddingLeft: 5 }}>
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
