

/* mouse movement for bg */
const bg = document.querySelector(".page-bg");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.3);
  const y = (e.clientY / window.innerHeight - 0.3);

  const moveX = x * 30; // adjust strength
  const moveY = y * 30;

  bg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
});