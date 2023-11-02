import React from 'react'
import ProductList_Filter from '../../components/ProductList_Filter/ProductList_Filter'

const page = ({params,searchParams}) => {
  return (
    <ProductList_Filter SC_ID={params.params} categoryName={searchParams.SB_NAME}/>
  )
}

export default page