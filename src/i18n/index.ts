import { en } from './en';
import { zh } from './zh';

export type Lang = 'en' | 'zh';

const ui = { en, zh } as const;

export function t(lang: Lang): typeof en {
  return ui[lang] ?? ui.en;
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'zh') return 'zh';
  return 'en';
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'zh' : 'en';
}

export function getAlternateUrl(lang: Lang, currentPath: string): string {
  if (lang === 'en') {
    return currentPath.replace(/^\/?/, '/zh/').replace('//', '/');
  }
  return currentPath.replace(/^\/zh/, '') || '/';
}
