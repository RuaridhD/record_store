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

RecordStore.prototype.sellRecord = function(record){
  var idx = this.inventory.indexOf(record);
  this.inventory.forEach(item => {
    if (item === record) {
      this.balance += record.price;
      this.inventory.splice(idx, 1);
    }
  });
  console.log(this.inventory);

}

module.exports = RecordStore;
