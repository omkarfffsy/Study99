document.addEventListener('DOMContentLoaded', () => {

const appWrapper = document.getElementById('app-wrapper');
const glassNav = document.querySelector('.glass-nav');

const seriesData = [
    { id: 1, title: "MATHS 2 CH 1 LECTURE 1 DIFFERENTIATION", category: "12 TOPPERS BATCH MATHS 2026", isFeatured: true, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADiA0AAsVQ4EQDApqajl1oYhYE" }] },
    { id: 2, title: "MATHS 2 CH 1 LECTURE 2 DIFFERENTIATION", category: "12 TOPPERS BATCH MATHS 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADEw4AAsVQ4EQpEWXjA5tZkxYE" }] },
    { id: 3, title: "MATHS 2 CH 1 LECTURE 3 DIFFERENTIATION", category: "12 TOPPERS BATCH MATHS 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADnAkAAk4QAUWIVTnI0b5n0xYE" }] },
    { id: 4, title: "MATHS 2 CH 1 LECTURE 4 DIFFERENTIATION", category: "12 TOPPERS BATCH MATHS 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADDgoAAk4QAUVaIPl9NtivhBYE" }] },
    { id: 500, title: "CH 10 LECTURE 1 HALOGEN DERIVATION", category: "12 CRASH COURSE CHEMISTRY 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADAxMAAk4QCUVB_QZvMrp6gxYE" }] },
    { id: 600, title: "MATHS 2 CH 1 LELECTUR 1 DIFFERENTIATION", category: "12 CRASH COURSE MATHS 2 2026", isFeatured: true, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADqRIAAk4QCUUIkLo2G9dhZBYE" }] },
    { id: 601, title: "MATHS 2 CH 1 LELECTUR 2 DIFFERENTIATION", category: "12 CRASH COURSE MATHS 2 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADPBMAAl_CEUV8HcnHY9MCvRYE" }] },
    { id: 602, title: "MATHS 2 CH 1 LELELECTUR 3 DIFFERENTIATION", category: "12 CRASH COURSE MATHS 2 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQAD9gsAAtq5IEUxeFC-nwrpoRYE" }] },
    { id: 603, title: "MATHS 2 CH 1 LELELECTUR 4 DIFFERENTIATION", category: "12 CRASH COURSE MATHS 2 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQAD9A8AAtq5MEV-ZmdrQNrJiBYE" }] },
    { id: 604, title: "MATHS 2 CH 1 LELELECTUR 5 DIFFERENTIATION", category: "12 CRASH COURSE MATHS 2 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQAD-wkAAhuCOUUJ3_oQ3wOrxBYE" }] },
    { id: 700, title: "MATHS 1 CH 1 LELELECTUR 1 LOGIC", category: "12 CRASH COURSE MATHS 1 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADtA4AAhuCOUWe8WXPfelPZBYE" }] },
    { id: 701, title: "MATHS 1 CH 1 LELELECTUR 2 LOGIC", category: "12 CRASH COURSE MATHS 1 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADXg4AAhuCOUX0CXgsybIFwhYE" }] },
    { id: 702, title: "MATHS 1 CH 1 LELELECTUR 3 LOGIC", category: "12 CRASH COURSE MATHS 1 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADCwYAAooGUUWe5rZPZoDOlRYE" }] },
    { id: 703, title: "MATHS 1 CH 2 LELELECTUR 1 Matrices", category: "12 CRASH COURSE MATHS 1 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADWhAAAlTOaEUGkGl4CPHidhYE" }] },
    { id: 704, title: "MATHS 1 CH 2 LELELECTUR 2 Matrices", category: "12 CRASH COURSE MATHS 1 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADKxUAAi5wOEQ-6w_I71UAAZ0WBA" }] },
    { id: 707, title: "MATHS 1 CH 3 LELELECTUR 1 Trigonometric Functions ", category: "12 CRASH COURSE MATHS 1 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADNwoAAhbgQUT-F0XjUm53GBYE" }] },
    { id: 708, title: "MATHS 1 CH 3 LELELECTUR 2 Trigonometric Functions ", category: "12 CRASH COURSE MATHS 1 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADSgoAAhbgQUTKrhSk5_4CERYE" }] },
    { id: 709, title: "MATHS 1 CH 3 LELELECTUR 3 Trigonometric Functions ", category: "12 CRASH COURSE MATHS 1 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADbAoAAhbgQURzsePgae8F6hYE" }] },
    { id: 705, title: "MATHS 1 CH 4 LELELECTUR 1 Pair of straight line ", category: "12 CRASH COURSE MATHS 1 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADVgkAAhbgQURblyqKF8RI9RYE" }] },
    { id: 706, title: "MATHS 1 CH 4 LELELECTUR 2 Pair of straight line ", category: "12 CRASH COURSE MATHS 1 2026", isFeatured: false, episodes: [{ mainLink: "https://t.me/File_store_1a21_bot?start=BQADAQADFQoAAhbgQURpr6PM4t8OuxYE" }] },
    { id: 301, title: " Solid State", category: "Chemistry", isFeatured: true, episodes: [{ mainLink: "#" }] },
    { id: 302, title: "Chemistry Chapter 2: Solutions", category: "Chemistry", isFeatured: false, episodes: [{ mainLink: "#" }] },
    { id: 303, title: "Chemistry Chapter 3: Ionic Equilibria", category: "Chemistry", isFeatured: false, episodes: [{ mainLink: "#" }] }
];  

