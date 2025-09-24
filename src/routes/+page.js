/** @type {import('./$types').PageLoad} */
export function load() {
  // Find all .json files in our data directory.
  const modules = import.meta.glob('$lib/data/*.json', { eager: true });

  const books = Object.keys(modules)
    .map(path => {
      // The path is '/src/lib/data/Genesis.json'. We want 'Genesis'.
      // This reliably extracts the filename without the extension.
      return path.split('/').pop().replace('.json', '');
    })
    .filter(bookName => bookName !== 'Books'); // Exclude the list file

  // Use the official order from Books.json to sort our list
  const bookOrder = modules['/src/lib/data/Books.json'].default;
  books.sort((a, b) => bookOrder.indexOf(a) - bookOrder.indexOf(b));

  return {
    books: books
  };
}