import axios from 'axios';

const searchImages = async ( term ) => {
    const response = await axios.get('https://api.unsplash.com/search/photos/', {
        headers: {
            Authorization: 'Client-ID GUpqk55CE2dE_Uk93tmvAKUvTGTT4aPM1l_YD-ANpxg'
        },
        params: {
            query: term,
            per_page: 20
        }
    });

    return response.data.results;
}

export default searchImages;