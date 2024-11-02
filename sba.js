
// Define course information
const courseInfo = { courseId: 321, name: "JavaScript" };

// Define assignment groups
const assignmentGroups = {
  groupId: 5,
  courseId: 321,
  assignments: [
    {
      assignmentId: 1,
      name: "Java",
      dueDate: '2024-11-02',
      pointsPossible: 100,
    },
    {
      assignmentId: 2,
      name: "CSS",
      dueDate: '2024-11-3',
      pointsPossible: 200,
    },
    {
      assignmentId: 3,
      name: "HTML",
      dueDate: '2024-1-04',
      pointsPossible: 150,
    },
    {
      assignmentId: 4,
      name: "React",
      dueDate: '2024-11-05',
      pointsPossible: 300,
    },
  ],
};

// Learners submission data
const LearnerSubmissions = [{
  learnerId: 315, assignmentId: 1, submission: {submittedAt: '2024-11-01', score: 90 }
}, {learnerId: 320, assignmentId: 2, submission: {submittedAt: '2024-11-05', score: 70}}]

// Main function to process the learner data
function getLearnerData(course, group, submission) {
  if (course.courseId !== group.courseId) {
    // Made a condition where course and group do not match
    throw new Error("Info not valid"); // Used throw new error to say that the infos do not match
  } console.log(getLearnerData);
}
  /* const currentDate = newDate();  // Checking if assignment is late and determining penalty
  const result = submission.reduce((acc, submission) => {
    const learnerId = submission.learnerId;
    const assignment = group.assignments.find(a => a.assignmentId === submission.assignmentId);
    // Using the reduce method to accumulate the results 

    if (!assignment || new Date(assignment.dueAt > currentDate)){
  if (!acc [learnerId]) {
  acc[learnerId] = {id: studentId , totalScore: 0, totalPoints: 0, avg: 0};
}} return acc;
}), {}}; 
    return 
console.log(getLearnerData); */
