// ========================================
// QUIZ DI ORIENTAMENTO UNIVERSITARIO
// ========================================

// Definizione delle domande del quiz
const quizQuestions = [
	{
		id: 1,
		question: "Qual era la tua materia preferita (o quella in cui riuscivi meglio) a scuola?",
		options: [
			{ text: "Matematica, Fisica o Informatica", category: "tecnico-scientifica" },
			{ text: "Diritto o Economia Aziendale", category: "economico-giuridica" },
			{ text: "Italiano, Storia o Filosofia", category: "umanistica" },
			{ text: "Disegno, Storia dell'Arte o Educazione Musicale", category: "comunicazione-design" },
			{ text: "Scienze Naturali, Biologia o Educazione Fisica", category: "scienze-vita" }
		]
	},
	{
		id: 2,
		question: "Nel tuo tempo libero, cosa ti piace fare di più?",
		options: [
			{ text: "Giocare a videogiochi di strategia, programmare o montare/smontare dispositivi elettronici", category: "tecnico-scientifica" },
			{ text: "Seguire le notizie di attualità, leggere di finanza o partecipare a dibattiti online", category: "economico-giuridica" },
			{ text: "Leggere romanzi, scrivere su un blog/diario o visitare musei e mostre", category: "umanistica" },
			{ text: "Scattare fotografie, creare video, disegnare o personalizzare il tuo stile e i tuoi spazi", category: "comunicazione-design" },
			{ text: "Fare sport, cucinare nuove ricette, viaggiare o prenderti cura di piante e animali", category: "scienze-vita" }
		]
	},
	{
		id: 3,
		question: "Quale ambiente di lavoro ti immagini per il tuo futuro?",
		options: [
			{ text: "Un laboratorio tecnologico o uno studio di ingegneria", category: "tecnico-scientifica" },
			{ text: "L'ufficio di una grande azienda, un tribunale o un'istituzione governativa", category: "economico-giuridica" },
			{ text: "Una biblioteca, una scuola, una casa editrice o uno studio di psicologia", category: "umanistica" },
			{ text: "Un'agenzia creativa, uno studio di design o un set cinematografico", category: "comunicazione-design" },
			{ text: "Una cucina professionale, un centro sportivo, un resort turistico o all'aria aperta in un parco naturale", category: "scienze-vita" }
		]
	},
	{
		id: 4,
		question: "Di fronte a un problema complesso, come reagisci?",
		options: [
			{ text: "Lo scompongo in parti più piccole e cerco una soluzione logica basata sui dati", category: "tecnico-scientifica" },
			{ text: "Analizzo le regole, le risorse disponibili e cerco di negoziare la strategia migliore", category: "economico-giuridica" },
			{ text: "Cerco di capire il punto di vista delle persone coinvolte e le cause profonde del problema", category: "umanistica" },
			{ text: "Immagino una soluzione completamente nuova e 'fuori dagli schemi'", category: "comunicazione-design" },
			{ text: "Sperimento soluzioni pratiche e osservo i risultati per capire come procedere", category: "scienze-vita" }
		]
	},
	{
		id: 5,
		question: "Se dovessi scegliere un genere di film o serie TV, quale sarebbe?",
		options: [
			{ text: "Fantascienza o documentari scientifici", category: "tecnico-scientifica" },
			{ text: "Legal drama o thriller politici/finanziari", category: "economico-giuridica" },
			{ text: "Film storici o drammi psicologici", category: "umanistica" },
			{ text: "Film d'animazione, opere d'autore con una forte estetica o serie sulla moda", category: "comunicazione-design" },
			{ text: "Documentari sulla natura, programmi di cucina e viaggio o film sportivi", category: "scienze-vita" }
		]
	},
	{
		id: 6,
		question: "Se dovessi avviare un progetto, quale sarebbe?",
		options: [
			{ text: "Lo sviluppo di una nuova app o di un software innovativo", category: "tecnico-scientifica" },
			{ text: "Un piano di business per lanciare una start-up e cercare investitori", category: "economico-giuridica" },
			{ text: "Un circolo di lettura o un podcast per approfondire temi culturali", category: "umanistica" },
			{ text: "Un canale YouTube/TikTok o una mostra fotografica", category: "comunicazione-design" },
			{ text: "L'organizzazione di un evento sportivo o di un festival gastronomico", category: "scienze-vita" }
		]
	},
	{
		id: 7,
		question: "Quale abilità senti ti descriva meglio?",
		options: [
			{ text: "Il pensiero analitico e la capacità di risolvere problemi", category: "tecnico-scientifica" },
			{ text: "La leadership e la capacità di organizzare e persuadere", category: "economico-giuridica" },
			{ text: "L'empatia e la capacità di ascoltare e capire gli altri", category: "umanistica" },
			{ text: "La creatività e il senso estetico", category: "comunicazione-design" },
			{ text: "La manualità, la resistenza fisica e la capacità di adattamento", category: "scienze-vita" }
		]
	},
	{
		id: 8,
		question: "Cosa ti incuriosisce di più?",
		options: [
			{ text: "Capire come funzionano le cose, dalla tecnologia al corpo umano", category: "tecnico-scientifica" },
			{ text: "Comprendere le dinamiche del potere e dei mercati economici", category: "economico-giuridica" },
			{ text: "Esplorare il pensiero umano, le emozioni e le storie delle persone", category: "umanistica" },
			{ text: "Creare nuove forme, stili e modi per comunicare un'idea", category: "comunicazione-design" },
			{ text: "Scoprire nuove culture attraverso il cibo, i viaggi e le tradizioni locali", category: "scienze-vita" }
		]
	},
	{
		id: 9,
		question: "Cosa cerchi principalmente in una carriera?",
		options: [
			{ text: "L'opportunità di innovare e lavorare su progetti all'avanguardia", category: "tecnico-scientifica" },
			{ text: "Stabilità, crescita economica e la possibilità di raggiungere ruoli di responsabilità", category: "economico-giuridica" },
			{ text: "La possibilità di aiutare gli altri e di contribuire alla loro crescita personale e culturale", category: "umanistica" },
			{ text: "La libertà di esprimere la mia visione creativa e di lasciare un'impronta originale", category: "comunicazione-design" },
			{ text: "Un lavoro dinamico, a contatto con le persone e che mi permetta di essere sempre in movimento", category: "scienze-vita" }
		]
	},
	{
		id: 10,
		question: "Se fossi un giornalista, il tuo pezzo forte sarebbe:",
		options: [
			{ text: "Un'analisi approfondita sulle ultime scoperte tecnologiche", category: "tecnico-scientifica" },
			{ text: "Un'inchiesta sul mondo della finanza o un reportage politico", category: "economico-giuridica" },
			{ text: "Un'intervista a un filosofo o la recensione di un romanzo", category: "umanistica" },
			{ text: "Un articolo sulle nuove tendenze dell'arte e del design", category: "comunicazione-design" },
			{ text: "Un reportage di viaggio o una guida ai migliori ristoranti", category: "scienze-vita" }
		]
	},
	{
		id: 11,
		question: "Quale di queste sfide ti stimola di più?",
		options: [
			{ text: "Risolvere un complesso problema di logica o di matematica", category: "tecnico-scientifica" },
			{ text: "Vincere una causa legale o chiudere un importante accordo commerciale", category: "economico-giuridica" },
			{ text: "Aiutare un amico a superare un momento difficile attraverso l'ascolto", category: "umanistica" },
			{ text: "Progettare da zero il logo e l'immagine di un nuovo brand", category: "comunicazione-design" },
			{ text: "Organizzare un viaggio per un gruppo di persone con esigenze diverse", category: "scienze-vita" }
		]
	},
	{
		id: 12,
		question: "In un progetto di gruppo, che ruolo hai di solito?",
		options: [
			{ text: "L'esperto tecnico che si assicura che tutto funzioni correttamente", category: "tecnico-scientifica" },
			{ text: "Il leader che coordina il team e si assicura di rispettare le scadenze", category: "economico-giuridica" },
			{ text: "Il mediatore che facilita la comunicazione e si assicura che tutti siano a proprio agio", category: "umanistica" },
			{ text: "Il creativo che propone le idee originali e si occupa della presentazione", category: "comunicazione-design" },
			{ text: "L'organizzatore pratico che si occupa della logistica e degli aspetti concreti", category: "scienze-vita" }
		]
	},
	{
		id: 13,
		question: "Se potessi imparare una cosa nuova ADESSO, cosa sceglieresti?",
		options: [
			{ text: "Un nuovo linguaggio di programmazione", category: "tecnico-scientifica" },
			{ text: "I segreti del mercato azionario", category: "economico-giuridica" },
			{ text: "Le basi di una nuova lingua straniera o della psicologia", category: "umanistica" },
			{ text: "Un software di grafica 3D o a suonare uno strumento musicale", category: "comunicazione-design" },
			{ text: "Tecniche di cucina gourmet o un nuovo sport", category: "scienze-vita" }
		]
	},
	{
		id: 14,
		question: "Cosa ti affascina del futuro?",
		options: [
			{ text: "Le scoperte scientifiche che cambieranno il nostro modo di vivere", category: "tecnico-scientifica" },
			{ text: "L'evoluzione dell'economia globale e dei rapporti tra nazioni", category: "economico-giuridica" },
			{ text: "Capire come la tecnologia influenzerà le relazioni umane e il pensiero", category: "umanistica" },
			{ text: "I nuovi modi di creare e fruire l'arte e l'intrattenimento", category: "comunicazione-design" },
			{ text: "Lo sviluppo di un turismo più sostenibile e di stili di vita più sani", category: "scienze-vita" }
		]
	},
	{
		id: 15,
		question: "Quale di queste frasi ti rappresenta di più?",
		options: [
			{ text: "La logica ti porterà da A a B. L'immaginazione ti porterà ovunque.", category: "tecnico-scientifica" },
			{ text: "L'opportunità bussa spesso, ma bisogna essere pronti a riconoscerla.", category: "economico-giuridica" },
			{ text: "Il primo passo per capire il mondo è capire se stessi.", category: "umanistica" },
			{ text: "Non seguire le tendenze. Crea le tendenze.", category: "comunicazione-design" },
			{ text: "La vita è un viaggio, e chi viaggia vive due volte.", category: "scienze-vita" }
		]
	}
];

