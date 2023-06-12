import { dynamicLoading2 } from "../pages/DynamicLoading2.ts";
import { home } from "../pages/Home.ts";

describe("the-internet home page", function () {
  it("loads", async function () {
    await home.open();
    await expect(home).toBeDisplayed();
    await expect(home).toHaveTitle("The Internet");
  });
});

describe("the-internet dynamic loading page 2", function () {
  it("loads", async function () {
    await dynamicLoading2.open();
    await expect(dynamicLoading2).toBeDisplayed();
  });
});
