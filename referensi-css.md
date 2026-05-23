/* Color Palette & Variables */
:root {
  --bg-dark: #0f0a1a;        /* Deep dark purple/black for background */
  --bg-card: rgba(25, 20, 38, 0.65); /* Glassmorphism card bg */
  --purple-pastel: #C8A2FF;  /* Pastel purple user requested */
  --purple-glow: rgba(200, 162, 255, 0.25);
  --text-white: #f5f5fa;
  --text-muted: #a59fb3;
  --glass-border: rgba(255, 255, 255, 0.08);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Outfit', sans-serif;
}

body {
  background: var(--bg-dark);
  color: var(--text-white);
  line-height: 1.6;
  overflow-x: hidden;
  width: 100%;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

/* Glassmorphism utility */
.glass-card {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px var(--purple-glow);
  border: 1px solid rgba(200, 162, 255, 0.3);
}

.accent {
  color: var(--purple-pastel);
  text-shadow: 0 0 10px var(--purple-glow);
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 10px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--purple-pastel);
  color: #0f0a1a;
  box-shadow: 0 4px 15px var(--purple-glow);
}

.btn-primary:hover {
  background: #b58fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(200, 162, 255, 0.4);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--purple-pastel);
  color: var(--purple-pastel);
}

.btn-outline:hover {
  background: var(--purple-glow);
  transform: translateY(-2px);
}

.btn-sm {
  padding: 6px 16px;
  font-size: 0.9rem;
}

.btn-large {
  padding: 14px 32px;
  font-size: 1.1rem;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(15, 10, 26, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--glass-border);
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-links a {
  color: var(--text-white);
  text-decoration: none;
  font-weight: 400;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--purple-pastel);
}

.btn-nav {
  border: 1px solid var(--purple-pastel);
  padding: 8px 20px !important;
  border-radius: 20px;
  color: var(--purple-pastel) !important;
}

.btn-nav:hover {
  background: var(--purple-glow);
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--purple-pastel);
}

/* Sections */
section {
  padding: 100px 5%;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 10px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 600;
}

/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 120px;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
}

.hero-text {
  flex: 1;
}

.subtitle {
  color: var(--text-muted);
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.hero-text h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 15px;
}

.hero-text h2 {
  font-size: 2rem;
  color: var(--text-muted);
  font-weight: 400;
  margin-bottom: 25px;
}

.hero-text p {
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 30px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
}

.social-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
  font-size: 1.2rem;
  text-decoration: none;
  transition: 0.3s;
}

.social-icon:hover {
  background: var(--purple-pastel);
  color: #0f0a1a;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px var(--purple-glow);
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  padding: 10px;
  background: linear-gradient(135deg, rgba(200, 162, 255, 0.5), transparent);
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top; /* Added to show the top part of the head/hair */
  border-radius: 50%;
  z-index: 2;
  position: relative;
}

.glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: var(--purple-pastel);
  filter: blur(80px);
  opacity: 0.3;
  z-index: 1;
  border-radius: 50%;
  animation: pulse 4s infinite alternate;
}

@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(1); }
  100% { transform: translate(-50%, -50%) scale(1.1); }
}

/* Experience */
.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 20px;
  height: 100%;
  width: 2px;
  background: var(--glass-border);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 60px;
}

.timeline-dot {
  position: absolute;
  left: 14px;
  top: 20px;
  width: 14px;
  height: 14px;
  background: var(--purple-pastel);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--purple-pastel);
}

.timeline-content {
  padding: 25px;
}

.date {
  color: var(--purple-pastel);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
}

.timeline-content h3 {
  font-size: 1.4rem;
  margin: 5px 0;
}

.timeline-content h4 {
  font-size: 1rem;
  color: var(--text-muted);
  font-weight: 400;
  margin-bottom: 15px;
}

.timeline-content p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* Skills */
.skill-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 25px;
  max-width: 900px;
  margin: 0 auto;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 15px;
  text-align: center;
}

.skill-card i {
  font-size: 3.5rem;
  margin-bottom: 15px;
  color: var(--purple-pastel);
  transition: all 0.3s ease;
}

.skill-card:hover i {
  transform: scale(1.1);
  color: var(--text-white);
}

.skill-card span {
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Projects */
.project-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
}

.project-img-wrapper {
  position: relative;
  height: 220px;
  overflow: hidden;
  border-bottom: 1px solid var(--glass-border);
}

.project-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img-wrapper img {
  transform: scale(1.05); /* Slight zoom on hover */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(15,10,26,0.95), transparent);
  display: flex;
  align-items: flex-end;
  padding: 15px;
  opacity: 1; 
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.badge {
  background: rgba(200, 162, 255, 0.15);
  border: 1px solid rgba(200, 162, 255, 0.3);
  color: var(--purple-pastel);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
}

.project-info {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-info h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.project-info p {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 20px;
  flex: 1;
}

.btn-group {
  display: flex;
  gap: 10px;
}

/* Certificates */
.certificate-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.certificate-card {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.cert-img {
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.cert-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
}

.certificate-card:hover .cert-img img {
  transform: scale(1.05);
}

.cert-info h3 {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.cert-info p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Contact */
.contact-box {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 60px 40px;
}

.contact-box h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.contact-box p {
  color: var(--text-muted);
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.contact-social {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.contact-social a {
  color: var(--text-white);
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  transition: 0.3s;
}

.contact-social a:hover {
  color: var(--purple-pastel);
  border-color: var(--purple-pastel);
  transform: translateY(-5px);
}

/* Footer */
footer {
  text-align: center;
  padding: 30px;
  border-top: 1px solid var(--glass-border);
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-text { order: 2; }
  .hero-image { order: 1; margin-bottom: 30px; }

  .hero-text h1 { font-size: 3rem; }
  .hero-text h2 { font-size: 1.5rem; }
  .hero-text p { margin: 0 auto 30px auto; }
  .social-links { justify-content: center; }
  .hero-buttons { justify-content: center; }
}

@media (max-width: 768px) {
  section {
    padding: 70px 5%;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .nav-links {
    position: absolute;
    top: 70px;
    right: 0;
    width: 60%;
    height: 100vh;
    background: rgba(15, 10, 26, 0.95);
    backdrop-filter: blur(15px);
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 25px;
    transform: translateX(100%);
    transition: 0.3s ease;
    border-left: 1px solid var(--glass-border);
  }

  .nav-links.show {
    transform: translateX(0);
  }

  .menu-toggle {
    display: block;
  }
  
  .timeline::before { left: 15px; }
  .timeline-item { padding-left: 45px; }
  .timeline-dot { left: 9px; }
  
  .image-wrapper { width: 250px; height: 250px; }
  
  .hero-text h1 { font-size: 2.5rem; }
  .hero-buttons { flex-direction: column; width: 100%; max-width: 250px; margin: 0 auto; gap: 15px; }
  .btn { text-align: center; }
  
  .contact-box {
    padding: 40px 20px;
  }
  .contact-box h2 {
    font-size: 2rem;
  }
}