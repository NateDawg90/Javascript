class Student{
  constructor(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    this.courses = [];

  }
}

class Course{
  constructor(name, department, num_credits, days, time){
    this.name = name;
    this.department = department;
    this.num_credits = num_credits;
    this.days = days;
    this.time = time;
    this.enrolled_students = [];
  }
}

Student.prototype.name = function() {
  return this.first_name + " " +  this.last_name;
};

Student.prototype.course = function() {
  return this.courses;
};

Student.prototype.courseLoad = function() {
  let course_load = {};
  this.courses.forEach(function(course){
    if(course_load[course.department] === undefined){
      course_load[course.department] = course.num_credits;
    }else {
      course_load[course.department] += course.num_credits;
    }
  });
  return course_load;
};

Student.prototype.enroll = function(newCourse) {

  if(this.courses.indexOf(newCourse) === -1){

    for (let i = 0; i < this.courses.length; i++) {

      if (newCourse.conflictsWith(this.courses[i])) {

        throw "Conflicting courses";
      }

    }
    this.courses.push(newCourse);
    newCourse.addStudent(this);

  }
};

Course.prototype.students = function() {
  return this.enrolled_students;
};

Course.prototype.addStudent = function(student) {
  if(this.enrolled_students.indexOf(student) === -1){
    this.enrolled_students.push(student);
  }
};

Course.prototype.conflictsWith = function(course2) {
  let conflict = false;
  let that = this;
  this.days.forEach(function(day){
    if(course2.days.indexOf(day) !== -1){
      if(that.time === course2.time){
        conflict = true;
      }
    }
  });

  return conflict;
};





let nate = new Student("nathan", "johnson");
let aa = new Course("appAcademy", "software engineering", 1000, ["EVERYDAY!!!"], 4);
let hack = new Course("hackReactor", "software engineering", 100, ["EVERYDAY!!!"], 4);
nate.enroll(aa);
console.log(nate.course());
console.log(nate.courseLoad());
console.log(aa.students());
console.log(aa.conflictsWith(hack));
nate.enroll(hack);
