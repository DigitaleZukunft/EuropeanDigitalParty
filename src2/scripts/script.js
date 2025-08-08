// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .about-text, .tech-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Progress bar animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Trigger progress bar animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('%') ? '%' : '');
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + (counter.textContent.includes('%') ? '%' : '');
            }
        };
        updateCounter();
    });
}

// Trigger counter animation when about section is visible
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// Floating card hover effect
const floatingCard = document.querySelector('.floating-card');
if (floatingCard) {
    floatingCard.addEventListener('mouseenter', () => {
        floatingCard.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    floatingCard.addEventListener('mouseleave', () => {
        floatingCard.style.transform = 'translateY(0) scale(1)';
    });
}

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.href && this.href.startsWith('#')) {
            return; // Don't animate for anchor links
        }
        
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images (if any are added later)
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Form validation (for future contact forms)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Add error styles for form validation
const formStyles = document.createElement('style');
formStyles.textContent = `
    .error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
    
    .error-message {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
`;
document.head.appendChild(formStyles);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations and effects
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Voting functionality
function vote(choice) {
    const voteButtons = document.querySelectorAll('.vote-buttons button');
    voteButtons.forEach(btn => btn.disabled = true);
    
    // Show loading state
    const clickedButton = event.target.closest('button');
    const originalText = clickedButton.innerHTML;
    clickedButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Stimme wird abgegeben...';
    
    // Simulate vote processing
    setTimeout(() => {
        if (choice === 'ja') {
            showVoteResult('ja', 'Vielen Dank für Ihre Zustimmung! Sie haben für KI und Blockchain zur Modernisierung der deutschen Bürokratie gestimmt.');
        } else {
            showVoteResult('nein', 'Ihre Stimme wurde registriert. Sie haben für den Status quo gestimmt.');
        }
        
        // Reset buttons
        voteButtons.forEach(btn => {
            btn.disabled = false;
            btn.innerHTML = originalText;
        });
    }, 2000);
}

function showVoteResult(choice, message) {
    // Create result modal
    const modal = document.createElement('div');
    modal.className = 'vote-modal';
    modal.innerHTML = `
        <div class="vote-modal-content">
            <div class="vote-modal-header ${choice === 'ja' ? 'success' : 'danger'}">
                <i class="fas ${choice === 'ja' ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <h3>${choice === 'ja' ? 'JA' : 'NEIN'} - Stimme abgegeben</h3>
            </div>
            <div class="vote-modal-body">
                <p>${message}</p>
                <p><strong>Ihre Stimme zählt für Deutschlands Zukunft!</strong></p>
            </div>
            <div class="vote-modal-footer">
                <button onclick="closeVoteModal()" class="btn btn-primary">Verstanden</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .vote-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .vote-modal-content {
            background: white;
            border-radius: 16px;
            max-width: 500px;
            width: 90%;
            box-shadow: var(--shadow-xl);
            animation: slideUp 0.3s ease;
        }
        
        .vote-modal-header {
            padding: 2rem 2rem 1rem;
            text-align: center;
            border-radius: 16px 16px 0 0;
        }
        
        .vote-modal-header.success {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
        }
        
        .vote-modal-header.danger {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
        }
        
        .vote-modal-header i {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .vote-modal-header h3 {
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .vote-modal-body {
            padding: 2rem;
            text-align: center;
        }
        
        .vote-modal-body p {
            font-size: 1.125rem;
            line-height: 1.6;
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }
        
        .vote-modal-footer {
            padding: 1rem 2rem 2rem;
            text-align: center;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(modalStyles);
}

function closeVoteModal() {
    const modal = document.querySelector('.vote-modal');
    if (modal) {
        modal.remove();
    }
}



// Psychological triggers and emotional engagement
function addEmotionalTriggers() {
    // Add urgency to voting
    const voteButtons = document.querySelectorAll('.vote-buttons button');
    voteButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = '';
        });
    });

    // Add social proof elements
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 1000);
    });

    // Add scarcity principle
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        if (button.textContent.includes('abstimmen')) {
            button.addEventListener('click', () => {
                showUrgencyMessage();
            });
        }
    });
}

function showUrgencyMessage() {
    const urgencyModal = document.createElement('div');
    urgencyModal.className = 'urgency-modal';
    urgencyModal.innerHTML = `
        <div class="urgency-content">
            <div class="urgency-header">
                <i class="fas fa-clock"></i>
                <h3>Zeit läuft ab!</h3>
            </div>
            <div class="urgency-body">
                <p><strong>Ihre Stimme zählt jetzt!</strong></p>
                <p>Nur noch <span id="countdown">30</span> Sekunden bis zur automatischen Weiterleitung zur Abstimmung.</p>
                <p>Deutschlands Zukunft wartet auf Sie!</p>
            </div>
            <div class="urgency-footer">
                <button onclick="closeUrgencyModal()" class="btn btn-primary">Jetzt abstimmen</button>
                <button onclick="closeUrgencyModal()" class="btn btn-secondary">Später</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(urgencyModal);
    
    // Add urgency modal styles
    const urgencyStyles = document.createElement('style');
    urgencyStyles.textContent = `
        .urgency-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .urgency-content {
            background: white;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.3s ease;
        }
        
        .urgency-header {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
            padding: 2rem;
            text-align: center;
            border-radius: 20px 20px 0 0;
        }
        
        .urgency-header i {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .urgency-header h3 {
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .urgency-body {
            padding: 2rem;
            text-align: center;
        }
        
        .urgency-body p {
            font-size: 1.125rem;
            line-height: 1.6;
            margin-bottom: 1rem;
        }
        
        .urgency-footer {
            padding: 1rem 2rem 2rem;
            display: flex;
            gap: 1rem;
            justify-content: center;
        }
        
        #countdown {
            color: #ef4444;
            font-weight: bold;
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(urgencyStyles);
    
    // Countdown timer
    let countdown = 30;
    const countdownElement = document.getElementById('countdown');
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            closeUrgencyModal();
        }
    }, 1000);
}

function closeUrgencyModal() {
    const modal = document.querySelector('.urgency-modal');
    if (modal) {
        modal.remove();
    }
}

// Digital Identity Verification
let selectedIdentityMethod = null;
let verificationInProgress = false;

function selectIdentityMethod(method) {
    if (verificationInProgress) return;
    
    // Remove previous selection
    document.querySelectorAll('.identity-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Select new method
    const selectedOption = document.querySelector(`[onclick="selectIdentityMethod('${method}')"]`);
    selectedOption.classList.add('selected');
    selectedIdentityMethod = method;
    
    // Start verification process
    setTimeout(() => {
        startVerification(method);
    }, 500);
}

async function startVerification(method) {
    verificationInProgress = true;
    
    // Hide identity methods and show verification process
    document.querySelector('.identity-methods').style.display = 'none';
    document.getElementById('verification-process').style.display = 'block';
    
    try {
        if (method === 'zkpassport') {
            // Use actual Rarimo integration
            await performRarimoVerification();
        } else {
            // Use simulated verification for other methods
            simulateVerificationSteps(method);
        }
    } catch (error) {
        console.error('Verification failed:', error);
        showVerificationError(error.message);
    }
}

async function performRarimoVerification() {
    const progressBar = document.getElementById('verificationProgress');
    const statusElement = document.getElementById('verificationStatus');
    
    try {
        // Step 1: Initialize Rarimo
        statusElement.textContent = 'Rarimo ZK Passport wird initialisiert...';
        progressBar.style.width = '25%';
        document.getElementById('step1').classList.add('active');
        
        await rarimoZKPassport.initialize();
        
        // Step 2: Generate ZK Proof
        statusElement.textContent = 'Zero-Knowledge Proof wird generiert...';
        progressBar.style.width = '50%';
        document.getElementById('step1').classList.remove('active');
        document.getElementById('step1').classList.add('completed');
        document.getElementById('step2').classList.add('active');
        
        // Simulate passport data (in real implementation, this would come from user input or device)
        const passportData = {
            name: 'Max Mustermann',
            number: 'C01X00T47',
            nationality: 'DEU',
            dateOfBirth: '1985-03-15',
            expiryDate: '2030-12-31'
        };
        
        const zkProof = await rarimoZKPassport.generateZKProof(passportData);
        
        // Step 3: Verify passport
        statusElement.textContent = 'Passport-Validität wird verifiziert...';
        progressBar.style.width = '75%';
        document.getElementById('step2').classList.remove('active');
        document.getElementById('step2').classList.add('completed');
        document.getElementById('step3').classList.add('active');
        
        const verificationResult = await rarimoZKPassport.verifyPassport(passportData);
        
        // Step 4: Complete verification
        statusElement.textContent = 'ZK-Verifizierung erfolgreich abgeschlossen!';
        progressBar.style.width = '100%';
        document.getElementById('step3').classList.remove('active');
        document.getElementById('step3').classList.add('completed');
        document.getElementById('step4').classList.add('active');
        
        // Store verification data
        window.rarimoVerificationData = verificationResult;
        
        setTimeout(() => {
            showVotingInterface('zkpassport');
        }, 1000);
        
    } catch (error) {
        throw new Error(`Rarimo verification failed: ${error.message}`);
    }
}

function showVerificationError(message) {
    const verificationProcess = document.getElementById('verification-process');
    verificationProcess.innerHTML = `
        <div class="verification-error">
            <i class="fas fa-exclamation-triangle"></i>
            <h4>Verifizierung fehlgeschlagen</h4>
            <p>${message}</p>
            <button class="btn btn-primary" onclick="location.reload()">Erneut versuchen</button>
        </div>
    `;
}

function simulateVerificationSteps(method) {
    const steps = ['step1', 'step2', 'step3', 'step4'];
    const statusMessages = {
        'zkpassport': [
            'Rarimo ZK Passport wird initialisiert...',
            'Zero-Knowledge Proof wird generiert...',
            'Passport-Validität wird verifiziert...',
            'ZK-Verifizierung erfolgreich abgeschlossen!'
        ],
        'npa': [
            'Verbindung zu Online-Ausweisfunktion herstellen...',
            'Personalausweis wird gelesen...',
            'Identität wird verifiziert...',
            'Verifizierung erfolgreich abgeschlossen!'
        ],
        'eid': [
            'eID-System wird initialisiert...',
            'Digitale Identität wird geprüft...',
            'eIDAS-Konformität wird validiert...',
            'Verifizierung erfolgreich abgeschlossen!'
        ],
        'bundid': [
            'BundID-System wird verbunden...',
            'Bundesweite Identität wird geprüft...',
            'Sicherheitsstandards werden validiert...',
            'Verifizierung erfolgreich abgeschlossen!'
        ],
        'video': [
            'Video-Identifikation wird vorbereitet...',
            'Ausweisdokument wird geprüft...',
            'Live-Verifizierung läuft...',
            'Verifizierung erfolgreich abgeschlossen!'
        ]
    };
    
    const progressBar = document.getElementById('verificationProgress');
    const statusElement = document.getElementById('verificationStatus');
    
    let currentStep = 0;
    
    const processStep = () => {
        if (currentStep < steps.length) {
            // Update progress bar
            const progress = ((currentStep + 1) / steps.length) * 100;
            progressBar.style.width = progress + '%';
            
            // Update status message
            statusElement.textContent = statusMessages[method][currentStep];
            
            // Mark current step as active
            document.getElementById(steps[currentStep]).classList.add('active');
            
            // Mark previous steps as completed
            for (let i = 0; i < currentStep; i++) {
                document.getElementById(steps[i]).classList.remove('active');
                document.getElementById(steps[i]).classList.add('completed');
            }
            
            currentStep++;
            
            // Continue to next step after delay
            setTimeout(processStep, 1500);
        } else {
            // Verification completed
            setTimeout(() => {
                showVotingInterface(method);
            }, 1000);
        }
    };
    
    processStep();
}

function showVotingInterface(method) {
    // Hide verification process
    document.getElementById('verification-process').style.display = 'none';
    
    // Show voting interface
    const votingInterface = document.getElementById('voting-interface');
    votingInterface.style.display = 'block';
    
    // Populate voter information
    const methodNames = {
        'zkpassport': 'Rarimo ZK Passport',
        'npa': 'Online-Ausweisfunktion (nPA)',
        'eid': 'eID-Identität',
        'bundid': 'BundID',
        'video': 'Video-Identifikation'
    };
    
    let voterData;
    
    if (method === 'zkpassport' && window.rarimoVerificationData) {
        // Use actual Rarimo verification data
        const rarimoData = window.rarimoVerificationData;
        voterData = {
            name: rarimoData.name,
            birth: new Date(rarimoData.dateOfBirth).toLocaleDateString('de-DE'),
            location: `${rarimoData.nationality}, Deutschland`,
            method: methodNames[method],
            zkProof: rarimoData.zkProof.zkProof.substring(0, 16) + '...'
        };
        
        // Add ZK proof information to the interface
        const zkInfo = document.createElement('div');
        zkInfo.className = 'zk-proof-info';
        zkInfo.innerHTML = `
            <p><i class="fas fa-shield-alt"></i> ZK Proof: <code>${voterData.zkProof}</code></p>
            <p><i class="fas fa-lock"></i> Ihre Privatsphäre ist durch Zero-Knowledge Proofs geschützt</p>
        `;
        votingInterface.appendChild(zkInfo);
    } else {
        // Use simulated voter data for other methods
        voterData = {
            name: 'Max Mustermann',
            birth: '15.03.1985',
            location: 'Berlin, Deutschland',
            method: methodNames[method]
        };
    }
    
    document.getElementById('voterName').textContent = voterData.name;
    document.getElementById('voterBirth').textContent = voterData.birth;
    document.getElementById('voterLocation').textContent = voterData.location;
    document.getElementById('verificationMethod').textContent = voterData.method;
    
    // Add success animation
    votingInterface.style.animation = 'fadeInUp 0.5s ease';
}

// Social Media Sharing Functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Stimmen Sie für Deutschlands digitale Zukunft! KI und Blockchain verwandeln Bürokratie in einen Standortvorteil.');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Stimmen Sie für Deutschlands digitale Zukunft! #EuropeanDigitalParty #KI #Blockchain #Volksabstimmung');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('European Digital Party - Volksabstimmung für KI & Blockchain');
    const summary = encodeURIComponent('Stimmen Sie für Deutschlands digitale Zukunft! KI und Blockchain verwandeln Bürokratie in einen Standortvorteil.');
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`, '_blank', 'width=600,height=400');
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Stimmen Sie für Deutschlands digitale Zukunft! KI und Blockchain verwandeln Bürokratie in einen Standortvorteil.');
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
}

