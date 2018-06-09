const assert = require('assert');

const RecordStore = require('../record_store.js')
const Record = require('../record.js')


beforeEach(function(){
  recordStore = new RecordStore('Rock Records', 'Glasgow', 250);
  record1 = new Record('Led Zeppelin', 'Stairway to Heaven', 'Rock', 4.99);
  record2 = new Record('Pink Floyd', 'The Wall', 'Rock', 6.99);
})

  it('should be able to add records to inventory', function(){
    recordStore.addToInventory(record1);
    recordStore.addToInventory(record2);
    assert.strictEqual(recordStore.inventory.length, 2);
  })
