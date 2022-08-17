import { ComponentChildren } from "preact"

export type PageProps = {}
// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
  Page: (pageProps: PageProps) => ComponentChildren
  pageProps?: PageProps
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
}