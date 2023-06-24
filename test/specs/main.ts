import { dynamicContent } from "../pages/DynamicContent.ts";
import { home } from "../pages/Home.ts";

describe("the-internet home page", function () {
  it("loads", async function () {
    await home.open();
    await expect(home).toHaveTitle("The Internet");
  });
});

describe("the-internet dynamic content page", function () {
  it("loads", async function () {
    await dynamicContent.open();
    await expect(dynamicContent).toBeDisplayed();
    await expect(dynamicContent.contentRows.length).toEqual(3);
    // await expect(dynamicContent.contentRows).toBeElementsArrayOfSize(3);
  });
});
