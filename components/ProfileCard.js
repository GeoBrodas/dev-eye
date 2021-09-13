import { convertFromISO } from '@/helpers/time';
import Image from 'next/image';

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
    <div className="flex">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar_url}
        width={40}
        height={40}
        layout="fixed"
      />

      <div>
        {/* Name | Date of Joining */}
        <div>
          <span>{name}</span>
          <span>{formattedDate}</span>
        </div>
        {/* username */}
        {/* Bio */}
        {/* Card: Repos | Followers | Following */}
        {/* Location | Twiiter */}
        {/* Site | Workplace */}
      </div>
    </div>
  );
}

export default ProfileCard;
