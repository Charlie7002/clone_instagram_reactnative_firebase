import { ErrorMessage, Formik } from 'formik';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import * as yup from 'yup';
import validUrl from 'valid-url';

const placeHolder_img = 'https://picsum.photos/300';

let upLoadPostSchema = yup.object().shape({
	imageUrl: yup.string().url().required('Une URL est requise'),
	caption: yup.string().max(200).required(),
});

const FormikPostUploader = ({ navigation }) => {
	const [thumbnailUrl, setThumbnailUrl] = useState(placeHolder_img);
	return (
		<Formik
			initialValues={{ caption: '', imageUrl: '' }}
			onSubmit={values => {
				console.log(values);
				navigation.goBack();
			}}
			validationSchema={upLoadPostSchema}
		>
			{({
				handleChange,
				handleBlur,
				handleSubmit,
				values,
				errors,
				isValid,
			}) => (
				<View>
					<View
						style={{
							margin: 20,
							justifyContent: 'space-between',
							flexDirection: 'row',
						}}
					>
						<Image
							source={{
								uri: validUrl.isUri(thumbnailUrl)
									? thumbnailUrl
									: placeHolder_img,
							}}
							style={{ width: 100, height: 100 }}
						/>
						<View style={{ flex: 1, marginLeft: 12 }}>
							<TextInput
								style={{ color: 'white', fontSize: 20, flex: 1 }}
								placeholder="Ajouter une description"
								placeholderTextColor="gray"
								multiline={true}
								onChangeText={handleChange('caption')}
								onBlur={handleBlur('caption')}
								value={values.caption}
							/>
							{errors.caption && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.caption}
								</Text>
							)}
						</View>
					</View>
					<Divider width={0.2} orientation={'vertical'} />
					<TextInput
						onChange={e => setThumbnailUrl(e.nativeEvent.text)}
						style={{ color: 'white', fontSize: 18 }}
						placeholder="Entrer URL"
						placeholderTextColor="gray"
						onChangeText={handleChange('imageUrl')}
						onBlur={handleBlur('imageUrl')}
						value={values.imageUrl}
					/>
					{errors.imageUrl && (
						<Text style={{ fontSize: 10, color: 'red' }}>
							{errors.imageUrl}
						</Text>
					)}
					<View style={{ marginTop: 20 }}>
						<Button
							onPress={handleSubmit}
							disabled={!isValid}
							title="Share"
							borderColor="white"
							color="black"
						/>
					</View>
				</View>
			)}
		</Formik>
	);
};

export default FormikPostUploader;

const styles = StyleSheet.create({});
