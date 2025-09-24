/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { bookName } = params;

  // THE FIX: Use the reliable '$lib' alias instead of a relative path.
  const bookModule = await import(`$lib/data/${bookName}.json`);

  const bookData = bookModule.default;
  const chapters = bookData.chapters.map(ch => ch.chapter);

  return {
    bookName: bookName,
    chapters: chapters
  };
}