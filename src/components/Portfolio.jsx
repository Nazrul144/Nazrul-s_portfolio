import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <div className='lg:flex gap-16'>
                <div className='lg:w-2/5 bg-orange-300'>
                    <h1>Why hire me?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas explicabo suscipit eaque tempora fugiat, mollitia magnam quae magni ex?</p>
                 
                    <div className='lg:w-2/4 mx-auto mt-12'>
                    <div className='text-center mb-2'>
                        <button className='w-full p-2 bg-green-300 rounded-lg'>Love</button>
                    </div>
                    <div className=' text-center mb-2'>
                        <button className='w-full p-2 bg-green-300 rounded-lg'>Love</button>
                    </div>
                    <div className=' text-center mb-2'>
                        <button className='w-full p-2 bg-green-300 rounded-lg'>Love</button>
                    </div>
                    <div className=' text-center mb-2'>
                        <button className='w-full p-2 bg-green-300 rounded-lg'>Love</button>
                    </div>
                   
                    </div>
                </div>
                <div className='lg:w-3/5 bg-sky-400 '>
                    <h1>Part-2</h1>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;