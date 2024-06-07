import winston from 'winston';
import { CustomTransport } from './CustomTransport';

const logger = winston.createLogger({
    transports: [
        new CustomTransport({
            level: 'debug',
            format: winston.format.json()
        })
    ]
})

export { logger }