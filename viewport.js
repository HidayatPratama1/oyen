// In your HTML, before closing </body> or in a linked JS file
// This is a more robust alternative to 100vh if dvh doesn't fully solve it on older devices.
window.addEventListener("resize", setTrueVh);
window.addEventListener("orientationchange", setTrueVh);
window.addEventListener("load", setTrueVh);

function setTrueVh() {
  document.documentElement.style.setProperty(
    "--true-vh",
    `${window.innerHeight * 0.01}px`
  );
}
setTrueVh(); // Initial call
