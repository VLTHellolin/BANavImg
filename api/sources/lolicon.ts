import axios from 'axios';
import { imgSource } from '../image.js';
import { config } from '../config.js';

const USER_AGENT = config.user_agent;
const PXIMG_URL = config.pximg_url;

export async function getLoliconImg(): Promise<imgSource> {
  let apiResult = await axios
    .get('https://api.lolicon.app/setu/v2', {
      headers: {
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/json',
      },
      params: {
        r18: 0,
        num: 1,
        tag: [config.tags.lolicon.join('|')],
        excludeAI: true,
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
