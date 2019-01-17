require('dotenv').config();
var assert = require('assert');


//* unit tests list *//

var self = require('./unit/self');
var ether = require('./unit/ether');

//* end unit tests list*//


/* run tests */
describe('Global functions', function() {
  self,
  ether
});
