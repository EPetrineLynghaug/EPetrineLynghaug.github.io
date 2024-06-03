function toggleContent(element) {
  var content = element.nextElementSibling;
  while (content) {
    if (content.tagName === "P" || content.tagName === "DIV") {
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    }
    content = content.nextElementSibling;
  }
}
