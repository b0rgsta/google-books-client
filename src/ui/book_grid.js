const updateGridItems = (arrayOfBooks) => {
  //goes through an array and creates a new array with the book items
  const bookItems = arrayOfBooks.map((book) => {
    return createBookItem(book)
  })

  // Gets grid element
  gridElement = document.getElementById("grid")

  //removes all children from grid
  gridElement.innerHTML = ""

  //goes through item array and appends each element to the grid
  bookItems.forEach((item) => {
    gridElement.appendChild(item)
  })
}

//this function takes a book and puts it into an html div element.
const createBookItem = (book) => {

  //text elements
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

  //image element
  const image = book.volumeInfo.imageLinks?.thumbnail ?? "assets/generic_book.png"
  const imageElement = document.createElement('img')
  imageElement.src = image

//main card block
  const card = document.createElement('div')
  card.classList.add("card")

  //card elements
  const bookText = document.createElement('div')
  bookText.classList.add("card__text")
  const bookImage = document.createElement('div')
  bookImage.classList.add("card__image")
  bookImage.appendChild(imageElement)

//appends text elements to bookText div
  bookText.appendChild(h2Element)
  bookText.appendChild(h3Element)
  bookText.appendChild(h4Element)

  //appends image and text divs to main card div.
  card.appendChild(bookText)
  card.appendChild(bookImage)

  return card
}
//function that limits description char length and adds placeholder for empty description.
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


