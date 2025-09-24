import booksWithMetadata from '$lib/data/BooksWithMetadata.json';

/** @type {import('./$types').PageLoad} */
export function load() {
  return {
    books: booksWithMetadata
  };
}