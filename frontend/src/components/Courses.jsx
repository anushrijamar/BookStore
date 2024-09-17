import React from "react";
import list from "../../public/list.json"
import Cards from "./Cards"
import {Link} from 'react-router-dom'
export default function Courses() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md-px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2x1 md-text-4x1">
            We are delighted to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className="mt-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vitae illo ullam voluptate consectetur cupiditate, sunt hic enim, ex architecto repellendus! Aliquam quod deserunt molestias, suscipit minima unde eaque incidunt! Esse, iste.
          </p>
          <Link to="/"><button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-8">Back</button></Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item)=>
            (
              <Cards key={item.id} item={item}/>
            )) }
        </div>
      </div>
    </>
  );
}