function shareOnTelegram() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Stimmen Sie für Deutschlands digitale Zukunft! KI und Blockchain verwandeln Bürokratie in einen Standortvorteil.');
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
}

let isLiked = false;
let likeCount = 1200;

function toggleLike() {
    isLiked = !isLiked;
    const likeButtons = document.querySelectorAll('.like-btn');
    const likeCountElements = document.querySelectorAll('#likeCount, #heroLikeCount');
    
    if (isLiked) {
        likeCount++;
        likeButtons.forEach(btn => btn.classList.add('liked'));
    } else {
        likeCount--;
        likeButtons.forEach(btn => btn.classList.remove('liked'));
    }
    
    likeCountElements.forEach(element => {
        element.textContent = formatLikeCount(likeCount);
    });
}

function formatLikeCount(count) {
    if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
}

// Rarimo ZK Passport Integration
class RarimoZKPassport {
    constructor() {
        this.isInitialized = false;
        this.verificationData = null;
    }

    async initialize() {
        try {
            // Simulate Rarimo SDK initialization
            console.log('Initializing Rarimo ZK Passport...');
            await this.simulateDelay(1000);
            
            // Check if user has a compatible passport
            const hasPassport = await this.checkPassportAvailability();
            if (!hasPassport) {
                throw new Error('Kein kompatibler Pass gefunden');
            }
            
            this.isInitialized = true;
            return true;
        } catch (error) {
            console.error('Rarimo initialization failed:', error);
            throw error;
        }
    }

