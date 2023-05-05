export const filteredCards = (cards) => {
  return cards.filter(e => e.author._id === '644101713291d790b3f840ef')
}

export const findLiked = (product, id) => {
  return product.likes.some(e => e === id)
}