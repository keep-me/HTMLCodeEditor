const htmlInput = document.getElementById("htmlInput");
const cssInput = document.getElementById("cssInput");
const jsInput = document.getElementById("jsInput");
const preview = document.getElementById("preview");
const runBtn = document.getElementById("runBtn");

runBtn.onclick = execute;

function execute() {
  const htmlCode = htmlInput.value;
  const cssCode = cssInput.value;
  const jsCode = jsInput.value;

  const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
${cssCode}
  </style>
</head>
<body>
${htmlCode}
  <script>
${jsCode}
  <\/script>
</body>
</html>
  `;

  preview.srcdoc = fullHtml;
}
