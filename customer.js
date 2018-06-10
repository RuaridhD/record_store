const Record = require('./record.js');
const RecordStore = require('./record_store.js');

const Customer = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.records = [];
}

Customer.prototype.buyRecord = function(record){
  if (record.price <= this.cash){
  this.records.push(record);
  this.cash -= record.price;
}
};

Customer.prototype.sellRecord = function(record){
  var idx = this.records.indexOf(record);
  this.records.forEach(item => {
    if (item === record) {
      this.cash += record.price;
      this.records.splice(idx, 1);
    }
  })
};

Customer.prototype.viewTotalRecordValue = function(){
  var total = 0;
  this.records.forEach(item => {
    total += item.price;
  })
  return total;
};

Customer.prototype.viewTotalRecordValueByGenre = function(recordGenre){
  var total = 0;
  this.records.forEach(item => {
    if (item.genre === recordGenre){
    total += item.price;
  }
})
  return total;
};

Customer.prototype.viewMostValuableRecord = function(){
  this.records.sort(function(lowest, highest){
    return highest.price - lowest.price;
  })
  return this.records[0].price;
}

Customer.prototype.sortByAscendingValue = function(){
  this.records.sort(function(lowest, highest){
    return highest.price - lowest.price;
  })
  return this.records
}

Customer.prototype.sortByDescendingValue = function(){
  this.records.sort(function(lowest, highest){
    return lowest.price - highest.price;
  })
  return this.records
}

Customer.prototype.compareValueOfCollection = function(comparedCustomer){
  var customerComparison = [];
  var result1 = this.viewTotalRecordValue();
  var result2 = comparedCustomer.viewTotalRecordValue();
  customerComparison.push(result1);
  customerComparison.push(result2);
  customerComparison.sort(function(lowest, highest){
    return highest.price - lowest.price;
  })
  if (customerComparison[0]=== result1){
    return this.name + " has the highest valued collection at " + this.viewTotalRecordValue();
  } else {
    return comparedCustomer.name + " has the highest valued collection at " + comparedCustomer.viewTotalRecordValue();
  }
}




module.exports = Customer;
