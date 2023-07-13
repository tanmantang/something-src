// var ossurl = "https://oss.tanmantang.com/object/adarkroom/";
var ossurl = "./";

var jsA = [
    'lib/jquery.color-2.1.2.min.js',
    'lib/jquery.event.move.js',
    'lib/jquery.event.swipe.js',
    'lib/base64.js',
    'lib/translate.js',
    'lang/langs.js',
];

var jsB = [
    'script/Button.js',
    'script/audioLibrary.js',
    'script/audio.js',
    'script/engine.js',
    'script/state_manager.js',
    'script/header.js',
    'script/notifications.js',
    'script/events.js',
    'script/room.js',
    'script/outside.js',
    'script/world.js',
    'script/path.js',
    'script/ship.js',
    'script/space.js',
    'script/fabricator.js',
    'script/prestige.js',
    'script/scoring.js',
    'script/events/global.js',
    'script/events/room.js',
    'script/events/outside.js',
    'script/events/encounters.js',
    'script/events/setpieces.js',
    'script/events/marketing.js',
    'script/events/executioner.js',
    'script/localization.js'
];

var cssA = [
    'css/main.css',
    'css/room.css',
    'css/outside.css',
    'css/path.css',
    'css/world.css',
    'css/ship.css',
    'css/space.css',
    'css/fabricator.css'
];

jsA.forEach(function(value){
	document.write("<script src="+ossurl+value+"></script>");
})

// 尝试从url读取lang参数
var lang = decodeURIComponent((new RegExp('[?|&]lang=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
// 如果没有请求语言，则设置默认语言为中文
if (!lang) {
    try {
        lang = "zh_cn"
    } catch (e) {  }
}

// 如果请求的语言不是英文，则加载所有翻译
if (lang && lang != 'en') {
    document.write('<script src="'+ossurl+'lang/' + lang + '/strings.js"><\/script>');
    document.write('<link rel="stylesheet" type="text/css" href="'+ossurl+'lang/' + lang + '/main.css" \/>');

}

jsB.forEach(function(value){
	document.write("<script src="+ossurl+value+"></script>");
})

cssA.forEach(function(value){
	document.write('<link rel="stylesheet" type="text/css" href="'+value+'" />');
})