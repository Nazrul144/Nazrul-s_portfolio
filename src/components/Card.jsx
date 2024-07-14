import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({project}) => {
    const { project_name, features, skills, project_image, description, github_link, live_link, project_id } = project;
    console.log(skills);
    return (
        <div>
            <div className="card bg-purple-100 shadow-xl mb-24 animate__animated animate__zoomIn hover:bg-purple-300 transition ease-in-out duration-1000">
                <figure className="px-5 pt-5">
                    <img
                        src={project_image}
                        alt="image"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold font-Open">{project_name}</h2>
                    
                    <div className='text-center mb-2'>
                        <Link to={`/viewDetails/${project_id}`}>
                        <button className='w-full p-2 bg-sky-400 btn btn-outline border-0 border-b-4 rounded-lg font-bold font-Open hover:bg-[tomato] duration-1000 ease-in-out hover:text-white border-none animate__animated animate__flipInX'>Get Details</button>
                        </Link>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Card;