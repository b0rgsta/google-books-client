import {setUpSearchListener} from "./ui/search_bar.js";
import {updateGridItems} from "./ui/book_grid.js";
import {searchBooks} from "./services/book.js";

( function () {

  setUpSearchListener(runSearchAndUpdateGrid)

  runSearchAndUpdateGrid('j.k. rowling')

})()

/**
 * This function takes a query, sends it to the API and updates the grid.
 * @param {string} query - text to be searched.
 */
async function runSearchAndUpdateGrid(query) {
  const fetchedBooks = await searchBooks(query)
  updateGridItems(fetchedBooks.items)
}