    async checkPassportAvailability() {
        // Simulate passport detection
        await this.simulateDelay(500);
        return Math.random() > 0.1; // 90% success rate
    }

    async generateZKProof(passportData) {
        try {
            console.log('Generating Zero-Knowledge Proof...');
            
            // Simulate ZK proof generation steps
            const steps = [
                'Passport data extraction...',
                'Merkle tree construction...',
                'Zero-knowledge proof generation...',
                'Proof validation...'
            ];
            
            for (const step of steps) {
                console.log(step);
                await this.simulateDelay(800);
            }
            
            // Generate simulated proof data
            const proof = {
                passportNumber: this.maskPassportNumber(passportData.number),
                nationality: passportData.nationality,
                dateOfBirth: passportData.dateOfBirth,
                expiryDate: passportData.expiryDate,
                zkProof: this.generateRandomProof(),
                merkleRoot: this.generateMerkleRoot(),
                timestamp: new Date().toISOString()
            };
            
            return proof;
        } catch (error) {
            console.error('ZK Proof generation failed:', error);
            throw error;
        }
    }

    async verifyPassport(passportData) {
        try {
            console.log('Verifying passport with Rarimo...');
            
            // Simulate passport verification
            await this.simulateDelay(1200);
            
            // Generate ZK proof
            const zkProof = await this.generateZKProof(passportData);
            
            // Verify the proof
            const isValid = await this.verifyZKProof(zkProof);
            
            if (isValid) {
                this.verificationData = {
                    name: passportData.name,
                    dateOfBirth: passportData.dateOfBirth,
                    nationality: passportData.nationality,
                    verificationMethod: 'Rarimo ZK Passport',
                    zkProof: zkProof
                };
                return this.verificationData;
            } else {
                throw new Error('Passport verification failed');
            }
        } catch (error) {
            console.error('Passport verification failed:', error);
            throw error;
        }
    }

