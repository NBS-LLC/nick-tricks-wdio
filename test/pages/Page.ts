export abstract class Page {
  protected abstract url: string;

  abstract isDisplayed(): Promise<boolean>;

  async open() {
    await browser.url(this.url);
  }

  async getTitle() {
    return await browser.getTitle();
  }
}
