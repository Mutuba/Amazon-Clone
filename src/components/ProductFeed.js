import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (

    // "dense" packing algorithm attempts to fill in holes earlier in the grid,
    //  if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items.

    // column-Items are placed by filling each column in turn, adding new columns as necessary.
    //row - Items are placed by filling each row in turn, adding new rows as necessary
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
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

      <img className="md:col-span-full"></img>
    </div>
  );
};

export default ProductFeed;
