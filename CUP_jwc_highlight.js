// ==UserScript==
// @name         考试信息颜色标记
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       RhythmLian
// @match        http://www.cup.edu.cn/jwc/*
// @grant        none
// ==/UserScript==

function info_judge (string) {
	if(string.length>=4){
		if(string.search('考试安排')!=-1)return 1;
		if(string.search('补考安排')!=-1)return 2;
		if(string.search('补考信息表')!=-1)return 2;
	}
	return 0;
}

(function() {
	'use strict';
	var ls = document.getElementsByTagName('a')
	for(var i = 0;i<ls.length;++i){
		var string = ls[i].title;
		var res = info_judge(string);
		if(res == 1) {
			ls[i].style.color='red';
			continue;
		}
		else if(res == 2) {
			ls[i].style.color='#FFBB00';
			continue;
		}
		string = ls[i].innerText;
		res = info_judge(string);
		if(res == 1)ls[i].style.color='red';
		else if(res == 2)ls[i].style.color='#FFBB00';
	}
	// Your code here...
})();