(function() {
  this.JST || (this.JST = {});
  this.JST["users/show"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('\n<h1>Reviews by ',  user.get('username') ,'</h1>\n<ul>\n\t'); reviews.each(function(review) { ; __p.push('\n\t\t<li class="embedded" id="', review.get('id'),'"></li>\n\t');  }) ; __p.push('\n</ul>\n');}return __p.join('');};
}).call(this);