// Definizione delle categorie e dei corsi associati
const categories = {
	"tecnico-scientifica": {
		name: "Area Tecnico-Scientifica",
		icon: "fas fa-atom",
		description: "Hai una mente analitica e ami risolvere problemi complessi. Le tue competenze logico-matematiche e la passione per la tecnologia ti rendono perfetto per carriere nell'ingegneria, informatica e scienze applicate.",
		courses: [
			"L-7 - Ingegneria Civile",
			"L-8 - Ingegneria Informatica",
			"L-9 - Ingegneria Gestionale",
			"L-31 - Informatica per le Aziende Digitali",
			"L-41 - Statistica e Big Data",
			"LM-26 - Ingegneria della Sicurezza",
			"LM-31 - Ingegneria Gestionale"
		]
	},
	"economico-giuridica": {
		name: "Area Economico-Giuridica e Sociale",
		icon: "fas fa-balance-scale",
		description: "Hai spirito imprenditoriale e capacità di leadership. Ti interessano le dinamiche economiche, legali e sociali. Sei portato per ruoli di responsabilità in aziende, istituzioni e nel mondo del diritto.",
		courses: [
			"L-14 - Scienze Giuridiche",
			"L-16 - Scienze dell'Amministrazione",
			"L-18 - Economia Aziendale",
			"L-36 - Scienze Politiche e Relazioni Internazionali",
			"L-40 - Sociologia e Innovazione",
			"LMG-01 - Giurisprudenza",
			"LM-52 - Relazioni Internazionali",
			"LM-56 - Economia e Data Analysis",
			"LM-77 - Management"
		]
	},
	"umanistica": {
		name: "Area Umanistica e della Formazione",
		icon: "fas fa-book",
		description: "Hai una spiccata sensibilità culturale ed empatia. Ami la letteratura, la filosofia e le scienze umane. Sei portato per l'insegnamento, la psicologia e le professioni che richiedono comprensione profonda dell'essere umano.",
		courses: [
			"L-5 - Filosofia ed Etica",
			"L-10 - Lettere, Sapere Umanistico",
			"L-19 - Scienze dell'Educazione",
			"L-24 - Scienze e Tecniche Psicologiche",
			"LM-39 - Linguistica Moderna",
			"LM-51 - Psicologia del Lavoro",
			"LM-85 - Scienze Pedagogiche"
		]
	},
	"comunicazione-design": {
		name: "Area Comunicazione, Arti e Design",
		icon: "fas fa-palette",
		description: "Sei creativo e hai un forte senso estetico. Ti appassionano l'arte, il design e le nuove forme di comunicazione. Hai talento per trasformare idee in progetti visivi e comunicativi di impatto.",
		courses: [
			"L-3 - Scienze e Tecnologie delle Arti",
			"L-4 - Design del Prodotto e della Moda",
			"L-12 - Lingue e Mercati",
			"L-20 - Comunicazione e Multimedia",
			"LM-59 - Comunicazione Digitale e Marketing"
		]
	},
	"scienze-vita": {
		name: "Area Scienze della Vita, del Turismo e del Benessere",
		icon: "fas fa-heartbeat",
		description: "Ami il contatto con la natura e le persone. Sei dinamico e pratico, con interesse per il benessere, lo sport, il turismo e l'enogastronomia. Cerchi un lavoro attivo e a contatto con il mondo.",
		courses: [
			"L-13 - Scienze Biologiche",
			"L-15 - Scienze Turistiche",
			"L-22 - Scienze Motorie",
			"L-26 - Scienze dell'Alimentazione",
			"L-GASTR - Gastronomia, Ospitalità e Territori",
			"LM-47 - Management dello Sport",
			"LM-61 - Scienze della Nutrizione Umana",
			"LM-67 - Scienze Motorie Preventive"
		]
	}
};

