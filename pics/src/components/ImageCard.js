import React from 'react'

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {spans: 0}
		this.imageRef = React.createRef(); // create React Ref. This will give you access to DOM element in React. In this case, we want to access the image dom element and get its size
	
	}
    

	componentDidMount(){
	    // here is the catch. You won't get the height just by doing below because the moment you try to access the dom images the images are not yet loaded.
      	// console.log(this.imageRef.current.clientHeight); // this will give you 0

		// use event listener 
		this.imageRef.current.addEventListener('load', this.setSpans); // on load, run the callback function setSpan
	}

	setSpans = () => {
		//console.log(this.imageRef.current.clientHeight)
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10); // set spans
		this.setState({spans}) // a shorthand for {spans:spans}
	}

	render() {
		const { description, urls } = this.props.image
		return (
		 <div style={{gridRowEnd: `span ${this.state.spans}` }}>
		 	<img 
				alt={description} 
				src={urls.regular}
				ref={this.imageRef}  // react ref here
			/>
		 </div>
		)	
	}
}

export default ImageCard;
