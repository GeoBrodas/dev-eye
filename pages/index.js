import HeaderBar from '@/components/HeaderBar';
import InputField from '@/components/InputField';
import ProfileCard from '@/components/ProfileCard';
import Head from 'next/head';
import { useEffect, useState } from 'react';

function Home(props) {
  let param;

  async function onSearch(enteredQuery) {
    // console.log(enteredQuery);
    const response = await fetch(
      `https://api.github.com/users/${enteredQuery}`
    );
    const data = await response.json();
    // console.log(data);
    param = data;
    console.log(param);
  }
  console.log(param, 2);

  return (
    <div>
      <Head>
        <title>DevEye</title>
        <meta
          name="description"
          content="Search any developer using the Eye!"
        />
      </Head>
      <main className="flex flex-col justify-center items-center h-screen">
        {/* Header */}
        <HeaderBar />

        {/* Input Field */}
        <InputField trigger={onSearch} />

        {/* Profile Card */}
        <ProfileCard data={param ? param : props.devData} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://api.github.com/users/geobrodas');
  const data = await response.json();

  return {
    props: {
      devData: data,
    },
  };
}

export default Home;
