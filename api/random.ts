import { HandleResponse } from 'serverless-kit';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { getRandomInteger } from './utils';
import { getPixivImg } from './sources/pixiv';

const gettersList = [getPixivImg];

export default async function (req: VercelRequest, res: VercelResponse) {
  const handle = new HandleResponse(req, res);
  let tags = ['ブルーアーカイブ', 'Blue Archive'];
  try {
    let getterNum = getRandomInteger(0, gettersList.length - 1);
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
