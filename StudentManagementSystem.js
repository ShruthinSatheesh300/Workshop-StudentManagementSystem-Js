const stdDetails = [
    {rollNo: 1, firstName:'Shruthin', lastName: 'Satheesh', address:'Deffence', physicsMarks: 90, chemistryMarks:92,mathMarks:96},
    {rollNo: 2, firstName:'Vishnu',lastName: 'Satheesh', address:'Deffence', physicsMarks:93, chemistryMarks:50,mathMarks:73},
    {rollNo: 3, firstName:'Jith',lastName: 'Prakash',address:'Bhandak', physicsMarks:50, chemistryMarks:80,mathMarks:69},
    ];


console.log('The Added Student Data are as Follows : ',stdDetails);
const hashMap = new Map();

hashMap.set(1, { firstName:'Shruthin', lastName: 'Satheesh', address:'Deffence', physicsMarks: 92, chemistryMarks:83,mathMarks:80});
hashMap.set(2, { firstName:'Vishnu', lastName: 'Satheesh', address:'Deffence', physicsMarks: 87, chemistryMarks:87,mathMarks:70});
hashMap.set(3, { firstName:'Jith', lastName: 'Prakash', address:'Bhandak', physicsMarks: 98, chemistryMarks:95,mathMarks:92});

console.log(hashMap);

    hashMap.forEach(function(key, value){
    console.log(key + ' = ' + JSON.stringify(value));
    if(value.mathMarks < 70) {
    console.log(value.mathMarks,'Filtering students who got less than 70 marks in maths :-');
    }});


    var editStudentDetails = hashMap.get(3);
    editStudentDetails.firstName = 'Sushant'
    editStudentDetails.lastName = 'Tope'
    editStudentDetails.address = 'Bhadrawati'
    console.log(editStudentDetails)
  
    var editStudentDetails = hashMap.get(2)
    editStudentDetails.firstName = 'Harshal'
    editStudentDetails.lastName = 'Aswale'
    editStudentDetails.address = 'Gautam Nagar'
    console.log(editStudentDetails)
  
    console.log(hashMap , "Edited Student Details");