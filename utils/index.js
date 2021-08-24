const basePageHeader = 'VUE x NUXT'

export function headMetaTags (metaTags = {}, instanceThis = {}) {
  const pageTitle = metaTags.title ? `${metaTags.title} | ${basePageHeader}` : basePageHeader
  const head = {
    title: pageTitle,
    meta: [],
    link: [],
    htmlAttrs: {
      lang: instanceThis.$i18n.locale
    }
  }
  const ogOnlyTags = ['title', 'url', 'image']

  const pageMetaTags = Object.keys(metaTags)

  pageMetaTags.forEach((metaTag) => {
    // general
    if (!ogOnlyTags.includes(metaTag)) {
      head.meta.push({
        hid: metaTag || '',
        name: metaTag || '',
        content: metaTags[metaTag] || ''
      })
    }
    // OpenGraph
    head.meta.push({
      hid: 'og:' + metaTag || '',
      name: 'og:' + metaTag || '',
      content: metaTag === 'title' ? pageTitle : metaTags[metaTag] || ''
    })
  })

  if (instanceThis?.$nuxtI18nSeo) {
    const i18nSeo = instanceThis.$nuxtI18nSeo()
    head.htmlAttrs = { ...i18nSeo.htmlAttrs }
    head.meta = [...head.meta, ...i18nSeo.meta]
    head.link = [...i18nSeo.link]
  }

  return head
}
