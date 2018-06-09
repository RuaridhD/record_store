const Record = require('./record.js');
const RecordStore = require('./record_store.js');

const Customer = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.records = [];
}

Customer.prototype.buyRecord = function(record){
  this.records.push(record);
  this.cash -= record.price;
}

Customer.prototype.sellRecord = function(record){
  var idx = this.records.indexOf(record);
  this.records.forEach(item => {
    if (item === record) {
      this.cash += record.price;
      this.records.splice(idx, 1);
    }
  });
}

module.exports = Customer;
