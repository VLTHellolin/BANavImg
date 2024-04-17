import { HandleResponse } from 'serverless-kit';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (req: VercelRequest, res: VercelResponse) {
  const handle = new HandleResponse(req, res);
  return handle.send(200, 'ok');
}
