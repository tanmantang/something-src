function uselessWebButton(button, popup) {
  var buttonElement = button
  var popupElement = popup
  var initialClick = false
  var randomRange = 6

var sitesList = [
	"http://beesbeesbees.com",
	"http://buildshruggie.com",
	"http://burnie.com",
	"http://burymewithmymoney.com",
	"http://buzzybuzz.biz",
	"http://cant-not-tweet-this.com",
	"http://cat-bounce.com",
	"http://chihuahuaspin.com",
	"http://chillestmonkey.com",
	"http://chrismckenzie.com",
	"http://corgiorgy.com",
	"http://corndog.io",
	"http://corndogoncorndog.com",
	"http://crouton.net",
	"http://dogs.are.the.most.moe",
	"http://doughnutkitten.com",
	"http://drawing.garden",
	"http://eelslap.com",
	"http://endless.horse",
	"http://floatingqrcode.com",
	"http://hasthelargehadroncolliderdestroyedtheworldyet.com",
	"http://heeeeeeeey.com",
	"http://iamawesome.com",
	"http://ihasabucket.com",
	"http://imaninja.com",
	"http://isitwhite.com",
	"http://lacquerlacquer.com",
	"http://maninthedark.com",
	"http://ninjaflex.com",
	"http://nooooooooooooooo.com",
	"http://notdayoftheweek.com",
	"http://oct82.com",
	"http://onemillionlols.com",
	"http://papertoilet.com",
	"http://pixelsfighting.com",
	"http://potatoortomato.com",
	"http://randomcolour.com",
	"http://scroll-o-meter.club",
	"http://spaceis.cool",
	"http://tencents.info",
	"http://thatsthefinger.com",
	"http://thisisnotajumpscare.com",
	"http://tinytuba.com",
	"http://tunnelsnakes.com",
	"http://unicodesnowmanforyou.com",
	"http://weirdorconfusing.com",
	"http://wowenwilsonquiz.com",
	"http://wowenwilsonquiz.com",,
	"http://www.amialright.com",
	"http://www.ascii-middle-finger.com",
	"http://www.blankwindows.com",
	"http://www.crossdivisions.com",
	"http://www.donothingfor2minutes.com",
	"http://www.doublepressure.com",
	"http://www.everydayim.com",
	"http://www.fallingfalling.com",
	"http://www.hackertyper.com",
	"http://www.ismycomputeron.com",
	"http://www.koalastothemax.com",
	"http://www.movenowthinklater.com",
	"http://www.muchbetterthanthis.com",
	"http://www.nullingthevoid.com",
	"http://www.omfgdogs.com",
	"http://www.partridgegetslucky.com",
	"http://www.patience-is-a-virtue.org",
	"http://www.pleaselike.com",
	"http://www.republiquedesmangues.fr",
	"http://www.rrrgggbbb.com",
	"http://www.staggeringbeauty.com",
	"http://www.trashloop.com",
	"http://www.trypap.com",
	"http://www.wutdafuk.com",
	"http://www.yesnoif.com",
	"http://yeahlemons.com",
	"https://alwaysjudgeabookbyitscover.com",,
	"https://binarypiano.com",
	"https://boringboringboring.com",
	"https://cant-not-tweet-this.com",
	"https://checkbox.toys/scale",
	"https://checkboxrace.com",
	"https://cursoreffects.com",,
	"https://dadlaughbutton.com",
	"https://existentialcrisis.com",
	"https://findtheinvisiblecow.com",
	"https://greatbignothing.com",
	"https://jacksonpollock.org",
	"https://longdogechallenge.com",
	"https://loopedforinfinity.com",
	"https://maze.toys/mazes/mini/daily",
	"https://mondrianandme.com",
	"https://onesquareminesweeper.com",
	"https://optical.toys",
	"https://paint.toys",
	"https://paint.toys/calligram",
	"https://pointerpointer.com",
	"https://pointerpointer.com",,
	"https://puginarug.com",,
	"https://remoji.com",
	"https://sliding.toys/klotski/easy-street",
	"https://sliding.toys/mystic-square/8-puzzle/daily",
	"https://smashthewalls.com",
	"https://strobe.cool",
	"https://thatsthefinger.com",
	"https://thepigeon.org",
	"https://thezen.zone",
	"https://weirdorconfusing.com",
	"https://www.bouncingdvdlogo.com",
	"https://www.fidgetspin.xyz",
	"https://www.trypap.com",
	"https://zoomquilt.org",
];

  var sites = null

  // 绑定按钮
  var init = function () {
    button.onclick = onButtonClick;

    // 设置初始网站
    sites = sitesList.slice();
  }

  // 从列表中选择并删除下一个网站
  var selectWebsite = function () {
    var site, range, index
    range = randomRange > sites.length ? sites.length : randomRange
    index = Math.floor(Math.random() * range)
    site = sites[index]
    sites.splice(index, 1)
    return site
  }

  var openSite = function (url) {
    window.open(url)
  }

  var onButtonClick = function () {
    if (window.gtag) {
      gtag("event", "click", { event_category: "button" })
    }

    if (initialClick === false) {
      // 改变文字
      document.getElementById("joint").innerHTML = "另一个"
      initialClick = true
    }

    var url = selectWebsite()
    openSite(url)

    // 已访问所有网站。。。刷新列表。
    if (sites.length == 0) {
      sites = sitesList.slice()
    }
  }

  init()

// 我的要求并不高，保留这一句版权信息可好？
// 保留了，你不会损失什么；而保留版权，是对作者最大的尊重。
console.info('作者：TMT(http://tanmantang.com)\n 带你去一个没什么卵用的网站的网站');
}
