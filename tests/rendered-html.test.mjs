import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the Chinese homepage with bilingual navigation", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="zh-CN"/i);
  assert.match(html, /<title>域擎 UKing｜企业 AI 解决方案平台<\/title>/);
  assert.match(html, /让 AI 进入现场/);
  assert.match(html, /解决真实问题/);
  assert.match(html, /href="\/en"/);
  assert.match(html, /hrefLang="en"/i);
  assert.match(html, /170 0117 1717/);
  assert.match(html, /\/wecom-contact\.jpg/);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.uking\.uk\/"/i);
});

test("renders a fully localized English homepage", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="en"/i);
  assert.match(html, /<title>UKing \| Enterprise AI Solutions Platform<\/title>/);
  assert.match(html, /Put AI to Work/);
  assert.match(html, /Where Business Happens/);
  assert.match(html, /UKing Drip Marketing/);
  assert.match(html, /Forward-Deployed Engineering/);
  assert.match(html, /href="\/"[^>]*lang="zh-CN"/i);
  assert.match(html, /170 0117 1717/);
  assert.match(html, /\/wecom-contact\.jpg/);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.uking\.uk\/en"/i);
  const visibleHtml = html.replace(/<script[\s\S]*?<\/script>/g, "");
  assert.doesNotMatch(visibleHtml.replaceAll("中文", ""), /[\u3400-\u9fff]/);
});
