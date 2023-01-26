import React from 'react';
import FileUpload from 'react-mui-fileuploader';
import './App.css';

export default function App() {
	const handleFileUploadError = (error) => {
		// Do something...
	};

	const handleFilesChange = (files) => {
		// Do something...
		console.log(files);
	};

	return (
		<FileUpload
			getBase64={false}
			multiFile={true}
			disabled={false}
			title="My awesome file uploader"
			header="[Drag to drop]"
			leftLabel="or"
			rightLabel="to select files"
			buttonLabel="click here"
			buttonRemoveLabel="Remove all"
			maxFileSize={0}
			maxUploadFiles={0}
			maxFilesContainerHeight={357}
			acceptedType={'image/*'}
			errorSizeMessage={'fill it or remove it to use the default error message'}
			//allowedExtensions={["jpg", "jpeg"]}
			onFilesChange={handleFilesChange}
			onError={handleFileUploadError}
			//imageSrc={'path/to/custom/image'}
			BannerProps={{ elevation: 0, variant: 'outlined' }}
			onContextReady={(context) => {}}
			PlaceholderGridProps={{ md: 6 }}
			LabelsGridProps={{ md: 6 }}
			ContainerProps={{
				elevation: 0,
				variant: 'outlined',
				sx: { p: 1 },
			}}
			placeholderImageDimension={{
				xs: { width: 128, height: 128 },
				sm: { width: 128, height: 128 },
				md: { width: 164, height: 164 },
				lg: { width: 256, height: 256 },
			}}
		/>
	);
}
