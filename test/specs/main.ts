describe("the-internet main page", function () {
  it("loads", async function () {
    await browser.url("/");
    await expect(browser).toHaveTitle("The Internet");
  });
});
