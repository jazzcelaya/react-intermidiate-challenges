import axios from 'axios';

export async function getPicture(date) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
  try {
    const response = await axios({
      url: searchUrl,
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.log(error.data);
    return error;
  }
}
