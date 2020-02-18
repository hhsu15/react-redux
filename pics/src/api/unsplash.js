import axios from 'axios';

// manage axios configuration
export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID nXBuG7yTr7j41Yc4zIsWPsdnBjjHHXWEwNuqCGpdwBA'	
	}
})
