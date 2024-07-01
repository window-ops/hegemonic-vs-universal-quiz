const quizData = [
  {
    question: "How should the ICC handle cases where state cooperation is not forthcoming?",
    answers: ["The ICC should have the power to impose sanctions or other penalties on non-cooperative states.", "The ICC should seek diplomatic solutions with non-cooperative states before resorting to penalties.", "The ICC should avoid imposing penalties on states altogether, as it may harm international relations.", "The ICC should defer to national courts in handling cases within their jurisdiction, even if it means less accountability."],
    points: [2, 1, -1, -2]
  },
  {
    question: "Should the ICC prosecutor have the ability to initiate investigations independently, or only upon request from a state party or the UN Security Council?",
    answers: ["The ICC prosecutor should have the independence to initiate investigations without external interference.", "The ICC prosecutor should require approval from a panel of judges before launching an investigation.", "The ICC prosecutor's powers should be limited to cases referred by state parties or the UN Security Council.", "The ICC prosecutor should not have the authority to initiate investigations at all."],
    points: [2, 1, -1, -2]
  },
  {
    question: "What role should civil society play in the work of the ICC?",
    answers: ["Civil society organizations should have full access to ICC proceedings and be able to submit evidence and briefs.", "The ICC should actively engage with civil society organizations to ensure their perspectives are represented.", "Civil society organizations should be allowed to observe ICC proceedings but not participate directly.", "Civil society organizations should be excluded from ICC proceedings entirely."],
    points: [2, 1, -1, -2]
  },
  {
    question: "Should the ICC have jurisdiction over crimes committed by military personnel during armed conflicts?",
    answers: ["Yes, the ICC should hold military personnel accountable for any crimes they commit, regardless of context.", "Yes, but only if the state involved has ratified the Rome Statute and consents to ICC jurisdiction.", "No, military personnel should be subject to domestic laws and tribunals alone.", "No, the ICC should focus solely on crimes committed by state leaders and politicians."],
    points: [2, 1, -1, -2]
  },
  {
    question: "Should ICC hearings be open to the public or closed to protect sensitive information?",
    answers: ["ICC hearings should always be open to the public unless there is a compelling reason to close them.", "ICC hearings should generally be open to the public but may be closed in certain circumstances.", "ICC hearings should be closed to the public except in exceptional cases.", "ICC hearings should never be open to the public under any circumstances."],
    points: [2, 1, -1, -2]
  },
  {
    question: "Should the ICC publish its decisions and reasoning online for public scrutiny?",
    answers: ["Yes, all ICC decisions and reasoning should be published online immediately after delivery.", "Yes, but only selective portions of ICC decisions and reasoning should be made available online.", "Only summaries of ICC decisions and reasoning should be made available to the public.", "No, ICC decisions and reasoning should remain confidential."],
    points: [2, 1, -1, -2]
  },
  {
    question: "Should the identities of victims and witnesses be protected during ICC trials?",
    answers: ["No, the ICC should prioritize transparency above all else.", "Yes, but only in certain situations where there is a risk of retaliation against victims and witnesses.", "Yes, the ICC should take every possible measure to protect the identities of victims and witnesses.", "Victims and witnesses should not be called to testify in ICC trials at all."],
    points: [2, 1, -1, -2]
  },
  {
    question: "Should NGOs and other interested groups be permitted to attend ICC meetings and provide input?",
    answers: ["Yes, NGOs and other interested groups should be encouraged to attend ICC meetings and provide input.", "Yes, but only if they register in advance and adhere to strict guidelines.", "No, ICC meetings should be restricted to member states and official observers.", "No, ICC meetings should be completely closed to outside involvement."],
    points: [2, 1, -1, -3]
  },
  {
    question: "Should the ICC prioritize investigating crimes committed by powerful states, even if it risks alienating those states?",
    answers: ["Yes, the ICC should investigate all credible allegations of crimes, regardless of the perpetrator's power or status.", "Yes, but the ICC should tread carefully when investigating powerful states to avoid unnecessary conflict.", "No, the ICC should primarily focus on investigating crimes committed by weak or failed states.", "No, the ICC should avoid investigating powerful states altogether to maintain good relationships."],
    points: [2, -1, -2, -3]
  },
  {
    question: "Should the ICC Prosecutor be appointed by the United Nations Security Council or elected by the Assembly of States Parties?",
    answers: ["Elected by the Assembly of States Parties to ensure greater representation and independence.", "Appointed by the United Nations Security Council, but with input from the Assembly of States Parties.", "Appointed by the United Nations Security Council with no input from the Assembly of States Parties.", "Selected through a process determined by major world powers."],
    points: [2, -1, -2, -3]
  },
  {
    question: "Should the ICC rely more heavily on Western legal traditions or incorporate diverse legal systems into its practice?",
    answers: ["Incorporate diverse legal systems and practices to reflect the global nature of the court.", "Ignore legal traditions altogether and base decisions purely on political considerations.", "Rely primarily on Western legal traditions while remaining open to incorporating elements of other legal systems.", "Rely exclusively on Western legal traditions to ensure consistency and predictability."],
    points: [2, -1, -2, -3]
  },
  {
    question: "Should the ICC prioritize investigations based on geopolitical considerations or objective criteria?",
    answers: ["Objective criteria such as gravity, scale, and impact of the crime.", "A combination of both geopolitical considerations and objective criteria.", "Geopolitical considerations, such as pressure from major world powers.", "Prioritize investigations based solely on the interests of the most powerful states."],
    points: [2, -1, -2, -3]
  },
  {
    question: "Should the ICC prioritize quantity or quality of investigations and prosecutions?",
    answers: ["Quality of investigations and prosecutions, even if it results in fewer total cases.", "Balance between quantity and quality of investigations and prosecutions.", "Quantity of investigations and prosecutions, even if it results in lower conviction rates.", "Avoid independent investigations and prosecutions altogether to prevent potential errors or miscarriages of justice."],
    points: [2, 1, -1, -2]
  },
  {
    question: "Should the ICC use alternative dispute resolution mechanisms instead of traditional criminal trials?",
    answers: ["Use alternative dispute resolution mechanisms when appropriate, but prioritize traditional criminal trials when necessary.", "Use alternative dispute resolution mechanisms whenever possible, even if it means sacrificing some degree of accuracy or fairness.", "Rely solely on traditional criminal trials and avoid using alternative dispute resolution mechanisms.", "Do not prosecute anyone, as it could lead to unintended consequences."],
    points: [2, 1, -1, -2]
  },
  {
    question: "Should the ICC collaborate with regional human rights bodies or operate independently?",
    answers: ["Collaborate with regional human rights bodies when appropriate, but maintain independent decision-making authority.", "Coordinate closely with regional human rights bodies and follow their recommendations when possible.", "Operate independently of regional human rights bodies and make decisions based solely on the Rome Statute.", "Refuse to cooperate with any external actors, including regional human rights bodies."],
    points: [2, 1, -1, -2]
  },
  {
    question: "Should the ICC allocate resources towards prevention efforts or solely focus on punishment?",
    answers: ["Allocate significant resources towards preventing future crimes and promoting peace and security.", "Focus mainly on punishment while also dedicating some resources towards prevention efforts.", "Focus solely on punishment and refrain from engaging in prevention efforts.", "Do not intervene independently in any situation, as intervention could exacerbate existing problems."],
    points: [2, 1, -1, -2]
  }
];

