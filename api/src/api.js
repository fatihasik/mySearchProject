import axios from "axios";

const searchImages=async  (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',
    {headers:{Authorization:'Client-ID Xo3ZZ7igkmppVcAc5KE6QVj7AHGOyvWqw66ej-59J6w'},
    params:{query:term}})
  
    return response.data.results;

} 

   export default searchImages;