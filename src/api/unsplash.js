import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID U_9V9e6LD-tnakNwKfI9tmclXwBi7atfrNeZ6lP2l2A'
    }
})