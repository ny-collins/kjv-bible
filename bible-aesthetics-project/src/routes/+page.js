/** @type {import('./$types').PageLoad} */
export function load() {
  // Use Vite's special 'import.meta.glob' to find all .json files in our data directory
  const files = import.meta.glob('$lib/data/*.json', { eager: true });

  const books = Object.keys(files).map((path) => {
    // The path looks like '/src/lib/data/Genesis.json'.
    // We just want the 'Genesis' part.
    return path.split('/').pop()?.replace('.json', '');
  });

  // The 'Books.json' is a list of book names from the repo, we don't need it.
  const filteredBooks = books.filter(b => b !== 'Books');

  return {
    books: filteredBooks
  };
}