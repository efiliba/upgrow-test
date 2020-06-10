import React from 'react';

const url = "https://unsplash.com";

export const Photo = ({id, src, alt, photographer, userName}) =>
  <figure>
    <img key={id} src={src} alt={alt} />
    <figcaption>
      Photo by <a href={`${url}/@${userName}`}>{photographer}</a> on <a href={url}>Unsplash</a>
    </figcaption>

    <style jsx>
    {`
      figure {
        position: relative;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
      }

      img {
        display: block;
      }

      figcaption {
        position: absolute;
        top: 0;
        background-color: lightYellow;
        width: 20rem;
        padding: .4rem 0;
        text-align: center;
        display: none;
      }

      figure:hover figcaption {
        display: block;
      }
    `}
    </style>
  </figure>;
