/**
 * Logging Configuration
 * (app.config.log)
 *
 * @see http://fabrix.app/doc/config/log
 */

import * as winston from 'winston'

export const log = {

  /**
   * Specify the logger to use.
   * @see https://github.com/winstonjs/winston#instantiating-your-own-logger
   *
   * Exposed on app.log
   */
  logger: new winston.Logger({
    level: 'debug',
    exitOnError: false,
    transports: [
      new (winston.transports.Console)({
        prettyPrint: true,
        colorize: true
      })
    ]
  })

}