const fakeBooks = [{
  "kind": "books#volume",
  "id": "8d9TvwEACAAJ",
  "etag": "R5zTFNHkzfI",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/8d9TvwEACAAJ",
  "volumeInfo": {
    "title": "The Complete Book of Dried Flowers",
    "authors": ["Malcolm Hillier", "Colin Hilton"],
    "publisher": "DK Publishing (Dorling Kindersley)",
    "publishedDate": "1986",
    "industryIdentifiers": [{"type": "ISBN_10", "identifier": "0863181775"},
      {"type": "ISBN_13", "identifier": "9780863181771"}],
    "readingModes": {"text": false, "image": false},
    "pageCount": 192,
    "printType": "BOOK",
    "categories": ["Dried flower arrangement"],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "language": "en",
    "previewLink": "http://books.google.com.au/books?id=8d9TvwEACAAJ&dq=flowers&hl=&cd=1&source=gbs_api",
    "infoLink": "http://books.google.com.au/books?id=8d9TvwEACAAJ&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/The_Complete_Book_of_Dried_Flowers.html?hl=&id=8d9TvwEACAAJ"
  },
  "saleInfo": {"country": "AU", "saleability": "NOT_FOR_SALE", "isEbook": false},
  "accessInfo": {
    "country": "AU",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {"isAvailable": false},
    "pdf": {"isAvailable": false},
    "webReaderLink": "http://play.google.com/books/reader?id=8d9TvwEACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  }
}, {
  "kind": "books#volume",
  "id": "3trRoAEACAAJ",
  "etag": "MOVGiETAYf4",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/3trRoAEACAAJ",
  "volumeInfo": {
    "title": "Sidewalk Flowers",
    "authors": ["JonArno Lawson", "Sydney Smith"],
    "publishedDate": "2015",
    "description": "A little girl collects wildflowers while walking through town with her father.",
    "industryIdentifiers": [{"type": "ISBN_10", "identifier": "1554984319"},
      {"type": "ISBN_13", "identifier": "9781554984312"}],
    "readingModes": {"text": false, "image": false},
    "pageCount": 32,
    "printType": "BOOK",
    "categories": ["Juvenile Fiction"],
    "averageRating": 3.5,
    "ratingsCount": 4,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {"containsEpubBubbles": false, "containsImageBubbles": false},
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=3trRoAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=3trRoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com.au/books?id=3trRoAEACAAJ&dq=flowers&hl=&cd=2&source=gbs_api",
    "infoLink": "http://books.google.com.au/books?id=3trRoAEACAAJ&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Sidewalk_Flowers.html?hl=&id=3trRoAEACAAJ"
  },
  "saleInfo": {"country": "AU", "saleability": "NOT_FOR_SALE", "isEbook": false},
  "accessInfo": {
    "country": "AU",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {"isAvailable": false},
    "pdf": {"isAvailable": false},
    "webReaderLink": "http://play.google.com/books/reader?id=3trRoAEACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {"textSnippet": "A little girl collects wildflowers while walking through town with her father."}
}, {
  "kind": "books#volume",
  "id": "8LIifmGfMc4C",
  "etag": "WdNm0MYGu1s",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/8LIifmGfMc4C",
  "volumeInfo": {
    "title": "Tropical Flowers of the World Coloring Book",
    "authors": ["Lynda E. Chandler"],
    "publisher": "Courier Corporation",
    "publishedDate": "1981-12",
    "description": "Here are handsome line renderings of 45 colorful, varied, and exotic specimens: Cannonball Tree (Brazil and Trinidad); Bird-of-Paradise Flower (South Africa); Flame of the Forest (India); Sausage Tree (Africa); Cup-and-Saucer Vine (Mexico); and 40 others. Publisher's note and captions.",
    "industryIdentifiers": [{"type": "ISBN_10", "identifier": "0486242064"},
      {"type": "ISBN_13", "identifier": "9780486242064"}],
    "readingModes": {"text": false, "image": true},
    "pageCount": 48,
    "printType": "BOOK",
    "categories": ["Juvenile Nonfiction"],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "1.1.2.0.preview.1",
    "panelizationSummary": {"containsEpubBubbles": false, "containsImageBubbles": false},
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=8LIifmGfMc4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=8LIifmGfMc4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com.au/books?id=8LIifmGfMc4C&printsec=frontcover&dq=flowers&hl=&cd=3&source=gbs_api",
    "infoLink": "http://books.google.com.au/books?id=8LIifmGfMc4C&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Tropical_Flowers_of_the_World_Coloring_B.html?hl=&id=8LIifmGfMc4C"
  },
  "saleInfo": {"country": "AU", "saleability": "NOT_FOR_SALE", "isEbook": false},
  "accessInfo": {
    "country": "AU",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {"isAvailable": false},
    "pdf": {"isAvailable": false},
    "webReaderLink": "http://play.google.com/books/reader?id=8LIifmGfMc4C&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {"textSnippet": "Here are handsome line renderings of 45 colorful, varied, and exotic specimens: Cannonball Tree (Brazil and Trinidad); Bird-of-Paradise Flower (South Africa); Flame of the Forest (India); Sausage Tree (Africa); Cup-and-Saucer Vine (Mexico); ..."}
}, {
  "kind": "books#volume",
  "id": "RrUqDwAAQBAJ",
  "etag": "is5M6BD35dI",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/RrUqDwAAQBAJ",
  "volumeInfo": {
    "title": "The Sun and Her Flowers",
    "authors": ["Rupi Kaur"],
    "publisher": "Simon and Schuster",
    "publishedDate": "2017-10-03",
    "description": "The Sunday Times Number One Bestseller Winner of The GoodReads Choice Award for Poetry 2017 From Rupi Kaur, the bestselling author of Milk and Honey, comes her long-awaited second collection of poetry. Illustrated by Kaur, The Sun and Her Flowers is a journey of wilting, falling, rooting, rising and blooming. It is a celebration of love in all its forms. this is the recipe of life said my mother as she held me in her arms as i wept think of those flowers you plant in the garden each year they will teach you that people too must wilt fall root rise in order to bloom Praise for Rupi Kaur: ‘Kaur is at the forefront of a poetry renaissance’ Observer ‘Kaur made her name with poems about love, life and grief. They resonate hugely’ Sunday Times ‘Poems tackling feminism, love, trauma and healing in short lines as smooth as pop music’ New York Times ‘Caught the imagination of a large, atypical poetry audience…Kaur knows the good her poetry does: it saves lives’ Evening Standard ‘Breathing new life into poetry…It has people reading, and listening’ The Pool ‘Every so often, a book comes along that seems to have a life of its own, that is passed lovingly from one reader to another with recommendations that insist, \"You must read this\". Rupi Kaur's Milk and Honey is one such book’ Red Magazine ‘Rupi Kaur's poetry communicates, distils life. Her success is a simply wonderful thing for poetry. Her work reveals how powerful and accessible poetry can be. It seems to help people too and is a fine example of the healing power of art’ Allie Esiri, editor of four bestselling poetry anthologies and apps ‘Rupi Kaur blazing a trail for new generations to discover verse is a wondrous thing. Her star is shining brightly. A drop of poetry can flood the imagination. It can also ease the mind. Her work is clearly bringing such pleasures to countless readers – mostly younger readers – and that is a cause for celebration for anyone who cares about poetry’Ben Holden, editor of bestselling anthologies Poems That Make Grown Men Cry & Poems That Make Grown Women Cry",
    "industryIdentifiers": [{"type": "ISBN_13", "identifier": "9781471165832"},
      {"type": "ISBN_10", "identifier": "1471165833"}],
    "readingModes": {"text": true, "image": false},
    "pageCount": 208,
    "printType": "BOOK",
    "categories": ["Poetry"],
    "averageRating": 4,
    "ratingsCount": 16,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "1.3.3.0.preview.2",
    "panelizationSummary": {"containsEpubBubbles": false, "containsImageBubbles": false},
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=RrUqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=RrUqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com.au/books?id=RrUqDwAAQBAJ&pg=PP1&dq=flowers&hl=&cd=4&source=gbs_api",
    "infoLink": "http://books.google.com.au/books?id=RrUqDwAAQBAJ&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/The_Sun_and_Her_Flowers.html?hl=&id=RrUqDwAAQBAJ"
  },
  "saleInfo": {"country": "AU", "saleability": "NOT_FOR_SALE", "isEbook": false},
  "accessInfo": {
    "country": "AU",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
    "epub": {
      "isAvailable": true,
      "acsTokenLink": "http://books.google.com.au/books/download/The_Sun_and_Her_Flowers-sample-epub.acsm?id=RrUqDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {"isAvailable": false},
    "webReaderLink": "http://play.google.com/books/reader?id=RrUqDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {"textSnippet": "It is a celebration of love in all its forms. this is the recipe of life said my mother as she held me in her arms as i wept think of those flowers you plant in the garden each year they will teach you that people too must wilt fall root ..."}
}, {
  "kind": "books#volume",
  "id": "jolNtaTkoqEC",
  "etag": "1g7+ev8K+dU",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/jolNtaTkoqEC",
  "volumeInfo": {
    "title": "A Victorian Flower Dictionary",
    "subtitle": "The Language of Flowers Companion",
    "authors": ["Mandy Kirkby"],
    "publisher": "Random House Digital, Inc.",
    "publishedDate": "2011",
    "description": "Early Victorians used flowers as a way to express their feelings-- love or grief, jealousy or devotion. Now modern-day romantics are enjoying a resurgence of this bygone custom. Kirkby shares the historical literary, and cultural significance of flowers.",
    "industryIdentifiers": [{"type": "ISBN_13", "identifier": "9780345532862"},
      {"type": "ISBN_10", "identifier": "0345532864"}],
    "readingModes": {"text": false, "image": false},
    "pageCount": 187,
    "printType": "BOOK",
    "categories": ["Crafts & Hobbies"],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.6.1.0.preview.0",
    "panelizationSummary": {"containsEpubBubbles": false, "containsImageBubbles": false},
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=jolNtaTkoqEC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=jolNtaTkoqEC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com.au/books?id=jolNtaTkoqEC&dq=flowers&hl=&cd=5&source=gbs_api",
    "infoLink": "http://books.google.com.au/books?id=jolNtaTkoqEC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/A_Victorian_Flower_Dictionary.html?hl=&id=jolNtaTkoqEC"
  },
  "saleInfo": {"country": "AU", "saleability": "NOT_FOR_SALE", "isEbook": false},
  "accessInfo": {
    "country": "AU",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {"isAvailable": false},
    "pdf": {"isAvailable": false},
    "webReaderLink": "http://play.google.com/books/reader?id=jolNtaTkoqEC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {"textSnippet": "Now modern-day romantics are enjoying a resurgence of this bygone custom. Kirkby shares the historical literary, and cultural significance of flowers."}
}, {
  "kind": "books#volume",
  "id": "ggdLjwEACAAJ",
  "etag": "rmR1CjTqqOw",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/ggdLjwEACAAJ",
  "volumeInfo": {
    "title": "Flowers",
    "subtitle": "Art and Bouquets",
    "publishedDate": "2016-03-27",
    "description": "\"Be it a single delicate bud in a simple clear vase or an explosion of colorful blossoms, a brilliant bouquet accents an atmosphere and brightens the mood like nothing else. The beauty of flowers has inspired artists, designers, poets, and myriad other creators for centuries: the Dutch masters of the 1600s and impressionist painters from Manet to Van Gogh, photographer Robert Mapplethorpe, botanical illustrator Georg Dionysius Ehret, and even the inimitable Andy Warhol. Flowers: art & bouquets showcases a glorious profusion of floral images and interpretations across a spectrum of artistic media and time periods. Design writer Sixtine Dubly chronicles the evolution of floral design in this remarkable compendium, which also features stunning work by more than forty contemporary floral artists in London, Paris, and New York, from minimalist to elaborate. This treasury of gorgeous imagery blooms in resplendent color before the reader's eyes.\" --",
    "industryIdentifiers": [{"type": "ISBN_10", "identifier": "1614285144"},
      {"type": "ISBN_13", "identifier": "9781614285144"}],
    "readingModes": {"text": false, "image": false},
    "pageCount": 284,
    "printType": "BOOK",
    "categories": ["Art"],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {"containsEpubBubbles": false, "containsImageBubbles": false},
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=ggdLjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=ggdLjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com.au/books?id=ggdLjwEACAAJ&dq=flowers&hl=&cd=6&source=gbs_api",
    "infoLink": "http://books.google.com.au/books?id=ggdLjwEACAAJ&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Flowers.html?hl=&id=ggdLjwEACAAJ"
  },
  "saleInfo": {"country": "AU", "saleability": "NOT_FOR_SALE", "isEbook": false},
  "accessInfo": {
    "country": "AU",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {"isAvailable": false},
    "pdf": {"isAvailable": false},
    "webReaderLink": "http://play.google.com/books/reader?id=ggdLjwEACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {"textSnippet": "The beauty of flowers has inspired artists, designers, poets, and myriad other creators for centuries: the Dutch masters of the 1600s and impressionist painters from Manet to Van Gogh, photographer Robert Mapplethorpe, botanical illustrator ..."}
}, {
  "kind": "books#volume",
  "id": "p7lyfH_NLYIC",
  "etag": "UhoGgq4GjWE",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/p7lyfH_NLYIC",
  "volumeInfo": {
    "title": "Flowers in the Attic/Petals on the Wind",
    "authors": ["V.C. Andrews"],
    "publisher": "Simon and Schuster",
    "publishedDate": "2009-11-10",
    "description": "Contains \"Flowers in the Attic\" in which four children are locked into the attic of their grandmother's home after the death of their father, and \"Petals on the Wind\" in which Cathy discovers that she has the power to revenge those childhood years lockedin an attic with her brothers and sister.",
    "industryIdentifiers": [{"type": "ISBN_13", "identifier": "9781442403017"},
      {"type": "ISBN_10", "identifier": "1442403012"}],
    "readingModes": {"text": false, "image": false},
    "pageCount": 828,
    "printType": "BOOK",
    "categories": ["Juvenile Fiction"],
    "averageRating": 4,
    "ratingsCount": 11,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=p7lyfH_NLYIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=p7lyfH_NLYIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com.au/books?id=p7lyfH_NLYIC&printsec=frontcover&dq=flowers&hl=&cd=7&source=gbs_api",
    "infoLink": "http://books.google.com.au/books?id=p7lyfH_NLYIC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_in_the_Attic_Petals_on_the_Wind.html?hl=&id=p7lyfH_NLYIC"
  },
  "saleInfo": {"country": "AU", "saleability": "NOT_FOR_SALE", "isEbook": false},
  "accessInfo": {
    "country": "AU",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
    "epub": {"isAvailable": false},
    "pdf": {"isAvailable": false},
    "webReaderLink": "http://play.google.com/books/reader?id=p7lyfH_NLYIC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {"textSnippet": "A value-priced bindup of the first two books ever published by V. C. Andrews, Flowers in the Attic and Petals on the Wind."}
}, {
  "kind": "books#volume",
  "id": "-AMfvgAACAAJ",
  "etag": "YyJgoMoDPY8",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/-AMfvgAACAAJ",
  "volumeInfo": {
    "title": "Sweet Blue Flowers",
    "authors": ["Takako Shimura"],
    "publisher": "VIZ Media LLC",
    "publishedDate": "2017-09-19",
    "description": "A genre-defining saga of love and friendship between girls. Akira Okudaira is starting high school and is ready for exciting new experiences. And on the first day of school, she runs into her best friend from kindergarten at the train station! Now Akira and Fumi have the chance to rekindle their friendship, but life has gotten a lot more complicated since they were kids… Fumi is glad Akira is back in her life. Even in kindergarten, Akira knew how to stand up for herself, and she was always willing to stand up for Fumi too. But Fumi’s first love recently got married, and Fumi is grappling with a broken heart and the fact that her sweetheart was another woman… Can Akira’s open heart help dispel the gloom Fumi has been caught up in?",
    "industryIdentifiers": [{"type": "ISBN_10", "identifier": "1421592983"},
      {"type": "ISBN_13", "identifier": "9781421592985"}],
    "readingModes": {"text": false, "image": false},
    "pageCount": 400,
    "printType": "BOOK",
    "categories": ["Comics & Graphic Novels"],
    "averageRating": 4,
    "ratingsCount": 5,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {"containsEpubBubbles": false, "containsImageBubbles": false},
    "comicsContent": true,
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=-AMfvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=-AMfvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com.au/books?id=-AMfvgAACAAJ&dq=flowers&hl=&cd=8&source=gbs_api",
    "infoLink": "http://books.google.com.au/books?id=-AMfvgAACAAJ&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Sweet_Blue_Flowers.html?hl=&id=-AMfvgAACAAJ"
  },
  "saleInfo": {"country": "AU", "saleability": "NOT_FOR_SALE", "isEbook": false},
  "accessInfo": {
    "country": "AU",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {"isAvailable": false},
    "pdf": {"isAvailable": false},
    "webReaderLink": "http://play.google.com/books/reader?id=-AMfvgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {"textSnippet": "A genre-defining saga of love and friendship between girls."}
}, {
  "kind": "books#volume",
  "id": "RJxWIQOvoZUC",
  "etag": "52SAyEQX1Ng",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
  "volumeInfo": {
    "title": "Flowers",
    "authors": ["Gail Saunders-Smith"],
    "publisher": "Capstone",
    "publishedDate": "1998",
    "description": "Simple text and photographs depict the parts of flowers and their pollination.",
    "industryIdentifiers": [{"type": "ISBN_10", "identifier": "1560657693"},
      {"type": "ISBN_13", "identifier": "9781560657699"}],
    "readingModes": {"text": false, "image": true},
    "pageCount": 24,
    "printType": "BOOK",
    "categories": ["Juvenile Nonfiction"],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.5.2.0.preview.1",
    "panelizationSummary": {"containsEpubBubbles": false, "containsImageBubbles": false},
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com.au/books?id=RJxWIQOvoZUC&printsec=frontcover&dq=flowers&hl=&cd=9&source=gbs_api",
    "infoLink": "http://books.google.com.au/books?id=RJxWIQOvoZUC&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Flowers.html?hl=&id=RJxWIQOvoZUC"
  },
  "saleInfo": {"country": "AU", "saleability": "NOT_FOR_SALE", "isEbook": false},
  "accessInfo": {
    "country": "AU",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {"isAvailable": false},
    "pdf": {"isAvailable": false},
    "webReaderLink": "http://play.google.com/books/reader?id=RJxWIQOvoZUC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {"textSnippet": "Simple text and photographs depict the parts of flowers and their pollination."}
}, {
  "kind": "books#volume",
  "id": "uTCiDQAAQBAJ",
  "etag": "3ICB2xsynGM",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/uTCiDQAAQBAJ",
  "volumeInfo": {
    "title": "In Bloom",
    "subtitle": "Creating and Living with Flowers",
    "authors": ["Ngoc Minh Ngo"],
    "publisher": "Rizzoli Publications",
    "publishedDate": "2016",
    "description": "Like the author's successful book Bringing Nature Home, which was as much a decorating tome as it was a floral-arrangement guide, this much-awaited follow-up title will present stunning interiors inspired by the beauty of flowers--an irresistible book for flower lovers, decorators, and homeowners. In Bloom celebrates many different ways artists and designers enamored with flowers incorporate them into their lives, homes, and work, inspiring readers to try new ways to connect with the beauty of flowers in their daily life.",
    "industryIdentifiers": [{"type": "ISBN_13", "identifier": "9780847848508"},
      {"type": "ISBN_10", "identifier": "0847848507"}],
    "readingModes": {"text": false, "image": false},
    "pageCount": 224,
    "printType": "BOOK",
    "categories": ["Decoration and ornament"],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "1.1.0.0.preview.0",
    "panelizationSummary": {"containsEpubBubbles": false, "containsImageBubbles": false},
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=uTCiDQAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=uTCiDQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com.au/books?id=uTCiDQAAQBAJ&dq=flowers&hl=&cd=10&source=gbs_api",
    "infoLink": "http://books.google.com.au/books?id=uTCiDQAAQBAJ&dq=flowers&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/In_Bloom.html?hl=&id=uTCiDQAAQBAJ"
  },
  "saleInfo": {"country": "AU", "saleability": "NOT_FOR_SALE", "isEbook": false},
  "accessInfo": {
    "country": "AU",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {"isAvailable": false},
    "pdf": {"isAvailable": false},
    "webReaderLink": "http://play.google.com/books/reader?id=uTCiDQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {"textSnippet": "With exceptional photography that captures the beauty of these flower-inspired homes and text that shares how these imaginative artists and designers achieved their botanical creations, this is an irresistible book for flower lovers, ..."}
}]

updateGridItems(fakeBooks)