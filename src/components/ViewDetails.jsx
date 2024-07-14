import { Helmet } from "react-helmet-async";
import { FaArrowRight, FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { Link, useLoaderData } from 'react-router-dom'



const ViewDetails = () => {
    const data = useLoaderData();
    const {skills,features, project_name, project_image,live_link, github_link} = data;
   
    
    return (
        <div>
            <Helmet>
                <title>Portfolio | View Details</title>
            </Helmet>

            <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 ">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 animate__animated animate__zoomIn rounded-lg">
                        <img src={project_image} alt="image" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <p className="animate__animated animate__fadeInDown"><span className='text-green-500 font-bold '># Project Name: </span>{project_name}</p>
                        <p className="animate__animated animate__fadeInDown"><span className='text-green-500 font-bold'># Core Features: </span></p>
                        <li className="animate__animated animate__fadeInDown">{features[0]}</li>
                        <li className="animate__animated animate__fadeInDown">{features[1]}</li>
                        <li className="animate__animated animate__fadeInDown">{features[2]}</li>
                
                        <p><span className='text-green-500 font-bold animate__animated animate__flipInX'># Used Technologies: </span>{data.customization}</p>
                        <h1 className='flex gap-2 text-4xl ml-4 mt-4 '><FaHtml5 className="text-orange-500 animate_animated animate__rotateIn" /> <RiTailwindCssLine className="text-sky-400 animate_animated animate__rotateIn" /> <TbBrandJavascript className="text-yellow-500 animate_animated animate__rotateIn" /> <FaReact className="text-sky-500 animate_animated animate__rotateIn" /><RiFirebaseFill className="text-orange-400 animate_animated animate__rotateIn" />
                            <FaNode className="text-green-400 animate__animated animate__lightSpeedInRight" /> <SiMongodb className="text-green-600 animate_animated animate__rotateIn" />
                        </h1>  
                        <li className="text-justify animate__animated animate__lightSpeedInRight"><span className='text-green-500 font-bold mt-8'>Description: </span>{data.description}</li>
                        <div className="mt-4 animate__animated animate__lightSpeedInLeft">
                        <li className="flex items-center gap-4 mb-2"><span className='text-sky-400 font-bold'>Live Link: </span><a href={live_link} target="_blank" rel="noopener noreferrer"><FaArrowRight className="ml-2 text-xl text-green-300" /></a></li>
                        <li className="flex items-center gap-4"><span className='text-sky-400 font-bold'>Github Link: </span><a href={github_link} target="_blank" rel="noopener noreferrer"><FaGithub  className="text-xl"/></a></li>

                        </div>
                        <div className=" mt-4 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start ">
                            <Link to='/' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 hover:bg-[tomato] duration-1000 ease-in-out hover:text-black border-none animate__animated animate__lightSpeedInLeft">Back to home</Link>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/nazrul-islam-a6080730b" target="_blank" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800 hover:bg-[orange] duration-1000 ease-in-out hover:text-black border-none animate__animated animate__lightSpeedInRight">Explore Me</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewDetails;
