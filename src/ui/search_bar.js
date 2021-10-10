/**
 *
 * @param { (query: string) => void } listener function to run when user presses search button
 */
export const setUpSearchListener = (listener) => {
  //add a listener to search button and inside the function =>
  document
    .getElementById('search-button')
    .addEventListener("click", function () {
      const searchText = document.getElementById('search').value
      listener(searchText)
    })
}