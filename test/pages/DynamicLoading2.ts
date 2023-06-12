import { Page } from "./Page.ts";

class DynamicLoading2 extends Page {
  url = "/dynamic_loading/2";

  get mainHeader() {
    return $("h3");
  }

  get subHeader() {
    return $("h4");
  }

  async isDisplayed() {
    const mainHeaderText = await this.mainHeader.getText();
    const subHeaderText = await this.subHeader.getText();

    return (
      mainHeaderText === "Dynamically Loaded Page Elements" &&
      subHeaderText === "Example 2: Element rendered after the fact"
    );
  }
}

export const dynamicLoading2 = new DynamicLoading2();
