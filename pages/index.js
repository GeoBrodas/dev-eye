import HeaderBar from '@/components/HeaderBar';
import InputField from '@/components/InputField';
import ProfileCard from '@/components/ProfileCard';
import Head from 'next/head';

export default function Home() {
  function onSearch(enteredQuery) {
    console.log(enteredQuery);
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
        <ProfileCard />
      </main>
    </div>
  );
}
