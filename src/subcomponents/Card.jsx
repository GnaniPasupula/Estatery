import React from "react";

function Card(props) {
  return (
    <div className="rounded border">
      <img className="rounded h-60 w-full" src={props.property.Image} alt="" />
      <div className="p-4">
        <div className="border-b pb-2">
          <p className="font-bold text-lg text-indigo-400">
            ${props.property.Price}
            <span className="font-semibold text-gray-400 text-sm">/month</span>
          </p>
          <p className="font-bold text-lg">{props.property.Name}</p>
          <p className="font-semibold text-gray-400">
            {props.property.Location}
          </p>
        </div>
        <div className="flex items-center justify-between space-x-4 pt-2">
          <p className="font-semibold text-gray-400 text-sm">
            {props.property.Rooms} Rooms
          </p>
          <p className="font-semibold text-gray-400 text-sm">
            {props.property.SquareFeet}sqft
          </p>
          <p className="font-semibold text-gray-400 text-sm">
            {props.property.Type}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
