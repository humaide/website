/* eslint-disable react/prop-types */
import { Mail, Linkedin } from 'lucide-react';

function PersonalSocialMedia({mail, linkedin, style}) {
    return (
        <div className={`pt-2 flex w-1/2 lg:w-1/4 z-100 ${style}`}>
            <button className='bg-transparent h-full hover:cursor-pointer'>
                <a href={`mailto:${mail}`}>
                    <Mail color="#4D48E2"  className='mr-2'/>
                </a>
            </button>
            <button className='bg-transparent h-full hover:cursor-pointer'>
                <a href={linkedin} target='_blank'>
                    <Linkedin color="#4D48E2"  className='ml-1'/>
                </a>
            </button>
        </div>  
    );
  };
  
  export default PersonalSocialMedia;