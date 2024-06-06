function toggleContent(element) {
  var content = element.nextElementSibling;
  while (content && (content.tagName === "P" || content.tagName === "DIV")) {
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
    content = content.nextElementSibling;
  }
}
