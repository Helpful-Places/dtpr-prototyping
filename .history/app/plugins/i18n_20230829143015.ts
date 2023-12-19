import { create0 } from 'vue-i18n'
import { getBrowserLocale } from '../composables/locale'

// Using language and country codes from: https://wpcentral.io/internationalization/
import en_US from '../locales/en-US.json';
import fr_FR from '../locales/fr-FR.json';
import es_MIA from '../locales/es-MIA.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: getBrowserLocale() || 'en',
    fallbackLocale: 'en',
    messages: {
      'en': en_US,
      'fr': fr_FR,
      'es': es_MIA
    }
  })

  vueApp.use(i18n)
})