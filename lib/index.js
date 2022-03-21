#!/usr/bin/env node
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var lodash = require('lodash');
var pkg = require('../package.json');
var colors = require('colors-console');
var QRCode = require('qrcode-terminal');
var program = require('commander').program;
var createTbUrl = require('./utils/createTbUrl').createTbUrl;
program.option('-a, --apUrl <value>', '需要解析的支付宝地址');
program.option('-t, --tbUrl <value>', '需要拼接的淘宝地址');
program.option('-u, --userId <value>', '需要测试用户的支付宝的uuid');
program.version(process.argv, '-v, --version').parseOptions(process.argv);
var options = program.opts();
var apUrl = options.apUrl, tbUrl = options.tbUrl, rest = __rest(options, ["apUrl", "tbUrl"]);
var value = createTbUrl(apUrl, tbUrl, lodash.pickBy(rest, Boolean));
console.log(colors('cyan', '淘宝链接: ') + '%s', value.tbUrl);
console.log(colors('cyan', '淘宝本地启动: ') + '%s', value.tbLocal);
QRCode.generate(value.tbUrl, { small: true }, function (qrcode) {
    console.log(colors('cyan', '淘宝二维码: ') + '\n%s', qrcode);
});
