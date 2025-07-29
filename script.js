// 🚀 Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields.");
    e.preventDefault();
  } else if (!emailRegex.test(email)) {
    alert("📧 Please enter a valid email address.");
    e.preventDefault();
  } else {
    alert("✅ Message sent successfully!");
  }
});

// ✅ To-Do List Logic
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
