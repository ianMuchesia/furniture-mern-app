import React, { useState } from "react";
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  filterProducts,
  setBrandFilter,
  setCategoryFilter,
  setPriceRange,
  setSearchTerm,
} from "../../store/productSlice";
interface Props {
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  dropdown: boolean;
}

interface FormState {
  search: string;
  brand: string;
  category: string;
  price: number;
}

const initialFormState: FormState = {
  search: "",
  brand: "All",
  category: "",
  price: 0,
};

export const Categorize = ({ setDropdown, dropdown }: Props) => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<FormState>(initialFormState);

  const [backgroundStyle, setBackgroundStyle] = useState(false);
  const handleBrandChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    dispatch(setBrandFilter(form.brand));
    dispatch(filterProducts());
  };

  const handleCategoryClick = (category: string) => {
    setForm((prevState) => ({
      ...prevState,
      category,
    }));
    dispatch(setCategoryFilter(form.category));
    dispatch(filterProducts());
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseInt(event.target.value, 10);
    setForm((prevState) => ({
      ...prevState,
      price,
    }));
    dispatch(setPriceRange(form.price));
    dispatch(filterProducts());
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    dispatch(setSearchTerm(form.search))
    dispatch(filterProducts())
  };

  const handleClearFilters = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setForm({
      search: "",
      brand: "All",
      category: "",
      price: 0,
    });
    dispatch(filterProducts());
  };

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
        <>
          <form
            className="flex flex-col gap-3 items-center"
            onSubmit={handleClearFilters}
          >
            <input
              type="text"
              name="search"
              value={form.search}
              placeholder="search"
              className="bg-blue-100 p-2 rounded-md text-gray-900"
              onChange={handleSearchChange}
            />

            <h3 className="font-bold text-lg">Category</h3>
            <button type="button" onClick={() => handleCategoryClick("")}>
              All
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Living Room")}
            >
              Living Room
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Kitchen")}
            >
              Kitchen
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Outdoor")}
            >
              Outdoor
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Bedroom")}
            >
              Bedroom
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Entryway")}
            >
              Entryway
            </button>
            <button type="button" onClick={() => handleCategoryClick("Office")}>
              Office
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Dining Room")}
            >
              Dining Room
            </button>
            <label htmlFor="Brand">Brand</label>
            <select
              id="Brand"
              name="brand"
              value={form.brand}
              onChange={handleBrandChange}
            >
              <option value="">All</option>
              <option value="Kitchen Co">Kitchen Co</option>
              <option value="Outdoor Co">Outdoor Co</option>
              <option value="Furniture Co">Furniture Co</option>
            </select>
            <div>
              <label htmlFor="price" className="text-blue-700">
                Price Range
              </label>
              <p>Ksh.{form.price}</p>
              <input
                type="range"
                id="price"
                name="price"
                min={0}
                max={500000}
                value={form.price}
                onChange={handlePriceChange}
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-1 rounded-lg"
            >
              Clear Filters
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export const MemoizedCategorize = React.memo(Categorize);
