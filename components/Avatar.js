// next image 
import Image from "next/image";

const Avatar = () => {
  return <div className="flex ">

    <Image src={'/avatar.png'} width={737} height={678} alt="" 
    className="translate-z-0 w-[800px] md:w-full  mx-auto h-full " />
  </div>;
};

export default Avatar;
