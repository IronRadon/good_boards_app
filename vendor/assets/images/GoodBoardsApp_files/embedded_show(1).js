(function() {
  this.JST || (this.JST = {});
  this.JST["reviews/embedded_show"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h4>',  boardgame.get('title') ,':\nAvg Rating:<div id=\'avg-rating\'></div> ',  boardgame.get('rating') ,'\n</h4>\nUser Rating:<div id=\'star\'></div>\n\n \n<h5>',  review.get('title') ,'</h5>\n\t',  review.get('rating') ,'\n\n<h6>Reviewed on:',  review.get('created_at'),'</h6>\n\t\t<div class="wrapper">\n\t\t',  review.get('body').substr(0, maxLength),'...\n\t\t\t<a href="#/reviews/', review.get('id'),'">Read More</a>\n\t\t</div>\n');}return __p.join('');};
}).call(this);
