import axios from 'axios';
import { imgSource } from '../image.js';

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edge/122.0.0.0';
const PXIMG_URL = 'https://pixiv.re';

export async function getLoliconImg(tags: string[]): Promise<imgSource> {
  let apiResult = await axios
    .get('https://api.lolicon.app/setu/v2', {
      headers: {
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/json',
      },
      params: {
        r18: 0,
        num: 1,
        tag: [tags.join('|')],
      },
    })
    .catch((err) => {
      throw err;
    });
  let data = apiResult?.data;
  if (!data || !data?.data[0]?.pid) throw 'API returned an unexpected value.';
  if (data.error) throw data.error;
  let result = data.data[0];
  return {
    source: 'lolicon',
    url: `${PXIMG_URL}/${result.pid}.png`,
    title: result.title,
    author: result.author,
    r18: result.r18,
    id: result.pid,
  };
}