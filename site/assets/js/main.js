/**
 * BIT Index Tabula — Main JavaScript
 * Interactions and enhancements for the research showcase
 */

(function() {
  'use strict';

  // ============================================
  // Navigation Toggle
  // ============================================
  
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.setAttribute(
        'aria-expanded', 
        navLinks.classList.contains('active')
      );
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // ============================================
  // Scroll Effects
  // ============================================
  
  const nav = document.querySelector('.top-nav');
  let lastScrollY = window.scrollY;
  let ticking = false;
  
  function updateNav() {
    const scrollY = window.scrollY;
    
    // Add shadow on scroll
    if (scrollY > 10) {
      nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
    
    lastScrollY = scrollY;
    ticking = false;
  }
  
  if (nav) {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    });
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without scrolling
        history.pushState(null, null, targetId);
      }
    });
  });

  // ============================================
  // Intersection Observer for Animations
  // ============================================
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe research cards and other animated elements
  document.querySelectorAll('.research-card, .stat-card, .domain-card').forEach(el => {
    el.classList.add('fade-in');
    fadeInObserver.observe(el);
  });
  
  // Add CSS for fade-in animation
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-in-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .research-card.fade-in:nth-child(2) { transition-delay: 0.1s; }
    .research-card.fade-in:nth-child(3) { transition-delay: 0.2s; }
    .research-card.fade-in:nth-child(4) { transition-delay: 0.3s; }
    .research-card.fade-in:nth-child(5) { transition-delay: 0.4s; }
    .research-card.fade-in:nth-child(6) { transition-delay: 0.5s; }
    .stat-card.fade-in:nth-child(2) { transition-delay: 0.1s; }
    .stat-card.fade-in:nth-child(3) { transition-delay: 0.2s; }
    .stat-card.fade-in:nth-child(4) { transition-delay: 0.3s; }
    .domain-card.fade-in:nth-child(2) { transition-delay: 0.1s; }
    .domain-card.fade-in:nth-child(3) { transition-delay: 0.15s; }
    .domain-card.fade-in:nth-child(4) { transition-delay: 0.2s; }
    .domain-card.fade-in:nth-child(5) { transition-delay: 0.25s; }
    .domain-card.fade-in:nth-child(6) { transition-delay: 0.3s; }
  `;
  document.head.appendChild(style);

  // ============================================
  // Research Card Hover Effects
  // ============================================
  
  document.querySelectorAll('.research-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // ============================================
  // SVG Symbol Animation
  // ============================================
  
  const symbiosisVisual = document.querySelector('.symbiosis-visual');
  
  if (symbiosisVisual) {
    // Add subtle pulse to the center H=1
    const centerText = symbiosisVisual.querySelector('text:last-of-type');
    if (centerText) {
      let scale = 1;
      let growing = true;
      
      function pulseAnimation() {
        if (growing) {
          scale += 0.002;
          if (scale >= 1.05) growing = false;
        } else {
          scale -= 0.002;
          if (scale <= 1) growing = true;
        }
        
        centerText.style.transform = `scale(${scale})`;
        centerText.style.transformOrigin = 'center';
        requestAnimationFrame(pulseAnimation);
      }
      
      // Uncomment to enable pulse animation
      // pulseAnimation();
    }
  }

  // ============================================
  // Scroll Indicator
  // ============================================
  
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
      } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
      }
    });
    
    scrollIndicator.addEventListener('click', () => {
      const aboutSection = document.querySelector('.section-about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    scrollIndicator.style.cursor = 'pointer';
  }

  // ============================================
  // KaTeX Rendering (if available)
  // ============================================
  
  if (typeof renderMathInElement !== 'undefined') {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false
    });
  }

  // ============================================
  // Table of Contents Active State
  // ============================================
  
  const tocLinks = document.querySelectorAll('.toc-list a');
  const sections = [];
  
  tocLinks.forEach(link => {
    const sectionId = link.getAttribute('href').slice(1);
    const section = document.getElementById(sectionId);
    if (section) {
      sections.push({ link, section });
    }
  });
  
  if (sections.length > 0) {
    const tocObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tocLinks.forEach(link => link.classList.remove('active'));
          const activeLink = sections.find(s => s.section === entry.target);
          if (activeLink) {
            activeLink.link.classList.add('active');
          }
        }
      });
    }, {
      rootMargin: '-80px 0px -50% 0px',
      threshold: 0
    });
    
    sections.forEach(({ section }) => {
      tocObserver.observe(section);
    });
  }

  // ============================================
  // Copy Link Functionality
  // ============================================
  
  document.querySelectorAll('h2[id], h3[id]').forEach(heading => {
    heading.style.cursor = 'pointer';
    heading.title = 'Click to copy link';
    
    heading.addEventListener('click', async () => {
      const url = `${window.location.origin}${window.location.pathname}#${heading.id}`;
      
      try {
        await navigator.clipboard.writeText(url);
        
        // Visual feedback
        const originalText = heading.textContent;
        heading.textContent = '✓ Link copied!';
        heading.style.color = 'var(--color-complete)';
        
        setTimeout(() => {
          heading.textContent = originalText;
          heading.style.color = '';
        }, 1500);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    });
  });

  // ============================================
  // Print Functionality
  // ============================================
  
  document.querySelectorAll('.btn-print, [data-action="print"]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.print();
    });
  });

  // ============================================
  // External Link Handler
  // ============================================
  
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    // Only for external links
    if (link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // ============================================
  // Console Easter Egg
  // ============================================
  
  console.log(`
  ╔═══════════════════════════════════════════════════════╗
  ║                                                       ║
  ║           BIT Index Tabula — Research Corpus          ║
  ║                                                       ║
  ║              H = αH_human + βH_AI                     ║
  ║                  α + β = 1                            ║
  ║                                                       ║
  ║               H = 1 → Lawful State                    ║
  ║                                                       ║
  ║   "The universe is not only queerer than we          ║
  ║    suppose, but queerer than we can suppose."        ║
  ║                         — J.B.S. Haldane              ║
  ║                                                       ║
  ║   https://bitwiki.org                                 ║
  ╚═══════════════════════════════════════════════════════╝
  `);

  // ============================================
  // Prefers Reduced Motion
  // ============================================
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('fade-in-visible');
    });
    
    const animatedElements = document.querySelectorAll('[style*="animation"]');
    animatedElements.forEach(el => {
      el.style.animation = 'none';
    });
  }

})();
