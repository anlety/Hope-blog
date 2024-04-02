import { Button } from 'flowbite-react';

const Subscribe = () => {
  return (
    <div className="p-1 mt-4 mb-4 max-w-2xl mx-auto w-full text-center">
      <h1 className="text-3xl  font-semibold uppercase text-gray-700 mb-2 dark:text-white"> Subscribe </h1>
      <p className="text-gray-600 dark:text-white">
        Subscribe to our newsletter. We deliver the best Fitness, AI and Cars articles to your inbox
      </p>
      <input placeholder="your email address"
        className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" />
        <div className='flex justify-center'>
          <Button  gradientDuoTone='purpleToBlue' className="  text-gray-200 rounded-full  mt-2 capitalize tracking-wide">
                  Subscribe
                </Button>
        </div>
      
      <div className='max-w-4xl mx-auto w-full'>
        
      </div>
    </div>
  )
}

export default Subscribe