const courseData = {
  "TOPPERS BATCH 2026": {
    "Maths 2 (Std 12)": [
        { chapterName: "1. DIFFERENTIATION", videos: [ {title: "Lecture 1", url: "https://t.me/File_store_1a21_bot?start=BQADAQADiA0AAsVQ4EQDApqajl1oYhYE"}, {title: "Lecture 2", url: "https://t.me/File_store_1a21_bot?start=BQADAQADEw4AAsVQ4EQpEWXjA5tZkxYE"} , {title: "LECTURE 3", url: "https://t.me/File_store_1a21_bot?start=BQADAQADnAkAAk4QAUWIVTnI0b5n0xYE"} , {title: "LECTURE 4", url: "https://t.me/File_store_1a21_bot?start=BQADAQADDgoAAk4QAUVaIPl9NtivhBYE" }], notes: [ {title: "omkar soni", url: "#"} ] },
        { chapterName: "2. Functions", videos: [ {title: "Lecture 1: Intro", url: "#"} ], notes: [ {title: "Function Graphs PDF", url: "#"} ] }
    ]
  }, 
  "CRASH COURSE 2026": {
    "Chemistry (Std 12)": [
        { chapterName: "10. Halogen Derivatives", videos: [ {title: "Lecture 1: Halogen Derivation", url: "https://t.me/File_store_1a21_bot?start=BQADAQADAxMAAk4QCUVB_QZvMrp6gxYE"} ], notes: [ {title: "coming ", url: "  "} ] }
    ], 
    "Maths 2 (Std 12)": [
        { chapterName: "1. DIFFERENTIATION", videos: [ {title: "Lecture 1: Intro", url: "https://t.me/File_store_1a21_bot?start=BQADAQADqRIAAk4QCUUIkLo2G9dhZBYE"} , {title: "LECTURE 2" , url:"https://t.me/File_store_1a21_bot?start=BQADAQADPBMAAl_CEUV8HcnHY9MCvRYE"} , {title: "LECTURE 3" , url: "https://t.me/File_store_1a21_bot?start=BQADAQAD9gsAAtq5IEUxeFC-nwrpoRYE" } , {title: "LECTURE 4" , url: "https://t.me/File_store_1a21_bot?start=BQADAQAD9A8AAtq5MEV-ZmdrQNrJiBYE"}, {title:"LECTURE 5" , url: "https://t.me/File_store_1a21_bot?start=BQADAQAD-wkAAhuCOUUJ3_oQ3wOrxBYE" }], notes: [ {title: "MATHS 2 CH 1 BRAHMASTRA LITE", url: "https://t.me/File_store_1a21_bot?start=BQADAQAD3xIAAl_CEUXsy2JMylb96xYE"} , {title: "TARGET MATHS 2 CH 1 MQC" , url: "https://t.me/File_store_1a21_bot?start=BQADAQADkgsAAtq5IEU65ES64i4cghYE" }] }
    ] ,
    "Maths 1 (Std 12)": [
          { chapterName: "LOGIC ", videos: [ {title: "Lecture 1: ", url: "https://t.me/File_store_1a21_bot?start=BQADAQADtA4AAhuCOUWe8WXPfelPZBYE"}, {title: "LECTURE 2" , url: "https://t.me/File_store_1a21_bot?start=BQADAQADXg4AAhuCOUX0CXgsybIFwhYE" }, {title:"Lecture 3" , url:"https://t.me/File_store_1a21_bot?start=BQADAQADCwYAAooGUUWe5rZPZoDOlRYE" } ] , notes: [ {title: "MATHS 1 CH 1 BRAHMASTRA LITE", url: "#"} ] }
  ] 
  },
  "Maths": {
      "Std 11": [
          { chapterName: "1. Sets and Relations", videos: [ {title: "Lecture 1: Intro to Sets", url: "#"} ], notes: [ {title: "Full Chapter Notes", url: "#"} ] },
      ],
      "Std 12": [
          { chapterName: "1. Mathematical Logic", videos: [ {title: "Lecture 1: Statements", url: "#"} ], notes: [ {title: "Logic Truth Tables", url: "#"} ] },
      ]
  },
  "Physics": {
      "Std 11": [
          { chapterName: "1. Units and Measurements", videos: [ {title: "Lec 1: Intro", url: "#"} ], notes: [ {title: "Notes", url: "#"} ] }
      ],
      "Std 12": [
          { chapterName: "1. Rotational Dynamics", videos: [ {title: "Lec 1: Circular Motion", url: "#"} ], notes: [ {title: "Full Chapter Notes", url: "#"} ] }
      ]
  },
  "Chemistry": {
      "Std 11": [
          { chapterName: "1. Some Basic Concepts of Chemistry", videos: [ {title: "Lec 1: Matter", url: "#"} ], notes: [ {title: "Mole Concept Tricks", url: "#"} ] }
      ],
      "Std 12": [
          { chapterName: "1. Solid State", videos: [ {title: "Lec 1: Types of Solids", url: "#"} ], notes: [ {title: "Solid State Short Notes", url: "#"} ] }
      ]
  }
};

