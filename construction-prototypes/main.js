 console.log("hello");

 1. Create a constructor function `Album`. You will use this function to make multiple new photo albums. This function has a property `photos`, which is an array of photo file names (strings), such as "pic123.png". Add three methods to the function's prototype: `addPhoto` that accepts a photo as a parameter and adds it to the property `photos`; a method that lists all photos in the album one by one; and a method that accesses a specific photo by the order it was added. Create three instances of an album. For each album, execute all 3 methods.


 console.log("ready");

 // constructor fxn:
 function Album(photosArr) {
   this.photos = photosArr;
 }

 Album.prototype.addPhoto = function(newPhoto) {
   this.photos.push(newPhoto);
 }

 Album.prototype.listAll = function() {
   for (var i = 0; i < this.photos.length; i++) {
     console.log( this.photos[i] );
   }
 }

 Album.prototype.seeSingle = function(index) {
   console.log( this.photos[index] );
 }

 // instances:
 var album1 = new Album(['pic1.jpg', 'pic2.png']);
 album1.addPhoto('newPic.jpg');
 album1.listAll();
 album1.seeSingle(0);
 album1.seeSingle(1);
 album1.seeSingle(2);

 var album2 = new Album(['pic4.jpg', 'pic3.png']);

 var album3 = new Album(['pic1.jpg', 'pic4.png']);


 // constructors:
 function Teacher(name, age, gradeTeach) {

 }

 function Student(name, year) {
   this.name = name;
   this.year = year;
 }

 function School(studentArr, teacherArr) {
   this.students = studentArr;
   this.teachers = teacherArr;
 }

 // add to proto:
 School.prototype.listStudents = function() {
   // loop array
   for (var i = 0; i < this.students.length; i++) {
     console.log( this.students[i].name );
   }
 }





















//
// 1. Create a constructor called `Outfit`. Add a property that is an array that will hold all items of clothing for this outfit. To its prototype add methods that allow you to add an article of clothing to your outfit and a method that tells you all the pieces of clothing in that outfit. Create 3 outfits; for each one, add 5 articles of clothing and execute the function that reads the clothing items to you.





console.log("ready");

// constructor fxn:
function Outfit(OutfitArr) {
  this.closet = OutfitArr;
}

Album.prototype.addClothes = function(newClothes) {
  this.photos.push(newClothes);
}

Album.prototype.listAll = function() {
  for (var i = 0; i < this.Clothes.length; i++) {
    console.log( this.Clothes[i] );
  }
}

Album.prototype.seeSingle = function(index) {
  console.log( this.Clothes[index] );
}

// instances:
var Outfit = new Clothes(['shorts', 'pants' 'socks' 'scarf']);
Outfit.addClothes('newClothes');
Outfit.listAll();
Outfit.seeSingle(0);
Outfit.seeSingle(1);
Outfit.seeSingle(2);

var Outfit= new Clothes(['shorts', 'pants']);

var Outfit = new Clothes(['socks', 'scarf']);


































//
// 1. Create Teacher, Student and School constructor fxns. Each of these objects should have properties and methods pertinent to what they describe. The School constructor should be able to store instances of students and teachers and should be able to list all students and teachers that it contains. Create three instances of Students and Teachers and add them to a single School instance. Do this two more times. For each school instance, invoke the function that lists all students and teachers.
//  +
// constructors:
function Teacher(name, age, gradeTeach) {

}

function Student(name, year) {
  this.name = name;
  this.year = year;
}

function School(studentArr, teacherArr) {
  this.students = studentArr;
  this.teachers = teacherArr;
}

// add to proto:
School.prototype.listStudents = function() {
  // loop array
  for (var i = 0; i < this.students.length; i++) {
    console.log( this.students[i].name );
  }
}
// instances:
var teacher1 = new Teacher("Liza", 23, 10);
var teacher2 = new Teacher("Alfe", 23, 10);
var student1 = new Student("Stefanie", "senior");
var student2 = new Student("Tyler", "junior");
var school1 = new School([student1, student2], [teacher1, teacher2]);

school1.listStudents();
