import { home } from "../pages/Home.ts";

describe("the-internet home page", function () {
  it("loads", async function () {
    await home.open();
    await expect(home).toHaveTitle("The Internet");
  });
});
