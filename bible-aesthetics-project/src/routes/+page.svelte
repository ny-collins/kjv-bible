<script>
  // This line receives the book list from the `load` function in +page.js
  export let data;
</script>

<main>
  <h1>The Holy Bible</h1>
  <h2>King James Version</h2>

  <div class="book-list">
    {#each data.books as book}
      <a href="/book/{book}" class="book-link">{book}</a>
    {/each}
  </div>
</main>

<style>
  main {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 2em;
    max-width: 800px;
    margin: 0 auto;
  }
  h1, h2 {
    text-align: center;
    color: #333;
  }
  h2 {
    font-weight: 400;
    color: #666;
    margin-bottom: 3rem;
  }
  .book-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1em;
  }
  .book-link {
    display: block;
    padding: 1em;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 8px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.2s, color 0.2s;
  }
  .book-link:hover {
    background-color: #333;
    color: #fff;
  }
</style>