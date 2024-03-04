import { productlists } from "../../assets/data/data"
import ProductCards from "../../utils/ProductCards"


const Shop = () => {
  return (
    <>
      <section className="container mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
      </section>
    </>
  )
}

export default Shop