import React from 'react';

// a spiner from sementic ui that represents it's loading something
const Loader = (props) => {
	return (
		<div className='ui active dimmer'>
			<div className='ui big text loader'>
				{props.message}
			</div>
		</div>
	)
}


// an elegant way to set default property
Loader.defaultProps = {
	message: "Loading..."
}

export default Loader;
