"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loader = void 0;
let loader = () => {
    return fetch("https://api.github.com/orgs/reacttraining/members");
};
exports.loader = loader;