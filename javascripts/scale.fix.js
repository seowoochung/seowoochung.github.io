var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
function toggleAbstract(element) {
  var abstractSpan = element.nextElementSibling;
  var abstractId = "abstract" + Array.from(element.closest('p').parentNode.children).indexOf(element.closest('p')) + 1;
  var abstract = document.getElementById(abstractId);
  
  if (abstract.style.display === "none" || abstract.style.display === "") {
    abstract.style.display = "block";
  } else {
    abstract.style.display = "none";
  }
}
