import * as Logger from "./logger.js";
import * as Utils from "./Utils.js";
import { isFriday, isThursday } from "date-fns";

Logger.log("my message");
Utils.currentDate();

console.log("it works!!!");


console.log("is friday? - ", isFriday(new Date()));
console.log("is thursday? - ", isThursday(new Date()));