const ui = {  
    preloader: document.getElementById('preloader'), 
    mainContent: document.getElementById('app-main-content'),  
    nav: { container: document.querySelector('.glass-nav'), items: document.querySelectorAll('.nav-item'), spotlight: document.querySelector('.nav-spotlight') },  
    watchView: document.getElementById('watch-view'),  
    dirView: document.getElementById('directory-view'),
    search: { input: document.getElementById('search-page-input'), suggestionsContainer: document.getElementById('search-suggestions') }
};  

const state = { activeSeries: null, likedItems: new Set() };  

const allSearchableData = [...seriesData]; 
Object.keys(courseData).forEach(subject => {
    Object.keys(courseData[subject]).forEach(std => {
        courseData[subject][std].forEach(chap => {
            allSearchableData.push({
                isFolderItem: true,
                title: `${chap.chapterName} (${subject} ${std})`,
                subject: subject,
                std: std,
                chapter: chap.chapterName
            });
        });
    });
});
let fuse;

let dirState = { mode: null, subject: null, std: null, chapter: null };

// Navigation Router Logic
const navigateTo = (viewId) => { 
    history.pushState({ viewId }, '', `#${viewId}`); 
    renderView(viewId); 
};  

window.addEventListener('popstate', (event) => { 
    renderView(event.state?.viewId || 'textbook-view'); 
});  

// View Rendering Logic (Fixed to handle directory view natively)
const renderView = (viewId) => {  
    const parts = viewId.split('/');
    const baseView = parts[0];
    const p1 = parts[1] ? decodeURIComponent(parts[1]) : null;
    
    document.querySelectorAll('.app-view').forEach(v => v.classList.toggle('hidden', v.id !== baseView));  
    
    if (baseView === 'watch-view') {  
        const series = seriesData.find(s => s.id === parseInt(p1, 10));  
        if (series) renderWatchPage(series);  
    } else if (baseView === 'likes-view') {  
        renderLikesPage();  
    } else if (baseView === 'directory-view') {
        renderDirectoryUI();
    }
    
    // Highlight the correct bottom nav item
    let navTarget = baseView;
    if (baseView === 'directory-view') {
        navTarget = dirState.mode === 'notes' ? 'notes-view' : 'textbook-view';
    }
    
    const activeItem = document.querySelector(`.nav-item[data-view="${navTarget}"]`);  
    ui.nav.items.forEach(item => item.classList.remove('active'));  
    
    if (activeItem) {  
        activeItem.classList.add('active');  
        ui.nav.spotlight.style.opacity = '1';
        const newLeft = activeItem.offsetLeft + (activeItem.offsetWidth / 2) - (ui.nav.spotlight.offsetWidth / 2);  
        ui.nav.spotlight.style.transform = `translateX(${newLeft}px)`;  
    } else {
        ui.nav.spotlight.style.opacity = '0';
    }
    
    ui.mainContent.scrollTop = 0;  
};  

