//1.Create your own resume data in JSON format
let Resume= {
  "General details" :{
    "name" : "Uma P",
    "email" : "umaap56@gmail.com",
    "phone" : "8056923179"
  }
  "location": {
    "address": "Nehru nagar",
    "postalCode": "641045",
    "city": "Coimbatore"
  }
  "profiles": [{
    "network": "linkedin",
    "username": "uma",
    "url": "https://www.linkedin.com/in/uma-pechinathan-892386277/"
  }]
  "work": [{
    "name": "ommurugaa builders",
    "position": "Design engineer",
    "startDate": "2020",
    "endDate": "2023",
}]
"education": [{
  "institution": "Kumaraguru college of technology",
  "area": "Civil Engineering",
  "startDate": "2015",
  "endDate": "2019",
  "cgpa": "7.67",
}],
"languages": [{
  "language": "Tamil","English","Hindi",
}],
"skills": [
  {
    "name": "autocad,revit",
    "level": "beginner",
  }
]
}
console.log(Resume);


//2.For the given JSON iterate over all for loops (for, for in, for of, for Each)
var json = [{
  "id" : "uma", 
  "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
  "task" : "zen portal task",
  "mail": "umaap56@gmail.com"
}],

//for loop
for(var i = 0; i < json.length; i++) {
  var obj = json[i];

  console.log(obj.id);
  console.log(obj.msg);
  console.log(obj.task);
  console.log(obj.mail);
}

//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
console.log(json[key].id);
}
}

//for Of
let text = "";
for (let x of json[key].id) {
text += x; 
}
console.log(text);



 
  