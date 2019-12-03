(function() {
	var s = document.createElement('script');
	s.setAttribute('defer', '');
	s.setAttribute('src', "/push-wrap.js");
	s.onload = init;
	document.body.appendChild(s);

    function init() {
        var userLang = navigator.language || navigator.userLanguage,
            language = userLang.substr(0, 2).toLowerCase(),
            existLanguages = ['be', 'bg', 'cs', 'de', 'el', 'en', 'es', 'fr', 'hr', 'hu', 'id', 'it', 'kk', 'ms', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'th', 'uk', 'vi'];
            
            if(existLanguages.indexOf(language) == -1)
                language = 'en';
            
        var obj = new PushKaWrapper({
                "pid": 2,
                "vapidPublicKey": 'BDRMdQPvdCZSjADobGc7-IhMjkFGXGYDiGtc71FxT00rmdtQbhxIlUEVDD8ZFYzwRUOxzSEmHgfrxFFRpqYgpeM',
                "sourceId": '1734',
                "landingId": 27,
                "marks": {"utm_source":null,"utm_medium":null,"utm_campaign":null,"utm_term":null,"utm_content":null},
                "popupUrl": 'https://notifome.info/rs/1734?count=3&declCount=10&fullScreenMode=disabled',
                "pushKaScript": 'https://ichecknotifyfriends.info/push.js?b=28',
                "languages": {[language]:{"btnContinue":"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c","btnClose":"\u041d\u0435 \u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c)","popupTitle":"\u041f\u0440\u0438\u0432\u0435\u0442!!!","popupText":"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u043d\u0430\u0448 \u0441\u0430\u0439\u0442, \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0432\u0448\u0438\u0441\u044c \u043d\u0430 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443"}}
            });
        
        obj.popup('full', 1, 60);
    }
})();
