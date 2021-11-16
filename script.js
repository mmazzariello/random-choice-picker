const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

function createTags(tag) {
  const tagsArray = tag
    .split(",")
    .filter((oneTag) => oneTag.trim() !== "")
    .map((oneTag) => oneTag.trim());

  tagsEl.innerHTML = "";

  tagsArray.forEach((oneTag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = oneTag;
    tagsEl.appendChild(tagEl);

    console.log("ver", tagsEl);
  });
}
