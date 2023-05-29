import React from "react";
import "./Card.css";
function Card({ src, title, description, price }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex-col">
      <img className="w-full h-80" src={src} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base text truncate ...">
          {description}
        </p>
      </div>
      {/* <div className="px-6 pt-4 pb-2 flex flex-row items-center space-between md:space-x-16"> */}
      <div className="px-6 pt-4 pb-2 flex flex-row items-center space-between justify-between">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Price ₹{price}
        </span>
        {/* <button class="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> */}
        {/* <button class=" rounded-full bg-red-400 text-white h-full py-3 px-4 mb-3 " onClick={()=>{}}>
    Button
</button> */}
      </div>
    </div>
  );
}

export default Card;
