/* VANTA BACKGROUND INIT — desktop only for performance */
if (window.innerWidth > 768) {
  VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x0d0a1f,
    shininess: 40.00,
    waveHeight: 18.00,
    waveSpeed: 0.50,
    zoom: 0.75
  });
}

/* WELCOME INTRO */
document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('welcome-intro');
  if (intro) {
    document.body.style.overflow = 'hidden'; // Lock scroll during intro
    
    setTimeout(() => {
      intro.classList.add('hide'); // Trigger fade out
      document.body.style.overflow = ''; // Unlock scroll
      
      // Remove from DOM after fade out transition (0.8s)
      setTimeout(() => {
        intro.remove();
      }, 800);
    }, 5500);
  }
});

AOS.init({ once: true, offset: 80, duration: 700 });

/* NAVBAR SCROLL */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

/* SCROLLSPY & NAV INDICATOR */
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a:not(.btn-nav)');
const indicator = document.querySelector('.nav-indicator');

function updateNavIndicator() {
  let current = '';
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150; // offset for sticky navbar
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  // If at bottom of page, active contact
  if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 50) {
    current = 'contact';
  }

  let activeItem = null;
  navItems.forEach(a => {
    a.classList.remove('active-link');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active-link');
      activeItem = a;
    }
  });

  if (activeItem && window.innerWidth > 900) {
    indicator.style.width = `${activeItem.offsetWidth}px`;
    indicator.style.left = `${activeItem.offsetLeft}px`;
    indicator.classList.add('active');
  } else {
    indicator.classList.remove('active');
  }
}

window.addEventListener('scroll', updateNavIndicator);
window.addEventListener('resize', updateNavIndicator);
window.addEventListener('load', updateNavIndicator);

/* MOBILE MENU */
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
  });
});

/* 3D PARALLAX GLASS TILT */
document.querySelectorAll('.glass-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate between -8 and 8 degrees depending on mouse position
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
  });
});

/* DYNAMIC PROJECT BACKGROUND */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const accent = card.getAttribute('data-accent');
    if (accent) {
      document.body.style.setProperty('--accent-dim', accent);
    }
  });
  card.addEventListener('mouseleave', () => {
    document.body.style.removeProperty('--accent-dim');
  });
});

/* AI WORKFLOW TABS */
const tabBtns = document.querySelectorAll('.ai-tab-btn');
const tabPanels = document.querySelectorAll('.ai-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    
    btn.classList.add('active');
    const targetId = `tab-${btn.getAttribute('data-tab')}`;
    document.getElementById(targetId).classList.add('active');
  });
});
