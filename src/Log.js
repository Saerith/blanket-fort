import config from "Config/config.js";

class Log {

    static debug(msg) {
        if (config.debug) {
            console.log(msg);
        }
    };
}


export default Log;