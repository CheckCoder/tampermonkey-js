// ==UserScript==
// @name         链接自动跳转助手
// @namespace    https://github.com/CheckCoder
// @version      0.0.1
// @description  在知乎、掘金的跳转提示页面中自动跳转。
// @author       check
// @match        https://link.juejin.cn/*
// @match        https://link.zhihu.com/*
// @updateURL    https://raw.githubusercontent.com/CheckCoder/tampermonkey-js/master/link-jump.js
// @grant        none
// @license      GPL
// ==/UserScript==

(function() {
    'use strict';

    const href = window.location.href;

    const reg = /https:\/\/.*(com|cn)\/\?target=/;
    const matchList = href.match(reg);

    if (!matchList) return;

    window.location.href = decodeURIComponent(href.substring(matchList[0].length));
})();