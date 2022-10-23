const playwright = require("@playwright/test");
const playwrightAwsLambda = require("playwright-aws-lambda");

module.exports = class {
  constructor(email = "", pass = "") {
    this.email = email;
    this.pass = pass;
  }

  async init(TERM_PROGRAM) {
    if (TERM_PROGRAM === "vscode") {
      this.browser = await playwright.chromium.launch({
        headless: false
      });
    } else {
      this.browser = await playwrightAwsLambda.launchChromium();
    }
    const context = await this.browser.newContext();
    this.page = await context.newPage();
  }

  async close() {
    this.browser.close();
  }
};
