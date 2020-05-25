trackbarBotton.onmousedown = function (event) {
  event.preventDefault();

  let shiftX = event.clientX - trackbarBotton.getBoundingClientRect().left;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    let newLeft =
      event.clientX - shiftX - trackbarLine.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }

    let rightEdge = trackbarLine.offsetWidth - trackbarBotton.offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    trackbarBotton.style.left = newLeft + "px";
  }

  function onMouseUp() {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }
};

trackbarBotton.ondragstart = function () {
  return false;
};
