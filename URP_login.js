// ==UserScript==
// @name         教务系统自动登录
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       RhythmLian
// @match        http://urp.cup.edu.cn/login
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	document.getElementById('input_username').value = '你的学号';
	document.getElementById('input_password').value = '你的密码';
	$('#input_checkcode').bind("input propertychang",function(event){
		var viewName = this.value;
		viewName = $.trim(viewName);
		this.value = viewName;
		if(viewName.length===4)document.getElementById('loginButton').click();
	});
})();
