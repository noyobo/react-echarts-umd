var ghpages = require('gh-pages');

ghpages.publish('demo', function(err) {
  console.log(err);
});
