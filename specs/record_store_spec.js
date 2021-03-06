const assert = require('assert');

const RecordStore = require('../record_store.js')
const Record = require('../record.js')


beforeEach(function(){
  recordStore = new RecordStore('Rock Records', 'Glasgow', 250);
  record1 = new Record('Led Zeppelin', 'Stairway to Heaven', 'Rock', 4.99);
  record2 = new Record('Pink Floyd', 'The Wall', 'Rock', 6.99);
  recordStore.addToInventory(record1);
  recordStore.addToInventory(record2);
})

  it('should be able to add records to inventory', function(){
    assert.strictEqual(recordStore.inventory.length, 2);
  })

  it('should be able to list the inventory', function(){
    assert.strictEqual(recordStore.listInventory(), "Led Zeppelin, Stairway to Heaven, Rock, 4.99,Pink Floyd, The Wall, Rock, 6.99");
  })

  it('should be able to sell a record and adjust store balance accordingly', function(){
    recordStore.sellRecord(record1);
    assert.strictEqual(recordStore.balance, 254.99);
    assert.strictEqual(recordStore.inventory.length, 1);
  })

  it('should be able to report financial situation of store - till balance and stock value', function(){
    assert.strictEqual(recordStore.calculateTotalValue(), 261.98);
  })

  it('should be able to view all records of a given genre', function(){
    record3 = new Record('Darude', 'Sandstorm', 'Uncategorisable', 0.10);
    recordStore.addToInventory(record3);
    assert.strictEqual(recordStore.recordsByGenre('Rock'), 2);
  })
