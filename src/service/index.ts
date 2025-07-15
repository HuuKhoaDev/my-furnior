import Constants from '@/constants'

const allProduct = Constants.PRODUCTS

const ProductService = () => {
  const getList = (page: number, limit: number) => {
    const startIndex = (page - 1) * limit

    const endIndex = page * limit
    const items = allProduct.filter((item, index) => index >= startIndex && index < endIndex)

    return {
      items,
      page,
      limit,
      total: allProduct.length,
    }
  }

  return {
    getList,
  }
}

export default ProductService()
