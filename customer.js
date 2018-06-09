const Record = require('./record.js');
const RecordStore = require('./record_store.js');

const Customer = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.records = [];
}

Customer.prototype.buyRecord = function(record){
  this.records.push(record);
  this.cash += record.price;
}

module.exports = Customer;
