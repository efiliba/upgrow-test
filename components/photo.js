import React from 'react';

const url = "https://unsplash.com";

export const Photo = ({id, src, alt, photographer, userName}) =>
  <div>
    <img key={id} src={src} alt={alt} />
    Photo by <a href={`${url}/@${userName}`}>{photographer}</a> on <a href={url}>Unsplash</a>
  </div>;
