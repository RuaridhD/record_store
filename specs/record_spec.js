const assert = require('assert');

const RecordStore = require('../record_store.js')
const Record = require('../record.js')


beforeEach(function(){
  record1 = new Record('Led Zeppelin', 'Stairway to Heaven', 'Rock', 4.99);
})


it('should be able to print out the records properties as a string', function(){
  assert.strictEqual(record1.toString(record1), "Led Zeppelin, Stairway to Heaven, Rock, 4.99");
})
