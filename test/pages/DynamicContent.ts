import { Page } from "./Page.ts";

class DynamicContent extends Page {
    url = "/dynamic_content";

    get pageHeader() {
        return $('h3');
    }

    get contentRows() {
        return $$('#content.large-centered .row');
    }

    get pageFooter() {
        return $('#page-footer');
    }

    async isDisplayed() {
        return await this.pageHeader.getText() === "Dynamic Content";
    }
}

export const dynamicContent = new DynamicContent();
