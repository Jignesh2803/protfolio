document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
    
    // Simulate a loading delay
    setTimeout(() => {
      loadingScreen.classList.add('slide-up');

      loadingScreen.addEventListener("transitionend", () => {
        loadingScreen.style.display = "none";
      })
      
      mainContent.classList.remove("hidden");
    }, 4000); // 4 seconds delay
  });

// Select the cursor element
const cursor = document.querySelector('.cursor');

// Add an event listener for mouse movement
document.addEventListener('mousemove', (e) => {
  const x = e.clientX; // Mouse X position
  const y = e.clientY; // Mouse Y position

  // Update cursor position
  cursor.style.transform = `translate(${x}px, ${y}px)`;
});


document.addEventListener("DOMContentLoaded", () => {
  // Select all progress elements
  const progressBars = document.querySelectorAll(".progress");

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animation by setting the width
          const progress = entry.target;
          const width = progress.getAttribute("data-width");

          progress.style.width = '0%';

          // Trigger the animation (delayed by a small timeout to reset)
          setTimeout(() => {
            progress.style.width = width;
          }, 50); // Adjust timeout to allow reset before animation

        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  // Observe each progress bar
  progressBars.forEach((bar) => observer.observe(bar));
});







const skillsSection1 = document.getElementById('skills');
document.getElementById('skills-link').addEventListener('click', (e) => {
     e.preventDefault(); // Prevent default anchor behavior
     skillsSection1.scrollIntoView({ behavior: 'smooth' });
})


// Define the sections
const homeSection = document.querySelector('.main-container');
const aboutSection = document.querySelector('.about-section');
const educationSection = document.querySelector('.education-section');

// Helper function to check if a section is in view
function isSectionInView(section) {
  const sectionPosition = section.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2; // Adjust this value to control when animation triggers
  return sectionPosition < screenPosition;
}

// Add scroll event listener
window.addEventListener('scroll', () => {
  // Check if the "About Me" section is in view
  if (isSectionInView(aboutSection)) {
    animateAboutMe(); // Trigger About Me animations or actions
  }

  // Check if the "Education" section is in view
  if (isSectionInView(educationSection)) {
    animateEducation(); // Trigger Education animations or actions
  }
});

// Animation for the About Me section
function animateAboutMe() {
  const aboutContent = aboutSection.querySelectorAll('.content-1'); // Replace '.content' with specific About Me elements
  aboutContent.forEach((item) => {
    item.classList.add('animate'); // Add the animation class
  });
}

// Animation for the Education section
function animateEducation() {
  const educationContent = educationSection.querySelectorAll('.content-1'); // Replace '.content' with specific Education elements
  educationContent.forEach((item) => {
    item.classList.add('animate'); // Add the animation class
  });
}


let aboutsection = document.getElementById("about-section")

document.getElementById('about-link').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  aboutsection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Skills section
});

let homesection = document.getElementById("home")
document.getElementById('home-link').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  homesection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Skills section
});

let educationsection = document.getElementById("education")
document.getElementById('education-link').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  educationsection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Skills section
});

let internship = document.getElementById("internship")
document.getElementById('internship-link').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  internship.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Skills section
});


let project = document.getElementById("projects")
document.getElementById('project-link').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  project.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Skills section
});

let contact = document.getElementById("contact")
document.getElementById('contact-link').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  contact.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Skills section
});


const internshipSection = document.querySelector('.internship');
const internshipCards = document.querySelectorAll('.internship-card');

window.addEventListener('scroll', () => {
  const sectionPosition = internshipSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
    internshipCards.forEach((card) => card.classList.add('animate'));
  }
});




document.addEventListener('DOMContentLoaded', function() {
  const projectsSection = document.getElementById('projects');
  const projectsContainer = document.querySelector('.projects-container');

  const handleScroll = () => {
    const sectionPosition = projectsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5; // Check when the section is 1.5 screens from the top

    if (sectionPosition < screenPosition) {
      projectsContainer.classList.add('show'); // Trigger the animation
      window.removeEventListener('scroll', handleScroll); // Remove the event listener once animation is triggered
    }
  };

  window.addEventListener('scroll', handleScroll); // Add scroll event listener
});


document.addEventListener('DOMContentLoaded', function() {
  const contactSection = document.getElementById('contact');

  const handleScroll = () => {
    const sectionPosition = contactSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5; // Trigger when the section is about 1.5 screens from the top

    if (sectionPosition < screenPosition) {
      contactSection.classList.add('show'); // Trigger the animation
      window.removeEventListener('scroll', handleScroll); // Remove the event listener once triggered
    }
  };

  window.addEventListener('scroll', handleScroll); // Add scroll event listener
});

document.addEventListener('DOMContentLoaded', () => {
  const contactSection = document.getElementById('contact');

  const showContactSection = () => {
    const sectionPosition = contactSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.3; // Trigger when section is within view

    if (sectionPosition < screenHeight) {
      contactSection.classList.add('show'); // Add 'show' class for animation
      window.removeEventListener('scroll', showContactSection); // Trigger only once
    }
  };

  window.addEventListener('scroll', showContactSection);
});










