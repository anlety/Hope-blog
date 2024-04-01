// import author2 from '/images/author2.png'

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-2 px-2 lg:p-0">
    <div 
      className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block" 
      style={{ height: '24em' }}
      
    >
      <div className="absolute left-0 bottom-0 w-full h-full z-10"
        style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
      <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt="First Example" />
      <div className="p-4 absolute bottom-0 left-0 z-20">
        <span className="px-4 py-1 bg-white text-black opacity-60 inline-flex items-center justify-center mb-2">Fitness</span>
        <h2 className="md:text-4xl text-3xl font-semibold text-gray-100 leading-tight">
          Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
        </h2>
        <div className="flex mt-3">
          <img src="https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
          <div>
            <p className="font-semibold text-gray-200 text-sm"> John Doe </p>
            <p className="font-semibold text-gray-400 text-xs"> a month ago </p>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/3 relative rounded" 
      style={{ height: '24em' }}
      
    >
      <div className="absolute left-0 top-0 w-full h-full z-10"
        style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
      <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt="Second Example" />
      <div className="p-4 absolute bottom-0 left-0 z-20">
        <span className="px-4 py-1 bg-white text-black opacity-60 inline-flex items-center justify-center mb-2">Articifial intelligence</span>
        <h2 className="text-3xl font-semibold text-gray-100 leading-tight">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        <div className="flex mt-3">
          <img src="https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
          <div>
            <p className="font-semibold text-gray-200 text-sm">Dom Smith </p>
            <p className="font-semibold text-gray-400 text-xs">7 days ago </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner