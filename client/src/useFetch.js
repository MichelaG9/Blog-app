import { useState, useEffect } from 'react';
const axios = require('axios');

const useFetch = (url) => {
    const [data, setData] = useState(null)

    //load a loading page
    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);

    //when the website is loaded it fetches the data
    useEffect(() => {

        axios.get(url)
        .then(res => {
            //check if the response is ok
            if(res){
                setIsPending(false);
            }
            setData(res.data);
        })
        .catch((e) => {
            if(e){
                console.log(e);
            }
            else{
                setIsPending(false);
                setError(e.message);
            }
        })

    }, [url]);

    return {data , isPending, error}
}

export default useFetch;