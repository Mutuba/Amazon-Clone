import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (

    // "dense" packing algorithm attempts to fill in holes earlier in the grid,
    //  if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items.
    <div className="grid grid-flow-row-dense">
      {products.map(({id, title, price, description, category, image}) => (
        <Product
          key={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
