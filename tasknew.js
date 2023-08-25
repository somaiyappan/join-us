//Find the longest word in a string.
var word ="The  quick brown fox jumped over the lazy dog"
function findLongStr(str)
{
    var longestword = str.split(" ").sort(function (a,b){
        return b.length - a.length
    })
    return longestword[0]
}
console.log(findLongStr(word))

//Repeat a string n times
function repeatString(str,n)
{
    return str.repeat(n)
}
console.log(repeatString("abc",3))

//Remove duplicates in an array
var dupArr =[1,20,3,1,3,3]
let removeArr=dupArr.filter((element,index)=>
{
    return dupArr.indexOf(element)===index
})
console.log(removeArr)

//Remove falsy values
var FalArr=[42,"everything","",2,false,"everything"]
let removeFalArr=FalArr.filter(Boolean,"")
console.log(removeFalArr)

//Truncate a string
var tunStr="Absolute victory"
function tunString(str,n)
{
   if(str.length>n)
   {
    return str.slice(0,n)+"..."
   }
   else
   {
    return str
   }
}
console.log(tunString(tunStr,3))
