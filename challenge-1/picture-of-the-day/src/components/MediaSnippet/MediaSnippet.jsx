import React from 'react';
import { Image } from '../../atoms';

function MediaSnippet({ url, mediaType }) {
  if (mediaType === 'image') {
    return (
      <Image>
        <img src={url} alt="NASA APOTD" data-testid="APOTD" />
      </Image>
    );
  }
  return (
    <iframe
      data-testid="APOTD"
      width="100%"
      height="315"
      src={url}
      title="video player"
      frameBorder="0"
      allowFullScreen
    />
  );
}
export default MediaSnippet;
