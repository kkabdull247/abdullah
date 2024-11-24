// webnav animation

let webnav = gsap.timeline()
webnav.from(".webnav .logo", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
})
webnav.from(".webnav ul a", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})
gsap.from(".webnav .menu", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
})
// responsive nav  animation
document.getElementById("humburger").addEventListener("click", () => {
    gsap.from(".respnav .logo", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
    })

    gsap.from(".respnav .cross", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
    })

    gsap.from(".respnav ul a", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })
});

// hero-section animation

gsap.from(".hero-detail h2", {
    x: -1000,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.2
})
gsap.from(" .hero-btn", {
    x: -1000,
    opacity: 0,
    duration: 1,
    delay: 0.8
})
gsap.from(".hero-img-div img", {
    x: 1000,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})


// loader gsap

// gsap.from("#h1",{
//     x:-500,
//     duration:1,
//     delay:0.5
// })
// gsap.from("#logoimg",{
//     y:-500,
//     duration:1,
//     delay:1
// })

// setTimeout(() => {
//     document.getElementById("logo").style.display = "none";
// }, 3200);


// arrow hide show

window.addEventListener("scroll", () => {
    let verticalScrollpx = window.scrollY || window.pageYOffset
    let arrow = document.getElementById('up')

    if (verticalScrollpx < 100) {
        arrow.style.display = "none"
    }


    if (verticalScrollpx < 1600 && verticalScrollpx > 100) {
        // if(cardprod.length <7 ){
        arrow.style.display = "flex";
    }
})

// cursor mover
const cursor = document.getElementById("cursor");
let links = document.querySelectorAll("a"); // Get all links

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// Set speed of cursor movement (lower number = smoother, higher number = faster)
const speed = 8; // You can adjust this number to control the speed

// Smooth follow cursor movement
const smoothCursor = () => {
  cursorX += (mouseX - cursorX) / speed; // Adjust speed here
  cursorY += (mouseY - cursorY) / speed;

  cursor.style.transform = `translate(${cursorX - cursor.offsetWidth / 2}px, ${cursorY - cursor.offsetHeight / 2}px)`;

  requestAnimationFrame(smoothCursor); // Repeatedly call the function for smoothness
};

// Track mouse movement
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Initiate smooth cursor movement
smoothCursor();

// When hovering over a link, change cursor's appearance
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.style.backgroundColor = 'rgb(153, 255, 0)';  // Set cursor color to RGB value
    cursor.style.transform = 'scale(1.5)';  // Scale up cursor
    cursor.style.width = '80px';
    cursor.style.borderBottom = '5px solid white';
    cursor.style.height = '80px';
    cursor.style.boxShadow = '0 0 20px rgba(153, 255, 0, 0.8), 0 0 40px rgba(153, 255, 0, 0.5)';
  });

  link.addEventListener('mouseleave', () => {
    cursor.style.backgroundColor = 'rgb(153, 255, 0)';  // Revert to RGB color
    cursor.style.transform = 'scale(1)';  // Revert size
    cursor.style.border = 'none';
    cursor.style.width = '50px';
    cursor.style.height = '50px';
    cursor.style.boxShadow = '0 0 10px rgba(153, 255, 0, 0.7), 0 0 20px rgba(153, 255, 0, 0.5)';
  });
});

// GSAP animation for H2 hero
const words = ["Front-end Developer", "Designer", "Video Editor", "Content Creator"];
const h2 = document.querySelector('.animated-text');

gsap.set(h2, { opacity: 0 }); // Initially hide the h2 element

// Function to animate words sequentially
function animateWords() {
    let tl = gsap.timeline({ repeat: -1 });

    words.forEach((word, index) => {
        tl.to(h2, { opacity: 1, duration: 1 }) // Show the h2 element
          .to(h2, { opacity: 0, duration: 1, delay: 0.5 }); // Hide the h2 element

        if (index < words.length - 1) {
            tl.set(h2, { textContent: words[index + 1] }); // Set new text content
        } else {
            tl.set(h2, { textContent: words[0] }); // Loop back to the first word
        }
    });

    return tl;
}