const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

let LeftPoints = 0;
let rightPoints = 0;
let isQuizSubmitted = false;
let completedQuestions = 0;
const totalQuestions = quizData.length;

function displayQuestions() {
  quizData.forEach((data, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question-container');
    questionDiv.innerHTML = `
      <div class="question">${data.question}</div>
      <div class="answers">
        ${data.answers.map((answer, i) => `<label><input type="radio" name="q${index}" value="${data.points[i]}" onclick="updateCompletedQuestions()">${answer}</label>`).join('')}
      </div>
    `;
    quizForm.appendChild(questionDiv);
  });
}

function updateCompletedQuestions() {
  completedQuestions = document.querySelectorAll('input:checked').length;
}

function calculateResults() {
  if (completedQuestions < totalQuestions) {
    alert('Please answer all the questions before submitting the quiz.');
    return;
  }

  const formData = new FormData(quizForm);

  for (const entry of formData.entries()) {
    if (entry[1] > 0) {
      rightPoints += parseInt(entry[1]);
    } else if (entry[1] < 0) {
      LeftPoints += Math.abs(parseInt(entry[1]));
    }
  }

  const totalPoints = rightPoints + LeftPoints;
  const inverseTotalPoints = (rightPoints + LeftPoints) * -1;
  const leftPercentage = ((LeftPoints / totalPoints) * 100).toFixed(2);
  const rightPercentage = ((rightPoints / totalPoints) * 100).toFixed(2);
  const indexValue = rightPercentage - leftPercentage;

  if (totalPoints < -10 && totalPoints > -20) {
    resultDiv.innerHTML = `You are Hegemonic, at ${inverseTotalPoints} out 36 negative points.`;

    // Disable the quiz form after submission
    quizForm.querySelectorAll('input').forEach(input => {
      input.disabled = true;
    });
    submitButton.disabled = true;
    submitButton.style.display = 'none';
    isQuizSubmitted = true;
  }
  else if (totalPoints > 10 && totalPoints < 20) {
    resultDiv.innerHTML = `You are Universal, at ${totalPoints} out 32 positive points.`;

    // Disable the quiz form after submission
    quizForm.querySelectorAll('input').forEach(input => {
      input.disabled = true;
    });
    submitButton.disabled = true;
    submitButton.style.display = 'none';
    isQuizSubmitted = true;
  }
  else if (totalPoints > -10 && totalPoints < 0) {
    resultDiv.innerHTML = `You are a Moderate Hegemonic, at ${inverseTotalPoints} out 36 negative points.`;

    // Disable the quiz form after submission
    
    quizForm.querySelectorAll('input').forEach(input => {
      input.disabled = true;
    });
    submitButton.disabled = true;
    submitButton.style.display = 'none';
    isQuizSubmitted = true;
  }
  else if (totalPoints < 10 && totalPoints > 0) {
    resultDiv.innerHTML = `You are a Moderate Universal, at ${totalPoints} out 32 positive points.`;

    // Disable the quiz form after submission
    quizForm.querySelectorAll('input').forEach(input => {
      input.disabled = true;
    });
    submitButton.disabled = true;
    submitButton.style.display = 'none';
    isQuizSubmitted = true;
  }
  else if (totalPoints < -20) {
    resultDiv.innerHTML = `You are a Radical Hegemonic, at ${inverseTotalPoints} out 36 negative points.`;

    // Disable the quiz form after submission
    
    quizForm.querySelectorAll('input').forEach(input => {
      input.disabled = true;
    });
    submitButton.disabled = true;
    submitButton.style.display = 'none';
    isQuizSubmitted = true;
  }
  else if (totalPoints > 20) {
    resultDiv.innerHTML = `You are a Radical Universal, at ${totalPoints} out 32 positive points.`;

    // Disable the quiz form after submission
    quizForm.querySelectorAll('input').forEach(input => {
      input.disabled = true;
    });
    submitButton.disabled = true;
    submitButton.style.display = 'none';
    isQuizSubmitted = true;
  }
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (isQuizSubmitted) {
    alert('You have already submitted the quiz.');
    return;
  }

  calculateResults();
});

displayQuestions();