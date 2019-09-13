import axios from 'axios';

export default axios.create({
    baseURL: 'http://1cfe0f2c.ngrok.io'
});

//the baseURL has to be changed everytime you run new 'npm run tunnel' cmd in your terminal