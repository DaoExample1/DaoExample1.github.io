(function(){
	var s = document.createElement('script');
	s.setAttribute('defer', '');
	s.setAttribute('src', "/push-wrap.js");
	document.body.appendChild(s);
})();

window.addEventListener('load', function() {
    var obj = new PushKaWrapper({
        pid       : 1,
        appId     : 319269901339,
        sourceId  : 2,
        landingId : 24,
        marks     : {"utm_source":"","utm_medium":"","utm_campaign":"","utm_term":"","utm_content":""},
        popupUrl  : "https://notifymepush.info/rs/2?count=10&declCount=3",
        pushKaScript  : "https://pushmeandtouchme.info/push.js?b=6",
        languages : {
            en : {
                btnSubscribe : "Subscribe",
                btnContinue  : "Continue",
                btnCancel    : "Cancel",
                btnClose     : "Close",
                notRobot     : "I'm not a robot",
                popupTitle   : "Get notification about actual news from site",
                popupText    : "To continue, enable the subscription"
            }
        },
    });
    
    obj.start(1, 600);
});
