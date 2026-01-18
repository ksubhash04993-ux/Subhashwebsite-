const form = document.getElementById("resultForm");
const resultBox = document.getElementById("resultBox");
const resultData = document.getElementById("resultData");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const reg_no = document.getElementById("reg_no").value;
  const semester = document.getElementById("semester").value;

  resultBox.style.display = "block";
  resultData.textContent = "Loading...";

  try {
    const res = await fetch(
      "https://beu-result-backend-ol0k.onrender.com/api/result",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          reg_no: reg_no,
          sem: semester
        })
      }
    );

    const data = await res.json();

    if (data.success) {
      resultData.textContent = JSON.stringify(data, null, 2);
    } else {
      resultData.textContent = "Result not found";
    }
  } catch (error) {
    resultData.textContent = "Backend error or CORS issue";
  }
});
