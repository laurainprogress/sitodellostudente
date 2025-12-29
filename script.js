// Dati dei corsi di laurea triennale
const corsiTriennali = [
	{ 
		codice: 'L-3', 
		nome: 'Scienze e Tecnologie delle Arti, dello Spettacolo e del Cinema',
		whatsapp: 'https://chat.whatsapp.com/Lr1LjNBvXvl9ecUdY2V0VF',
		drive: 'https://drive.google.com/drive/folders/1pw_BnKGaeTbU0iS5yEUw8QZPQHOWEtow?usp=drive_link'
	},
	{ 
		codice: 'L-4', 
		nome: 'Design del Prodotto e della Moda',
		whatsapp: 'https://chat.whatsapp.com/KqAm1OJx6gu0NRdb32UbAI',
		drive: 'https://drive.google.com/drive/folders/15T5EK8oTho2vS3y5pRN4fXETvackhz3s?usp=drive_link'
	},
	{ 
		codice: 'L-5', 
		nome: 'Filosofia ed Etica',
		whatsapp: 'https://chat.whatsapp.com/GAWsP8hiMVDH03tVslrylO',
		drive: 'https://drive.google.com/drive/folders/1MZ6NY1sqB27TG6CWzodVZIB2aAvhdU8j?usp=drive_link'
	},
	{ 
		codice: 'L-7', 
		nome: 'Ingegneria Civile',
		whatsapp: 'https://chat.whatsapp.com/EwsAW7mZ4RY26imGepjr5m',
		drive: 'https://drive.google.com/drive/folders/1XnTOZoivAH9S5NpZdpSjhCEBAgtr46Xe?usp=drive_link'
	},
	{ 
		codice: 'L-8', 
		nome: 'Ingegneria Informatica',
		whatsapp: 'https://chat.whatsapp.com/KnY3LG4uTdtC4O6lKomLiz',
		drive: 'https://drive.google.com/drive/folders/1nWOYosUraDBffInsN6hrmE2Vwq3_CyjD?usp=drive_link'
	},
	{ 
		codice: 'L-9', 
		nome: 'Ingegneria Gestionale',
		whatsapp: 'https://chat.whatsapp.com/JrT04jkwOf3D1UsjzwDyWo',
		drive: 'https://drive.google.com/drive/folders/167llDo3ecrfbeglFBKRDwaeF2n-Zs3iP?usp=drive_link'
	},
	{ 
		codice: 'L-10', 
		nome: 'Lettere, Sapere Umanistico e Formazione',
		whatsapp: 'https://chat.whatsapp.com/LSCmCkQoN8L9fYo5WYbzOC',
		drive: 'https://drive.google.com/drive/folders/1dlBjoEWdU6rc-2AS4O6stFjCu5_dT9Ek?usp=drive_link'
	},
	{ 
		codice: 'L-12', 
		nome: 'Lingue e Mercati',
		whatsapp: 'https://chat.whatsapp.com/KI954f149Q4JLR1diw16R7',
		drive: 'https://drive.google.com/drive/folders/13ce8eXABCSDLt_WWM6B776SDU1gNbGqg?usp=drive_link'
	},
	{ 
		codice: 'L-13', 
		nome: 'Scienze Biologiche',
		whatsapp: 'https://chat.whatsapp.com/FsfiuHgQ6Gq8herFCakwjh?mode=wwt',
		drive: 'https://drive.google.com/drive/folders/1o22FuW0EeVuI22_itYzfKy2-7VtFVCog?usp=drive_link'
	},
	{ 
		codice: 'L-14', 
		nome: 'Scienze Giuridiche',
		whatsapp: 'https://chat.whatsapp.com/HPfIw0v1RPdBOjiEcJN94c',
		drive: 'https://drive.google.com/drive/folders/1GQfktI8h5eDnO--OE8IkchW_R_K67otN?usp=drive_link'
	},
	{ 
		codice: 'L-15', 
		nome: 'Scienze Turistiche',
		whatsapp: 'https://chat.whatsapp.com/ILsA2SpE76R09BlO18Y95u?mode=wwt',
		drive: 'https://drive.google.com/drive/folders/1wm4_J8MZoxrC-l-3GeB-4P12PchlnHQK?usp=drive_link'
	},
	{ 
		codice: 'L-16', 
		nome: 'Scienze dell\'Amministrazione e dell\'Organizzazione',
		whatsapp: 'https://chat.whatsapp.com/BAC2mw08gIlGaZTGXky1fY?mode=wwt',
		drive: 'https://drive.google.com/drive/folders/1OIw3l9QosuuVTXAfHIzWwRZTzmpMW_fm?usp=drive_link'
	},
	{ 
		codice: 'L-18', 
		nome: 'Economia Aziendale',
		whatsapp: 'https://chat.whatsapp.com/D8pqU1uSt0sKUQDQJu1A9R',
		drive: 'https://drive.google.com/drive/folders/1Jc8MaUE6QvXrNT7ni8ZMPBHqWc2ylNYS?usp=sharing'
	},
	{ 
		codice: 'L-19', 
		nome: 'Scienze dell\'Educazione e della Formazione',
		whatsapp: 'https://chat.whatsapp.com/LouJDJsy53gFP5KBRgaDZG',
		drive: 'https://drive.google.com/drive/folders/1SdJgKhp9JERCNv9jYu6UTijBBj9DEk9v?usp=drive_link'
	},
	{ 
		codice: 'L-20', 
		nome: 'Comunicazione e multimedia',
		whatsapp: 'https://chat.whatsapp.com/GW3K8W3PIMjBJcVJPXGptB',
		drive: 'https://drive.google.com/drive/folders/1__OpGXuCdNyzNY_6M-pHZaJBOBmB3tDJ?usp=drive_link'
	},
	{ 
		codice: 'L-22', 
		nome: 'Scienze Motorie',
		whatsapp: 'https://chat.whatsapp.com/C3gKxWTrKfWEViEKmEfTt1',
		drive: 'https://drive.google.com/drive/folders/1yUwfERViPNExz2sAglLUbx5XF9JyFSw_?usp=drive_link'
	},
	{ 
		codice: 'L-24', 
		nome: 'Scienze e Tecniche Psicologiche',
		whatsapp: 'https://chat.whatsapp.com/I0XocKaIRsI1qbxJiIfjw8',
		drive: 'https://drive.google.com/drive/folders/1TyvQVSjL5jGYhvyb08U6k7Z_nEHFnUFl?usp=sharing'
	},
	{ 
		codice: 'L-26', 
		nome: 'Scienze dell\'Alimentazione e Gastronomia',
		whatsapp: 'https://chat.whatsapp.com/JEaLhOtEhDLEsBHVnPvya9',
		drive: 'https://drive.google.com/drive/folders/1Ar8PtUiQ5LLj2AElLoxabEO_k2_EFYlZ?usp=drive_link'
	},
	{ 
		codice: 'L-31', 
		nome: 'Informatica per le Aziende Digitali',
		whatsapp: 'https://chat.whatsapp.com/H5zw8eIvhJQ695hBGkSTIw',
		drive: 'https://drive.google.com/drive/folders/1S1eAghX-x2BAoPg6NWlKqoX2bAQ2ZsC3?usp=drive_link'
	},
	{ 
		codice: 'L-36', 
		nome: 'Scienze Politiche e Relazioni Internazionali',
		whatsapp: 'https://chat.whatsapp.com/Jc8APKuaeBW1MRUBC7uIM8?mode=wwt',
		drive: 'https://drive.google.com/drive/folders/1GnWlecmWjRMTb_B5HJoXDkj9TKoQnB8l?usp=drive_link'
	},
	{ 
		codice: 'L-40', 
		nome: 'Sociologia e Innovazione',
		whatsapp: 'https://chat.whatsapp.com/LSr6ZzMgMLfAjT5Zc9Txky',
		drive: 'https://drive.google.com/drive/folders/1Da3nx0i3QPcd1YhPg-C7lTI7CVY494ke?usp=drive_link'
	},
	{ 
		codice: 'L-41', 
		nome: 'Statistica e Big Data',
		whatsapp: 'https://chat.whatsapp.com/DplCNJK4ZM7G2VwFfm3QTO',
		drive: 'https://drive.google.com/drive/folders/1nvQzcHdblBAuqUGKSeYZnnAyctIwR9TL?usp=drive_link'
	},
	{ 
		codice: 'L-GASTR', 
		nome: 'Gastronomia, Ospitalità e Territori',
		whatsapp: 'https://chat.whatsapp.com/KPo135cGrAq5BNwGw2e2VD',
		drive: 'https://drive.google.com/drive/folders/1-jKhknZ949TePYJTE3ZUs0GqgDn-GowU?usp=drive_link'
	},
	{ 
		codice: 'LMG-01', 
		nome: 'Giurisprudenza',
		whatsapp: 'https://chat.whatsapp.com/DEuJfWe9fvB6LO9yv6gwiK',
		drive: 'https://drive.google.com/drive/folders/1C7nYeDsjEg-OOJdaDic9jCm3hUyfsjIV?usp=drive_link'
	}
];

