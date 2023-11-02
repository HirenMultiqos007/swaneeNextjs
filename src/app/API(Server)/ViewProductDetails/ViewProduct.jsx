export default async function viewProductAPI (CatalogId) {
   try {
        const data = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}product/view/${CatalogId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Isguest" : true
                },

                cache: 'no-store'
            }
        )
    
        const response = await data.json()
        return response.data
   } catch (error) {
    
   }
}