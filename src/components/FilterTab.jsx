import React, { useEffect } from "react";
import { Properties } from "../Data/Properties";
import Card from "../subcomponents/Card";

function FilterTab() {
  //   console.log(Properties.filter((property) => property.Type === "Apartment"));
  const [query, setQuery] = React.useState("");
  const [propertyType, setPropertyType] = React.useState("");
  const [propertyPrice, setPropertyPrice] = React.useState("");
  const [propertyRooms, setPropertyRooms] = React.useState("");
  const [propertyLocation, setPropertyLocation] = React.useState("");

  const [flagType, setFlagType] = React.useState(false);
  const [flagPrice, setFlagPrice] = React.useState(false);
  const [flagRooms, setFlagRooms] = React.useState(false);
  const [flagLocation, setFlagLocation] = React.useState(false);
  const [flagQuery, setFlagQuery] = React.useState(false);

  useEffect(() => {
    if (propertyType !== "") {
      setFlagType(true);
    } else {
      setFlagType(false);
    }
    if (propertyPrice !== "") {
      setFlagPrice(true);
    } else {
      setFlagPrice(false);
    }
    if (propertyRooms !== "") {
      setFlagRooms(true);
    } else {
      setFlagRooms(false);
    }
    if (propertyLocation !== "") {
      setFlagLocation(true);
    } else {
      setFlagLocation(false);
    }
    if (query !== "") {
      setFlagQuery(true);
    } else {
      setFlagQuery(false);
    }
  }, [propertyType, propertyPrice, propertyRooms, propertyLocation, query]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center py-10">
        <p className="font-bold text-4xl">Search properties to rent</p>
        <input
          type="text"
          placeholder="Search properties"
          className="rounded h-8 border p-3 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      <div className="flex justify-between items-center border h-24 p-5 rounded">
        <div className="flex flex-col">
          <label for="locations" className="font-semibold text-gray-400 pl-1">
            Location
          </label>
          <select
            id="locations"
            className="text-lg font-bold"
            value={propertyLocation}
            onChange={(e) => setPropertyLocation(e.target.value)}
          >
            <option value="" selected>
              Choose a Location
            </option>
            <option value="Mumbai">Mumbai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Banglore">Banglore</option>
          </select>
        </div>

        <p className="text-4xl font-extralight text-gray-200">l</p>
        <div className="flex flex-col">
          <label for="prices" className="font-semibold text-gray-400 pl-1">
            Price
          </label>
          <select
            isClearable={true}
            id="prices"
            className="text-lg font-bold"
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(e.target.value)}
          >
            <option value="" selected>
              Choose a Price Range
            </option>
            <option value="0-500">$0 - $500</option>
            <option value="1000-1500">$1000 - $1500</option>
            <option value="1500-2000">$1500 - $2000</option>
            <option value="2000-2500">$2000 - $2500</option>
            <option value="2000-3000">$2000 - $3000</option>
            <option value="3000-4000">$3000 - $4000</option>
            <option value="5000-10000">$5000 - $10000</option>
          </select>
        </div>
        <p className="text-4xl font-extralight text-gray-200">l</p>
        <div className="flex flex-col">
          <label for="types" className="font-semibold text-gray-400 pl-1">
            Property Type
          </label>
          <select
            id="types"
            className="text-lg font-bold"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="" selected>
              Choose a Property Type
            </option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Mansion">Mansion</option>
            <option value="Studio">Studio</option>
          </select>
        </div>
        <p className="text-4xl font-extralight text-gray-200">l</p>
        <div className="flex flex-col">
          <label for="rooms" className="font-semibold text-gray-400 pl-1">
            Rooms
          </label>
          <select
            id="rooms"
            className="text-lg font-bold"
            value={propertyRooms}
            onChange={(e) => setPropertyRooms(e.target.value)}
          >
            <option value="" selected>
              Choose a Number of Rooms
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <p className="text-4xl font-extralight text-gray-200">l</p>
        <h3
          className="bg-indigo-500 px-4 py-2 text-white rounded cursor-pointer"
          onClick={() => {
            setPropertyType("");
            setPropertyPrice("");
            setPropertyRooms("");
            setPropertyLocation("");
            setQuery("");
          }}
        >
          Reset
        </h3>
      </div>
      <div className="mt-10 grid gap-4 grid-cols-3">
        {Properties.filter((property) =>
          flagQuery
            ? property.Name.toLowerCase().includes(query.toLowerCase()) ||
              property.Location.toLowerCase().includes(query.toLowerCase()) ||
              property.Type.toLowerCase().includes(query.toLowerCase())
            : true
        )
          .filter((property) =>
            flagType ? property.Type === propertyType : true
          )
          .filter((property) =>
            flagPrice
              ? property.Price >= parseInt(propertyPrice.split("-")[0]) &&
                property.Price <= parseInt(propertyPrice.split("-")[1])
              : true
          )
          .filter((property) =>
            flagRooms ? property.Rooms === propertyRooms : true
          )
          .filter((property) =>
            flagLocation ? property.Location === propertyLocation : true
          )
          .map((property, index) => {
            return <Card key={index} property={property} />;
          })}
      </div>
    </div>
  );
}

export default FilterTab;
