export async function getBookData(bookName) {
  let bookData;
  switch (bookName) {
    case 'Genesis':
      bookData = (await import('$lib/data/Genesis.json')).default;
      break;
    case 'Exodus':
      bookData = (await import('$lib/data/Exodus.json')).default;
      break;
    // Add all the other books here
    default:
      bookData = null;
  }
  return bookData;
}