import { version } from '../package.json';
import dayjs from 'dayjs';

const year: number = dayjs().year();
export const PROJ_NAME = 'My Vue Template';
export const PROJ_VERSION = version;
export const PROJ_ENV = process.env.NODE_ENV.toLowerCase();
export const PROJ_API_BASE = '/api';
export const COPYRIGHT_SINCE = 2022;
export const COPYRIGHT =
  COPYRIGHT_SINCE === year ? year : `${COPYRIGHT_SINCE} - ${year}`;
export const GITHUB_OWNER = 'VLTHellolin';
export const GITHUB_REPO = 'my-vue-template';
export const GITHUB_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;

document.body?.setAttribute('data-env', PROJ_ENV);
