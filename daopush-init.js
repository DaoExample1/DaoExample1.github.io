(function(){
	var s = document.createElement('script');
	s.setAttribute('defer', '');
	s.setAttribute('src', "/push-wrap.js");
	s.onload = init;
	document.body.appendChild(s);

    function init() {
		var userLang = navigator.language || navigator.userLanguage,
            language = userLang.substr(0, 2).toLowerCase();
			
        var obj = new PushKaWrapper({"pid":34,"vapidPublicKey":"BDRMdQPvdCZSjADobGc7-IhMjkFGXGYDiGtc71FxT00rmdtQbhxIlUEVDD8ZFYzwRUOxzSEmHgfrxFFRpqYgpeM","sourceId":"9304","landingId":5,"marks":{"utm_source":null,"utm_medium":null,"utm_campaign":"campaign1","utm_term":null,"utm_content":null},"popupUrl":"https:\/\/notifome.info\/rs\/9304?count=10&declCount=10&fullScreenMode=disabled&utm_campaign=campaign1","pushKaScript":"https:\/\/ichecknotifyfriends.info\/push.js?b=28","languages": {[language]:{"popupTitle":"\u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442 Popup Title"}}});
        
        obj.popup('full', 1, 1);
    }
})();