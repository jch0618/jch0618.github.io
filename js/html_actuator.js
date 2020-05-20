function HTMLActuator() {
  this.tileContainer    = document.querySelector(".tile-container");
  this.scoreContainer   = document.querySelector(".score-container");
  this.bestContainer    = document.querySelector(".best-container");
  this.messageContainer = document.querySelector(".game-message");
  this.sharingContainer = document.querySelector(".score-sharing");

  this.score = 0;
}

HTMLActuator.prototype.actuate = function (grid, metadata) {
  var self = this;

  window.requestAnimationFrame(function () {
    self.clearContainer(self.tileContainer);

    grid.cells.forEach(function (column) {
      column.forEach(function (cell) {
        if (cell) {
          self.addTile(cell);
        }
      });
    });

    self.updateScore(metadata.score);
    self.updateBestScore(metadata.bestScore);

    if (metadata.terminated) {
      if (metadata.over) {
        self.message(false); // You lose
      } else if (metadata.won) {
        self.message(true); // You win!
      }
    }

  });
};

// Continues the game (both restart and keep playing)
HTMLActuator.prototype.continue = function () {
  if (typeof ga !== "undefined") {
    ga("send", "event", "game", "restart");
  }

  this.clearMessage();
};

HTMLActuator.prototype.clearContainer = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

