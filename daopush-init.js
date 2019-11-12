(function() {
	var s = document.createElement('script');
	s.setAttribute('defer', '');
	s.setAttribute('src', "/push-wrap.js");
	s.onload = init;
	document.body.appendChild(s);

    function init() {
        var obj = new PushKaWrapper({"pid":8050,"vapidPublicKey":"BDRMdQPvdCZSjADobGc7-IhMjkFGXGYDiGtc71FxT00rmdtQbhxIlUEVDD8ZFYzwRUOxzSEmHgfrxFFRpqYgpeM","sourceId":"11358","landingId":25,"marks":{"utm_source":null,"utm_medium":null,"utm_campaign":null,"utm_term":null,"utm_content":null},"popupUrl":"https:\/\/notifome.info\/rs\/11358?count=10&declCount=10&fullScreenMode=disabled","pushKaScript":"https:\/\/ichecknotifyfriends.info\/push.js?b=27","languages":{"en":{"btnSubscribe":"Subscribe","btnContinue":"Continue","btnCancel":"Cancel","btnClose":"Close","notRobot":"I'm not a robot","popupTitle":"Get notification about actual news from site","popupText":"To continue, enable the subscription","titleNotification":"Notification","systemAllowTitle":"wants to","systemAllowText":"wants to send you notifications","systemAllowTextPc":"Show notifications","btnAllow":"Allow","btnBlock":"Block"}}});
        
        obj.popup('full', 1, 5);
    }
})();
