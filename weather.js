#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp } from './services/log.service.js'
const initCLI = () => {
    const args = getArgs(process.argv);
    console.log("started")
    console.log(args)
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        //output help
    }
    if (args.t) {
        //output help
    }
}

initCLI();