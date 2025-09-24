import booksWithMetadata from '$lib/data/BooksWithMetadata.json';

const modules = import.meta.glob('$lib/data/*.json');

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { bookName } = params;

  try {
    const bookModule = await modules[`/src/lib/data/${bookName}.json`]();
    const bookData = bookModule.default;
    const chapters = bookData.chapters.map(ch => ch.chapter);
    const book = booksWithMetadata.find(b => b.name === bookName);

    return {
      bookName: bookName,
      displayName: book.displayName,
      chapters: chapters
    };
  } catch (error) {
    return {
      status: 404,
      error: new Error(`Book not found: ${bookName}`)
    };
  }
}