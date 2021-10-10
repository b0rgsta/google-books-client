import {setUpSearchListener} from "./ui/search_bar.js";
import {updateGridItems} from "./ui/book_grid.js";
import {searchBooks} from "./services/book.js";

(function () {

  setUpSearchListener(async (query) => {
    const fetchedBooks = await searchBooks(query)
    updateGridItems(fetchedBooks.items)
  })

})()