//Define course information
const courseInfo = { 
  courseId: 321, 
  name: "JavaScript" 
};

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
      dueDate: '2024-11-03',
      pointsPossible: 200,
    },
    {
      assignmentId: 3,
      name: "HTML",
      dueDate: '2024-01-04',
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
const LearnerSubmissions = [
  { learnerId: 315, assignmentId: 1, submission: { submittedAt: '2024-11-01', score: 90 } },
  { learnerId: 320, assignmentId: 2, submission: { submittedAt: '2024-11-05', score: 70 } }
];

// Main function to process the learner data
function getLearnerData(courseInfo, assignmentGroups, LearnerSubmissions) {
  if (courseInfo.courseId !== assignmentGroups.courseId) {
    // If course and group do not match
    throw new Error("Info not valid"); // Throw an error if course IDs do not match
  }
  console.log("Course and assignment group IDs match.");

  const currentDate = new Date();  // Check the current date. This will let us know if it is late or not.

  // Use reduce to accumulate results for each learner. Acc stores the data
  const result = LearnerSubmissions.reduce((acc, submission) => {
    const learnerId = submission.learnerId;
    // using .find() to locate the specific assignments 
    const assignment = assignmentGroups.assignments.find(a => a.assignmentId === submission.assignmentId);

    // Skip if assignment is not found or is not yet due
    if (!assignment || new Date(assignment.dueDate) > currentDate) {
      return acc;
    }

    // Initialize learner entry in acc if it doesn't exist
    if (!acc[learnerId]) {
      acc[learnerId] = { id: learnerId, totalScore: 0, totalPoints: 0, avg: 0 };
    }

    // Calculate score and apply late penalty if necessary
    let score = submission.submission.score;
    const isLate = new Date(submission.submission.submittedAt) > new Date(assignment.dueDate);
    if (isLate) {
      console.log(`Applying late penalty for learner ${learnerId} on assignment ${assignment.assignmentId}`);
      score -= assignment.pointsPossible * 0.1; // Deduct 10% for late submission
    }

    // Calculate and store percentage score for this assignment
    const percentage = score / assignment.pointsPossible;
    acc[learnerId][assignment.assignmentId] = percentage;

    // Update total score and points for average calculation
    acc[learnerId].totalScore += score;
    acc[learnerId].totalPoints += assignment.pointsPossible;

    // Update average score
    acc[learnerId].avg = acc[learnerId].totalScore / acc[learnerId].totalPoints;

    return acc;
  }, {}); // Start with an empty object as the initial value

  return result;
}

// Call the function and log the result
try {
  const result = getLearnerData(courseInfo, assignmentGroups, LearnerSubmissions);
  console.log("Final result:", result);
} catch (error) {
  console.error("An error occurred:", error.message);
}