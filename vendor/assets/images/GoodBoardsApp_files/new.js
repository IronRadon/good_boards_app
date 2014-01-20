(function() {
  this.JST || (this.JST = {});
  this.JST["reviews/new"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h2>Reviewing ',  boardgame.get('title') ,'</h2>\n<form>\n\t<label for="title">Title</label>\n\t<input type="text" id="title" name="review[title]">\n\t<br>\n\t<label for="body">Review</label>\n\t<input type="textarea" id="body" name="review[body]">\n\t<br>\n\t<input type="hidden" name="review[boardgame_id]" value="', boardgame.get('id'),'">\n\t<div id=\'star\'></div>\n\n\t<input type="submit" value="Submit Review">\n</form>\n');}return __p.join('');};
}).call(this);
