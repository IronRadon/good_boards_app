(function() {
  this.JST || (this.JST = {});
  this.JST["boardgames/show"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h1>',  boardgame.get('title') ,'</h1>\nRating: <div id="star"></div>',  boardgame.get('rating') ,'\n\n<a href="#boardgames/',  boardgame.get('id') ,'/reviews/new">Review this Game</a>\n<h1>Reviews</h1>\n<ul>\n\t'); reviews.each(function(review) { ; __p.push('\n\t\t<li class="embedded" id="', review.get('id'),'"></li>\n\t');  }) ; __p.push('\n</ul>\n');}return __p.join('');};
}).call(this);
