import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative items-center gap-2 px-7 justify-center inline-flex h-12 w-full md:w-60 md:mt-10 text-sm font-medium text-white backdrop-blur-sm border  rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-[#5C5470] transition duration-200 " onClick={handleClick}> 
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
    </button>
  );
};

export default MagicButton;
