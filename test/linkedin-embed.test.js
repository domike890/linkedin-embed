import { html, fixture, expect } from '@open-wc/testing';
import "../linkedin-embed.js";

describe("LinkedinEmbed test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <linkedin-embed
        title="title"
      ></linkedin-embed>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});