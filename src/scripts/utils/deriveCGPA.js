const deriveCGPA = (gpaArr) => {
  let sumGPA = 0;
  const cgpaArr = [];
  gpaArr.forEach((gpa, i) => {
    sumGPA += gpa;
    cgpaArr.push(parseFloat((sumGPA / (i + 1)).toFixed(2), 10));
  });
  return cgpaArr;
};

export default deriveCGPA;
