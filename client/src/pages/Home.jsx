
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Banner from '../components/Banner';
import Subscribe from '../components/Subscribe';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-20 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to Hope Blog</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll find a variety of articles on topics such as
           <span className='font-semibold'> Fitness</span>, <span className='font-semibold'>Artificial intelligence</span>, and <span className='font-semibold'>Cars</span>.
        </p>
        <Banner />
       
      </div>
      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            {/* <div className='flex gap-3 flex-wrap '> */}
            <div className='sm:grid sm:grid-cols-2 gap-6'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          
          </div>
        )}
          <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
            <Subscribe />
      </div>
      
    </div>
  );
}
