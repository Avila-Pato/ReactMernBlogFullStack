import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Imagen */}
      <div className="md:hidden xl:block xl:w-1/2 sm:w-1/3  ">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      {/* Detalles */}
      <div className="flex flex-col gap-4  xl:w-2/3 ">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. ullam modi
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">Jhon Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut Sint ipsa fuga nihil numquam, quam dicta quas
        
    
       
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
