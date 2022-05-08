// ==UserScript==
// @name         移除广告
// @namespace    https://github.com/CheckCoder
// @version      0.0.1
// @description  移除广告。
// @author       check
// @match        https://v.qq.com/*
// @updateURL    https://raw.githubusercontent.com/CheckCoder/tampermonkey-js/master/remove-ad.js
// @grant        none
// @license      GPL
// ==/UserScript==

(function() {
    'use strict';

    // 移除腾讯视频暂停广告
    const css = `
        body .txp_zt_video_content {
            display: none;
        }
    `;

    const node = document.createElement('style');
    node.appendChild(document.createTextNode(css));
    document.documentElement.appendChild(node);
})();