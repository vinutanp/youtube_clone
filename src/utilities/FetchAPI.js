import axios from "axios";


export const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {

  params: {
    part: 'snippet',
    
  },
  headers: {
    'X-RapidAPI-Key':'cb562fa63cmsh14678e52f984146p13fc41jsnd1c9711d07e6',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
//base/
export const FetchAPI= async (url)=>{
    const {data}= await axios.get(`${BASE_URL}/${url}`,options);
console.log(data)
    return data;
}