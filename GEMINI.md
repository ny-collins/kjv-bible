# Project Overview

This is a SvelteKit project that displays the King James Version of the Bible. The data is stored in JSON files in the `src/lib/data` directory. The main page lists all the books of the Bible, and clicking on a book takes you to a page with a list of chapters. Clicking on a chapter displays the text of that chapter.

**Key Technologies:**

*   **SvelteKit:** A framework for building web applications with Svelte.
*   **Vite:** A fast build tool for modern web projects.
*   **JavaScript:** The primary programming language.

**Architecture:**

The project follows a standard SvelteKit structure.
*   **`src/routes`:** Contains the pages of the application.
    *   `+page.svelte` and `+page.js`: The main page that lists the books.
    *   `book/[bookName]/+page.svelte` and `book/[bookName]/+page.js`: The page that lists the chapters of a book.
    *   `book/[bookName]/[chapterNum]/+page.svelte` and `book/[bookName]/[chapterNum]/+page.js`: The page that displays the text of a chapter.
*   **`src/lib/data`:** Contains the JSON files with the Bible data. Each book has its own JSON file, and there is a `Books.json` file that defines the order of the books.
*   **`static`:** Contains static assets like `robots.txt`.

# Building and Running

**Development:**

To run the development server, use the following command:

```sh
npm run dev
```

This will start a development server on `http://localhost:5173`.

**Building:**

To build the project for production, use the following command:

```sh
npm run build
```

This will create a `build` directory with the static files of the application.

**Previewing:**

To preview the production build, use the following command:

```sh
npm run preview
```

# Development Conventions

*   **Code Style:** The code follows the standard Svelte and JavaScript conventions.
*   **Testing:** There are no tests in this project.
*   **Data:** The Bible data is stored in JSON files. Each book has its own file, and the structure is as follows:

```json
{
  "book": "Genesis",
  "chapters": [
    {
      "chapter": "1",
      "verses": [
        {
          "verse": "1",
          "text": "In the beginning God created the heaven and the earth."
        },
        ...
      ]
    },
    ...
  ]
}
```
