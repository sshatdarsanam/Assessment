const myObj1={restaurentId:1, restaurantName:"sid", formattedAddress:"Morrisville, NC"}

const myObj2={type : "countryCode", value : "+91"}

function printKeyValue(input){
    for(key in input) {
        if (input.hasOwnProperty(key)) {
            console.log (input[key] + " : " + key)
        }
    }
}

console.log("OBJECT 2")
printKeyValue(myObj2);