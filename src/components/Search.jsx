
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import './Search.css'

function Search() {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchVal = useSelector(store => store.search);
  const [gifUrls, setGifUrls] = useState([]);

  const handleChange = (event) => {
    const action = { type: 'SET_SEARCH', payload: event.target.value };
    dispatch(action);
  }

  const toFavorites = () => {
    return history.push('/favorites');
  }
   
    const handleSearch = () => {
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=f1Ob6ah9Q8L9izTbR4arrp4EgWvNVGt6&limit=15`)
    .then(response => {
        console.log(response.data);
        const urls = response.data.data.map(gif => gif.images.downsized_medium.url);
        setGifUrls(urls);
      }).catch(error => {
        console.log(error);
        alert('Something went wrong!');
      })
  }

  const handleInputClick = () => {
    dispatch({ type: 'SET_SEARCH', payload: '' });
  }

  return (
    <div>
      <input id="input" name="search" value={searchVal} onChange={handleChange} onClick={handleInputClick} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={toFavorites}>Favorites</button>
      <div className="image-container">
        {gifUrls.map(url => (
          <img key={url} src={url} alt="gif" width="300px" height="300px" />
        ))}
      </div>
    </div>
  )
}

export default Search;