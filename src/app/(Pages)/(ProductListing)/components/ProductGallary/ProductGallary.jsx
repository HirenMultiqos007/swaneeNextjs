import ProductCardCM from '@/app/components/ProductCardCM/ProductCardCM';
import React from 'react'

const ProductGallary = ({productsList}) => {
  return (
    <>
    {productsList?.length === 0 && (
      <p className="no-data-found"> No data found</p>
    )}
        <div className="product-gallary-list">
        {productsList &&
          productsList?.map((data, key) => {
            return <ProductCardCM data={data} productsList />;
          })}
    </div>
    {/* {TotalProducts > 10 && productsList?.length !== 0 && (
      <div className="pagination">
        <Pagination
          total={Math.ceil(TotalProducts / DataLimit)}
          current={currentPage}
          onChangePage={handleChangePage}
        />
      </div>
    )} */}
  </>
  )
}

export default ProductGallary