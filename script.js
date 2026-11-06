// This example stays on the page: no storage, tracking, or network calls.
const exampleTasks = [...document.querySelectorAll('.demo-task input')];
const exampleStatus = document.getElementById('demo-status');
function updateExample() {
  const done = exampleTasks.filter((task) => task.checked).length;
  exampleStatus.textContent = `${done} OF ${exampleTasks.length} LITTLE THINGS DONE`;
}
exampleTasks.forEach((task) => task.addEventListener('change', updateExample));
updateExample();