// Handles clicking into a folder or chapter list
document.getElementById('dir-container').addEventListener('click', (e) => {
    const card = e.target.closest('.folder-card, .chapter-list-item');
    if (!card) return;
    dirState[card.dataset.level] = card.dataset.value;
    renderDirectoryUI();
});

// Fixed Back Button Logic inside the Directory
document.getElementById('dir-back-btn').addEventListener('click', () => {
    if (dirState.chapter) { 
        dirState.chapter = null; 
        renderDirectoryUI();
    } else { 
        // We are at the chapter list, so go completely back to the homescreen grid
        navigateTo(dirState.mode === 'notes' ? 'notes-view' : 'textbook-view');
    } 
});

const renderDirectoryUI = () => {
    const container = document.getElementById('dir-container');
    const headerTitle = document.getElementById('dir-title');
    const isNotes = dirState.mode === 'notes';
    const themeColor = isNotes ? '#2AABEE' : '#00ddb5'; 
    
    if (dirState.subject && dirState.std && !dirState.chapter) {
        headerTitle.textContent = dirState.subject;
        const chapters = courseData[dirState.subject]?.[dirState.std] || [];
        container.innerHTML = chapters.map((chap, index) => `
            <div class="chapter-list-item" data-level="chapter" data-value="${chap.chapterName}">
                <div class="chapter-number">${index + 1}</div>
                <div class="chapter-name">${chap.chapterName}</div>
            </div>
        `).join('');
    } else {
        headerTitle.textContent = dirState.chapter;
        const chapters = courseData[dirState.subject]?.[dirState.std] || [];
        const selectedChapter = chapters.find(c => c.chapterName === dirState.chapter);
        const files = isNotes ? (selectedChapter?.notes || []) : (selectedChapter?.videos || []);
        
        if (files.length > 0) {
            container.innerHTML = files.map(file => `
                <a href="${file.url}" target="_blank" class="file-card">
                    <i class="fas ${isNotes ? 'fa-file-pdf' : 'fa-play-circle'}" style="color:${isNotes ? '#ff4d4d' : themeColor}"></i>
                    <div class="file-info">
                        <h4>${file.title}</h4>
                        <span>${isNotes ? 'Click to open PDF' : 'Click to watch Video'}</span>
                    </div>
                    <i class="fas fa-chevron-right action-icon"></i>
                </a>
            `).join('');
        } else {
            container.innerHTML = `<p style="text-align: center; color: var(--text-secondary); margin-top: 2rem;">No items uploaded for this chapter yet.</p>`;
        }
    }
};

const createCardElement = (series) => `<div class="series-card-item" data-id="${series.id}"><div class="series-card-image-container text-thumbnail"><span>Study Material</span></div><h3 class="series-card-title-outer">${series.title}</h3></div>`;  

const renderWatchPage = (series) => {  
    state.activeSeries = series;  
    const isLiked = state.likedItems.has(series.id);  
    ui.watchView.innerHTML = `<div class="watch-view-content"><button class="pro-button small secondary back-btn"><i class="fas fa-arrow-left"></i></button><div class="featured-image-container text-thumbnail-large"><span>${series.category}</span><div style="position: absolute; inset: 0; background: linear-gradient(to top, var(--dark-bg) 5%, transparent 40%);"></div></div><div class="watch-view-header"><h2 id="featured-title">${series.title}</h2><button id="like-btn" class="like-button ${isLiked ? 'liked' : ''}"><i class="${isLiked ? 'fas' : 'far'} fa-bookmark"></i></button></div><div class="watch-buttons"><a href="${series.episodes[0].mainLink}" target="_blank" class="pro-button primary">Explore <i class="fas fa-arrow-right"></i></a></div></div>`;  
};  

const renderLikesPage = () => {  
    const likedSeries = seriesData.filter(s => state.likedItems.has(s.id));  
    document.getElementById('likes-grid').innerHTML = likedSeries.length ? likedSeries.map(createCardElement).join('') : '';  
};  

const handleSearch = (query) => {  
    if (query.length < 1) { ui.search.suggestionsContainer.innerHTML = ''; return; }  
    const results = fuse.search(query).slice(0, 8).map(r => r.item);  
    ui.search.suggestionsContainer.innerHTML = results.map(s => {
        if(s.isFolderItem) {
            return `<div class="suggestion-item" data-type="folder" data-sub="${s.subject}" data-std="${s.std}" data-chap="${s.chapter}">
                        <div class="search-text-icon"><i class="fas fa-folder"></i></div><span>${s.title}</span>
                    </div>`;
        } else {
            return `<div class="suggestion-item" data-id="${s.id}">
                        <div class="search-text-icon"><i class="fas fa-file-alt"></i></div><span>${s.title}</span>
                    </div>`;
        }
    }).join('');  
};  
  
