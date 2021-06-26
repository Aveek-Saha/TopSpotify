<script>
    import SpotifyWebApi from "spotify-web-api-node";
    import { onMount } from "svelte";
    export let date;

    onMount(async () => {
        const res = await fetch("/api/date");
        const newDate = await res.text();
        date = newDate;
        const urlParams = new URLSearchParams(window.location.search);
        const isBeta = urlParams.has("code");
        console.log(urlParams.get("code"));
        const res_token = await fetch(
            "/api/token/?code=" + urlParams.get("code")
        );
        const ref_token = await res_token.text();
        console.log(ref_token);
    });
</script>

<main>
    <h1>Svelte + Node.js API</h1>
    <h2>
        Deployed with
        <a
            href="https://vercel.com/docs"
            target="_blank"
            rel="noreferrer noopener"
        >
            Vercel
        </a>
        !
    </h2>
    <p>
        <a
            href="https://github.com/vercel/vercel/tree/main/examples/svelte"
            target="_blank"
            rel="noreferrer noopener"
        >
            This project
        </a>
        is a
        <a href="https://svelte.dev/">Svelte</a>
        app with three directories,
        <code>/public</code>
        for static assets,
        <code>/src</code>
        for components and content, and
        <code>/api</code>
        which contains a serverless
        <a href="https://nodejs.org/en/">Node.js</a>
        function. See
        <a href="/api/date">
            <code>api/date</code>
            for the Date API with Node.js
        </a>
        .
    </p>
    <br />
    <h2>The date according to Node.js is:</h2>
    <p>{date ? date : "Loading date..."}</p>
</main>
