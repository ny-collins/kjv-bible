<script>
  export let data;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": data.bookName,
    "hasPart": data.chapters.map(chapter => ({
      "@type": "CreativeWork",
      "name": `${data.bookName} ${chapter}`
    }))
  };
</script>

<svelte:head>
  <title>{data.bookName} | KJV Bible</title>
  <meta name="description" content={`Read the book of ${data.bookName} from the King James Version of the Bible.`} />
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</svelte:head>

<a href="/" class="back-link">← Back to Books</a>
<h1 class="title">{data.displayName}</h1>
<div class="chapter-list">
  {#each data.chapters as chapter}
    <a href="/book/{data.bookName}/{chapter}" class="chapter-link">Chapter {chapter}</a>
  {/each}
</div>

<style>
  .back-link {
    display: block;
    margin-bottom: 2rem;
    color: var(--link-color);
    text-decoration: none;
  }

  .title {
    text-align: center;
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 2rem;
  }

  .chapter-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1em;
  }

  @media (min-width: 1200px) {
    .chapter-list {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }

  .chapter-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5em 1em;
    text-align: center;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    text-decoration: none;
    color: var(--text-color);
    transition: background-color 0.2s, color 0.2s;
    font-size: 1.1rem;
  }

  .chapter-link:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }
</style>