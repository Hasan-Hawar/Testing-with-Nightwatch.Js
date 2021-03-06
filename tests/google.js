module.exports = {
  "@tags": ["google"],
  disabled: false,
  "Google Advanced search"(browser) {
    const mainQuery = "Elon Musk";

    const page = browser.page.googleAdvancedSearch();

    page
      .navigate()
      .setQuery(mainQuery)
      .selectFilter("@languageDropdown", "lang_ar")
      .selectFilter("@lastUpdateDropDown", "w")
      .search();

    browser.assert
      .urlContains("as_q=Elon+Musk", "Query us Elon Musk")
      .assert.urlContains("lr=lang_ar", "Language is Arabic");

    const resultPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;

    browser.assert.visible(
      resultPageQuerySelector,
      "UI: Elon Musk is set in the Query input"
    );

    browser.saveScreenshot("tests_output/google.png");
  },
};
