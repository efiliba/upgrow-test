import React, {useState} from 'react';
import Head from 'next/head';
import {Search, Photo} from '../components';
import {photosByTag} from '../api';

const App = () => {
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
        <div className="photos-not-found">No matching photos found</div>
      }
      <div className="photos-container">
        {photos.map(({id, src, alt, photographer, userName}) =>
          <Photo key={id} src={src} alt={alt} photographer={photographer} userName={userName} />
        )}
      </div>

      <style jsx>{`
        :global(html) { 
          font-size: 62.5%;
        }

        :global(body) {
          margin: 0;
          background-color: #333;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 1.6rem;
        }

        .photos-not-found {
          color: red;
          padding: 1rem;
        }

        .card {
          padding: 1.8rem 1.8rem 2.4rem;
          border: 1px solid #9b9b9b;
        }

        .card:hover {
          border-color: #067df7;
        }

        .photos-container {
          padding: 2rem;
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        }
      `}</style>
    </div>
  );
};

export default App;
