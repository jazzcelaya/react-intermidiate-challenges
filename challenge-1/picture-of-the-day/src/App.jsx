import React, { useState, useEffect } from 'react';
import { getPicture } from './services';
import { MediaSnippet, OnEnterInput } from './components';
import { Flex } from './atoms';

function App() {
  const [media, setMedia] = useState({ url: 'logo192.png', media_type: 'image' });
  const todaysDate = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(todaysDate);

  useEffect(() => {
    async function loadPicture() {
      const response = await getPicture(date);
      if (response.status === 200) {
        console.log(response.data);
        setDate(response.data.date);
        setMedia(response.data);
      }
    }
    loadPicture();
  }, [date]);

  const handleDateInput = (dateString) => {
    setDate(dateString);
  };

  return (
    <Flex margin="15px">
      <h1>Astronomy Picture of the Day</h1>
      <p>
        Discover the cosmos! Each day a different image or photograph of our fascinating
        universe is featured, along with a brief explanation written by a professional
        astronomer
      </p>
      <OnEnterInput functionality={handleDateInput} placeholder={todaysDate} />
      <MediaSnippet url={media.url} mediaType={media.media_type} />
      <h2>{media.title}</h2>
      <p>{media.explanation}</p>
    </Flex>
  );
}

export default App;
