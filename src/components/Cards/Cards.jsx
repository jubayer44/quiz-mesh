import React from 'react';

const Cards = ({data}) => {
    console.log(data);
    const {id, name, logo, total} = data;
    return (
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4 shadow-lg my-4 rounded-lg">
      <div className=" sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <img
              src={logo}
              className="object-cover w-full rounded bg-black h-[380px]"
              alt=""
            />
          </a>
          <div className="py-5 text-center">
            
              <p className="text-2xl font-bold leading-5 ">{name}</p>
           <button className='bg-purple-700 p-2 rounded text-white font-bold mt-3 w-full'>Start Here</button>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default Cards;