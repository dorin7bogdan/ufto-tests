"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Get the input parameter
            const name = core.getInput('name');
            // Print a message
            console.log(`Hello, ${name}!`);
            // Set the output value
            core.setOutput('greeting', `Hello, ${name}!`);
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
