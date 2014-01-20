(function() {
  this.JST || (this.JST = {});
  this.JST["reviews/embedded_show_board"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h4>Reviewed By:\n\t',  user.get('username') ,':\n\t<div id=\'star\'></div>\n</h4>\n<h6>Reviewed on:',  review.get('created_at'),'</h6>\n\n \n<h5>',  review.get('title') ,'</h5>\n\t',  review.get('rating') ,'\n\n\n\t\t<div class="wrapper">\n\t\t',  review.get('body').substr(0, maxLength),'...\n\t\t\t<a href="#/reviews/', review.get('id'),'">Read More</a>\n\t\t</div>\n');}return __p.join('');};
}).call(this);
