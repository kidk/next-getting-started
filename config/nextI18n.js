// @ts-check
const NextI18Next = require("next-i18next").default;

const nextI18n = new NextI18Next({
  // plugin config: https://github.com/isaachinman/next-i18next#options
  defaultLanguage: "de",
  lng: "de",
  // fallbackLng: "de",
  otherLanguages: ["fr"],
  // preload: ["de", "fr"],

  // official i18next config: https://www.i18next.com/overview/configuration-options
  react: {
    wait: true
  },
  defaultNS: "common",
  ns: ["common"],
  detection: {
    lookupFromPathIndex: 0,
    load: "languageOnly",
    order: ["path", "navigator", "cookie", "header"]
  }
});

module.exports = nextI18n;

exports.i18n = nextI18n.i18n;
