import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './components/ImageList';

function App() {

const [images, setImages] = useState([])

const handleSearch= async(term)=>{
  const result= await searchImages(term);
   setImages(result)
}

  return (
  <div className="App" >
  <SearchHeader search={handleSearch}/>
  <ImageList imagesPlaceHolder={images}/>
  </div>
  );
}

export default App;
