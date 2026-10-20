document.addEventListener('DOMContentLoaded', () => {

const appWrapper = document.getElementById('app-wrapper');
const glassNav = document.querySelector('.glass-nav');

// =========================================================================
// 📚 YOUR STUDY DATABASE
// =========================================================================

const studyMaterials = [
    // --- BEE ---
    { type: "notes", subject: "BEE", chapter: "MODULE 1", title: "Module 1 Notes", url: "https://t.me/File_store_1a21_bot?start=BQADAQADeBYAAv8mCEYUAXS_qcoeYxYE" },
    
    // --- E-MATHS ---
    { type: "textbook", subject: "E-MATHS", chapter: "Complete Textbook", title: "E-MATHS Textbook", url: "https://t.me/File_store_1a21_bot?start=BQADAQADnQcAAqBWGEY0V9vZykLpORYE" }
];

// =========================================================================
// ⚙️ INTERNAL APP LOGIC 
// =========================================================================

const ui = {  
    preloader: document.getElementById('preloader'), 
    mainContent: document.getElementById('app-main-content'),  
    nav: { 
        container: document.querySelector('.glass-nav'), 
        items: document.querySelectorAll('.nav-item'), 
        spotlight: document.querySelector('.nav-spotlight') 
    },  
    search: { 
        input: document.getElementById('search-page-input'), 
        suggestionsContainer: document.getElementById('search-suggestions') 
    }
};  

let dirState = { mode: null, subject: null, chapter: null };

// 1. Build Search Engine from your flat database
const uniqueSearchChapters = [];
const chapterTracker = new Set();

studyMaterials.forEach(item => {
    const uniqueKey = `${item.subject}-${item.chapter}`;
    if (!chapterTracker.has(uniqueKey)) {
        chapterTracker.add(uniqueKey);
        uniqueSearchChapters.push({
            title: `${item.chapter} (${item.subject})`,
            subject: item.subject,
            chapter: item.chapter
        });
    }
});

let fuse = new Fuse(uniqueSearchChapters, { keys: ['title', 'chapter', 'subject'], threshold: 0.4 });

// 2. Navigation Router
const navigateTo = (viewId) => { 
    history.pushState({ viewId }, '', `#${viewId}`); 
    renderView(viewId); 
};  

window.addEventListener('popstate', (event) => { 
    renderView(event.state?.viewId || 'textbook-view'); 
});  

// 3. View Renderer
const renderView = (viewId) => {  
    const parts = viewId.split('/');
    const baseView = parts[0];
    
    document.querySelectorAll('.app-view').forEach(v => v.classList.toggle('hidden', v.id !== baseView));  
    
    if (baseView === 'directory-view') {
        renderDirectoryUI();
    }
    
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

// 4. Directory Engine
const renderDirectoryUI = () => {
    const container = document.getElementById('dir-container');
    const headerTitle = document.getElementById('dir-title');
    const isNotes = dirState.mode === 'notes';
    const themeColor = isNotes ? '#2AABEE' : '#00ddb5'; 
    
    if (dirState.subject && !dirState.chapter) {
        headerTitle.textContent = dirState.subject;
        const relevantItems = studyMaterials.filter(item => item.subject === dirState.subject && item.type === dirState.mode);
        const uniqueChapters = [...new Set(relevantItems.map(item => item.chapter))];
        
        if (uniqueChapters.length > 0) {
            container.innerHTML = uniqueChapters.map((chapName, index) => `
                <div class="chapter-list-item" data-level="chapter" data-value="${chapName}">
                    <div class="chapter-number">${index + 1}</div>
                    <div class="chapter-name">${chapName}</div>
                </div>
            `).join('');
        } else {
            container.innerHTML = `<p style="text-align: center; color: var(--text-secondary); margin-top: 2rem;">No ${dirState.mode}s uploaded for this subject yet.</p>`;
        }
    } else if (dirState.subject && dirState.chapter) {
        headerTitle.textContent = dirState.chapter;
        const files = studyMaterials.filter(item => 
            item.subject === dirState.subject && 
            item.chapter === dirState.chapter && 
            item.type === dirState.mode
        );
        
        if (files.length > 0) {
            container.innerHTML = files.map(file => `
                <a href="${file.url}" target="_blank" class="file-card">
                    <i class="fas ${isNotes ? 'fa-file-pdf' : 'fa-book'}" style="color:${isNotes ? '#ff4d4d' : themeColor}"></i>
                    <div class="file-info">
                        <h4>${file.title}</h4>
                        <span>${isNotes ? 'Click to open PDF Notes' : 'Click to read Textbook'}</span>
                    </div>
                    <i class="fas fa-chevron-right action-icon"></i>
                </a>
            `).join('');
        } else {
            container.innerHTML = `<p style="text-align: center; color: var(--text-secondary); margin-top: 2rem;">No files uploaded for this chapter yet.</p>`;
        }
    }
};

// 5. Click Listeners
document.getElementById('dir-container').addEventListener('click', (e) => {
    const card = e.target.closest('.chapter-list-item');
    if (!card) return;
    dirState[card.dataset.level] = card.dataset.value;
    renderDirectoryUI();
});

document.getElementById('dir-back-btn').addEventListener('click', () => {
    if (dirState.chapter) { 
        dirState.chapter = null; 
        renderDirectoryUI();
    } else { 
        navigateTo(dirState.mode === 'notes' ? 'notes-view' : 'textbook-view');
    } 
});

const handleSearch = (query) => {  
    if (query.length < 1) { ui.search.suggestionsContainer.innerHTML = ''; return; }  
    const results = fuse.search(query).slice(0, 8).map(r => r.item);  
    ui.search.suggestionsContainer.innerHTML = results.map(s => {
        return `<div class="suggestion-item" data-sub="${s.subject}" data-chap="${s.chapter}">
                    <div class="search-text-icon"><i class="fas fa-folder"></i></div><span>${s.title}</span>
                </div>`;
    }).join('');  
};  
  
const handleGlobalClick = (e) => {  
    const gridBtn = e.target.closest('.grid-open-btn');
    if (gridBtn) {
        const isNotes = gridBtn.closest('#notes-view') !== null;
        dirState = { mode: isNotes ? 'notes' : 'textbook', subject: gridBtn.dataset.subject, chapter: null };
        navigateTo('directory-view');
        return;
    }

    const suggestion = e.target.closest('.suggestion-item');
    if (suggestion) {
        dirState = { mode: 'textbook', subject: suggestion.dataset.sub, chapter: suggestion.dataset.chap };
        ui.search.input.value = '';
        ui.search.suggestionsContainer.innerHTML = '';
        navigateTo('directory-view');
        return;
    }
    
    if (e.target.closest('.back-btn, .back-btn-header') && !e.target.closest('#dir-back-btn')) {
        return history.back();
    }  
};  

function initializeMainApp() {
    appWrapper.classList.remove('hidden');
    glassNav.classList.remove('hidden');
    
    setTimeout(() => { ui.preloader.classList.add('fade-out'); }, 800);
    
    const initialView = window.location.hash.slice(1) || 'textbook-view';  
    history.replaceState({ viewId: 'textbook-view' }, '', `#textbook-view`);  
    if (initialView !== 'textbook-view') history.pushState({ viewId: initialView }, '', `#${initialView}`); 
    renderView(initialView);  
      
    ui.nav.container.addEventListener('click', e => { const navLink = e.target.closest('.nav-item'); if (navLink) { e.preventDefault(); navigateTo(navLink.dataset.view); }});  
    document.body.addEventListener('click', handleGlobalClick);  
    ui.search.input.addEventListener('input', (e) => handleSearch(e.target.value));
}

// 6. Age Gate / Terms Modal
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
