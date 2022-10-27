const winston = require("winston");
const {format} = require("winston");
const {timestamp, printf} = format;

const logFormat = printf(({level, message, timestamp,}) => {
    return `${timestamp} [${level.toString().toUpperCase()}]: ${message}`;
})

const quizerLogger = () => {
    return winston.createLogger({
        level: 'debug',
        format: format.combine(
            timestamp({
                format: "DD/MM/YY HH:mm:ss"
            }),
            logFormat
        ),
        defaultMeta: {service: 'user-service'},
        transports: [
            new winston.transports.File({filename: 'combined.log'}),
            new winston.transports.Console()
        ]
    })
}

module.exports = quizerLogger