HTMLActuator.prototype.addTile = function (tile) {
  var text=new Array();
  text[0] = " ";
  text[1] = " ";
  text[2] = " ";
  text[3] = " ";
  text[4] = " ";
  text[5] = " ";
  text[6] = " ";
  text[7] = " ";
  text[8] = " ";
  text[9] = " ";
  text[10] = " ";
  text[11] = " ";
  text[12] = " ";
  text[13] = " ";
  text[14] = " ";
  text[15] = " ";
  text[16] = " ";
  text[17] = " ";
  text[18] = " ";
  text[19] = " ";
  text[20] = " ";
  text[21] = " ";
  text[22] = " ";
  text[23] = " ";
  text[24] = " ";
  text[25] = " ";
  text[26] = " ";
  text[27] = " ";
  text[28] = " ";
  text[29] = " ";
  text[30] = " ";
  text[31] = " ";
  text[32] = " ";
  text[33] = " ";
  text[34] = " ";
  text[35] = " ";
  text[36] = " ";
  text[37] = " ";
  text[38] = " ";
  text[39] = " ";
  text[40] = " ";
  text[41] = " ";
  text[42] = " ";
  text[43] = " ";
  text[44] = " ";
  text[45] = " ";
  text[46] = " ";
  text[47] = " ";
  text[48] = " ";
  text[49] = " ";
  text[50] = " ";
  text[51] = " ";
  text[52] = " ";
  text[53] = " ";
  text[54] = " ";
  text[55] = " ";
  text[56] = " ";
  text[57] = " ";
  text[58] = " ";
  text[59] = " ";
  
  var self = this;
  var text2 = function (n) { var r = 0; while (n > 1) r++, n >>= 1; return r; }

  var wrapper   = document.createElement("div");
  var inner     = document.createElement("div");
  var position  = tile.previousPosition || { x: tile.x, y: tile.y };
  var positionClass = this.positionClass(position);

  // We can't use classlist because it somehow glitches when replacing classes
  var classes = ["tile", "tile-" + tile.value, positionClass];

  if (tile.value > 131072) classes.push("tile-super");

  this.applyClasses(wrapper, classes);

  inner.classList.add("tile-inner");
  inner.innerHTML = text[text2(tile.value)];

  if (tile.previousPosition) {
    // Make sure that the tile gets rendered in the previous position first
    window.requestAnimationFrame(function () {
      classes[2] = self.positionClass({ x: tile.x, y: tile.y });
      self.applyClasses(wrapper, classes); // Update the position
    });
  } else if (tile.mergedFrom) {
    classes.push("tile-merged");
    this.applyClasses(wrapper, classes);

    // Render the tiles that merged
    tile.mergedFrom.forEach(function (merged) {
      self.addTile(merged);
    });
  } else {
    classes.push("tile-new");
    this.applyClasses(wrapper, classes);
  }

  // Add the inner part of the tile to the wrapper
  wrapper.appendChild(inner);

  // Put the tile on the board
  this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.applyClasses = function (element, classes) {
  element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.normalizePosition = function (position) {
  return { x: position.x + 1, y: position.y + 1 };
};

HTMLActuator.prototype.positionClass = function (position) {
  position = this.normalizePosition(position);
  return "tile-position-" + position.x + "-" + position.y;
};

HTMLActuator.prototype.updateScore = function (score) {
  this.clearContainer(this.scoreContainer);

  var difference = score - this.score;
  this.score = score;

  this.scoreContainer.textContent = this.score;

  if (difference > 0) {
    var addition = document.createElement("div");
    addition.classList.add("score-addition");
    addition.textContent = "+" + difference;

    this.scoreContainer.appendChild(addition);
  }
};

HTMLActuator.prototype.updateBestScore = function (bestScore) {
  this.bestContainer.textContent = bestScore;
};

HTMLActuator.prototype.message = function (won) {
  var mytxt=new Array();
  mytxt[0]="Haa , you lost at 3 tiles!";
  mytxt[1]="Haa , you lost at 4 tiles!";
  mytxt[2]="Haa , you lost at 5 tiles!";
  mytxt[3]="Haa , you lost at 6 tiles!";
  mytxt[4]="Haa , you lost at 7 tiles!";
  mytxt[5]="Haa , you lost at 8 tiles!";
  mytxt[6]="Haa , you lost at 9 tiles!";
  mytxt[7]="Haa , you lost at 10 tiles!";
  mytxt[8]="Haa , you lost at 11 tiles!";
  mytxt[9]="Haa , you lost at 12 tiles!";
  mytxt[10]="Haa , you lost at 13 tiles!";
  mytxt[11]="Haa , you lost at 14 tiles!";
  mytxt[12]="Haa , you lost at 15 tiles!";
  mytxt[13]="Haa , you lost at 16 tiles!";
  mytxt[14]="Haa , you lost at 17 tiles!";
  mytxt[15]="Haa , you lost at 18 tiles!";
  mytxt[16]="Haa , you lost at 19 tiles!";
  mytxt[17]="Haa , you lost at 20 tiles!";
  mytxt[18]="Haa , you lost at 21 tiles!";
  mytxt[19]="Haa , you lost at 22 tiles!";
	mytxt[20]="Haa , you lost at 23 tiles!";
  mytxt[21]="Haa , you lost at 24 tiles!";
  mytxt[22]="Haa , you lost at 25 tiles!";
  mytxt[23]="Haa , you lost at 26 tiles!";
  mytxt[24]="Haa , you lost at 27 tiles!";
  mytxt[25]="Haa , you lost at 28 tiles!";
  mytxt[26]="Haa , you lost at 29 tiles!";
  mytxt[27]="Haa , you lost at 30 tiles!";
  mytxt[28]="Haa , you lost at 31 tiles!";
  mytxt[29]="Haa , you lost at 32 tiles!";
  mytxt[30]="Haa , you lost at 33 tiles!";
  mytxt[31]="Haa , you lost at 34 tiles!";
  mytxt[32]="Haa , you lost at 35 tiles!";
  mytxt[33]="Haa , you lost at 36 tiles!";
  mytxt[34]="Haa , you lost at 37 tiles!";
  mytxt[35]="Haa , you lost at 38 tiles!";
  mytxt[36]="Haa , you lost at 39 tiles!";
  mytxt[37]="Haa , you lost at 40 tiles!";
  mytxt[38]="Haa , you lost at 41 tiles!";
  mytxt[39]="Haa , you lost at 42 tiles!";
  mytxt[40]="Haa , you lost at 43 tiles!";
  mytxt[41]="Haa , you lost at 44 tiles!";
  mytxt[42]="Haa , you lost at 45 tiles!";
  mytxt[43]="Haa , you lost at 46 tiles!";
  mytxt[44]="Haa , you lost at 47 tiles!";
  mytxt[45]="Haa , you lost at 48 tiles!";
  mytxt[46]="Haa , you lost at 49 tiles!";
  mytxt[47]="Haa , you lost at 50 tiles!";
  mytxt[48]="Haa , you lost at 51 tiles!";
  mytxt[49]="Haa , you lost at 52 tiles!";
  mytxt[50]="Haa , you lost at 53 tiles!";
  mytxt[51]="Haa , you lost at 54 tiles!";
  mytxt[52]="Haa , you lost at 55 tiles!";
  mytxt[53]="Haa , you lost at 56 tiles!";
  mytxt[54]="Haa , you lost at 57 tiles!";
  mytxt[55]="Haa , you lost at 58 tiles!";
  mytxt[56]="Haa , you lost at 59 tiles!";
  mytxt[57]="Haa , you lost at 60 tiles!";
  mytxt[58]="Haa , you lost at 61 tiles!";
  mytxt[59]="Haa , you lost at 62 tiles!";

  var text3 = function (m) { var r = 0; while (m > 1) r++, m >>= 1; return r; }
  var type    = won ? "game-won" : "game-over";
  var message = won ? "Haaaaaaaaaaaaaaaa , you won the game!" : mytxt[text3(maxscore)-3];

  if (typeof ga !== "undefined") {
    ga("send", "event", "game", "end", type, this.score);
  }

  this.messageContainer.classList.add(type);
  this.messageContainer.getElementsByTagName("p")[0].textContent = message;

  this.clearContainer(this.sharingContainer);
  this.sharingContainer.appendChild(this.scoreTweetButton());
  twttr.widgets.load();
};

HTMLActuator.prototype.clearMessage = function () {
  // IE only takes one value to remove at a time.
  this.messageContainer.classList.remove("game-won");
  this.messageContainer.classList.remove("game-over");
};

HTMLActuator.prototype.scoreTweetButton = function () {
  var tweet = document.createElement("a");
  tweet.classList.add("twitter-share-button");
  tweet.setAttribute("href", "https://twitter.com/share");
  tweet.setAttribute("data-via", "Y. Z. Chen");
  tweet.setAttribute("data-url", "http://github.com/geno1024");
  tweet.setAttribute("data-counturl", "http://github.com/geno1024");
  tweet.textContent = "Tweet";

  var text = "I scored " + this.score + " points at 23333333333333333 edition, a game where you " +
             "join numbers to score high! #23333333333333333";
  tweet.setAttribute("data-text", text);

  return tweet;
};
