import React, {useState} from 'react';
import Head from 'next/head';
import {Search, Photo} from '../components';

const url = "https://api.unsplash.com/search/photos";

const accessKey = "";

const photosByTag = async tag => {
  try {
    const response = await fetch(`${url}?query=${tag}&per_page=3`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    });
    const data = await response.json();
    
    return data.results.map(({id, urls, alt_description, user}) => ({
      id,
      src: urls.thumb,
      alt: alt_description,
      photographer: user.name,
      userName: user.username
    }));
  } catch {
    console.error("Unable to retrieve photos");
    return [];
  }
};

const Home = () => {
  const [photos, setPhotos] = useState([]);

  const handleSearch = async tag => {
    setPhotos(await photosByTag(tag));
  };

  return (
    <div>
      <Head>
        <title>Upgrow Test</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <div className='card'>
          <Search autoFocus onSearch={handleSearch} />
        </div>
      </div>

      {photos.length === 0 &&
        <div>No matched records</div>
      }
      {photos.map(({id, src, alt, photographer, userName}) =>
        <Photo key={id} src={src} alt={alt} photographer={photographer} userName={userName} />
      )}

      <style jsx>{`
        :global(body) {
          margin: 0;
          background-color: #333;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        .container {
          // width: 100%;
          // text-align: center;
        }
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
      `}</style>
    </div>
  );
};

export default Home;
