<!-- Add this script just before the closing </body> tag -->
<script>
   // Function to show a notification when the "Read More" button is clicked
   function showNotification() {
      alert("Thank you for reading more!");
   }

   // Smooth scroll to sections when a navigation link is clicked
   const navLinks = document.querySelectorAll("nav a");
   navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
         event.preventDefault();
         const targetId = this.getAttribute("href");
         const targetSection = document.querySelector(targetId);
         if (targetSection) {
            const offsetTop = targetSection.offsetTop;
            window.scrollTo({
               top: offsetTop - 50, // Adjust the scroll position as needed
               behavior: "smooth"
            });
         }
      });
   });
</script>
