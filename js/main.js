// TASK 1

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should receive string, and transform all letters to lowercase.

var data = 'Lorem ipsum dolor sit amet';

var newData = function(data) {
    return data.toLowerCase();
}
console.log(newData(data))



// TASK 2

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should check if there is a word "sit" in the string, 
// and console log sentence saying that it exist or not.


var newData = function(data) {
    data.indexOf('sit');
    if (newData > -1) {
        console.log('Exist')
    } else {
        console.log('Not exist')
    }
}
newData(data);



// TASK 3

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should find and return index of the last letter in the sentence.


var newData = function(data) {
    return data.length - 1;
}
console.log(newData(data))


// TASK 4

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should split string based on empty space, and return first 3 results.



var newData = function(data) {
    var splitData = data.split(' ')
    splitData.slice(0,3)
    return splitData;
    }
console.log(newData(data))



// TASK 5

// Based on given string:

// "Piter is an actor."

// Create a function that should turn a string into the following string:

// "Pitor is an acter."

var data = "Piter is an actor.";

var newData = function(data) {
    var findInData = data.split(' ');   // ["Piter", "is", "an", "actor."]
    findInData.splice(0,1,'Pitor');
    findInData.splice(3,1,'acter.');
    return findInData.join(' ');
}
console.log(newData(data))


// TASK 6

// Based on given array:

// var someData = [34, 23, 14, 56, 23, 44, 65];

// Create a function that should remove number 56 from an array and return array without it.

var someData = [34, 23, 14, 56, 23, 44, 65];

var newData = function(data) {
    return data.filter(function(num) {
        return num !==56;
        });
};

console.log(newData(someData))



// TASK 7

// Based on given array:

// var someData = [34, 23, 14, 56, 23, 44, 65];

// Create a function that should turn it into following array:

// var otherData = [23, 14, 56, 65, 44, 23];


var otherData = function(data) {
    data.shift(); // [23, 14, 56, 23, 44, 65]
    var lastThree = data.splice(data.length-3); // [23, 44, 65]
    lastThree.reverse(); // [65, 44, 23]

    return data.concat(lastThree)
};

console.log(otherData(someData))


// TASK 8

// Based on given array:

// var someData = [334, 233, 212, 199, 154, 122];

// Create a function that should repack array to the new one, where each element should be current one, reduced by value of previous one from initial array.

var someData = [334, 233, 212, 199, 154, 122];

var newData = function(data) {
    return data.map(function(current, index) {
        if(index > 0) {
            return current - data[index-1];
        } else {
            return current;
        }
    })
}

console.log(newData(someData))





// TASK 9

// Based on given array:

// var students = [
//   {
//      name: "Jim",
//      avgGrade: 8.5556
//   },
//   {
//      name: "Mike",
//      avgGrade: 8.5492
//   },
//   {
//      name: "Anna",
//      avgGrade: 8.9322
//   },
//   {
//      name: "Jack",
//      avgGrade: 8.6111
//   }
// ]

// Create a function that should return new array with all students whose average grade is larger than 8.5. In new array, average grade should be formatted to 2 decimals.

var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
];

var newData = students.filter(function (data) {
    data.avgGrade = data.avgGrade.toFixed(2) 
    data.avgGrade = Number(data.avgGrade)
    return data.avgGrade > 8.50
  });
  console.log(newData)




