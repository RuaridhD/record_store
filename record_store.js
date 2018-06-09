const Record = require('./record.js');

const RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

RecordStore.prototype.addToInventory = function(record){
  this.inventory.push(record);
};

RecordStore.prototype.listInventory = function(){
  result = []
  this.inventory.forEach(record => {
    result.push(record.toString())
  });
  return result.toString();
};

module.exports = RecordStore;
