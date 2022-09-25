import axios from 'axios'

const api = axios.create({
   baseUrl: 'https://www.googleapis.com/youtube/v3/'

}) 

 

  
export default api;