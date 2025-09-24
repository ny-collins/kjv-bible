import booksWithMetadata from '$lib/data/BooksWithMetadata.json';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { bookName } = params;
  const chapterNum = parseInt(params.chapterNum, 10);

  try {
    const bookModule = await import(`$lib/data/${bookName}.json`);
    const bookData = bookModule.default;
    const chapterData = bookData.chapters.find(ch => parseInt(ch.chapter, 10) === chapterNum);
    const totalChapters = bookData.chapters.length;
    const book = booksWithMetadata.find(b => b.name === bookName);

    if (!chapterData) {
      return {
        status: 404,
        error: new Error(`Chapter not found: ${bookName} ${chapterNum}`)
      };
    }

    return {
      bookName,
      displayName: book.displayName,
      chapterNum,
      totalChapters,
      verses: chapterData?.verses || []
    };
  } catch (error) {
    return {
      status: 404,
      error: new Error(`Book not found: ${bookName}`)
    };
  }
}