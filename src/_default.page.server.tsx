import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import type { PageContext } from './types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import {render as renderToString} from "preact-render-to-string";
import { DATA_ATTRIBUTE } from './constants';

export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext
  const pageHtml = renderToString(<Page {...pageProps} />)

  const documentHtml = escapeInject`<div ${DATA_ATTRIBUTE}>${dangerouslySkipEscape(pageHtml)}</div>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  }
}