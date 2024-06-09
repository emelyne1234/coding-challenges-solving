const closeButton = document.querySelector(".close-btn");
const modal = document.getElementById("imageModal");

function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modalImg.src = imgElement.src;
  modal.classList.remove("hidden");
}

function closeModal(event) {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
}

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
