#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";


const initCLI = () =>{
    const args = getArgs(process.argv);
    if(args.h){
        printHelp()
    }
    if(args.s){
        // вывод города
    }
    if(args.t){
        // сохранение
    }


    console.log(args);
}

initCLI();