// Smooth Navigation

document.querySelectorAll("nav a").forEach(link => {
  
  link.addEventListener("click", e => {
    
    e.preventDefault();
    
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      
      behavior: "smooth"
      
    });
    
  });
  
});

// Fade in Sections

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      
      entry.target.classList.add("show");
      
    }
    
  });
  
});

sections.forEach(section => {
  
  observer.observe(section);
  
});