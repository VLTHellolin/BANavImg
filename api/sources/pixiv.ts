import axios from 'axios';
import { getRandomInteger } from '../utils.js';
import { imgSource } from '../image.js';
import { config } from '../config.js';

const USER_AGENT = config.user_agent;
const PXIMG_URL = config.pximg_url;

export async function getPixivImg(): Promise<imgSource> {
  let tagString = `${config.tags.pixiv.join(' ')} 10000users入り`;
  let apiResult = await axios
    .get(`https://pixiv.net/ajax/search/artworks/${tagString}`, {
      headers: {
        referer: 'https://www.pixiv.net/',
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/json',
      },
    })
    .catch((err) => {
      throw err;
    });
  let data = apiResult?.data;
  if (data.error) throw 'API returned an unexpected value.';
  let imgList = data.body?.illustManga?.data;
  if (!imgList) throw 'API returned an unexpected value.';
  let imgNum = getRandomInteger(0, imgList.length);
  let result = imgList[imgNum];
  return {
    source: 'pixiv',
    url: `${PXIMG_URL}/${result.id}.png`,
    title: result.title,
    author: result.userName,
    r18: false,
    id: parseInt(result.id),
  };
}
