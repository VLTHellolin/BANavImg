import axios from 'axios';
import { getRandomInteger } from '../utils.js';

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0';

export async function getPixivImg(tags: string[]): Promise<string> {
  let tagString = `${tags.join(' ')} 10000users入り`;
  let result: string = '';
  axios
    .get(`https://pixiv.net/ajax/search/artworks/${tagString}`, {
      headers: {
        referer: 'https://www.pixiv.net/',
        'User-Agent': USER_AGENT,
      },
    })
    .then(
      ({ data, headers }) => {
        if (data?.error) throw 'API returned an unexpected value.';
        let imgList = data?.body?.illustManga?.data;
        if (!imgList) throw 'API returned an unexpected value.';
        let imgNum = getRandomInteger(0, imgList.length - 1);
        result = `https://pixiv.re/${imgList[imgNum].id}.png`;
      },
      (err) => {
        throw err;
      }
    );
  return result;
}
