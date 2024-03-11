import { productlists } from "../../assets/data/data"
import ProductCards from "../../utils/ProductCards"


const Shop = () => {
  return (
    <>
    <section className="flex">
    <div className="px-7 ml-12 bg-slate-50 lg:w-1/5 mt-16 ">
     <div className="mt-3">
      <h1 className="text-center text-lg font-semibold  my-3">Categories</h1>
      {productlists?.map((item) => (
        <button key={item.id} className="border w-full mb-2 px-8 py-2 text-sm hover:bg-[#0d775e] hover:text-white rounded-md text-center">{item.title}</button>
      ))}
    
     </div>
      </div>
        <div className="px-7 lg:w-4/5 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {productlists.map((item) => (
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
    </section>
    </>
  )
}

export default Shop