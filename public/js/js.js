var Timer = function(eleId) {
  var element   = document.getElementById(eleId),
      color     = document.getElementById("color"),
      startTime = timeDiff = choice = tick = colorTick = null,
      colors    = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

  var prettyTime = function(time) {
    var ms = pad(3, time % 1000),
        s  = pad(2, Math.floor((time / 1000) % 60)),
        m  = pad(2, Math.floor((time / (60 * 1000)) % 60));

    return m < 1 ? (s + "." + ms) : (m + ":" + s + "." + ms);
  };

  var pad = function(length, string) {
    for (var i = 0; i < length; i++) {
      string = "0" + string;
    }

    return string.slice(-length);
  };

  var updateTime = function() {
    timeDiff = (new Date).getTime() - startTime;
    element.innerHTML = prettyTime(timeDiff);
  };

  var changeColor = function() {
    choice = Math.floor(Math.random() * colors.length);
    document.getElementById(eleId).style.color = colors[choice];
  };

  var startStopTime = function() {
    startTime = (new Date).getTime();

    if (!tick) {
      color.innerHTML = "";
      tick = setInterval(updateTime, 1);
      colorTick = setInterval(changeColor, 100);
    } else {
      color.style.color = colors[choice];
      color.innerHTML   = colors[choice];
      clearInterval(tick);
      clearInterval(colorTick);
      tick = null;
    }
  };

  return {startStopTime: startStopTime};
};

var timers = {
  32: new Timer("spacebar")
};

document.addEventListener("keydown", function(e) {
  if (timers[e.keyCode]) {
    timers[e.keyCode].startStopTime();
  }
});
