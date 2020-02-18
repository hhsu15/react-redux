import React from 'react' 
import './ImageList.css' 
import ImageCard from './ImageCard'

// render a list of items using array.map()
const ImageList = (props) => {
	const images = props.images.map( (image) => {
		// use key: id for react for better react rendering performance
		// should do this for array element
		return <ImageCard key={image.id} image={image} />
	})

	return <div className='image-list' >{images}</div>
}

export default ImageList;
