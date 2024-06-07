import Transport from 'winston-transport'
import util from 'util'

class CustomTransport extends Transport {
    constructor(opts) {
        console.log('opts::', opts)
        super(opts);
    }

    log(info, callback) {
        setImmediate(() => {
            this.emit('logged', info);
        });

        const { level, message, ...meta } = info;

        console.info('level::', level)
        console.warn('message::', message)
        
        // Perform the writing to the remote service

        callback();
    }
}

export { CustomTransport }