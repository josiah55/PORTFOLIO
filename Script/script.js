//form validation  
const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const name = form.name.value.trim();
    if (name.length < 2) {
      e.preventDefault();
      alert("Name is too short!");
    }
  });

//blog for React and Vue Js
  document.getElementById('frameworkPoll').addEventListener('submit', function(e) {
    e.preventDefault();
    const choice = document.querySelector('input[name="framework"]:checked').value;
    document.getElementById('poll-result').innerHTML = `<strong>Thanks for voting!</strong> You chose: <em>${choice}</em>`;
    document.getElementById('poll-result').style.display = 'block';
    this.style.display = 'none';
  });

//
function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  timeElement.textContent = `Current Time: ${formattedTime}`;
  }
  
  // Initial call
  updateTime();
  // Update every second
setInterval(updateTime, 1000);


//bbbbbbb
const uploadForm = document.getElementById('uploadForm');
const photoUpload = document.getElementById('photoUpload');
const previewContainer = document.getElementById('previewContainer');
const previewImage = document.getElementById('previewImage');

photoUpload.addEventListener('change', () => {
  const file = photoUpload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      previewImage.src = e.target.result;
      previewContainer.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("This is a demo upload. To make it work, connect to a backend.");
});







