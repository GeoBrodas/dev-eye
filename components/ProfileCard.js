import { convertFromISO } from '@/helpers/time';
import Image from 'next/image';

import { LocationMarkerIcon, AtSymbolIcon } from '@heroicons/react/outline';

function ProfileCard({ data }) {
  // console.log(data);
  // pullout all data from the recieved props from getstaticProps
  const {
    name,
    login,
    location,
    twitter_username,
    public_repos,
    following,
    followers,
    company,
    created_at,
    bio,
    blog,
  } = data;

  // convert ISO string to formatted Date
  const formattedDate = convertFromISO(created_at);

  return (
    <div className="flex w-3/4 justify-around mt-6 p-2 bg-pink-300 rounded-xl">
      <div className="grid flex-grow place-items-center">
        <Image
          className="rounded-full"
          alt={data.name}
          src={data.avatar_url}
          width={100}
          height={100}
          layout="fixed"
        />
      </div>

      <div className="flex flex-col w-3/5">
        {/* determining the width is a skill! */}
        {/* Name | Date of Joining */}
        <div className="flex justify-between p-2">
          <span className="text-3xl text-pink-900">{name}</span>
          <span className="font-normal p-1 text-pink-900">
            Joined {formattedDate}
          </span>
        </div>

        {/* username */}
        <p className="pt-2 pl-2 text-pink-600">@{login}</p>

        {/* Bio */}
        {bio ? (
          <p className="pt-2 pl-2 text-pink-900">{bio}</p>
        ) : (
          'NO bio found'
        )}

        {/* Card: Repos | Followers | Following */}
        <div className="flex mt-2.5 rounded-lg justify-around p-1 bg-pink-900 text-pink-300">
          <span className="p-2">
            <p className="text-lg font-medium">Repos</p>
            {public_repos}
          </span>
          <span className="p-2">
            <p className="text-lg font-medium">Followers</p>
            {followers}
          </span>
          <span className="p-2">
            <p className="text-lg font-medium">Following</p>
            {following}
          </span>
        </div>

        {/* Location | Twiiter */}
        <div className="flex mt-2 px-2 justify-between ">
          <div className="flex">
            <LocationMarkerIcon className="h-6" />
            <p>{location}</p>
          </div>
          <div className="flex">
            <AtSymbolIcon className="h-6" />
            <p>{twitter_username}</p>
          </div>
        </div>

        {/* Site | Workplace */}
        <div className="flex mt-2 px-2 justify-between ">
          <div className="flex">
            <LocationMarkerIcon className="h-6" />
            <p>{blog}</p>
          </div>
          <div className="flex">
            <AtSymbolIcon className="h-6" />
            <p>{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
