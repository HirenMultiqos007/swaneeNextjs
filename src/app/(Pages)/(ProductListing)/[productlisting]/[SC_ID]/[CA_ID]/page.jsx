import viewProductAPI from '@/app/API(Server)/ViewProductDetails/ViewProduct'
import React from 'react'
import ViewProductCM from '../../../components/ViewProductCM/ViewProductCM'

const page = async({params}) => {
  console.log(params?.SC_ID,"params")
  const viewProduct = await viewProductAPI(params.CA_ID)
  return(
    <ViewProductCM viewProduct={viewProduct} SC_ID={params?.SC_ID}/>
  )
}

export default page