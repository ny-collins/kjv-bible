<script>
  export let data;

  // The reactive variables for our navigation
  $: prevChapter = data.chapterNum > 1 ? data.chapterNum - 1 : null;
  $: nextChapter = data.chapterNum < data.totalChapters ? data.chapterNum + 1 : null;
</script>

<div style="background-color: #ffffe0; border: 2px solid #f00; padding: 1em; margin: 1em;">
  <h2>Debugging Information</h2>
  <p>This box will help us find the problem. Please tell me what you see here.</p>
  <ul>
    <li>Current Chapter Number (data.chapterNum): <strong>{data.chapterNum}</strong></li>
    <li>Total Chapters in Book (data.totalChapters): <strong>{data.totalChapters}</strong></li>
  </ul>
  <p>Calculated Previous Chapter: <strong>{prevChapter}</strong></p>
  <p>Calculated Next Chapter: <strong>{nextChapter}</strong></p>
</div>
<main>
  <nav>
    {#if prevChapter}
      <a href="/book/{data.bookName}/{prevChapter}" class="nav-link">← Prev</a>
    {:else}
      <span class="nav-link disabled">← Prev</span>
    {/if}

    <a href="/book/{data.bookName}" class="title-link">{data.bookName} {data.chapterNum}</a>

    {#if nextChapter}
      <a href="/book/{data.bookName}/{nextChapter}" class="nav-link">Next →</a>
    {:else}
      <span class="nav-link disabled">Next →</span>
    {/if}
  </nav>

  <article>
    {#each data.verses as verse}
      <p>
        <span class="verse-num">{verse.verse}</span>
        {verse.text}
      </p>
    {/each}
  </article>
</main>

<style>
    nav {
        display: flex; justify-content: space-between; align-items: center;
        padding: 1em 2em; border-bottom: 1px solid #eee; background-color: #fff;
        position: sticky; top: 0;
    }
    .title-link {
        font-size: 1.2rem; font-weight: 600; margin: 0; color: #333; text-decoration: none;
    }
    .nav-link {
        text-decoration: none; color: #007bff; padding: 0.5em;
    }
    .nav-link.disabled {
        color: #ccc; pointer-events: none;
    }
    main { font-family: sans-serif; color: #333; }
    article { max-width: 720px; margin: 3em auto; padding: 0 2em; }
    p {
        font-size: 1.2rem; line-height: 1.8; margin-bottom: 1em;
        position: relative; padding-left: 2em;
    }
    .verse-num {
        position: absolute; left: 0; top: 0;
        font-size: 0.8rem; color: #999;
    }
</style>