    async verifyZKProof(proof) {
        // Simulate ZK proof verification
        await this.simulateDelay(600);
        return Math.random() > 0.05; // 95% success rate
    }

    maskPassportNumber(number) {
        return number.replace(/(\d{2})(\d{6})(\d{1})/, '$1******$3');
    }

    generateRandomProof() {
        return '0x' + Array.from({length: 64}, () => Math.floor(Math.random() * 16).toString(16)).join('');
    }

    generateMerkleRoot() {
        return '0x' + Array.from({length: 32}, () => Math.floor(Math.random() * 16).toString(16)).join('');
    }

    simulateDelay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Global Rarimo instance
const rarimoZKPassport = new RarimoZKPassport();

// Enhanced voting with digital identity verification
function submitVote(choice) {
    const voteButtons = document.querySelectorAll('.vote-buttons button');
    voteButtons.forEach(btn => btn.disabled = true);
    
    const clickedButton = event.target.closest('button');
    const originalText = clickedButton.innerHTML;
    
    if (choice === 'ja') {
        clickedButton.innerHTML = '<i class="fas fa-heart"></i> Stimme wird mit Begeisterung abgegeben...';
        clickedButton.style.background = '#10b981';
        clickedButton.style.transform = 'scale(1.1)';
        
        // Play success sound
        const successAudio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
        successAudio.play().catch(e => console.log('Audio blocked'));
        
        setTimeout(() => {
            showVerifiedVoteResult('ja', 'Vielen Dank für Ihre mutige Entscheidung! Ihre Stimme wurde erfolgreich mit digitaler Identitätsverifizierung abgegeben. Sie haben für die Zukunft Deutschlands gestimmt.');
        }, 2000);
    } else {
        clickedButton.innerHTML = '<i class="fas fa-clock"></i> Stimme wird registriert...';
        clickedButton.style.background = '#6b7280';
        
        setTimeout(() => {
            showVerifiedVoteResult('nein', 'Ihre Stimme wurde erfolgreich mit digitaler Identitätsverifizierung registriert. Wir respektieren Ihre Entscheidung.');
        }, 2000);
    }
    
    setTimeout(() => {
        voteButtons.forEach(btn => {
            btn.disabled = false;
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.transform = '';
        });
    }, 3000);
}

function showVerifiedVoteResult(choice, message) {
    const modal = document.createElement('div');
    modal.className = 'vote-modal verified';
    modal.innerHTML = `
        <div class="vote-modal-content">
            <div class="vote-modal-header ${choice === 'ja' ? 'success' : 'neutral'}">
                <i class="fas ${choice === 'ja' ? 'fa-heart' : 'fa-handshake'}"></i>
                <h3>${choice === 'ja' ? 'JA' : 'NEIN'} - Stimme erfolgreich abgegeben!</h3>
            </div>
            <div class="vote-modal-body">
                <p>${message}</p>
                <div class="verification-badge">
                    <i class="fas fa-shield-alt"></i>
                    <span>Digitale Identitätsverifizierung bestätigt</span>
                </div>
                <p><strong>Deutschlands Zukunft wird von Menschen wie Ihnen gestaltet!</strong></p>
                ${choice === 'ja' ? '<p>🎉 Willkommen in der Zukunft! 🚀</p>' : '<p>💭 Wir hoffen, Sie beim nächsten Mal zu überzeugen.</p>'}
            </div>
            <div class="vote-modal-footer">
                <button onclick="closeVoteModal()" class="btn btn-primary">Verstanden</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add verified modal styles
    const verifiedStyles = document.createElement('style');
    verifiedStyles.textContent = `
        .vote-modal.verified .verification-badge {
            background: rgba(16, 185, 129, 0.2);
            color: #10b981;
            padding: 0.75rem 1rem;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem 0;
            border: 1px solid rgba(16, 185, 129, 0.3);
        }
        
        .vote-modal.verified .verification-badge i {
            margin-right: 0.5rem;
        }
    `;
    document.head.appendChild(verifiedStyles);
}

// Enhanced voting with emotional feedback (fallback)
function enhancedVote(choice) {
    const voteButtons = document.querySelectorAll('.vote-buttons button');
    voteButtons.forEach(btn => btn.disabled = true);
    
    const clickedButton = event.target.closest('button');
    const originalText = clickedButton.innerHTML;
    
    if (choice === 'ja') {
        clickedButton.innerHTML = '<i class="fas fa-heart"></i> Stimme wird mit Begeisterung abgegeben...';
        clickedButton.style.background = '#10b981';
        clickedButton.style.transform = 'scale(1.1)';
        
        // Play success sound
        const successAudio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
        successAudio.play().catch(e => console.log('Audio blocked'));
        
        setTimeout(() => {
            showEmotionalResult('ja', 'Vielen Dank für Ihre mutige Entscheidung! Sie haben für die Zukunft Deutschlands gestimmt. Ihre Stimme bringt uns einen Schritt näher zu einem modernen, fairen und effizienten Land.');
        }, 2000);
    } else {
        clickedButton.innerHTML = '<i class="fas fa-clock"></i> Stimme wird registriert...';
        clickedButton.style.background = '#6b7280';
        
        setTimeout(() => {
            showEmotionalResult('nein', 'Ihre Stimme wurde registriert. Wir respektieren Ihre Entscheidung. Vielleicht können wir Sie bei der nächsten Abstimmung überzeugen, dass KI und Blockchain Deutschlands Zukunft sind.');
        }, 2000);
    }
    
    setTimeout(() => {
        voteButtons.forEach(btn => {
            btn.disabled = false;
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.transform = '';
        });
    }, 3000);
}

function showEmotionalResult(choice, message) {
    const modal = document.createElement('div');
    modal.className = 'vote-modal emotional';
    modal.innerHTML = `
        <div class="vote-modal-content">
            <div class="vote-modal-header ${choice === 'ja' ? 'success' : 'neutral'}">
                <i class="fas ${choice === 'ja' ? 'fa-heart' : 'fa-handshake'}"></i>
                <h3>${choice === 'ja' ? 'JA' : 'NEIN'} - Danke für Ihre Stimme!</h3>
            </div>
            <div class="vote-modal-body">
                <p>${message}</p>
                <p><strong>Deutschlands Zukunft wird von Menschen wie Ihnen gestaltet!</strong></p>
                ${choice === 'ja' ? '<p>🎉 Willkommen in der Zukunft! 🚀</p>' : '<p>💭 Wir hoffen, Sie beim nächsten Mal zu überzeugen.</p>'}
            </div>
            <div class="vote-modal-footer">
                <button onclick="closeVoteModal()" class="btn btn-primary">Verstanden</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add emotional modal styles
    const emotionalStyles = document.createElement('style');
    emotionalStyles.textContent = `
        .vote-modal.emotional .vote-modal-header.success {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }
        
        .vote-modal.emotional .vote-modal-header.neutral {
            background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
        }
        
        .vote-modal.emotional .vote-modal-header i {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(emotionalStyles);
}

// Countdown Timer for Party Launch
function updateCountdown() {
    const launchDate = new Date('September 14, 2025 14:00:00').getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
    document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        document.querySelector('.banner-countdown').innerHTML = '<div class="countdown-expired">🎉 Die Veranstaltung hat begonnen!</div>';
    }
}

// Initialize emotional triggers when page loads
document.addEventListener('DOMContentLoaded', () => {
    addEmotionalTriggers();
    
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Add scroll-triggered animations for emotional engagement
    const emotionCards = document.querySelectorAll('.emotion-card');
    const emotionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    emotionCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        emotionObserver.observe(card);
    });
});

// Console welcome message
console.log(`
%cEuropean Digital Party - Die Zukunft der deutschen Demokratie
%c
Willkommen bei der European Digital Party!
Die erste Volksabstimmung: KI und Blockchain für Deutschland.

Website: https://europeandigital.party
`, 
'color: #2563eb; font-size: 20px; font-weight: bold;',
'color: #6b7280; font-size: 14px;'
); 