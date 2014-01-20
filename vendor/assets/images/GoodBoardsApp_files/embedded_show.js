(function() {
  this.JST || (this.JST = {});
  this.JST["boardgames/embedded_show"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('Embedded Board testing\n<h3>',  boardgame.get('title') ,'</h3>\nUser Rating: <div id="star"></div>\n<p>Rating: ',  boardgame.get('rating'),'</p>\nDescription: ',  boardgame.get('description') ,'\n');}return __p.join('');};
}).call(this);
