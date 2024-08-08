const updateStudentImmutably = (student) => {
  return {
    ...student,
    enrolled: !student.enrolled,
  };
};

const student = {
  id: 1,
  firstName: 'Ahmad',
  lastName: 'Salim',
  enrolled: false,
};

/** Add your code below */
const updatedStudent = updateStudentImmutably(student);
console.log(updatedStudent);
// Prints {
//   id: 1,
//   firstName: 'Ahmad',
//   lastName: 'Salim',
//   enrolled: true,
// };

console.log(student);
// Prints {
//   id: 1,
//   firstName: 'Ahmad',
//   lastName: 'Salim',
//   enrolled: false,
// };
