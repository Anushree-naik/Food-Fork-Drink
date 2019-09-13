import axios from 'axios';

export default axios.create({
    baseURL: 'http://44aee7f4.ngrok.io'
});
//the baseURL has to be changed everytime you run new 'npm run tunnel' cmd in your terminal