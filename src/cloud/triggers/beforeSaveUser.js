/* @flow */
import type { ParseRequest, ParseResponse } from 'src/types/ParseServer';

import logger from 'src/utils/logger';

export default async (req: ParseRequest, res: ParseResponse) => {
  try {
    const user = req.object;
    if (req.master) return res.success(user);

    // Done
    return res.success(user);
  } catch (err) {
    logger.error(`Errore: ${err.message}`);
    return res.error(err.message);
  }
};
