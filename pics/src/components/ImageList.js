import React from 'react'

// render a list of items using array.map()
const ImageList = (props) => {
	const images = props.images.map( ({description, id, urls}) =>{
		// use key: id for react for better react rendering performance
		// should do this for array element
		return <img alt={description} key={id} src={urls.regular} />
	})

	return <div>{images}</div>
}

export default ImageList;
