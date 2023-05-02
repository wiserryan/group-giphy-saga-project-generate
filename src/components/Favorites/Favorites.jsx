
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import '../Favorites/Favorites.css';


function Favorites () {
    const history = useHistory();
    const dispatch = useDispatch();
    const searchVal = useSelector(store => store.search);
    const [gifUrls, setGifUrls] = useState([]);
  
    const toSearch = () => {
        return history.push('/');
    }

    return (
        <button onClick={toSearch}>Back to Search</button>
    )
}

export default Favorites;