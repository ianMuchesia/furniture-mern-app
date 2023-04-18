import React, { useState } from "react";
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";
interface Props {
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  dropdown: boolean;
}
const Categorize = ({ setDropdown, dropdown }: Props) => {
  const [priceRange, setPriceRange] = useState(49999);
  return (
    <div className="">
      <div
        className="grid place-items-center border-2  m-2 px-4 py-2 md:hidden"
        onClick={() => setDropdown((prevDrop) => !prevDrop)}
      >
        {!dropdown ? <h3>Categorize</h3> : <h3>Close Categories</h3>}
        {!dropdown ? <BsArrowBarDown /> : <BsArrowBarUp />}
      </div>

      {dropdown && (
        <form className="flex flex-col gap-3 items-center">
          <input
            type="text"
            placeholder="search"
            className="bg-blue-100 p-2 rounded-md text-gray-900"
          />
          <h3 className="font-bold text-lg">Category</h3>
          <button type="button">Living Room</button>
          <button type="button">Kitchen</button>
          <button type="button">Outdoor</button>
          <button type="button">Bedroom</button>
          <button type="button">Entryway</button>
          <button type="button">Office</button>
          <button type="button">Dining Room</button>
          <label htmlFor="Brand">Brand</label>
          <select id="Brand">
            <option>All</option>
            <option>Kitchen Co</option>
            <option>Outdoor Co</option>
            <option>Furniture Co</option>
          </select>
          <div>
            <label htmlFor="price" className="text-blue-700">
              Price Range
            </label>
            <p>Ksh.{priceRange}</p>
            <input
              type="range"
              id="price"
              min={0}
              max={500000}
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className=""
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Categorize;
