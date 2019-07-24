import React, { Component } from 'react';
import styled from 'styled-components';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import InputFile from '../../../global/InputFile';
import { FunctionContext } from '../../Panels';

const Photo = styled.div`
    display: ${props => props.isActive ? 'block' : 'none'};
`;

const CroppedImage = styled(ReactCrop)`
    max-width: 300px;
	max-height: 400px;
`;

const CroppedImageContainer = styled.div`
    display: flex;
`;

const ImagePlaceholder = styled.div`
	width: 300px;
	height: 400px;
	border: 1px dashed var(--second-color);
	margin-right: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
`;

class PhotoPanel extends Component {
    state = {
        src: '',
        crop: {
          	unit: '%',
          	width: 30,
          	aspect: 7 / 9
        }
    };
    
    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener('load', () =>
				this.setState({ src: reader.result })
			);
			reader.readAsDataURL(e.target.files[0]);
        }
    };

	onImageLoaded = image => {
		this.imageRef = image;
	};

	onCropComplete = (crop, getPhoto) => {
		this.makeClientCrop(crop, getPhoto);
	};

	onCropChange = (crop, percentCrop) => {
		this.setState({ crop });
	};

	async makeClientCrop(crop, getPhoto) {
		if (this.imageRef && crop.width && crop.height) {
			const croppedImageUrl = await this.getCroppedImg(
				this.imageRef,
				crop,
				'newFile.jpeg'
			);
			getPhoto(croppedImageUrl);
		}
	}
    
    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
    
        ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			crop.width,
			crop.height
        );
    
        return new Promise((resolve, reject) => {
			canvas.toBlob(blob => {
				if (!blob) {
					console.error('Canvas is empty');
				return;
				}
				blob.name = fileName;
				window.URL.revokeObjectURL(this.fileUrl);
				this.fileUrl = window.URL.createObjectURL(blob);
				resolve(this.fileUrl);
			}, 'image/jpeg');
        });
    }

    render() {
        return (
			<FunctionContext.Consumer>
				{func => (
					<Photo isActive={this.props.isActive}>
						<h1>Twoje zdjęcie</h1>

						<CroppedImageContainer>
							<ImagePlaceholder>
								<CroppedImage
									src={this.state.src}
									crop={this.state.crop}
									onImageLoaded={this.onImageLoaded}
									onComplete={e => this.onCropComplete(e, func.getPhoto)}
									onChange={this.onCropChange}
								/>
							</ImagePlaceholder>
							<div>
								<InputFile placeholder="Dodaj zdjęcie" onChangeAction={this.onSelectFile} />
							</div>
						</CroppedImageContainer>
					</Photo>
				)}
			</FunctionContext.Consumer>
        );
    }
}

export default PhotoPanel;
