#!/usr/bin/env node

const lodash = require('lodash')
const pkg = require('../package.json')
const colors = require('colors-console')
const QRCode = require('qrcode-terminal')
const { program } = require('commander')
const { createTbUrl } = require('./utils/createTbUrl')

program.option('-a, --apUrl <value>', '需要解析的支付宝地址');
program.option('-t, --tbUrl <value>', '需要拼接的淘宝地址');
program.option('-u, --userId <value>', '需要测试用户的支付宝的uuid');
program.version(process.argv, '-v, --version').parseOptions(process.argv)

const options = program.opts()
const { apUrl, tbUrl, ...rest } = options
const value = createTbUrl(apUrl, tbUrl, lodash.pickBy(rest, Boolean))
console.log(colors('cyan', '淘宝链接: ') + '%s', value.tbUrl)
console.log(colors('cyan', '淘宝本地启动: ') + '%s', value.tbLocal)
QRCode.generate(value.tbUrl, { small: true }, function (qrcode: any) {
  console.log(colors('cyan', '淘宝二维码: ') + '\n%s', qrcode)
});