const handleGlobalClick = (e) => {  
    // Intercept clicks on the Textbook / Notes Grid Buttons
    const gridBtn = e.target.closest('.grid-open-btn');
    if (gridBtn) {
        const isNotes = gridBtn.closest('#notes-view') !== null;
        dirState = { mode: isNotes ? 'notes' : 'textbook', subject: gridBtn.dataset.subject, std: gridBtn.dataset.std, chapter: null };
        navigateTo('directory-view');
        return;
    }

    const card = e.target.closest('.series-card-item');  
    const suggestion = e.target.closest('.suggestion-item');

    if (suggestion) {
        if (suggestion.dataset.type === 'folder') {
            dirState = { mode: 'textbook', subject: suggestion.dataset.sub, std: suggestion.dataset.std, chapter: suggestion.dataset.chap };
            ui.search.input.value = '';
            ui.search.suggestionsContainer.innerHTML = '';
            navigateTo('directory-view');
            return;
        } else if (suggestion.dataset.id) {
            return navigateTo(`watch-view/${suggestion.dataset.id}`);
        }
    }

    if (card?.dataset.id) return navigateTo(`watch-view/${card.dataset.id}`);  
    
    // Global Back Button (Catches the standard arrow icon button)
    if (e.target.closest('.back-btn, .back-btn-header') && !e.target.closest('#dir-back-btn')) {
        return history.back();
    }  
    
    if (e.target.closest('#like-btn')) {
        const id = state.activeSeries.id;
        state.likedItems.has(id) ? state.likedItems.delete(id) : state.likedItems.add(id);  
        localStorage.setItem('likedSeries', JSON.stringify([...state.likedItems]));  
        e.target.closest('#like-btn').classList.toggle('liked', state.likedItems.has(id));
        e.target.closest('#like-btn').querySelector('i').className = state.likedItems.has(id) ? 'fas fa-bookmark' : 'far fa-bookmark';
        document.getElementById('stat-total-likes').textContent = state.likedItems.size;
    }
};  

function initializeMainApp() {
    appWrapper.classList.remove('hidden');
    glassNav.classList.remove('hidden');
    
    setTimeout(() => { ui.preloader.classList.add('fade-out'); }, 800);
    
    fuse = new Fuse(allSearchableData, { keys: ['title', 'chapter', 'subject'], threshold: 0.4 });
    
    state.likedItems = new Set(JSON.parse(localStorage.getItem('likedSeries') || '[]').map(Number));  
    document.getElementById('stat-total-likes').textContent = state.likedItems.size;

    const initialView = window.location.hash.slice(1) || 'textbook-view';  
    history.replaceState({ viewId: 'textbook-view' }, '', `#textbook-view`);  
    if (initialView !== 'textbook-view') history.pushState({ viewId: initialView }, '', `#${initialView}`); 
    renderView(initialView);  
      
    ui.nav.container.addEventListener('click', e => { const navLink = e.target.closest('.nav-item'); if (navLink) { e.preventDefault(); navigateTo(navLink.dataset.view); }});  
    document.body.addEventListener('click', handleGlobalClick);  
    ui.search.input.addEventListener('input', (e) => handleSearch(e.target.value));
}

const modalOverlay = document.getElementById('modal-overlay');
const ageGateYesBtn = document.getElementById('age-gate-yes');
const ageGateNoBtn = document.getElementById('age-gate-no');

if (sessionStorage.getItem('isAgeVerified') === 'true') {  
    initializeMainApp();  
} else {  
    modalOverlay.classList.remove('hidden');  
    ageGateYesBtn.addEventListener('click', () => {  
        sessionStorage.setItem('isAgeVerified', 'true');  
        modalOverlay.classList.add('hidden');  
        initializeMainApp();  
    });  
    ageGateNoBtn.addEventListener('click', () => { 
        document.body.innerHTML = `<div style="display:flex; flex-direction: column; justify-content:center;align-items:center;height:100vh;background-color:#101418;color:#f0f0f5;font-family:'Poppins',sans-serif; text-align: center; padding: 1rem;"><h1>Take Your Time!</h1><p>Refresh the page when you are ready to start studying.</p></div>`; 
    });  
}

});
