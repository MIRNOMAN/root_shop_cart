import ProductSlideCard from "./ProductSlideCard"


const ProductSlide = () => {
  return (
    <>
       <section className="py-20 bg-white slideproduct">
        <div className="container">
           <h1 className="text-2xl font-semibold">What is tranding now</h1>
           <div className="flex items-center gap-3 uppercase">
               <p className="text-lg font-normal">discover the most Trending products In rootcart</p>
           </div>

           <ProductSlideCard />
        </div>
        </section> 
    </>
  )
}

export default ProductSlide