import React from 'react';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            <h1>This is a about section</h1>
            <div>
                            <h1 className='text-3xl font-Open text-white font-bold ml-2 lg:ml-8'>About me.</h1>
                            <p className='font-Open text-white text-justify lg:ml-8 ml-2 mr-2 mt-4'>Hi, I am Nazrul Islam, a passionate junior web developer with a keen interest in creating dynamic and user-friendly web applications. I have a solid foundation in HTML, CSS, Tailwind CSS, JavaScript, React, Firebase, Node.js, and MongoDB. I enjoy turning ideas into functional and visually appealing digital experiences.</p>
                            <div className='lg:flex gap-4 text-white font-Open ml-2 lg:ml-4 mt-4'>
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-2 text-green-400">Personal Information</h1>
        <table className="table-auto w-full text-left">
            <tbody>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Name:</td>
                    <td className="py-2">Nazrul Islam</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Date of Birth:</td>
                    <td className="py-2">01/05/1997</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Nationality:</td>
                    <td className="py-2">Bangladeshi</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Religion:</td>
                    <td className="py-2">Islam</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Marital Status:</td>
                    <td className="py-2">Unmarried</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                <td className="font-bold pr-4 py-2">Language:</td>
                    <td className="py-2">English, Hindi, Bangla</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-2 text-sky-400">Contact Information</h1>
        <table className="table-auto w-full text-left">
            <tbody>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2"> Permanent Address:</td>
                    <td className="py-2"> Mehendiganj, Barisal</td>
                  
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Present Address:</td>
                    <td className="py-2">Sutrapur, Dhaka</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Email:</td>
                    <td className="py-2">nazrulislam.cse28@gmail.com</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Phone:</td>
                    <td className="py-2">+8801758752528</td>
                </tr>
                <tr>
                    <td className="font-bold pr-4 py-2">Facebook:</td>
                    <td className="py-2"><a href="https://www.facebook.com/profile.php?id=100007196595674" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><FaFacebook className='text-xl lg:ml-16' /></a></td>
                </tr>
                <tr>
                    <td className="font-bold pr-4 py-2">LinkedIn:</td>
                    <td className="py-2"><a href="https://www.linkedin.com/in/nazrul-islam-a6080730b" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><FaLinkedinIn className='text-xl lg:ml-16' /></a></td>
                </tr>
            </tbody>
        </table>
    </div>
                            </div>

                            </div>
        </div>
    );
};

export default About;