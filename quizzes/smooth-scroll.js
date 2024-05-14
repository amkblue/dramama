const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       console.log(entry)
       if (entry.isIntersecting){
          entry.target.classList.add('show');
          }
       else {
          entry.target.classList.remove('show');
       }
     });
 });
 
 const containerElements = document.querySelectorAll('.container-1, .container-2, .container-3, .container-4, footer');
 containerElements.forEach((el) => observer.observe(el));