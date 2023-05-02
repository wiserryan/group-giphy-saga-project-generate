import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import '../Favorites/Favorites.css';


function Favorites() {
    const history = useHistory();
    const [faveUrls, setFaveUrls] = useState([]);

    const getFaves = () => {
        axios.get('/api/favorite')
            .then(response => {
                console.log(response.data);
                // const urls = response.data.data.map(gif => gif.images.downsized_medium.url);
                setFaveUrls(response.data);
            }).catch(error => {
                console.log(error);
                alert('Something went wrong!');
            })
    }

    useEffect(() => {
        getFaves();
    }, []);

    const toSearch = () => {
        return history.push('/');
    }

    return (
        <div>
            <button onClick={toSearch}>Back to Search</button>
            <div className="image-container">
                {faveUrls.map(fav => (
                    <img key={fav.url} src={fav.url} alt="gif" width="300px" height="300px" />
                ))}
            </div>
        </div>
    )
}

export default Favorites;