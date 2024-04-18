import { HandleResponse } from 'serverless-kit';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { getRandomInteger } from './utils.js';
import { getPixivImg } from './sources/pixiv.js';
import { getLoliconImg } from './sources/lolicon.js';
import { getOneDriveImg } from './sources/onedrive.js';

const gettersList = [getPixivImg, getLoliconImg, getOneDriveImg];

export default async function (req: VercelRequest, res: VercelResponse) {
  const handle = new HandleResponse(req, res);
  let tags = ['ブルーアーカイブ', 'BlueArchive'];
  try {
    let getterNum = getRandomInteger(0, gettersList.length);
    let result = await gettersList[getterNum](tags);
    return handle.send(200, 'ok', result);
  } catch (err: any) {
    return handle.send(
      err?.response?.status ?? 500,
      err?.response?.data ?? err ?? 'Unknown error',
      null
    );
  }
}
