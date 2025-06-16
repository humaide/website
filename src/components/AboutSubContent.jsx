/* eslint-disable react/prop-types */
import Texture4 from '../assets/textures/texture-4.png'

const AboutSubContent = ({ title, subtitle, content, image }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-pastel-blue px-44">
      {/* <img src={image} alt={title} className="mb-4 rounded" />         */}
      <div className="bg-tangerine h-72 w-full">
        <img src={Texture4} alt="dotted wave illustration" className="w-full h-full object-cover"/>
    </div>
      <h1 className="text-3xl self-start font-bold mt-10 mb-4">{title}</h1>
      <h2 className="text-lg font-semibold mb-4">{subtitle}</h2>
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default AboutSubContent;