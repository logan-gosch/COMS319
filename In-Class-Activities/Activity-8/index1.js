// Exercise 1
const maxOfTwo = (n1, n2) => {
  return n1 > n2 ? n1 : n2;
};

// Exercise 2
const maxOfArray = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = maxOfTwo(max, arr[i]);
  }
  return max;
};

// Exercise 3
const movie = {
    title: 'Some movie',
    releaseYear: 2024,
    rating: 5,
    director: 'Some director'
};

const showProperties = (movie) => {
    console.log('List of Keys:');
    for (let key in movie) {
        console.log(key);
    }
    console.log('List of Values:');
    for (i = 0; i < Object.keys(movie).length; i++) {
        console.log(movie[Object.keys(movie)[i]]);
    }
}

// Exercise 4
const calculateCircleArea = (radius) => {
    return Math.PI * radius * radius;
};

const circle = {
    radius: 2,
    area: calculateCircleArea(2)
};

// Exercise 7
const grades = {
    math: 85,
    science: 90,
    history: 75,
    literature: 88
};

const calculateAverageGrade = (grades) => {
    let sum = 0;
    for (let key in grades) {
        sum += grades[key];
    }
    let avg = sum / Object.keys(grades).length;
    // console.log('Average Grade: ' + avg);
    return avg;
}

// Exercise 8
const students = [
    {
        Fer: {
            math: 85,
            science: 90,
            history: 75,
            literature: 88
        }
    },
    {
        Alex: {
            math: 99,
            science: 97,
            history: 94,
            literature: 90
        }
    },
    {
        Mary: {
            math: 79,
            science: 72,
            history: 81,
            literature: 79
        }
    }
];

const calcAverageGradePerStudent = (listOfStudents) => {
    let gradeAverages = {};
    for (i = 0; i < listOfStudents.length; i++) {
        let student = listOfStudents[Object.keys(listOfStudents)[i]];
        let studentGrades = student[Object.keys(student)];
        const studentName = Object.keys(student)[0];

        gradeAverages = {...gradeAverages, [studentName]: calculateAverageGrade(studentGrades)};
        
    }
    console.log(gradeAverages);
}
