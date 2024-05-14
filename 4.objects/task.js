function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (!this.hasOwnProperty("excluded")) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty("marks") && this.marks.length !== 0) {
		console.log("подходит");
		return (this.marks.reduce((accum, a) => accum + a, 0)) / this.marks.length;
	} else {
		console.log("не подходит");
		return 0;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}


let student = new Student("Alice", "female", 21);

student.exclude('прогулы');
student.addMarks(5, 5, 5);



console.log(student);