// export const metadata = {
//   title: 'Home',
// }
import sampleData from '@/app/db/sample-data'
import ProductList from '@/components/ui/shared/product/product-list'

const Homepage = () => {
  return (
    <>
      <ProductList data={sampleData.products} title='Newest Arrival' />
    </>
  )
}

export default Homepage