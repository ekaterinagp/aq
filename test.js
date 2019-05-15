
    
    let itemClassName = "client boxStyle",
        clients = document.querySelectorAll(".client"),
        totalClients = clients.length,
        slide = 0,
        moving = true; 
  
     function setInitialClasses() {
        clients[totalClients - 1].classList.add("prev");
      clients[0].classList.add("active");
      clients[1].classList.add("next");
    }
  
    // Set click events to navigation buttons
  
    function setEventListeners() {
    const nextBtn = document.querySelector("arrowRight");
    const  prevBtn= document.querySelector("arrowLeft");
  
      nextBtn.addEventListener('click', moveNext);
      prevBtn.addEventListener('click', movePrev);
    }
  
    // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
    // function disableInteraction() {
    //   moving = true;
    //   setTimeout(function(){
    //     moving = false
    //   }, 500);
    // }
  
    function moveCarouselTo(slide) {
  
    //   if(!moving) {
    //     disableInteraction();
  
        // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
        let newPrevious = slide - 1,
            newNext = slide + 1,
            oldPrevious = slide - 2,
            oldNext = slide + 2;
  
        // Test if carousel has more than three clients
        if ((totalClients - 1) > 3) {
  
          // Checks if the new potential slide is out of bounds and sets slide numbers
          if (newPrevious <= 0) {
            oldPrevious = (totalClients - 1);
          } else if (newNext >= (totalClients - 1)){
            oldNext = 0;
          }
  
          // Check if current slide is at the beginning or end and sets slide numbers
          if (slide === 0) {
            newPrevious = (totalClients - 1);
            oldPrevious = (totalClients - 2);
            oldNext = (slide + 1);
          } else if (slide === (totalClients -1)) {
            newPrevious = (slide - 1);
            newNext = 0;
            oldNext = 1;
          }
  
          // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.
  
          // Based on the current slide, reset to default classes.
          clients[oldPrevious].className = itemClassName;
          clients[oldNext].className = itemClassName;
  
          // Add the new classes
          clients[newPrevious].className = itemClassName + " prev";
          clients[slide].className = itemClassName + " active";
          clients[newNext].className = itemClassName + " next";
        }
      }
    // }
  
    function moveNext() {
    //   if (!moving) {
        if (slide === (totalClients - 1)) {
          slide = 0;
        } else {
          slide++;
        }
        moveCarouselTo(slide);
    //   }
    }
  
    function movePrev() {
  
      // Check if moving
    //   if (!moving) {
  
        // If it's the first slide, set as the last slide, else -1
        if (slide === 0) {
          slide = (totalClients - 1);
        } else {
          slide--;
        }
  
        // Move carousel to updated slide
        moveCarouselTo(slide);
    //   }
    }
  
    function initCarousel() {
      setInitialClasses();
      setEventListeners();
    //   moving = false;
    }
  
  