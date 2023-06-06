addEventListener("activate", function (event) {
  event.waitUntil(clients.claim());
});

addEventListener("fetch", function (event) {
  const url = new URL(event.request.url);
  if (url.searchParams.has("css-inject-scoped")) {
    url.searchParams.delete("css-inject-scoped");
    event.respondWith(fetchScopedCSS(new Request(url, event.request)));
  } else {
    event.respondWith(fetchMaybeJS(event.request));
  }
});

async function fetchScopedCSS(request) {
  const cssResponse = await fetch(request);
  const css = await cssResponse.text();
  const uuid = crypto.randomUUID();
  const body = `
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(
      "@scope ([style-scope='${uuid}']) to (:scope [style-scope]) {"
        + ${JSON.stringify(css)}
        + "}"
    );
    document.adoptedStyleSheets.push(sheet);
    export default ${JSON.stringify(uuid)};
  `;

  return new Response(body, {
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}

async function fetchMaybeJS(request) {
  const response = await fetch(request);

  if (!response.headers.get("Content-Type").includes("application/javascript")) {
    return response;
  }

  const js = await response.text();
  const body = js.replace(
    /(["'])\s*(?:with|assert)\s*\{(?=[^}]*type\s*:\s*["']css["'])(?=[^}]*inject\s*:\s*["']scoped["']).*?\}/g,
    "?css-inject-scoped$1"
  );

  return new Response(body, response);
}
