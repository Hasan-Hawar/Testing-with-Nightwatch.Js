module.exports = {
    url: "https://www.google.com/advanced_search",
    elements: {
        mainQueryInput = 'input[name="as_q"]',
        languageDropdown = "#lr_button",
        lastUpdateDropDown = "#as_qdr_button",
        submitButton = '.jfk-button[type="submit"]',
        resultPageQuery = `#searchform input[name="q"][value="${mainQuery}"]`,
    },
    commands: [{
        setQuery(value) {
            const page = this;
            return this
                .setValue('@mainQueryInput', value);
        },
        selectFilter(selector, value) {
            const page = this;
            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`)
        },
        search() {
            return this
                .click('@submitButton')
        }
    }],
};
