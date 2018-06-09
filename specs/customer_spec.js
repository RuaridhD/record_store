const assert = require('assert');

const Customer = require('../customer.js')
const RecordStore = require('../record_store.js')
const Record = require('../record.js')

beforeEach(function(){
  customer1 = new Customer("Adam", 5);
  recordStore = new RecordStore('Rock Records', 'Glasgow', 250);
  record1 = new Record('Led Zeppelin', 'Stairway to Heaven', 'Rock', 4.99);
  record2 = new Record('Pink Floyd', 'The Wall', 'Rock', 6.99);
  recordStore.addToInventory(record1);
  recordStore.addToInventory(record2);
})

it('should be able to buy records', function(){
  customer1.buyRecord(record1);
  assert.strictEqual(1, customer1.records.length);
})

it('should be able to sell records', function(){
  customer1.records.push(record1);
  customer1.sellRecord(record1);
  assert.strictEqual(0, customer1.records.length);
})
