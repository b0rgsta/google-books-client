const API_KEY = "AIzaSyD3zFEbUdrSlvsTv_aihbXOOrIlR679a_4"
const SEARCH_URL = `https://www.googleapis.com/books/v1/volumes?${API_KEY}&q=`

/**
 * This function fetches book query from the server
 * @param  query query
 * @return {Promise<[]>}
 */
export async function searchBooks(query) {
  const response = await fetch(SEARCH_URL + query)
  console.log("SUCCESS")
  return response.json()
}
