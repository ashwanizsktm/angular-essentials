export class LoggerService {
    constructor() {
        console.log("root logger is constructed!");
    }

    log(msg:string) {
        console.log("Root: " + msg);
    }
}
