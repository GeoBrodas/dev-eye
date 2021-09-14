import HeaderBar from '@/components/HeaderBar';
import InputField from '@/components/InputField';
import ProfileCard from '@/components/ProfileCard';
import Head from 'next/head';
import { useState } from 'react';

import Skeleton from 'react-loading-skeleton';

function Home(props) {
  const [userData, setUserData] = useState(props.devData);
  const [loading, setLoading] = useState(false);

  async function onSearch(enteredQuery) {
    setLoading(true);

    const response = await fetch(
      `https://api.github.com/users/${enteredQuery}`
    );
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  }

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
        {loading ? (
          <p className="mt-10 text-lg">Loading...</p>
        ) : (
          <ProfileCard data={userData} />
        )}
        {!userData.name && !loading && 'No user found!'}
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
