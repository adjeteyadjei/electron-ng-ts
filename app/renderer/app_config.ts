/// <reference path="../../typings/tsd.d.ts" />

class Config {

    constructor($logProvider: ng.ILogProvider) {

        $logProvider.debugEnabled(true);

    }

}

export {Config}