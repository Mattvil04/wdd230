document.addEventListener("DOMContentLoaded", function () {
    const chapterInput = document.getElementById("chapterInput");
    const addChapterBtn = document.getElementById("addChapter");
    const chapterList = document.getElementById("chapterList");
  
    addChapterBtn.addEventListener("click", function () {
      const chapterValue = chapterInput.value.trim();
  
      if (chapterValue !== "") {
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
  
        li.textContent = chapterValue;
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
  
        deleteBtn.addEventListener("click", function () {
          chapterList.removeChild(li);
        });
  
        li.appendChild(deleteBtn);
        chapterList.appendChild(li);
  
        chapterInput.value = "";
        chapterInput.focus();
      } else {
        alert("Please enter a valid chapter before adding.");
        chapterInput.focus();
      }
    });
  });