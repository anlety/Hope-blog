import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function PostCard({ post }) {
  const [user, setUser] = useState({});
  // console.log(post)
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${post.userId}`);
        const data = await res.json();
        // console.log(data)
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [post]);
  return (
    

    <div className='shadow-md shadow-gray-300  border-gray-300 hover:opacity-50 rounded-md w-[550px]'>
    <Link
    className="block-full lg:flex  p-1 bg-neutral-100 dark:bg-zinc-900 rounded-md"
    to={`/post/${post.slug}`}
  >
    <div
      className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
      style={{ backgroundImage: `url(${post.image})` }}
      title={post.title}
    ></div>
    <div className=" rounded px-4 flex flex-col justify-between leading-normal">
      <div>
        <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2 dark:text-white">
          {post.title}
        </div>
        {/* <p className="text-gray-700 text-base dark:text-white line-clamp-3">{post.content}</p> */}
        <div>
          <h2 className='line-clamp-3'>{post.content}</h2>
        </div>
       
      </div>
      <div className="flex mt-3">
        <img
          src={user.profilePicture} 
          className="h-10 w-10 rounded-full mr-2 object-cover"
          // alt={`Author ${author}`}
        />
        <div className='space-x-1.5'>
          <p className="font-semibold text-gray-700 text-sm capitalize dark:text-white">{user.username}</p>
          <p className=" text-gray-700 text-sm capitalize"><span className='text-red-400 '>Category:</span > <span className='dark:text-white'>{post.category}</span></p>
          <p className="text-gray-600 text-xs dark:text-white">{moment(post.createdAt).fromNow()}</p>
        </div>
      </div>
    </div>
  </Link>
</div>
  );
}