// Dati dei corsi di laurea magistrale 
const corsiMagistrali = [
	{ 
		codice: 'LM-26', 
		nome: 'Ingegneria della Sicurezza',
		whatsapp: 'https://chat.whatsapp.com/LszZvhgVkKX6aAuJsHztkL'
	},
	{ 
		codice: 'LM-31', 
		nome: 'Ingegneria Gestionale',
		whatsapp: 'https://chat.whatsapp.com/HYjlRmRcxEx0QV5KpaQMa0'
	},
	{ 
		codice: 'LM-39', 
		nome: 'Linguistica Moderna',
		whatsapp: 'https://chat.whatsapp.com/IccdJqae2RIJYQ53tQRuP3'
	},
	{ 
		codice: 'LM-47', 
		nome: 'Management dello Sport e delle Attività Motorie',
		whatsapp: 'https://chat.whatsapp.com/CttsmHBUed5EOJ2ebrAvaW'
	},
	{ 
		codice: 'LM-51', 
		nome: 'Psicologia del Lavoro e delle Organizzazioni',
		whatsapp: 'https://chat.whatsapp.com/KmysQTUnYgV5cMSCQbyCzA'
	},
	{ 
		codice: 'LM-52', 
		nome: 'Relazioni Internazionali per lo Sviluppo Economico',
		whatsapp: 'https://chat.whatsapp.com/Is7vWdYHrXJKUxJXg5zzUY'
	},
	{ 
		codice: 'LM-56', 
		nome: 'Economia, Digital Data Analysis, Amministrazioni Pubbliche',
		whatsapp: 'https://chat.whatsapp.com/JsTcv3jgLJo1Vjecub9XNT'
	},
	{ 
		codice: 'LM-59', 
		nome: 'Comunicazione Digitale e Marketing',
		whatsapp: 'https://chat.whatsapp.com/L5g60isaJsb4Qom5xsv8HL'
	},
	{ 
		codice: 'LM-61', 
		nome: 'Scienze della Nutrizione Umana',
		whatsapp: 'https://chat.whatsapp.com/FcyMCKFWyxQIchONM0QwQh'
	},
	{ 
		codice: 'LM-67', 
		nome: 'Scienze e Tecniche delle Attività Motorie Preventive e Adattate',
		whatsapp: 'https://chat.whatsapp.com/CMv3pjyjpWi83dasfXATU1'
	},
	{ 
		codice: 'LM-77', 
		nome: 'Management',
		whatsapp: 'https://chat.whatsapp.com/FCHVrvmVngQ0SstTQXgTOq'
	},
	{ 
		codice: 'LM-85', 
		nome: 'Scienze Pedagogiche',
		whatsapp: 'https://chat.whatsapp.com/K4tsoBP22xF6GcNtG91LKL'
	}
];