// Variabili globali per il quiz
let currentQuestion = 0;
let answers = [];
let scores = {
	"tecnico-scientifica": 0,
	"economico-giuridica": 0,
	"umanistica": 0,
	"comunicazione-design": 0,
	"scienze-vita": 0
};

// Funzione per iniziare il quiz
function startQuiz() {
	document.getElementById('quiz-intro').style.display = 'none';
	document.getElementById('quiz-content').style.display = 'block';
	document.getElementById('quiz-results').style.display = 'none';
	
	currentQuestion = 0;
	answers = [];
	scores = {
		"tecnico-scientifica": 0,
		"economico-giuridica": 0,
		"umanistica": 0,
		"comunicazione-design": 0,
		"scienze-vita": 0
	};
	
	showQuestion();
}

// Funzione per mostrare la domanda corrente
function showQuestion() {
	const question = quizQuestions[currentQuestion];
	const questionNumber = document.getElementById('question-number');
	const questionText = document.getElementById('question-text');
	const optionsContainer = document.getElementById('quiz-options');
	const progressBar = document.getElementById('progress-bar');
	const progressText = document.getElementById('progress-text');
	const btnBack = document.getElementById('btn-back');
	const btnNext = document.getElementById('btn-next');
	
	// Aggiorna numero domanda e testo
	questionNumber.textContent = `Domanda ${currentQuestion + 1} di ${quizQuestions.length}`;
	questionText.textContent = question.question;
	
	// Aggiorna progress bar
	const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
	progressBar.style.width = `${progress}%`;
	progressText.textContent = `${currentQuestion + 1}/${quizQuestions.length}`;
	
	// Crea opzioni
	optionsContainer.innerHTML = '';
	question.options.forEach((option, index) => {
		const optionDiv = document.createElement('div');
		optionDiv.className = 'quiz-option';
		optionDiv.innerHTML = `
			<span class="quiz-option-letter">${String.fromCharCode(65 + index)}</span>
			<span class="quiz-option-text">${option.text}</span>
		`;
		
		// Controlla se questa opzione era già stata selezionata
		if (answers[currentQuestion] === option.category) {
			optionDiv.classList.add('selected');
		}
		
		optionDiv.addEventListener('click', () => selectOption(option.category, optionDiv));
		optionsContainer.appendChild(optionDiv);
	});
	
	// Gestisci pulsanti navigazione
	btnBack.disabled = currentQuestion === 0;
	
	// Se è l'ultima domanda, cambia testo del pulsante
	if (currentQuestion === quizQuestions.length - 1) {
		btnNext.innerHTML = `
			Vedi Risultati
			<i class="fas fa-check-circle"></i>
		`;
	} else {
		btnNext.innerHTML = `
			Avanti
			<i class="fas fa-arrow-right"></i>
		`;
	}
	
	// Abilita/disabilita pulsante avanti
	btnNext.disabled = !answers[currentQuestion];
}

