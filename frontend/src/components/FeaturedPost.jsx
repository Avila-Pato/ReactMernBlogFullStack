import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPost = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* Primer Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Imagen */}
        <Image src="/featured1.jpeg" className="rounded-3xl object-cover" w="895" />
        {/* Detalles */}
        <div className="flex items-center gap-4">
          <h1 className="flex items-center gap-4">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">5 days ago</span>
        </div>
        {/* Titulo */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Link>
      </div>
      {/* Post de lados */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Post segundo */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* Detalles y titulo */}
          <div className="w-2/3">
            {/* Detalles */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* Titulo */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Link>
          </div>
        </div>
        {/* Post tercero */}
        <div className="lg:h-1/3 flex justify-between gap-4">
        <div className="w-1/3 aspect-video">
            <Image
              src="featured3.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* Detalles y titulo */}
          <div className="w-2/3">
            {/* Detalles */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* Titulo */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Link>
          </div>
        </div>
        {/* Post cuarto */}
        <div className="lg:h-1/3 flex justify-between gap-4">
        <div className="w-1/3 aspect-video">
            <Image
              src="featured4.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          {/* Detalles y titulo */}
          <div className="w-2/3">
            {/* Detalles */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* Titulo */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;