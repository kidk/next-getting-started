// @ts-check
const NextI18Next = require('next-i18next').default;

const nextI18n = new NextI18Next({
  // plugin config: https://github.com/isaachinman/next-i18next#options
  defaultLanguage: 'de',
  otherLanguages: ['de', 'fr', 'it'],

  // official i18next config: https://www.i18next.com/overview/configuration-options
  react: {
    wait: true
  },
  defaultNS: undefined,
  ns: 'common',
  detection: {
    lookupFromPathIndex: 0,
    load: 'languageOnly',
    order: ['path', 'navigator', 'cookie', 'header']
  },
  // Add resources manually until the translation service is available
  resources: {
    fr: {
      common: {
        greeting: 'Bonjour le monde'
      }
    },
    de: {
      common: {
        greeting: 'hallo welt'
      }
    }
  }
});

module.exports = nextI18n;

exports.i18n = nextI18n.i18n;
