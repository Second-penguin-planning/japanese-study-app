document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("surveyForm");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

const data = {
currentLevel: document.getElementById("currentLevel").value,
targetLevel: document.getElementById("targetLevel").value,
period: document.getElementById("period").value,
weeklyDays: document.getElementById("weeklyDays").value,
dailyTime: document.getElementById("dailyTime").value,
strength: document.getElementById("strength").value,
motivation: document.getElementById("motivation").value
};

localStorage.setItem("studyData", JSON.stringify(data));
window.location.href = "result.html";
});
}

const resultDiv = document.getElementById("result");

if(resultDiv){
const data = JSON.parse(localStorage.getItem("studyData"));

let focusArea = "Balanced Study";

if(data.motivation === "high"){
focusArea = "Intensive Daily Practice Plan";
} else if(data.dailyTime < 30){
focusArea = "Short Daily Study Plan";
}

resultDiv.innerHTML = `
<h2>Recommended Plan</h2>
<p><strong>Goal:</strong> ${data.currentLevel} → ${data.targetLevel}</p>
<p><strong>Period:</strong> ${data.period} months</p>
<p><strong>Weekly Study:</strong> ${data.weeklyDays} days</p>
<p><strong>Daily Study Time:</strong> ${data.dailyTime} minutes</p>
<p><strong>Main Focus:</strong> ${focusArea}</p>

<h3>Study Structure</h3>
<ul>
<li>Vocabulary & Kanji: 30%</li>
<li>Grammar: 30%</li>
<li>Listening & Conversation: 25%</li>
<li>Mock Test Practice: 15%</li>
</ul>

<h3>Next Step (Future Tool Integration)</h3>
<ul>
<li>Flashcard Tool</li>
<li>Weekly Test Generator</li>
<li>AI Conversation Practice</li>
</ul>
`;
}

});
