import axios from 'axios';
import { imgSource } from '../image.js';
import { config } from '../config.js';
import { getRandomInteger } from '../utils.js';

const TOKEN = config.onedrive_public_access_token;
const API_URL = config.onedrive_api_url;

export async function getOneDriveImg(tags: string[]): Promise<imgSource> {
  let apiResult = await axios.get(API_URL, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  let data = apiResult?.data;
  if (!data) throw 'API returned an unexpected value.';
  let imgNum = getRandomInteger(0, data.length);
  let result = data[imgNum];
  return {
    source: 'onedrive',
    url: result['@content.downloadUrl'],
    title: '',
    author: '',
    r18: false,
    id: imgNum,
  };
}
