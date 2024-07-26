import React from 'react';

export default function Cards({ item }) {
    console.log(item);
    return (
        <div className="card bg-base-100 w-80 h-auto shadow-xl m-4 mt-4 my-3">
            <figure>
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-semibold">
                    {item.name || "Shoes!"}
                    <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p className="text-sm">{item.title}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">${item.price}</div>
                    <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-20">Buy now</div>
                </div>
            </div>
        </div>
    );
}
