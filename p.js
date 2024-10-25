let obj1 = {
    name: 'Priyank',
    Contact: 9065565,
    state: 'Gujarat'
}

// obj1.city = 'surat';
console.log({...obj1, city : 'Gandhinagar', country : 'India'});
// console.log(obj1);


// console.log(obj2);

// console.log(obj2);
// obj1.city = 'surat';
obj1={...obj1,city:'surat'}
let obj2 = obj1;
console.log(obj2);
console.log(obj1);

let ary=[1,2,3,4,5];
console.log(ary);
obj1=[...obj1,city:'surat']


// console.log(ary);

