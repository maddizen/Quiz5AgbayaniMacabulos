import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',  // Adjust the URL to your backend
});

export default axiosInstance;
```