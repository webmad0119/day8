// var value = 500;
// var obj = {
//   value: 0,
//   increment: function() {
//     this.value++;

//     var innerFunction = function() {
//       console.log(this.value);
//     }

//     innerFunction.apply(this); // Function invocation pattern
//   }
// }
// obj.increment();



var value = 500;

var obj = {
    value: 0,
    increment: function () {
        this.value++;

        calculateValueAddition.apply(this); // Function invocation pattern
    }
}
obj.increment();

function checkMark() {
    if (this.mark === "A" || this.mark === "A++") {
        console.log("success")
    }   else {
        console.log("invalid mark")
    }
}

var Student = function (nameParam, markParam) {
    this.name = nameParam
    this.mark = markParam
}

var allStudentsMadrid = [
    new Student("carlos", "B"), 
    new Student("super zenchy", "A++")
]

var boundFunctions = [
    checkMark.bind(allStudentsMadrid[0]),
    checkMark.bind(allStudentsMadrid[1])
]

checkMark.apply(allStudentsMadrid[0])
var checkMarkCarlos = checkMark.bind(allStudentsMadrid[0])
checkMarkCarlos.apply(window)