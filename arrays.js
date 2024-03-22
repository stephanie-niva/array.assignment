//finding last element//
let arr1 = [3,7,34,90,12];
let arr2 = ['true','green','where',12,56];

console.log('last item', arr1.length-1);
console.log('last item', arr2.length-1);

//joining array //
let myPets= ["Cow","Bird","Snake","Dog"];
console.log(myPets.join());

//sort array//
let arr3=[-5,9,5,3,2,-3,6,8,4,1];
let newArray = arr3.sort();
console.log({newArray});
//removing duplicate in array//
let arr4=["boy","man","girl",   "school","girl","woman"];
console.log(arr4);

function noDuplicate(arr){
    return[...new Set(arr4)];
}
console.log(noDuplicate(arr));
//searching for element in array//
let arr5 = ["the","way","x",4];
let a = arr5.includes("food");
if(a==true){
    console.log("food");
}
else{
    console.log("the search word was not found")
}

//sorting arrays//
let word ="renniw";
let arrayx = word.split;
console.log(arrayx);
let c = arrayx.sort();
console.log(c);
const string=arrayx.toString();
console.log(string);



