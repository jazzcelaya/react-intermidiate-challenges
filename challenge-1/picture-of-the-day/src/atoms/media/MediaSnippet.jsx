import React from 'react';

const MediaSnippet = ({ url }) => {
  return (
    <div>
      <media>
        <source media="(min-width:650px)" srcSet={url} />
        <source media="(min-width:465px)" srcSet={url} />
        <img src={url} alt="Flowers" />
      </media>
    </div>
  );
};
export default MediaSnippet;
