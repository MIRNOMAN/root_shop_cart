import { useEffect, useState } from "react";
import { productlists } from "../../assets/data/data"
import ProductCards from "../../utils/ProductCards"
import { TbCategoryFilled } from "react-icons/tb";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);



  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchInputChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const filteredProductLists = productlists.filter((item) => {
    return (
      (!selectedCategory || item.title === selectedCategory) &&
      (!searchInput ||
        item.title.toLowerCase().includes(searchInput.toLowerCase()))
    );
  });

  useEffect(() => {
    // Calculate min and max prices when filteredProductLists change
    if (filteredProductLists.length > 0) {
      console.log("Filtered Product List:", filteredProductLists);
      const prices = filteredProductLists?.map(item => item?.price);
      console.log("Prices:", prices);
      setMinPrice(Math.min(...prices));
      setMaxPrice(Math.max(...prices));
    }
  }, [filteredProductLists]);
  

  return (
    <>
      <section>
        {/* search function */}
        <div className="lg:flex justify-evenly items-center mt-6">
          <div className="">
            <h1 className="lg:text-end text-center mb-3 text-2xl font-medium">Search Your Product</h1>
          </div>
          <div className="lg:w-3/6">
            <form className="max-w-xl mx-auto">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" />
                  </svg>
                </div>
                <input value={searchInput}
                  onChange={handleSearchInputChange} 
                  type="text"  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </form>
          </div>
         
         {/* end search function */}

        </div>
        <div className="lg:flex">
          <div className="px-7 ml-12 bg-slate-50 lg:w-1/5 mt-6 ">
            <div className="mt-3">
              <div className="flex items-center justify-center gap-2">
                <TbCategoryFilled size={20} />
                <h1 className="text-center text-lg font-semibold my-3"> Categories</h1>
              </div>
              {productlists?.map((item) => (
                <button key={item.id}
                  onClick={() => handleCategoryClick(item?.title)}
                  className={`border w-full mb-2 px-8 py-2 text-sm hover:bg-[#0d775e] hover:text-white rounded-md text-center ${selectedCategory === item.category ? 'bg-[#0d775e] text-white' : ''}`}>{item.title}</button>
              ))}

            </div>
            
          </div>
          <div className="px-7 lg:w-4/5 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProductLists?.map((item) => (
              <ProductCards
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                images={item.images}
                price={item.price}
                discount={item.discount}
                rating={item.rating}
                featured={item.featured}
                category={item.category}
                color={item.color}

              />
            ))
            }
          </div>
        </div>
   {/* range wise price */}
        <div className="relative mx-52 my-16">
    <label  className="sr-only">Labels range</label>
 <input id="labels-range-input" type="range"  min={minPrice} max={maxPrice} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min (${minPrice})</span>
    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">${(maxPrice - minPrice) / 2}</span>
    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">${maxPrice}</span>
    <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max (${maxPrice})</span>
</div>
      </section>
    </>
  )
}

export default Shop