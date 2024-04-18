import axios from 'axios';
import { getRandomInteger } from '../utils.js';
import { imgSource } from '../image.js';

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edge/122.0.0.0';
const PXIMG_URL = 'https://pixiv.re';

export async function getPixivImg(tags: string[]): Promise<imgSource> {
  let tagString = `${tags.join(' ')} 10000users入り`;
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
  if (data?.error) throw 'API returned an unexpected value.';
  let imgList = data?.body?.illustManga?.data.filter(
    (e) => !e.tags.includes('R-18')
  );
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
