import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div class="flex items-center justify-center h-screen">
        <div class="flex-col space-y-4 text-center">
          <div class="text-4xl michroma-regular">
            SUM
            <span className="w-20 pl-2 bg-blue-violet text-white">
              I.T.
            </span>{" "}
          </div>
          <div class="text-5xl font-medium">Page not found</div>
          <div class="text-gray-700">
            Sorry, the page you're looking for isn't available.
          </div>
          <div class="flex items-center justify-center">
            <Link to="/">
              <div class="bg-blue-violet px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer hover:bg-white hover:text-blue-violet border-2 border-blue-violet">
                Visit Homepage
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