// Funzione per selezionare un'opzione
function selectOption(category, optionElement) {
	// Rimuovi selezione precedente
	document.querySelectorAll('.quiz-option').forEach(opt => {
		opt.classList.remove('selected');
	});
	
	// Aggiungi selezione corrente
	optionElement.classList.add('selected');
	
	// Salva risposta
	answers[currentQuestion] = category;
	
	// Abilita pulsante avanti
	document.getElementById('btn-next').disabled = false;
}

// Funzione per andare alla domanda successiva
function nextQuestion() {
	if (!answers[currentQuestion]) return;
	
	if (currentQuestion < quizQuestions.length - 1) {
		currentQuestion++;
		showQuestion();
	} else {
		calculateResults();
	}
}

// Funzione per tornare alla domanda precedente
function previousQuestion() {
	if (currentQuestion > 0) {
		currentQuestion--;
		showQuestion();
	}
}

// Funzione per calcolare i risultati
function calculateResults() {
	// Resetta i punteggi
	scores = {
		"tecnico-scientifica": 0,
		"economico-giuridica": 0,
		"umanistica": 0,
		"comunicazione-design": 0,
		"scienze-vita": 0
	};
	
	// Calcola i punteggi
	answers.forEach(answer => {
		if (answer) {
			scores[answer]++;
		}
	});
	
	// Trova l'area vincente
	let maxScore = 0;
	let winningCategory = '';
	let secondCategory = '';
	let secondScore = 0;
	
	for (let category in scores) {
		if (scores[category] > maxScore) {
			secondScore = maxScore;
			secondCategory = winningCategory;
			maxScore = scores[category];
			winningCategory = category;
		} else if (scores[category] > secondScore) {
			secondScore = scores[category];
			secondCategory = category;
		}
	}
	
	// Mostra i risultati
	showResults(winningCategory, secondCategory, secondScore);
}

