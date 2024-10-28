// RATINGS SCRIPTS FOR CAKES BY ESTELA
// RATINGS SCRIPTS FOR CAKES BY ESTELA
// RATINGS SCRIPTS FOR CAKES BY ESTELA
// RATINGS SCRIPTS FOR CAKES BY ESTELA
// RATINGS SCRIPTS FOR CAKES BY ESTELA
document.addEventListener("DOMContentLoaded", function () {
  const modals = document.querySelectorAll(".portfolio-modal");

  modals.forEach((modal) => {
    const slices = modal.querySelectorAll(".slice");
    const ratingValue = modal.querySelector(".rating-value");
    const reviewText = modal.querySelector(".review-text");
    const submitButton = modal.querySelector(".submit-review");
    const submittedRating = modal.querySelector(".submitted-rating span");
    const submittedReview = modal.querySelector(".submitted-review");
    const closeModalButton = modal.querySelector("#closeModal");
    const closeIcon = modal.querySelector(".close-modal");

    slices.forEach((slice) => {
      slice.addEventListener("click", function () {
        slices.forEach((s) => s.classList.remove("active"));

        this.classList.add("active");
        let previousSlice = this.previousElementSibling;
        while (previousSlice) {
          previousSlice.classList.add("active");
          previousSlice = previousSlice.previousElementSibling;
        }

        const rating = this.getAttribute("data-rating");
        ratingValue.innerText = rating;
      });
    });

    submitButton.addEventListener("click", function () {
      const rating = ratingValue.innerText;
      const review = reviewText.value.trim();

      if (rating === "0" || review === "") {
        alert("Please provide a rating and a review.");
      } else {
        submittedRating.innerText = rating;
        submittedReview.innerHTML = review
          ? "<strong>Review: </strong>" + review
          : "<em>No Review Submitted Yet</em>";

        reviewText.value = "";
      }
    });

    function resetModal() {
      slices.forEach((slice) => slice.classList.remove("active"));
      ratingValue.innerText = "0";
      reviewText.value = "";
      submittedRating.innerText = "0";
      submittedReview.innerHTML =
        "<strong>Review: </strong>No Review Submitted Yet";
    }

    closeModalButton.addEventListener("click", function () {
      resetModal();

      const modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    });

    closeIcon.addEventListener("click", function () {
      resetModal();
    });
  });
});
