import React, { useState, useEffect } from 'react';
import { getPicture } from './services';
import MediaSnippet from './components/MediaSnippet/MediaSnippet';
import { Flex, Input, Box } from './atoms';

function App() {
  const [date, setDate] = useState('2021-11-12');
  const [media, setMedia] = useState({ url: 'logo192.png', media_type: 'image' });

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

  return (
    <Flex>
      <h1>Astronomy Picture of the Day</h1>
      <p>
        Discover the cosmos! Each day a different image or photograph of our fascinating
        universe is featured, along with a brief explanation written by a professional
        astronomer
      </p>
      <Input function={setDate} />
      <h2>{media.title}</h2>
      <Box alignItems="center">
        <MediaSnippet url={media.url} mediaType={media.media_type} />
      </Box>
      <p>{media.explanation}</p>
    </Flex>
  );
}

export default App;
