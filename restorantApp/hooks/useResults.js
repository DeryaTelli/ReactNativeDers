import { useEffect, useState } from "react";
import Yelp from "../api/Yelp";
export default ()=>{
    const [results, setResults] = useState([]); // ussatete component / hookun en ust seviyesinde olmasi gerekiyor 
    const searchApi = async (searchTerm)=>{
        // get istegi attimiz yer burasi  
        const response= await Yelp.get('/search',{
            params: {
                limit: 50, 
                term: searchTerm, 
                location: 'Istanbul',
            }
        });
        setResults(response.data.businesses);
    }
    useEffect(()=>{ // aradigimiz ornek toast bunun bulundugu restoranlari cekicek 
        searchApi('Toast'); 
    },[]);
    return [searchApi, results];
}