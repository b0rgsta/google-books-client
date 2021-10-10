const API_KEY = "AIzaSyD3zFEbUdrSlvsTv_aihbXOOrIlR679a_4"
const SEARCH_URL = `https://www.googleapis.com/books/v1/volumes?${API_KEY}&q=`

/**
 * This function fetches book query from the server API
 * @param  query query
 * @return {Promise<[]>}
 */
export async function searchBooks(query) {
  const response = await fetch(SEARCH_URL + query)
  //.json changes a string into a js object
  return response.json()
}
