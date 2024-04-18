import axios from 'axios';
import { scanner, log, err } from './utils.js';

log('Onedrive Initialization Util for BANavImg');
log('Before starting, please read the docs to learn how to use this script.');
let temp = await scanner.question('OK to continue? [Y/n]: ');
if (temp.toLowerCase() === 'n') {
  err('Aborted.');
  process.exit(1);
}
const baseApiUrl = await scanner.question('Enter the base API url: ');
const baseApiCookie = await scanner.question('Enter the Cookie: ');
const filePath = await scanner.question(
  'Enter the relative path to the root folder:'
);

log('Fetching some basic info...');
let apiRes = await axios.post(
  baseApiUrl,
  {
    parameters: {
      __metadata: { type: 'SP.RenderListDataParameters' },
      RenderOptions: 136967,
      AllowMultipleValueFilterForTaxonomyFields: true,
      AddRequiredFields: true,
    },
  },
  {
    headers: {
      Accept: 'application/json;odata=verbose',
      'Content-Type': 'application/json;odata=verbose',
      origin: new URL(baseApiUrl).origin,
      Cookie: baseApiCookie,
    },
  }
);
const res = apiRes.data;
const accessToken = res.ListSchema['.driveAccessToken'].replace(
  'access_token=',
  ''
);
const apiUrl = res.ListSchema['.driveUrl'];
log('Finished.');
log(`Done! Here is your API Url:\n${apiUrl}/root:/${filePath}:/children`);
log(`And here is your Access Token:\n${accessToken}`);
log('Copy & paste them in your config file, enjoy! :)');
process.exit(0);
