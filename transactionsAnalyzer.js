//input is a list of transactions represented as array of js objects tied to one user
//returns {category("type") spent most money on, category spent most frequently on, how much money spent most, how many times per month spent on that category}
//{"maxTotalAmountType", "maxFrequencyType", "maxTotalAmount", "maxFrequency"}
//Ex: personaltransactionAmount = 1, personaltransactionAmount = 2, personaltransactionAmount = 3, businesstransactionAmount = 18
//ouput- ["personaltransactionAmount", "businesstransactionAmount", 6, 3]
function analyze(listOfTransactions) {
  //maps type --> total amount / frequency
  var typeToTotalAmount = {};
  var typeToFrequency = {};
  for (var i = 0; i < listOfTransactions.length; i++) {
    var type = listOfTransactions[i]["type"];
    //initializes totalAmount value if not existent, or adds to if it is existent
    if (typeToTotalAmount[type] === undefined){
      typeToTotalAmount[type] = listOfTransactions[i]["amount"];
    }
    else {
      typeToTotalAmount[type] += listOfTransactions[i]["amount"];
    }
    //initializes frequency value if not existent, or increments if it is existent
    if (typeToFrequency[type] === undefined){
      typeToFrequency[type] = 1;
    }
    else {
      typeToFrequency[type] += 1;
    }
  }
  //finds the max categories for money and frequency and also the values of them
  var maxTotalAmount = 0;
  var maxTotalAmountType;
  var maxFrequency = 0;
  var maxFrequencyType;
  for (var key in typeToTotalAmount){
    if (typeToTotalAmount[key] >= maxTotalAmount) {
      maxTotalAmount = typeToTotalAmount[key];
      maxTotalAmountType = key;
    }
    if (typeToFrequency[key] >= maxFrequency) {
      maxFrequency = typeToFrequency[key];
      maxFrequencyType = key;
    }
  }
  return {
    "maxTotalAmountType": maxTotalAmountType,
    "maxFrequencyType": maxFrequencyType,
    "maxTotalAmount": maxTotalAmount,
    "maxFrequency": maxFrequency
  };
}

//testCode
/*
lstT = [{
  "id": 123,
  "userId": 123,
  "timestamp": "2017-10-06T23:43:06.900",
  "amount": 1,
  "type": "personal",
  "tags": []
},
{
  "id": 123,
  "userId": 123,
  "timestamp": "2017-10-06T23:43:06.900",
  "amount": 2,
  "type": "personal",
  "tags": []
},
{
  "id": 123,
  "userId": 123,
  "timestamp": "2017-10-06T23:43:06.900",
  "amount": 3,
  "type": "personal",
  "tags": []
},
{
  "id": 123,
  "userId": 123,
  "timestamp": "2017-10-06T23:43:06.900",
  "amount": 18,
  "type": "lmao",
  "tags": []
}];
console.log(analyze(lstT));
*/
