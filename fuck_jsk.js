// ==UserScript==
// @name         fuck_jsk
// @namespace    https://github.com/Rhythmicc/
// @version      0.1
// @description  解除计蒜客题面无法复制的限制
// @author       RhythmLian
// @match        https://www.jisuanke.com/contest*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let tmp=document.getElementById('description');
    tmp.oncopy="";
    tmp.oncut="";
})();