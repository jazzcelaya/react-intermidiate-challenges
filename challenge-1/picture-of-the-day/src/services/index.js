/* eslint-disable no-alert */
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
    const { code, msg } = error.response.data;
    if (code === 'UNEXPECTED_ERROR') {
      alert('There was an error, please try again.');
      return;
    }
    console.log('error code ', code);
    alert(msg);
    return error;
  }
}
