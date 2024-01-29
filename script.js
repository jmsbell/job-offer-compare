function compareJobs() {
  // Get values from Job 1
  const job1Salary = parseFloat(document.getElementById('job1Salary').value) || 0;
  const job1RSU = parseFloat(document.getElementById('job1RSU').value) || 0;
  const job1Bonus = parseFloat(document.getElementById('job1Bonus').value) || 0;
  const job1CommuteTime = parseFloat(document.getElementById('job1CommuteTime').value) || 0;
  const job1WorkHours = parseFloat(document.getElementById('job1WorkHours').value) || 0;

  // Get values from Job 2
  const job2Salary = parseFloat(document.getElementById('job2Salary').value) || 0;
  const job2RSU = parseFloat(document.getElementById('job2RSU').value) || 0;
  const job2Bonus = parseFloat(document.getElementById('job2Bonus').value) || 0;
  const job2CommuteTime = parseFloat(document.getElementById('job2CommuteTime').value) || 0;
  const job2WorkHours = parseFloat(document.getElementById('job2WorkHours').value) || 0;

  // Calculate total values for both jobs
  const totalJob1 = job1Salary + (job1RSU / 4) + job1Bonus;
  const totalJob2 = job2Salary + (job2RSU / 4) + job2Bonus;

  // Calculate rates per hour for both jobs
  const rateJob1 = totalJob1 / ((job1CommuteTime + job1WorkHours)*52);
  const rateJob2 = totalJob2 / ((job2CommuteTime + job2WorkHours)*52);

  // Display the result
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `<p>Job 1 Rate: $${rateJob1.toFixed(2)} per hour</p><p>Job 2 Rate: $${rateJob2.toFixed(2)} per hour</p>`;

  // Display the result overlay
  const resultOverlay = document.getElementById('resultOverlay');
  resultOverlay.style.display = 'flex';
}

function closeResultOverlay() {
  // Hide the result overlay
  const resultOverlay = document.getElementById('resultOverlay');
  resultOverlay.style.display = 'none';
}
