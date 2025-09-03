var typed = new Typed('#text', {
    strings: ["web developer", "Ui/Ux designer" ,"Data Analyst"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

 function validateForm() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      if (name === "") {
        alert("Please enter your name");
        return false;
      }

      if (email === "") {
        alert("Please enter your email");
        return false;
      }

      if (message === "") {
        alert("Please type a message");
        return false;
      }

      alert("Form submitted successfully!");
      return true;
    }

     document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('menuBtn');
  const mobile = document.getElementById('mobileNav');

  btn.addEventListener('click', () => {
    mobile.classList.toggle('hidden');
  });
});

