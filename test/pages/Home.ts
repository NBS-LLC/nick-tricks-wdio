import { Page } from "./Page.ts";

class Home extends Page {
  url = "/";

  get mainHeader() {
    return $("h1.heading");
  }

  async isDisplayed() {
    return (await this.mainHeader.getText()) === "Welcome to the-internet";
  }
}

export const home = new Home();
