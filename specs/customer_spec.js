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

it('should have cash decrease when buying record', function(){
  customer1.records.push(record1);
  customer1.buyRecord(record1);
  assert.strictEqual(0.01, Number(customer1.cash.toFixed(2)));
})

it('should have cash increase when selling record', function(){
  customer1.records.push(record1);
  customer1.sellRecord(record1);
  assert.strictEqual(9.99, Number(customer1.cash.toFixed(2)));
})

it('shouldnt be able to buy records they cant afford', function(){
  customer1.buyRecord(record2);
  assert.strictEqual(customer1.records.length, 0);
})

it('should be able to view the total value of their collection', function(){
  customer1.cash = 20;
  customer1.buyRecord(record2);
  customer1.buyRecord(record1);
  assert.strictEqual(customer1.viewTotalRecordValue(), 11.98);
})

it('should be able to view the total value of all records of a given Genre', function(){
  customer1.cash = 20;
  record3 = new Record('Darude', 'Sandstorm', 'Uncategorisable', 1.00);
  customer1.buyRecord(record1);
  customer1.buyRecord(record2);
  customer1.buyRecord(record3);
  assert.strictEqual(customer1.viewTotalRecordValueByGenre("Rock"), 11.98);
})

it('should be able to view their most valuable record', function(){
  customer1.cash = 20;
  record3 = new Record('Darude', 'Sandstorm', 'Uncategorisable', 1.00);
  customer1.buyRecord(record1);
  customer1.buyRecord(record2);
  customer1.buyRecord(record3);
  assert.strictEqual(customer1.viewMostValuableRecord(), 6.99);
})

it('should be able to sort their records by ascending value', function(){
  customer1.cash = 20;
  record3 = new Record('Darude', 'Sandstorm', 'Uncategorisable', 1.00);
  customer1.buyRecord(record1);
  customer1.buyRecord(record2);
  customer1.buyRecord(record3);
  customer1.sortByAscendingValue()
  assert.strictEqual(customer1.records[0].price, 6.99);
  assert.strictEqual(customer1.records[2].price, 1.00);
})

it('should be able to sort their records by descending value', function(){
  customer1.cash = 20;
  record3 = new Record('Darude', 'Sandstorm', 'Uncategorisable', 1.00);
  customer1.buyRecord(record1);
  customer1.buyRecord(record2);
  customer1.buyRecord(record3);
  customer1.sortByDescendingValue()
  assert.strictEqual(customer1.records[0].price, 1.00);
  assert.strictEqual(customer1.records[2].price, 6.99);
})
