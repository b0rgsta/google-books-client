/**
 * This function clears the grid and appends each new book item onto the grid
 * @param arrayOfBooks
 */
export const updateGridItems = (arrayOfBooks) => {
  //goes through an array and creates a new array with book items
  const bookItems = arrayOfBooks.map((book) => {
    return createBookItem(book)
  })

  // Gets grid element
  const gridElement = document.getElementById("grid")

  //removes all children from grid
  gridElement.innerHTML = ""

  //goes through item array and appends each new element to the grid
  bookItems.forEach((item) => {
    gridElement.appendChild(item)
  })
}

/**
 * //this function takes a single book item and puts it into an html div element.
 * @param book
 * @returns {HTMLDivElement}
 */
const createBookItem = (book) => {

  //creates card text elements
  const title = book.volumeInfo.title ?? ""
  const h2Element = document.createElement('h2')
  h2Element.innerText = title
  h2Element.classList.add("card__title")

  const author = book.volumeInfo.authors?.join(", ") ?? ""
  const h3Element = document.createElement('h3')
  h3Element.innerText = author
  h3Element.classList.add("card__author")

  const description = book.volumeInfo.description ?? ""
  const h4Element = document.createElement('h4')
  h4Element.innerText = prepareDescription(description)
  h4Element.classList.add("card__description")

  //creates card image element
  const image = book.volumeInfo.imageLinks?.thumbnail ?? "assets/generic_book.png"
  const imageElement = document.createElement('img')
  imageElement.src = image

//creates main card block
  const card = document.createElement('div')
  card.classList.add("card")

  //creates card elements
  const bookText = document.createElement('div')
  bookText.classList.add("card__text")
  const bookImage = document.createElement('div')
  bookImage.classList.add("card__image")
  bookImage.appendChild(imageElement)

//appends text elements to text div
  bookText.appendChild(h2Element)
  bookText.appendChild(h3Element)
  bookText.appendChild(h4Element)

  //appends image and text divs to main card div.
  card.appendChild(bookText)
  card.appendChild(bookImage)

  return card
}

//function that limits description char length or adds placeholder if description is empty.
const prepareDescription = (description) => {
  if (description) {
    if (description.length > 115) {
      return description.slice(0, 115) + '...'
    } else {
      return description
    }
  } else {
    return 'Description unavailable.'
  }
}