import booksWithMetadata from '$lib/data/BooksWithMetadata.json';
import collections from '$lib/data/collections.json';

/** @type {import('./$types').PageLoad} */
export function load({ url }) {
  const canon = url.searchParams.get('canon') || 'protestant';
  const books = collections[canon].books;
  const filteredBooks = booksWithMetadata.filter(book => books.includes(book.name));

  return {
    books: filteredBooks,
    collections,
    canon
  };
}