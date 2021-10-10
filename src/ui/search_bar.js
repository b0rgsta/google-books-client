/**
 *
 * @param { (query: string) => void } callback function which runs when user clicks on search button
 */
export const setUpSearchListener = (callback) => {
  //adds a listener to the search button
  document
    .getElementById('search-button')
    .addEventListener("click", function () {
      // gets value from search bar
      const searchText = document.getElementById('search').value
      // passes the search text to whomever called the function
      callback(searchText)
    })
}