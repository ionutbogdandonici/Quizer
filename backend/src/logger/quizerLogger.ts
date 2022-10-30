import winston, {format} from "winston";

const logFormat = format.printf(({timestamp, level, message}) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

export const quizerLogger = (): winston.Logger => {
    return winston.createLogger({
        level: 'debug',
        format: format.combine(
            format.timestamp({
                format: "DD/MM/YY HH:mm:ss"
            }),
            logFormat
        ),
        defaultMeta: {service: 'user-service'},
        transports: [
            new winston.transports.File({filename: 'executionHistory.log'}),
            new winston.transports.Console()
        ]
    });
}