animateWords(); // Start the animation

// only for searching

function animateButton() {
    const button = document.querySelector('.siri-button');
    button.classList.add('pulse-animation');
    setTimeout(() => {
        button.classList.remove('pulse-animation');
    }, 1000);
}

const startBtn = document.getElementById('start-btn');
const log = document.getElementById('log');
const voiceSelect = document.getElementById('voice-select');

let voices = [];

// Initialize Web Speech API for speech recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    logMessage(`You said: ${transcript}`);
    handleCommand(transcript);
};

recognition.onerror = function (event) {
    logMessage('Error occurred in recognition: ' + event.error);
    speak('Sorry, I encountered an error. Please try again.');
};

startBtn.addEventListener('click', () => {
    recognition.start();
    speak('Listening... Ask about me');
});

function logMessage(message) {
    const p = document.createElement('p');
    p.textContent = message;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
}

function handleCommand(command) {
    if (command.includes('open google')) {
        window.open('https://www.google.com', '_blank');
        speak('Opening Google');
    } else if (command.includes('open facebook')) {
        window.open('https://www.facebook.com/kkabdull247', '_blank');
        speak('Opening Facebook');
    } else if (command.includes('open youtube')) {
        window.open('https://youtube.com/@kkabdull247?si=mc4q7kKbmFDsRBts', '_blank');
        speak('Opening YouTube');
    } else if (command.includes('open instagram')) {
        window.open('https://www.instagram.com/kkabdull247', '_blank');
        speak('Opening Instagram');
    } else if (command.includes('open calculator')) {
        window.open('https://www.calculator.com', '_blank');
        speak('Opening Calculator');
        // leave it blank for not using search
    } else if (command.includes('search')) {
        const query = command.replace('search', '').trim();
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        speak(`Searching for ${query}`);
    } else if (command.includes('open portfolio')) {
        window.open('https://kkabdull247.github.io/Portfolio/', '_blank');
        speak('Opening portfolio');
    } else if (command.includes('open whatsapp')) {
        window.open('https://wa.me/+923331279569', '_blank');
        speak('Opening  Whatsapp');
    } else {
        speak('Command not recognized');
    }
}

function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }
    window.speechSynthesis.speak(utterance);
}

function handleSearch() {
    const searchInput = document.getElementById('search-input').value.trim();
    if (searchInput) {
        handleCommand(searchInput.toLowerCase());
        logMessage(`You entered: ${searchInput}`);
    } else {
        logMessage('Please enter a query.');
        speak('Please enter a query.');
    }
}

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;
populateVoiceList();





// icons animation


// gsap.from("#icons .social", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.5
// })




// about section animation 

// gsap.from(".about-detail", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
//     scrollTrigger: {
//         trigger: ".about-detail",
//         scroller: "body",
//         start: "top 150%",
//         end: "top 30%",
//         scrub: 2
//     }
// })
// gsap.from(".about-img-div img", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
//     scrollTrigger: {
//         trigger: ".about-img-div img",
//         scroller: "body",
//         start: "top 150%",
//         end: "top 30%",
//         scrub: 2,
//     }
// })


// services section animation 

// gsap.from(".services-outer .row .col", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     delay: 0.3,
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: ".services-outer .row .col",
//         scroller: "body",
//         start: "top 150%",
//         end: "top 30%",
//         scrub: 2,
//     }
// })



// skills section animation 

// gsap.from(".skill-outer .skills", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     scrollTrigger: {
//         trigger: ".skill-outer .skills progress",
//         scroller: "body",
//         start: "top 150%",
//         end: "top 30%",
//         scrub: 2,
//     }
// })


// project section animation


// gsap.from("#grid .griditems", {
//     scale:0,
//     opacity: 0,
//     duration: 5,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: "#grid .griditems",
//         scroller: "body",
//         start: "top 180%",
//         markers:true,
//         // end: "top -5%",
//         scrub: 2
//     }
// })

















