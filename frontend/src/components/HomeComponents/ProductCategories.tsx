import { Outdoor, livingRoom, Bedroom, entryWay, kitchen, Office, DiningRoom } from "../../assets";
export default function ProductListsCategoriesGrid() {
  return (
    <>
      {/* Product List Section: Categories Grid */}
      <div className="bg-white">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a
              href="#"
              className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={Outdoor}
                alt="Product Image"
                className="h-full transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-purple-800">
                  Outdoor
                </div>
              </div>
            </a>
            <a
              href="#"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={kitchen}
                alt="Product Image"
                className="h-full transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-purple-800">
                  Kitchen
                </div>
              </div>
            </a>
            <a
              href="#"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={DiningRoom}
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-purple-800">
                  Dining Room
                </div>
              </div>
            </a>
            <a
              href="#"
              className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={livingRoom}
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-purple-800">
                  Living Room
                </div>
              </div>
            </a>
            <a
              href="#"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={Bedroom}
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-purple-800">
                  Bedroom
                </div>
              </div>
            </a>
            <a
              href="#"
              className="block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={Office}
                alt="Product Image"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-purple-800">
                  Office
                </div>
              </div>
            </a>
          
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}
    </>
  );
}
