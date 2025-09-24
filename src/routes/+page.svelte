<script>
  export let data;
  let searchTerm = '';
  let sortOrder = 'canonical';

  let filteredBooks = data.books;

  function handleInput() {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    filteredBooks = data.books.filter(book =>
      book.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }

  function sortBooks() {
    if (sortOrder === 'alphabetical') {
      filteredBooks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'chronological') {
      filteredBooks.sort((a, b) => a.chronologicalOrder - b.chronologicalOrder);
    } else {
      filteredBooks.sort((a, b) => a.canonicalOrder - b.canonicalOrder);
    }
    filteredBooks = filteredBooks;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KJV Bible",
    "url": "https://kjv-bible-7mw.pages.dev/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kjv-bible-7mw.pages.dev/book/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
</script>

<svelte:head>
  <title>KJV Bible</title>
  <meta name="description" content="Read the King James Version of the Bible online." />
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</svelte:head>

<div class="title-container">
  <h1 class="title">The Holy Bible</h1>
  <p class="subtitle">King James Version</p>
</div>

<div class="controls-container">
  <div class="search-container">
    <input type="text" placeholder="Search for a book..." bind:value={searchTerm} on:input={handleInput} />
  </div>
  <div class="sort-container">
    <label for="sort-order">Sort by:</label>
    <select id="sort-order" bind:value={sortOrder} on:change={sortBooks}>
      <option value="canonical">Canonical</option>
      <option value="alphabetical">Alphabetical</option>
      <option value="chronological">Chronological</option>
    </select>
  </div>
</div>

<div class="book-list">
    <div class="testament-group">
      <h2 class="testament-title">Old Testament</h2>
      <div class="books">
        {#each filteredBooks.filter(b => b.testament === 'Old') as book}
          <a href="/book/{book.name}" class="book-link">{book.displayName}</a>
        {/each}
      </div>
    </div>
    <div class="testament-group">
      <h2 class="testament-title">New Testament</h2>
      <div class="books">
        {#each filteredBooks.filter(b => b.testament === 'New') as book}
          <a href="/book/{book.name}" class="book-link">{book.displayName}</a>
        {/each}
      </div>
    </div>
  </div>

<style>
  .title-container {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 3rem;
    color: var(--text-color);
    margin: 0;
  }

  .subtitle {
    font-size: 1.5rem;
    color: var(--text-color);
    margin: 0;
  }

  .controls-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    gap: 1em;
  }

  .search-container {
    flex-grow: 1;
  }

  input[type="text"] {
    width: 100%;
    padding: 0.5em;
    font-size: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  .sort-container {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  select {
    padding: 0.5em;
    font-size: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  .book-list {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  .testament-group {
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1em;
  }

  .testament-title {
    font-size: 1.5rem;
    color: var(--text-color);
    margin: 0 0 1em 0;
    text-align: center;
  }

  .books {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1em;
  }

  @media (min-width: 1200px) {
    .books {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }

  .book-link {
    display: block;
    padding: 1em;
    text-align: center;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    text-decoration: none;
    color: var(--text-color);
    transition: background-color 0.2s, color 0.2s;
  }

  .book-link:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }
</style>