// Funzione per mostrare i risultati
function showResults(mainCategory, secondCategory, secondScore) {
	document.getElementById('quiz-content').style.display = 'none';
	document.getElementById('quiz-results').style.display = 'block';
	
	const mainCategoryData = categories[mainCategory];
	const resultsIcon = document.getElementById('results-icon');
	const areaTitle = document.getElementById('area-title');
	const areaDescription = document.getElementById('area-description');
	const coursesList = document.getElementById('recommended-courses-list');
	
	// Imposta icona principale
	resultsIcon.innerHTML = `<i class="${mainCategoryData.icon}"></i>`;
	
	// Imposta titolo e descrizione
	areaTitle.textContent = mainCategoryData.name;
	areaDescription.textContent = mainCategoryData.description;
	
	// Mostra corsi consigliati
	coursesList.innerHTML = '';
	mainCategoryData.courses.forEach(course => {
		const li = document.createElement('li');
		li.textContent = course;
		coursesList.appendChild(li);
	});
	
	// Se c'è una seconda categoria con punteggio significativo (almeno 3 risposte)
	if (secondCategory && secondScore >= 3) {
		const secondCategoryData = categories[secondCategory];
		const secondaryArea = document.getElementById('secondary-area');
		const secondaryTitle = document.getElementById('secondary-area-title');
		const secondaryDescription = document.getElementById('secondary-area-description');
		const secondaryCoursesList = document.getElementById('secondary-courses-list');
		
		secondaryArea.style.display = 'block';
		secondaryTitle.textContent = `Hai anche affinità con: ${secondCategoryData.name}`;
		secondaryDescription.textContent = `Hai mostrato interesse anche per quest'area. Potresti considerare corsi interdisciplinari che combinino entrambe le aree.`;
		
		// Mostra alcuni corsi della seconda categoria
		secondaryCoursesList.innerHTML = '';
		secondCategoryData.courses.slice(0, 3).forEach(course => {
			const li = document.createElement('li');
			li.textContent = course;
			secondaryCoursesList.appendChild(li);
		});
	}
	
	// Salva risultati nel localStorage per statistiche
	saveQuizResults(mainCategory, scores);
	
	// Scroll to top
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Funzione per salvare i risultati
function saveQuizResults(category, allScores) {
	const result = {
		category: category,
		scores: allScores,
		timestamp: new Date().toISOString()
	};
	
	let quizHistory = localStorage.getItem('quizResults');
	if (quizHistory) {
		quizHistory = JSON.parse(quizHistory);
	} else {
		quizHistory = [];
	}
	
	quizHistory.push(result);
	localStorage.setItem('quizResults', JSON.stringify(quizHistory));
}

// Funzione per rifare il quiz
function restartQuiz() {
	currentQuestion = 0;
	answers = [];
	scores = {
		"tecnico-scientifica": 0,
		"economico-giuridica": 0,
		"umanistica": 0,
		"comunicazione-design": 0,
		"scienze-vita": 0
	};
	
	document.getElementById('quiz-results').style.display = 'none';
	document.getElementById('quiz-intro').style.display = 'block';
	
	// Reset secondary area
	document.getElementById('secondary-area').style.display = 'none';
	
	// Scroll to top
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Gestione tasti tastiera per navigazione
document.addEventListener('keydown', function(e) {
	if (document.getElementById('quiz-content').style.display === 'block') {
		if (e.key === 'ArrowLeft' && currentQuestion > 0) {
			previousQuestion();
		} else if (e.key === 'ArrowRight' && answers[currentQuestion]) {
			nextQuestion();
		} else if (e.key >= '1' && e.key <= '5') {
			const optionIndex = parseInt(e.key) - 1;
			const options = document.querySelectorAll('.quiz-option');
			if (options[optionIndex]) {
				options[optionIndex].click();
			}
		} else if (e.key >= 'a' && e.key <= 'e') {
			const optionIndex = e.key.charCodeAt(0) - 97;
			const options = document.querySelectorAll('.quiz-option');
			if (options[optionIndex]) {
				options[optionIndex].click();
			}
		}
	}
});

// Aggiungi animazioni al caricamento
document.addEventListener('DOMContentLoaded', function() {
	// Anima l'entrata degli elementi
	const animateElements = document.querySelectorAll('.area-preview');
	animateElements.forEach((el, index) => {
		el.style.opacity = '0';
		el.style.transform = 'translateY(20px)';
		setTimeout(() => {
			el.style.transition = 'all 0.5s ease';
			el.style.opacity = '1';
			el.style.transform = 'translateY(0)';
		}, 100 * index);
	});
});