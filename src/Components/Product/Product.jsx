import { productlists } from "../../assets/data/data"
import ProductCards from "../../utils/ProductCards"

const Product = () => {
  return (
    <>
        <section className="my-20 bg-slate-100">
           <div className="container py-10 ">
             <h1 className="text-2xl">Most popular products</h1>
             <div className="flex items-center mt-2 gap-3 uppercase">
                <span className="text-sm ">All Products (39)</span>
                <span className="text-sm text-green-500">wooden Products (15)</span>
             </div>

             <div className="content mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
           </div>
        </section>
    </>
  )
}

export default Product