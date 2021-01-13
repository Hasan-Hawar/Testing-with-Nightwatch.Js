module.exports = {
  "@tags": ["google"],
  "Google Advanced search"(browser) {
    const mainQuery = "Elon Musk";

    const mainQueryInputSelector = 'input[name="as_q"]';
    const languageDropdownOpenupSelector = "#lr_button";
    const languageDropdownValueSelector = ".goog-menuitem[value='lang_ar']";
    const lastUpdateDropDownOpenupSelector = "#as_qdr_button";
    const lastUpdateDropDownValueSelector = ".goog-menuitem[value='w']";
    const submitButtonSelector = '.jfk-button[type="submit"]';
    const resultPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;

    browser
      .url("https://www.google.com/advanced_search")
      .setValue(mainQueryInputSelector, mainQuery)
      .click(languageDropdownOpenupSelector)
      .click(languageDropdownValueSelector)
      .click(lastUpdateDropDownOpenupSelector)
      .click(lastUpdateDropDownValueSelector)
      .click(submitButtonSelector)
      .assert.urlContains("as_q=Elon+Musk", "Query us Elon Musk")
      .assert.urlContains("lr=lang_ar", "Language is Arabic");

    browser.assert.visible(
      resultPageQuerySelector,
      "UI: Elon Musk is set in the Query input"
    );

    browser.saveScreenshot("tests_output/google.png");
  },
};
