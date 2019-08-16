// CODE here for your Lambda Classes

class Person {
  constructor(pAtts) {
    this.name = pAtts.name;
    this.age = pAtts.age;
    this.location = pAtts.location;
  }
  speak() {
    return `Hello, My name is ${this.name}, and I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(iAtts) {
    super(iAtts);
    this.specialty = iAtts.specialty;
    this.favLanguage = iAtts.favLanguage;
    this.catchPhrase = iAtts.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(Student, subject) {
    `${Student.name} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(sAtts) {
    super(sAtts);
    this.previousBackground = sAtts.previousBackground;
    this.className = sAtts.className;
    this.favSubjects = sAtts.favSubjects;
    this.listsSubjects = sAtts.listsSubjects;
  }
}
