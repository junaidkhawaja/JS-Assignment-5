// Chapter 21

// Q1
var userInput = "KARACHI"
var allLower = userInput.toLowerCase();

// Q2
var x = "HELLO MY NAME IS JUNAID";
    x = x.toLowerCase();
    console.log(x);

// Q3
var y = "hello my name is junaid";
    y = y.toUpperCase();
    console.log(y);
// Q4
var userInput = "mY NaMe iS KhAwAjA";
var userInputUpper = userInput.toUpperCase();
    console.log(userInputUpper);

// Q5
var anArr = ["Karachi", "Is", "City", "Of", "Lights"];
yourLowerArray = anArr.toString().toLowerCase().split(',');
console.log(yourLowerArray);

// Q6
var myString = "Hello World";
alert(myString.toUpperCase());

// Q7
var cityName = "kaRacHi";
var cityfirstletter = cityName.slice(0,1).toUpperCase();
var cityremainletter = cityName.slice(1).toLowerCase();
var citycombinedletters = cityfirstletter + cityremainletter;
console.log(citycombinedletters);



// Chapter 22 - 25 (Strings)

// Q1
var sameWords = "captain";
var sliceAp = sameWords.slice(1, 3);
console.log(sliceAp);

// Q2
var myName = "Pakistan";
var countMyName = myName.length;
console.log(countMyName);

// Q3
var animal = "elephant";
var seg = animal.slice(2, 6);
console.log(seg);

// Q4
var checkName = "Chezchoslovakia";
var checkNameChar = checkName.length;
console.log(checkNameChar);

// Q5
var aNewString = "Chezch Republic";
var aNewStringLen = aNewString.length;
var aNewStringSlice = aNewString.slice(1, 12);
console.log(aNewStringSlice);

// Q6
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);

// Q7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx)

// Q8
var text = "I want to go outside";
var indx = text.lastIndexOf("go");
console.log(indx);

// Q9
// var indexNum;
// if (indexNum !== -1) {
//     console.log("index matched");
// }

// Q10
var alphabets = "abcde";
console.log(alphabets.charAt(2));

// Q11
var moreAlphas = "abcdefghijklmnopq";
var cha = moreAlphas.charAt(10);
console.log(cha);

// Q12
var str = "Europe";
var x = str.charAt(5);
console.log(x);

// Q13
var findfive = "Samuelle";
var cha = str.charAt(5);
console.log(cha);

// Q14
var findthird = "mehmood";
if (findthird[2] = "h") {}

// Q15
var cycleLoop = "Requirements";
var cycleArr = []
for(var i = 0; i < cycleLoop.length; i++) {
   cycleArr.push(cycleLoop[i]);
}
console.log(cycleArr);

// Question without number
var reply = "It's a big no.";
var revisedReply = reply.replace("no", "yes");
console.log(revisedReply);

// Q16
var str = "There is only 1 lion in the jungle";
var newStr = str.replace(/1/g, "one");
console.log(newStr)

// Q17
var y = x.replaceAll("a", "z");


// Chapter 26 (Rounding Numbers)
// Q1
var aNum = 2.4;
console.log(Math.round(aNum));

// Q2
var origNum = 2.5;
var roundNum = Math.ceil(origNum);
console.log(roundNum);

// Q3
var origNum = 2.5;
var roundNum = Math.floor(origNum);
console.log(roundNum);

// Q4
var newNum = 4.3;
var newRoundNum = Math.round(newNum);
console.log(newRoundNum);

// Q5
var decimalNum = 0.5;
var zeroNum = Math.floor(decimalNum);
console.log(zeroNum);


// Chapter 27 (Random Numbers)

// Q1
var numRandom = Math.random() * 30;
console.log(Math.round(numRandom));

// Q2
var aNewRandom = Math.random();
console.log(aNewRandom);

// Q3
// never explained yet

// Q4
// never explained yet


// Chapter 28, 29 (Converting Strings)

// Q1
console.log("we can do that usng parseInt method");

// Q2
var str = "123";
var strtonum = parseInt(str);
console.log(typeof strtonum);

// Q3
// sir didn't explain the floating-point number

// Q4
console.log("we can check using the parseInt() method if a string can be converted into a number or decimal");

// Q5
console.log("We can convert a number to a string using toString() method of javascript");

// Q6
var anotherNum = 42;
console.log(typeof toString(anotherNum));

// Q7
var decimalpoint = "3.14";
console.log(typeof parseInt(decimalpoint));

// Chapter 30 (Controlling the length of decimals)

// Q1
var num = 5.667781135;
var newNum = num.toFixed(4);
console.log(newNum.toString());

// Q2
var num2 = 7.6422113.toFixed(2).toString();
var num2 = parseInt(num2)
console.log(typeof num2)

// Q3
// sir didn't teach this

// Q4
var assignedNum = 9.13235453113;
alert(assignedNum.toFixed(2).toString());


// Thanks //