// Link di fallback per corsi senza link specifici
const DEFAULT_WHATSAPP = 'https://chat.whatsapp.com/INSERISCI-LINK-GRUPPO-PRINCIPALE';
const DEFAULT_DRIVE = 'https://drive.google.com/drive/folders/INSERISCI-CARTELLA-GENERALE';

// Gestione del tema scuro/chiaro
class ThemeManager {
	constructor() {
		this.themeToggle = document.getElementById('theme-toggle');
		this.init();
	}

	init() {
		const savedTheme = localStorage.getItem('theme') || 'dark';
		this.setTheme(savedTheme);

		if (this.themeToggle) {
			this.themeToggle.addEventListener('click', () => this.toggleTheme());
		}
	}

	setTheme(theme) {
		document.documentElement.setAttribute('data-theme', theme);
		if (this.themeToggle) {
			const icon = this.themeToggle.querySelector('i');
			icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
		}
		localStorage.setItem('theme', theme);
	}

	toggleTheme() {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		this.setTheme(newTheme);
	}
}

// Gestione del menu mobile
class MobileMenu {
	constructor() {
		this.hamburger = document.querySelector('.hamburger');
		this.navMenu = document.querySelector('.nav-menu');
		this.init();
	}

	init() {
		if (this.hamburger && this.navMenu) {
			this.hamburger.addEventListener('click', () => this.toggleMenu());
			
			const navLinks = document.querySelectorAll('.nav-link');
			navLinks.forEach(link => {
				link.addEventListener('click', () => this.closeMenu());
			});
		}
	}

