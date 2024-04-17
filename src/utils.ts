import * as config from './config';

export function setHtmlTitle(title: string | string[]): any {
  if (typeof title === 'string')
    document.title = `${title} | ${config.PROJ_NAME}`;
  else document.title = `${title.join(' ')} | ${config.PROJ_NAME}`;
  return document.title;
}
