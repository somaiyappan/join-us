var word ="The  quick brown fox jumped over the lazy dog"
function findLongStr(str)
{
    var longestword = str.split(" ").sort(function (a,b){
        return b.length - a.length
    })
    return longestword[0]
}
console.log(findLongStr(word))

function repeatString(str,n)
{
    return str.repeat(n)
}
console.log(repeatString("abc",3))

var dupArr =[1,20,3,1,3,3]
let removeArr=dupArr.filter((element,index)=>
{
    return dupArr.indexOf(element)===index
})
console.log(removeArr)

var FalArr=[42,"everything","",2,false,"everything"]
let removeFalArr=FalArr.filter(Boolean,"")
console.log(removeFalArr)

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
