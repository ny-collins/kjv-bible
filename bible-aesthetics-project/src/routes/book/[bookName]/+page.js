/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  // Get the book name from the URL (e.g., "Genesis")
  const bookName = params.bookName;

  // Dynamically import the correct JSON file based on the book name.
  const bookModule = await import(`../../../lib/data/${bookName}.json`);
  const bookData = bookModule.default;

  // Extract just the chapter numbers from the data.
  const chapters = bookData.chapters.map(ch => ch.chapter);

  // Return the book name and the list of chapters for the page to use.
  return {
    bookName: bookName,
    chapters: chapters
  };
}