import React, { useState } from 'react';
import coverImage from '../../public/cover1.png'
const Home = () => {

    const [showFullText, setShowFullText] = useState(false)

    const textToggle = ()=>{
        setShowFullText(!showFullText)
    }
    return (
        <div>
            <div className=' flex flex-col-reverse lg:flex-row gap-12 mt-12 lg:mt-24'>
                <div className=' lg:w-3/6 font-Open'>
                    <h1 className='text-3xl font-bold'>Hi, I am Nazrul Islam.</h1>
                    <p className='font-bold text-sky-400'>Junior Web Developer</p>
                    <p className='text-justify'>
                    "Hi, I’m Nazrul Islam, a passionate junior web developer from Bangladesh. Crafting websites isn't just a job for me—it's my passion. I specialize in building seamless, user-friendly web applications using cutting-edge technologies such as HTML, CSS, Tailwind CSS, JavaScript, React, Firebase, Express, and MongoDB.
                   {
                    showFullText && (
                        <>
                         My love for coding stems from its ability to tackle complex problems and continuously expand my skills. I focus on creating visually appealing and functional web experiences that enhance user satisfaction and engagement.
                        In collaborative environments, I excel at aligning team efforts with project goals, delivering effective and innovative solutions. My contributions have consistently boosted website performance and user interaction.
                        I’m eager to explore new opportunities in web development and open to collaborations. Feel free to reach out to me at nazrulislam.cse28@gmail.com to discuss potential projects or opportunities."
                        </>
                    )
                   }
                    </p>
                    <button onClick={textToggle} className="px-4 py-2 text-lg font-semibold dark:border-gray-800 hover:bg-[orange] duration-1000 ease-in-out hover:text-black border-[1px] rounded-lg border-green-400 p-2 mt-4">
                        {showFullText ? "See less" : "Read More"}
                    </button>
                </div>
                <div className=' lg:w-2/6'>
                    <img className='w-300 h-300' src={coverImage} alt="" />
                </div>
            </div>

            {/*CV Download button with social links*/}  
            <div>
                <div>
                   <button className='border-[1px] rounded-lg border-green-400 p-2 bg-transparent font-bold mt-2'>Download CV</button>
                </div>
                <div>

                </div>
            </div>     

        </div>
    );
};

export default Home;