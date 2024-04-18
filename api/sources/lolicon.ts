import axios from 'axios';
import { imgSource } from '../image.js';

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edge/122.0.0.0';
const ENDPOINT_PROXY_URL = 'https://i.pixiv.re';

export async function getLoliconImg(tags: string[]): Promise<imgSource> {
  let result = await axios
    .get('https://api.lolicon.app/setu/v2', {
      headers: {
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/json',
      },
      params: {
        r18: 0,
        num: 1,
        tag: [tags.join('|')],
        proxy: ENDPOINT_PROXY_URL,
      },
    })
    .catch((err) => {
      throw err;
    });
  let data = result?.data;
  if (!data || data?.error || !data.data?.urls?.original)
    throw 'API returned an unexpected value.';
  return {
    source: 'lolicon',
    url: data.data.urls.original,
  };
}
