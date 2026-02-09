(function (window) {
  var goodbyeSpeaker = {};
  goodbyeSpeaker.speakWord = "Goodbye";

  goodbyeSpeaker.speak = function (name) {
    console.log(goodbyeSpeaker.speakWord + " " + name);
  };

  window.goodbyeSpeaker = goodbyeSpeaker;

})(window);
