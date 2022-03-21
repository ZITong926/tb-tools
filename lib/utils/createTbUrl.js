"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTbUrl = void 0;
var url = 'alipays://platformapi/startapp?appId=2019062465587961&page=pages%2Fhz-enjoy%2Fpass%2Findex%3FextraData%3D%7B%22templateId%22%3A%22ZMGO_TPL2022031100088265%22%2C%22partnerId%22%3A%222088931494445924%22%2C%22appId%22%3A%222021001194640142%22%2C%22outRequestNo%22%3A%221647343626194%22%7D';
var tb = 'https://render-pre.alipay.com/p/w/zmGo2tb/pass.html?';
var userId = '2088902771251835';
var tbLocal = 'xcrun simctl openurl booted "taobao://render-local.alipay.com/pass.html?';
function getParams(data) {
    return Object.keys(data)
        .map(function (key) { return "".concat(key, "=").concat(encodeURIComponent(data[key])); })
        .join('&');
}
function createTbUrl(apUrl, tbUrl, args) {
    if (apUrl === void 0) { apUrl = url; }
    if (tbUrl === void 0) { tbUrl = tb; }
    var normalUrl = decodeURIComponent(apUrl);
    var pageRoute = new URL(normalUrl).searchParams.get('page');
    var pageRouteParams = new URL('http://' + pageRoute).searchParams.get('extraData');
    var obj = Object.assign(JSON.parse(pageRouteParams), __assign({ userId: userId }, args));
    return {
        tbUrl: tbUrl + getParams(obj),
        tbLocal: "".concat(tbLocal + getParams(obj), "\"")
    };
}
exports.createTbUrl = createTbUrl;
