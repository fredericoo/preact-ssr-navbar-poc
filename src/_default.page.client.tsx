import { render as preactRender } from 'preact'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { DATA_ATTRIBUTE } from './constants';
import { PageContext } from './types';

export { render }

async function render(pageContext: PageContextBuiltInClient & PageContext) {
  const { Page } = pageContext

  const widget = document.querySelector(`[${DATA_ATTRIBUTE}]`);
  if (!widget) throw new Error(`🚩 Element with property ${DATA_ATTRIBUTE} not found.`);

  preactRender(
    <Page/>, widget
  )
}