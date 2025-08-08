// Internationalization System for European Digital Party
class I18n {
    constructor() {
        this.currentLanguage = 'de'; // Default to German
        this.translations = {};
        this.loadedLanguages = new Set();
        this.init();
    }

    async init() {
        // Load default language (German)
        await this.loadLanguage('de');
        this.setLanguage('de');
        
        // Add language selector to the page
        this.addLanguageSelector();
        
        // Listen for language changes
        this.setupLanguageChangeListeners();
    }

    async loadLanguage(langCode) {
        if (this.loadedLanguages.has(langCode)) {
            return;
        }

        try {
            const response = await fetch(`languages/${langCode}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load language: ${langCode}`);
            }
            this.translations[langCode] = await response.json();
            this.loadedLanguages.add(langCode);
            console.log(`✅ Language loaded: ${langCode}`);
        } catch (error) {
            console.error(`❌ Error loading language ${langCode}:`, error);
            // Fallback to German if language fails to load
            if (langCode !== 'de') {
                console.log(`🔄 Falling back to German`);
                this.currentLanguage = 'de';
            }
        }
    }

    async setLanguage(langCode) {
        if (!this.translations[langCode]) {
            await this.loadLanguage(langCode);
        }

        this.currentLanguage = langCode;
        document.documentElement.lang = langCode;
        document.documentElement.setAttribute('data-lang', langCode);
        
        // Update all translatable elements
        this.updatePageContent();
        
        // Update meta tags
        this.updateMetaTags();
        
        // Store preference
        localStorage.setItem('preferred-language', langCode);
        
        console.log(`🌍 Language changed to: ${langCode}`);
    }

    t(key, params = {}) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                // Fallback to German if translation not found
                if (this.currentLanguage !== 'de') {
                    let fallbackValue = this.translations['de'];
                    for (const fk of keys) {
                        if (fallbackValue && fallbackValue[fk] !== undefined) {
                            fallbackValue = fallbackValue[fk];
                        } else {
                            return key; // Return key if no translation found
                        }
                    }
                    value = fallbackValue;
                } else {
                    return key; // Return key if no translation found
                }
                break;
            }
        }

        // Replace parameters
        if (typeof value === 'string') {
            Object.keys(params).forEach(param => {
                value = value.replace(new RegExp(`{${param}}`, 'g'), params[param]);
            });
        }

        return value || key;
    }

    updatePageContent() {
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update title
        document.title = this.t('meta.title');
        
        // Update specific sections
        this.updateHeroSection();
        this.updateNavigation();
        this.updateInitiativeSection();
        this.updateAboutSection();
        this.updateTimelineSection();
        this.updateVotingSection();
        this.updateFooter();
    }

    updateMetaTags() {
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = this.t('meta.description');
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.content = this.t('meta.og_title');
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.content = this.t('meta.og_description');
        }
    }

    updateHeroSection() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.innerHTML = this.t('hero.title').replace(
                '<span class="highlight">deutschen Demokratie</span>',
                `<span class="highlight">${this.t('hero.title').includes('deutschen') ? 'deutschen Demokratie' : 'German Democracy'}</span>`
            );
        }

        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.innerHTML = this.t('hero.subtitle');
        }

        // Update buttons
        const learnMoreBtn = document.querySelector('.hero-buttons .btn-primary');
        if (learnMoreBtn) {
            learnMoreBtn.textContent = this.t('hero.learn_more');
        }

        const voteNowBtn = document.querySelector('.hero-buttons .btn-secondary');
        if (voteNowBtn) {
            voteNowBtn.textContent = this.t('hero.vote_now');
        }

        // Update voting options
        const yesOption = document.querySelector('.vote-option span:first-child');
        if (yesOption) {
            yesOption.textContent = this.t('hero.yes_deregulation');
        }

        const noOption = document.querySelector('.vote-option:nth-child(2) span:first-child');
        if (noOption) {
            noOption.textContent = this.t('hero.no_status_quo');
        }
    }

    updateNavigation() {
        const navLinks = document.querySelectorAll('.nav-menu .nav-link');
        const navTexts = [
            'nav.home', 'nav.initiative', 'nav.examples', 'nav.emotions', 
            'nav.timeline', 'nav.benefits', 'nav.party_launch', 'nav.bureaucracy_crisis',
            'nav.science', 'nav.direct_democracy', 'nav.about', 'nav.contact', 'nav.vote_now'
        ];

        navLinks.forEach((link, index) => {
            if (navTexts[index]) {
                link.textContent = this.t(navTexts[index]);
            }
        });
    }

    updateInitiativeSection() {
        const sectionTitle = document.querySelector('#initiative .section-header h2');
        if (sectionTitle) {
            sectionTitle.textContent = this.t('initiative.title');
        }

        const sectionSubtitle = document.querySelector('#initiative .section-header p');
        if (sectionSubtitle) {
            sectionSubtitle.innerHTML = this.t('initiative.subtitle');
        }

        // Update feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        const featureKeys = [
            'initiative.deregulation',
            'initiative.ai',
            'initiative.blockchain',
            'initiative.advantage',
            'initiative.role_model',
            'initiative.legal_security'
        ];

        featureCards.forEach((card, index) => {
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            
            if (title && featureKeys[index]) {
                title.textContent = this.t(`${featureKeys[index]}.title`);
            }
            
            if (description && featureKeys[index]) {
                description.textContent = this.t(`${featureKeys[index]}.description`);
            }
        });
    }

    updateAboutSection() {
        const aboutTitle = document.querySelector('#about .about-text h2');
        if (aboutTitle) {
            aboutTitle.textContent = this.t('about.title');
        }

        const aboutDescription = document.querySelector('#about .about-text p');
        if (aboutDescription) {
            aboutDescription.innerHTML = this.t('about.description');
        }

        // Update tech stack
        const techItems = document.querySelectorAll('.tech-stack .tech-item span');
        const techKeys = [
            'about.tech_stack.deregulation',
            'about.tech_stack.ai',
            'about.tech_stack.blockchain',
            'about.tech_stack.democracy',
            'about.tech_stack.germany'
        ];

        techItems.forEach((item, index) => {
            if (techKeys[index]) {
                item.textContent = this.t(techKeys[index]);
            }
        });
    }

    updateTimelineSection() {
        const timelineTitle = document.querySelector('#success-timeline .section-header h2');
        if (timelineTitle) {
            timelineTitle.textContent = this.t('timeline.title');
        }

        const timelineSubtitle = document.querySelector('#success-timeline .section-header p');
        if (timelineSubtitle) {
            timelineSubtitle.textContent = this.t('timeline.subtitle');
        }

        // Update timeline phases
        const phases = ['phase1', 'phase2', 'phase3'];
        phases.forEach((phase, index) => {
            const phaseElement = document.querySelectorAll('.timeline-item')[index];
            if (phaseElement) {
                const title = phaseElement.querySelector('h3');
                const subtitle = phaseElement.querySelector('h4');
                const items = phaseElement.querySelectorAll('ul li');
                const stats = phaseElement.querySelectorAll('.impact-stats span');

                if (title) {
                    title.textContent = this.t(`timeline.${phase}.title`);
                }

                if (subtitle) {
                    subtitle.textContent = this.t(`timeline.${phase}.subtitle`);
                }

                // Update timeline items
                const phaseItems = this.t(`timeline.${phase}.items`);
                if (Array.isArray(phaseItems)) {
                    items.forEach((item, itemIndex) => {
                        if (phaseItems[itemIndex]) {
                            item.innerHTML = phaseItems[itemIndex];
                        }
                    });
                }

                // Update stats
                const phaseStats = this.t(`timeline.${phase}.stats`);
                if (Array.isArray(phaseStats)) {
                    stats.forEach((stat, statIndex) => {
                        if (phaseStats[statIndex]) {
                            stat.innerHTML = phaseStats[statIndex];
                        }
                    });
                }
            }
        });
    }

    updateVotingSection() {
        const voteTitle = document.querySelector('#vote .voting-content h2');
        if (voteTitle) {
            voteTitle.textContent = this.t('vote.title');
        }

        const mainTitle = document.querySelector('#vote .referendum-text h3');
        if (mainTitle) {
            mainTitle.innerHTML = this.t('vote.main_title');
        }

        // Update referendum text sections
        const sections = [
            'vote.intro', 'vote.vision', 'vote.advantage_title', 'vote.advantage_text',
            'vote.deregulation_title', 'vote.deregulation_text', 'vote.blockchain_title',
            'vote.blockchain_text', 'vote.ai_title', 'vote.ai_text', 'vote.new_era_title',
            'vote.new_era_text', 'vote.future_title', 'vote.future_text'
        ];

        const textElements = document.querySelectorAll('#vote .referendum-text p, #vote .referendum-text h4');
        textElements.forEach((element, index) => {
            if (sections[index]) {
                if (element.tagName === 'H4') {
                    element.textContent = this.t(sections[index]);
                } else {
                    element.innerHTML = this.t(sections[index]);
                }
            }
        });
    }

    updateFooter() {
        const footerSections = document.querySelectorAll('.footer-section');
        const sectionKeys = ['footer.party', 'footer.initiative', 'footer.legal'];

        footerSections.forEach((section, index) => {
            const title = section.querySelector('h4');
            const links = section.querySelectorAll('ul li a');

            if (title && sectionKeys[index]) {
                title.textContent = this.t(`${sectionKeys[index]}.title`);
            }

            const linkKeys = this.t(`${sectionKeys[index]}.links`);
            if (Array.isArray(linkKeys)) {
                links.forEach((link, linkIndex) => {
                    if (linkKeys[linkIndex]) {
                        link.textContent = linkKeys[linkIndex];
                    }
                });
            }
        });

        const copyright = document.querySelector('.footer-bottom p');
        if (copyright) {
            copyright.textContent = this.t('footer.copyright');
        }
    }

    addLanguageSelector() {
        // Create language selector
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.innerHTML = `
            <div class="language-dropdown">
                <button class="language-btn" onclick="toggleLanguageDropdown()">
                    <i class="fas fa-globe"></i>
                    <span class="current-lang">${this.t('language_selector.german')}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="language-options" id="languageOptions">
                    <div class="language-option" data-lang="de">
                        <span>🇩🇪 ${this.t('language_selector.german')}</span>
                    </div>
                    <div class="language-option" data-lang="en">
                        <span>🇺🇸 ${this.t('language_selector.english')}</span>
                    </div>
                    <div class="language-option" data-lang="fr">
                        <span>🇫🇷 ${this.t('language_selector.french')}</span>
                    </div>
                    <div class="language-option" data-lang="es">
                        <span>🇪🇸 ${this.t('language_selector.spanish')}</span>
                    </div>
                    <div class="language-option" data-lang="it">
                        <span>🇮🇹 ${this.t('language_selector.italian')}</span>
                    </div>
                </div>
            </div>
        `;

        // Add to navbar
        const navbar = document.querySelector('.nav-container');
        if (navbar) {
            navbar.appendChild(languageSelector);
        }

        // Add CSS for language selector
        this.addLanguageSelectorStyles();
    }

    addLanguageSelectorStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .language-selector {
                margin-left: auto;
                margin-right: 20px;
            }

            .language-dropdown {
                position: relative;
                display: inline-block;
            }

            .language-btn {
                background: transparent;
                border: 1px solid var(--border-color);
                border-radius: var(--border-radius);
                padding: 8px 12px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: var(--text-sm);
                color: var(--text-primary);
                transition: all 0.3s ease;
            }

            .language-btn:hover {
                background: var(--bg-secondary);
                border-color: var(--primary-color);
            }

            .language-options {
                position: absolute;
                top: 100%;
                right: 0;
                background: var(--bg-primary);
                border: 1px solid var(--border-color);
                border-radius: var(--border-radius);
                box-shadow: var(--shadow-lg);
                min-width: 150px;
                z-index: 1000;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
            }

            .language-options.show {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }

            .language-option {
                padding: 10px 15px;
                cursor: pointer;
                transition: background 0.3s ease;
                border-bottom: 1px solid var(--border-color);
            }

            .language-option:last-child {
                border-bottom: none;
            }

            .language-option:hover {
                background: var(--bg-secondary);
            }

            .language-option.active {
                background: var(--primary-color);
                color: white;
            }

            @media (max-width: 768px) {
                .language-selector {
                    margin: 10px 0;
                    order: 3;
                }
                
                .language-options {
                    right: auto;
                    left: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupLanguageChangeListeners() {
        // Listen for language option clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.language-option')) {
                const langOption = e.target.closest('.language-option');
                const langCode = langOption.getAttribute('data-lang');
                this.setLanguage(langCode);
                this.updateLanguageSelector();
                this.hideLanguageDropdown();
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-dropdown')) {
                this.hideLanguageDropdown();
            }
        });
    }

    updateLanguageSelector() {
        const currentLangSpan = document.querySelector('.current-lang');
        if (currentLangSpan) {
            const langNames = {
                'de': this.t('language_selector.german'),
                'en': this.t('language_selector.english'),
                'fr': this.t('language_selector.french'),
                'es': this.t('language_selector.spanish'),
                'it': this.t('language_selector.italian')
            };
            currentLangSpan.textContent = langNames[this.currentLanguage] || langNames['de'];
        }

        // Update active state
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === this.currentLanguage) {
                option.classList.add('active');
            }
        });
    }

    hideLanguageDropdown() {
        const options = document.getElementById('languageOptions');
        if (options) {
            options.classList.remove('show');
        }
    }
}

// Global functions for language dropdown
function toggleLanguageDropdown() {
    const options = document.getElementById('languageOptions');
    if (options) {
        options.classList.toggle('show');
    }
}

// Initialize i18n when DOM is loaded
let i18n;
document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18n();
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && savedLanguage !== 'de') {
        i18n.setLanguage(savedLanguage);
    }
});

// Export for use in other scripts
window.i18n = i18n; 