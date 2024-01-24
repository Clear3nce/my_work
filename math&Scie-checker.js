const MIN_MATH_SCORE = 75;
const MIN_SCIENCE_SCORE = 75;
const MIN_AGE_TO_JOIN = 25;
const MAX_AGE_FOR_UPGRADE = 35;

class Student {
  constructor(details) {
    this.name = details.name;
    this.surname = details.surname;
    this.age = details.age;
    this.subjects = details.subjects;
  }
}

let person1 = new Student({
  name: "clearance",
  surname: "Muluvhu",
  age: 25,
  subjects: { Mathematics: 79, Science: 76 },
});

let person2 = new Student({
  name: "Chief",
  surname: "Zhing",
  age: 28,
  subjects: { Mathematics: 58, Science: 68 },
});

let person3 = new Student({
  name: "Mphoza",
  surname: "salvatore",
  age: 32,
  subjects: { Mathematics: 69, Science: 86 },
});

let person4 = new Student({
  name: "frankie",
  surname: "Stormy",
  age: 17,
  subjects: { Mathematics: 75, Science: 78 },
});

const checkMinimumRequirements = ({
  name,
  surname,
  age,
  subjects: { Mathematics, Science },
}) => {
  let sorryMessage =
    "we are sorry to let you know that you cannot join our free course yet";

  if (age > 24) {
    if (
      Mathematics >= MIN_MATH_SCORE &&
      Science >= MIN_SCIENCE_SCORE &&
      age >= MIN_AGE_TO_JOIN
    ) {
      console.log(
        `Dear ${name} ${surname}, we are delighted to inform you that you have met the minimum requirements to join our free programming course.`
      );
    } else if (Mathematics < MIN_MATH_SCORE && Science < MIN_SCIENCE_SCORE) {
      console.log(
        `Dear ${name} ${surname}, ${sorryMessage}, please apply again after a period of 3 months. `
      );
    } else if (
      (Mathematics < MIN_MATH_SCORE || Science < MIN_SCIENCE_SCORE) &&
      age < MAX_AGE_FOR_UPGRADE
    ) {
      console.log(
        `Dear ${name} ${surname}, ${sorryMessage}, however, you still have an opportunity to improve with us on our upgrading program on the subject(s) that you struggled with.`
      );
    } else {
      console.log(
        `Dear ${name} ${surname}, your age is above the minimum age.`
      );
    }
  } else {
    console.log(
      `Dear ${name} ${surname}, you are still below the minimum age to join our course.`
    );
  }
};

checkMinimumRequirements(person1);
console.log();
checkMinimumRequirements(person2);
console.log();
checkMinimumRequirements(person3);
console.log();
checkMinimumRequirements(person4);
