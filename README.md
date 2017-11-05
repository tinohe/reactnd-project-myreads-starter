# MyReads Project

This is the submitted project for Udacity's React Fundamentals course by Tino Hertlein.

## TL;DR

To get started evaluating right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── Book.js # A react-component showing a book-instance
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── BookShelf.js # A react-component showing a bookShelf-instance
    ├── BookShelfType.js # An enum holding the various types of bookShelves
    ├── ListBooks.js # A react-component providing the functionality to see books distributed over shelves and also to move books between bookshelves
    ├── SearchForBooks.js # A react-component providing the functionality to search for books and also to add books to a bookshelf
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was forked from [GitHub](https://github.com/udacity/reactnd-project-myreads-starter).