	toggleMenu() {
		this.hamburger.classList.toggle('active');
		this.navMenu.classList.toggle('active');
	}

	closeMenu() {
		this.hamburger.classList.remove('active');
		this.navMenu.classList.remove('active');
	}
}

// Gestione dei corsi di studio
class CoursesManager {
	constructor() {
		this.coursesContainer = document.getElementById('coursesContainer');
		this.searchInput = document.getElementById('courseSearch');
		this.init();
	}

	init() {
		if (this.coursesContainer) {
			this.renderAllCourses();
		}

		if (this.searchInput) {
			this.searchInput.addEventListener('input', (e) => this.filterCourses(e.target.value));
		}
	}

	renderAllCourses() {
		this.coursesContainer.innerHTML = `
			<div class="courses-section">
				<div class="section-header">
					<h2><i class="fas fa-graduation-cap"></i> Corsi di Laurea Triennale</h2>
					<p>Trova il gruppo WhatsApp e le risorse per il tuo corso di laurea triennale</p>
				</div>
				<div class="courses-grid" id="triennaliGrid">
					${this.renderCourses(corsiTriennali, true)}
				</div>
			</div>

			<div class="courses-section">
				<div class="section-header">
					<h2><i class="fas fa-user-graduate"></i> Corsi di Laurea Magistrale</h2>
					<p>Connettiti con altri studenti magistrali del tuo corso di studio</p>
				</div>
				<div class="courses-grid" id="magistraliGrid">
					${this.renderCourses(corsiMagistrali, false)}
				</div>
			</div>
		`;
	}

	renderCourses(courses, hasDrive = true) {
		return courses.map(corso => `
			<div class="course-card" data-course="${corso.codice.toLowerCase()} ${corso.nome.toLowerCase()}">
				<div class="course-header">
					<span class="course-code ${hasDrive ? 'triennale' : 'magistrale'}">${corso.codice}</span>
					<h3 class="course-name">${corso.nome}</h3>
				</div>
				<div class="course-links ${hasDrive ? 'two-links' : 'one-link'}">
					${corso.whatsapp ? `
						<a href="${corso.whatsapp}" 
						   class="course-link whatsapp-link" 
						   target="_blank">
							<i class="fab fa-whatsapp"></i>
							Gruppo WhatsApp
						</a>
					` : `
						<a href="${DEFAULT_WHATSAPP}" 
						   class="course-link whatsapp-link" 
						   target="_blank" 
						   style="opacity: 0.6; font-style: italic;">
							<i class="fab fa-whatsapp"></i>
							Gruppo Generale
						</a>
					`}
					${hasDrive && corso.drive ? `
						<a href="${corso.drive}" 
						   class="course-link drive-link" 
						   target="_blank">
							<i class="fab fa-google-drive"></i>
							Appunti Drive
						</a>
					` : hasDrive ? `
						<a href="${DEFAULT_DRIVE}" 
						   class="course-link drive-link" 
						   target="_blank" 
						   style="opacity: 0.6; font-style: italic;">
							<i class="fab fa-google-drive"></i>
							Drive Generale
						</a>
					` : ''}
				</div>
			</div>
		`).join('');
	}

	filterCourses(searchTerm) {
		const courseCards = document.querySelectorAll('.course-card');
		const searchLower = searchTerm.toLowerCase();

		courseCards.forEach(card => {
			const courseData = card.getAttribute('data-course');
			if (courseData.includes(searchLower)) {
				card.style.display = 'block';
			} else {
				card.style.display = 'none';
			}
		});
	}
}

// Sistema di verifica
class VerificationManager {
	constructor() {
		this.modal = document.getElementById('verificationModal');
		this.form = document.getElementById('verificationForm');
		this.closeBtn = document.querySelector('.close');
		this.pendingLink = null;
		this.init();
	}

