import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer FlG-H_TaiuiEdp7zhiLgFZ-Uy4KQSxOYce-REKreXCTxcB2h6YpCUG1zRO-nsA5GJ4Cescr2Bgz4BWRDw09LpJG5ELczqANneNCIDCkJbQ1B2Cm3TkniZFlip7BNXXYx'
    }
});

