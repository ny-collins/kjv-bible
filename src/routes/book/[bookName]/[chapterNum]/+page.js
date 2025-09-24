/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { bookName } = params;
  const chapterNum = parseInt(params.chapterNum, 10);

  const bookModule = await import(`$lib/data/${bookName}.json`);

  const bookData = bookModule.default;
  const chapterData = bookData.chapters.find(ch => parseInt(ch.chapter, 10) === chapterNum);
  const totalChapters = bookData.chapters.length;

  return {
    bookName,
    chapterNum,
    totalChapters,
    verses: chapterData?.verses || []
  };
}