	init() {
		if (!this.modal) return;

		document.addEventListener('click', (e) => {
			const whatsappLink = e.target.closest('.whatsapp-link');
			if (whatsappLink) {
				e.preventDefault();
				this.pendingLink = whatsappLink.href;
				this.showModal();
			}
		});

		this.closeBtn.addEventListener('click', () => this.hideModal());
		this.modal.addEventListener('click', (e) => {
			if (e.target === this.modal) this.hideModal();
		});

		this.form.addEventListener('submit', (e) => this.handleSubmit(e));

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && this.modal.style.display === 'block') {
				this.hideModal();
			}
		});
	}

	showModal() {
		this.modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
		
		setTimeout(() => {
			document.getElementById('fullName').focus();
		}, 100);
	}

	hideModal() {
		this.modal.style.display = 'none';
		document.body.style.overflow = 'auto';
		this.pendingLink = null;
		this.form.reset();
	}

	async handleSubmit(e) {
		e.preventDefault();
		
		const formData = {
			fullName: document.getElementById('fullName').value,
			university: document.getElementById('university').value,
			course: document.getElementById('course').value,
			year: document.getElementById('year').value,
			timestamp: new Date().toISOString()
		};

		if (!this.validateForm(formData)) {
			alert('⚠️ Compila tutti i campi obbligatori');
			return;
		}

		this.saveUserData(formData);
		this.showSuccessMessage();

		setTimeout(() => {
			window.open(this.pendingLink, '_blank');
			this.hideModal();
		}, 2000);
	}

	validateForm(data) {
		const required = ['fullName', 'university', 'course', 'year'];
		return required.every(field => data[field] && data[field].trim());
	}

	saveUserData(data) {
		const users = JSON.parse(localStorage.getItem('verifiedUsers') || '[]');
		users.push(data);
		localStorage.setItem('verifiedUsers', JSON.stringify(users));
	}

	showSuccessMessage() {
		const form = document.getElementById('verificationForm');
		form.innerHTML = `
			<div style="text-align: center;">
				<div style="font-size: 60px; margin-bottom: 20px;">✅</div>
				<h3 style="color: var(--primary-color); margin-bottom: 15px;">Verifica Completata!</h3>
				<p>Benvenuto nel gruppo degli studenti universitari!</p>
				<p><strong>Ti stiamo reindirizzando a WhatsApp...</strong></p>
			</div>
		`;
	}
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', function() {
	new ThemeManager();
	new MobileMenu();
	new CoursesManager();
	new VerificationManager();
});

// Funzione per aprire il form informazioni
function openInfoForm() {
	// Traccia l'evento (opzionale, per analytics)
	console.log('Apertura form informazioni iscrizioni');
	
	// Apri il link in una nuova finestra/tab
	window.open('https://wa.me/3793332878', '_blank', 'noopener,noreferrer');
	
	// Opzionale: Salva in localStorage per statistiche
	const clicks = localStorage.getItem('infoFormClicks') || 0;
	localStorage.setItem('infoFormClicks', parseInt(clicks) + 1);
}

// Opzionale: Aggiungi anche il supporto per Enter e Space quando la card ha focus
document.addEventListener('DOMContentLoaded', function() {
	const clickableCard = document.querySelector('.clickable-card');
	
	if (clickableCard) {
		// Rendi la card accessibile via tastiera
		clickableCard.setAttribute('tabindex', '0');
		clickableCard.setAttribute('role', 'button');
		clickableCard.setAttribute('aria-label', 'Richiedi informazioni per iscrizioni universitarie');
		
		// Supporto tastiera
		clickableCard.addEventListener('keydown', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				openInfoForm();
			}
		});
	}
});

// ROBE MOBILE
document.addEventListener('DOMContentLoaded', function() {
	// Chiudi menu mobile quando si clicca su un link
	const navLinks = document.querySelectorAll('.nav-link');
	const hamburger = document.querySelector('.hamburger');
	const navMenu = document.querySelector('.nav-menu');
	
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			if (hamburger && navMenu) {
				hamburger.classList.remove('active');
				navMenu.classList.remove('active');
			}
		});
	});
	
	// Previeni zoom su input (iOS)
	const inputs = document.querySelectorAll('input, select, textarea');
	inputs.forEach(input => {
		input.addEventListener('focus', function() {
			if (window.innerWidth <= 768) {
				this.style.fontSize = '16px';
			}
		});
	});
	
	// Ottimizza scroll su mobile
	let ticking = false;
	function updateScrolled() {
		const scrolled = window.scrollY > 50;
		document.body.classList.toggle('scrolled', scrolled);
		ticking = false;
	}
	
	window.addEventListener('scroll', function() {
		if (!ticking) {
			requestAnimationFrame(updateScrolled);
			ticking = true;
		}
	});
});