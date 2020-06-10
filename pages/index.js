import React from 'react';
import Head from 'next/head';
import {Search} from '../components';

const Home = () => {
  const handleSearch = () => {
    console.log(searchValue);
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

      <div className='hero'>
        <h1 className='title'>Welcome to Next.js!</h1>
        <p className='description'>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>

          
      </div>

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
