// Данные казино с категориями
const casinos = [
    { 
        name: "VODKA", 
        links: ["https://uwu.vodka?id=4032"],
        category: "all",
        searchWords: ["vodka", "водка", "ewrlф", "вщдлф"]
    },
    { 
        name: "СУКАА", 
        links: ["https://goo.su/Eq3Q32f"],
        category: "all",
        searchWords: ["сукаа", "sukaa", "cecrff", "ыефтт"]
    },
    { 
        name: "Riobet", 
        links: ["https://tracker.rreflink.com/link?btag=7513340_427264"],
        category: "all",
        searchWords: ["riobet", "риобет", "hj,jtn", "шщыует"]
    },
    { 
        name: "VAVADA", 
        links: ["https://partnervavadarv.com/?promo=5c310709-6a4c-4aab-830f-d9dd0633deb4&target=register"],
        category: "all",
        searchWords: ["vavada", "вавада", "fafaf", "цацада"]
    },
    { 
        name: "КУШ", 
        links: ["https://play-kush-one.com/dde6dcbd6"],
        category: "bands",
        searchWords: ["куш", "kush", "reir", "геш"]
    },
    { 
        name: "Booi", 
        links: ["https://booi-promo2.com/alt/booi/ru/sign-up?83b090c5201e61417376570c9dacfb24"],
        category: "fortunes",
        searchWords: ["booi", "боои", ",jji", "ищщш"]
    },
    { 
        name: "PlaYFortuna", 
        links: ["https://fortuna-promo.net/alt/playfortuna/registration?324af583ac52845bab97f6e6c9f3689c"],
        category: "fortunes",
        searchWords: ["playfortuna", "плейфортуна", "gkzajheynf", "здтуащкегуф"]
    },
    { 
        name: "JOZZ", 
        links: ["https://jozzpromo.info/alt/jozz/registration?0cf85df68ef6a9d4933020b0f80fdb09"],
        category: "all",
        searchWords: ["jozz", "джозз", "ljee", "вщясс"]
    },
    { 
        name: "Stake ТОЛЬКО КРИПТА", 
        links: ["https://stake1002.com/?c=H8RxysB8"],
        category: "all",
        searchWords: ["stake", "стейк", "cnfr", "уыеук"],
        image: "img/stake-logo.png"
    },
    { 
        name: "GET X", 
        links: ["https://levelx.top/tfb6f3cd2"],
        category: "all",
        searchWords: ["getx", "гетх", "utn[", "пузч"]
    },
    { 
        name: "1xSlots", 
        links: ["https://refpa13453.top/L?tag=s_758113m_8741c_&site=758113&ad=8741"],
        category: "all",
        searchWords: ["1xslots", "1хслотс", "1[ckjn", "1чслщте"]
    },
    { 
        name: "Cactus", 
        links: ["https://cactus-balances.com/affiliate/c_yt5ue3fx?promoCode=archy100&/path/wallet"],
        category: "all",
        searchWords: ["cactus", "кактус", "frcne", "рфрге"]
    },
    { 
        name: "NewRetroCasino", 
        links: ["https://linkgotoweb.com/?ref=1379"],
        category: "all",
        searchWords: ["newretro", "ньюретро", "ythnthj", "тметенщ"]
    },
    { 
        name: "Bollywood", 
        links: ["https://digitalsmooth.top?ref=fap_w41325p129_bollywood"],
        category: "all",
        searchWords: ["bollywood", "болливуд", ",jkbddel", 'ищдшруд']
    },
    { 
        name: "Everum", 
        links: ["https://bit.ly/3b79fwN"],
        category: "all",
        searchWords: ["everum", "эверум", "tdthv", 'умуке']
    },
    { 
        name: "FairSpin", 
        links: ["https://bonafides.club/63172/1?l=5"],
        category: "all",
        searchWords: ["fairspin", "фэрспин", "afhgcb", 'аьругш']
    },
    { 
        name: "UNLIM", 
        links: ["https://unlimc.net/dcd8e66b1"],
        category: "cryptobosses",
        searchWords: ["unlim", "анлим", "eykbv", 'фтшшу']
    },
    { 
        name: "cryptoboss", 
        links: ["https://cryptobossc.online/d8b310428"],
        category: "cryptobosses",
        searchWords: ["cryptoboss", "криптобосс", "chgbn,jjcc", 'ксшзщдыосс']
    },
    { 
        name: "AUF КАЗИНО", 
        links: ["https://auflink.com/d33330915"],
        category: "cryptobosses",
        searchWords: ["auf", "ауф", "fde", 'фав']
    },
    { 
        name: "LEEBET", 
        links: ["https://play-leebet-one.com/d9ab56d9c"],
        category: "bands",
        searchWords: ["leebet", "леебет", "kttn", 'дутун']
    },
    { 
        name: "БАНДА", 
        links: ["https://play-banda-two.com/d6b26ec91"],
        category: "bands",
        searchWords: ["banda", "банда", "fylf", 'ирфк']
    },
    { 
        name: "1GO", 
        links: ["https://1go-irrs01.com/c93369444"],
        category: "all",
        searchWords: ["1go", "1го", "1uj", '1пщ']
    },
    { 
        name: "КЕНТ", 
        links: ["https://passage-through-deserts.com/d5d5d7aee"],
        category: "cats",
        searchWords: ["kent", "кент", "rty", 'нуе']
    },
    { 
        name: "GAMA", 
        links: ["https://asengleink.com/dd49c4d1f"],
        category: "cats",
        searchWords: ["gama", "гама", "ufvf", 'пфпя']
    },
    { 
        name: "CHAMPION SLOTS", 
        links: ["https://temon-gter.cfd/go/o70?p73525p299584p7229"],
        category: "all",
        searchWords: ["champion", "чемпион", "xvfrvby", 'чезлщт']
    },
    { 
        name: "RAMENBET", 
        links: ["https://sul.su/z4zV"],
        category: "joys",
        searchWords: ["ramenbet", "раменбет", "hfvy,tn", 'кашуин']
    },
    { 
        name: "JOYCASINO", 
        links: ["https://win9.finditway.com/ru/registration?apkpop=0&partner=p34031p3300040p0692"],
        category: "joys",
        searchWords: ["joycasino", "джойказино", "ljiqrfpb", 'вщшсфтшз']
    },
    { 
        name: "Casino X", 
        links: ["https://goo.su/BGGUPr5"],
        category: "joys",
        searchWords: ["casinox", "казинокс", "fpb[yjc", 'рфшытще']
    },
    { 
        name: "FLAGMAN", 
        links: ["https://flagman-way-six.com/cc603bd88"],
        category: "royals",
        searchWords: ["flagman", "флагман", "akfufvy", 'адфтпя']
    },
    { 
        name: "CatCasino", 
        links: ["https://catchthecatsix.com/d348785e3"],
        category: "cats",
        searchWords: ["catcasino", "катказано", "fcnfpfyf", 'рфеасящ']
    },
    { 
        name: "R7CASINO", 
        links: ["https://aristocratic-hall.com/dc49b623a"],
        category: "cats",
        searchWords: ["r7casino", "р7казино", "h7fpfbyj", 'к7рфшзыщ']
    },
    { 
        name: "КОМЕТА", 
        links: ["https://stars-flight.com/s2b9c59b0"],
        category: "cats",
        searchWords: ["cometa", "комета", "rjvtnf", 'щшсукф']
    },
    { 
        name: "LEX", 
        links: ["https://lex-irrs01.com/cbc750540"],
        category: "royals",
        searchWords: ["lex", "лекс", "kt", 'лчу']
    },
    { 
        name: "GIZBO", 
        links: ["https://gzb-blrs10.com/c72564a7b"],
        category: "royals",
        searchWords: ["gizbo", "гизбо", "ubp,j", 'пшсяд']
    },
    { 
        name: "MONRO", 
        links: ["https://mnr-irrs01.com/c3ef3d3bd"],
        category: "royals",
        searchWords: ["monro", "монро", "vjyhj", 'щтпкщ']
    },
    { 
        name: "DRIP", 
        links: ["https://drp-irrs01.com/cca21844b"],
        category: "royals",
        searchWords: ["drip", "дрип", "lhib", 'вшшз']
    },
    { 
        name: "STARDA", 
        links: ["https://strd-irrs12.com/c73b4da28"],
        category: "royals",
        searchWords: ["starda", "старда", "cnfhlf", 'уфкеак']
    },
    { 
        name: "IZZI", 
        links: ["https://izzi-irrs01.com/c636b38fb"],
        category: "royals",
        searchWords: ["izzi", "иззи", "bppb", 'шсяш']
    },
    { 
        name: "LEGZO", 
        links: ["https://gzo-irrs01.com/c8d4abf8a"],
        category: "royals",
        searchWords: ["legzo", "легзо", "ktupj", 'дупся']
    },
    { 
        name: "SOL", 
        links: ["https://sol-diamew02.com/c984420f9"],
        category: "royals",
        searchWords: ["sol", "сол", "cjk", 'ыщд']
    },
    { 
        name: "FRESH", 
        links: ["https://fresh-azhqmrpiks.com/caba447c3"],
        category: "royals",
        searchWords: ["fresh", "фреш", "aht", 'фку']
    },
    { 
        name: "JET", 
        links: ["https://jtfr-itsokarsn.com/c1c438e06"],
        category: "all",
        searchWords: ["jet", "джет", "rtn", 'куе']
    },
    { 
        name: "VOLNA", 
        links: ["https://vln-irrs01.com/c4afa0d8c"],
        category: "royals",
        searchWords: ["volna", "волна", "djkyf", 'вщдрф']
    },
    { 
        name: "ROX", 
        links: ["https://rox-fwuocypyjf.com/ca3b282fe"],
        category: "all",
        searchWords: ["rox", "рокс", "hjc", 'кще']
    }
];

// Функция для отображения казино
function renderCasinos(casinosToRender) {
    const casinoList = document.getElementById('casino-list');
    casinoList.innerHTML = '';
    
    casinosToRender.forEach(casino => {
        const casinoItem = document.createElement('div');
        casinoItem.className = 'casino-item';
        
        // Баннер казино
        const casinoBanner = document.createElement('div');
        casinoBanner.className = 'casino-banner';
        
        if (casino.image) {
            casinoBanner.style.backgroundImage = `url(${casino.image})`;
            casinoBanner.innerHTML = ''; // Убираем текст для Stake
        } else {
            casinoBanner.innerHTML = `<div>${casino.name}</div>`;
        }
        
        // Контент казино
        const casinoContent = document.createElement('div');
        casinoContent.className = 'casino-content';
        
        // Название казино
        const casinoName = document.createElement('div');
        casinoName.className = 'casino-name';
        casinoName.textContent = casino.name;
        
        // Информация о казино
        const casinoInfo = document.createElement('div');
        casinoInfo.className = 'casino-info';
        
        const infoItems = [
            {icon: 'fas fa-coins', text: '+150% к депозиту и 200 спинов'},
            {icon: 'fas fa-percentage', text: '3% кешбек'},
            {icon: 'fas fa-bolt', text: 'Мгновенные выводы'}
        ];
        
        infoItems.forEach(item => {
            const infoItem = document.createElement('div');
            infoItem.className = 'info-item';
            infoItem.innerHTML = `<i class="${item.icon}"></i> <span>${item.text}</span>`;
            casinoInfo.appendChild(infoItem);
        });
        
        // Промокод
        const casinoPromo = document.createElement('div');
        casinoPromo.className = 'casino-promo';
        casinoPromo.addEventListener('click', () => copyPromoCode());
        
        const promoLabel = document.createElement('div');
        promoLabel.className = 'promo-label';
        promoLabel.textContent = 'Промокод';
        
        const promoCodeItem = document.createElement('div');
        promoCodeItem.className = 'promo-code-item';
        promoCodeItem.textContent = 'ARCHY100';
        
        casinoPromo.appendChild(promoLabel);
        casinoPromo.appendChild(promoCodeItem);
        
        // Кнопка перехода
        const casinoLink = document.createElement('a');
        casinoLink.href = casino.links[0];
        casinoLink.className = 'casino-link';
        casinoLink.target = '_blank';
        casinoLink.textContent = 'Перейти на сайт';
        
        // Добавляем обработчик для копирования промокода
        casinoLink.addEventListener('click', function(e) {
            copyPromoCode();
        });
        
        // Собираем все вместе
        casinoContent.appendChild(casinoName);
        casinoContent.appendChild(casinoInfo);
        casinoContent.appendChild(casinoPromo);
        casinoContent.appendChild(casinoLink);
        
        casinoItem.appendChild(casinoBanner);
        casinoItem.appendChild(casinoContent);
        
        casinoList.appendChild(casinoItem);
    });
}

// Функция для копирования промокода
function copyPromoCode() {
    const promoCode = "ARCHY100";
    navigator.clipboard.writeText(promoCode).then(() => {
        const notification = document.getElementById('copy-notification');
        notification.style.opacity = '1';
        
        setTimeout(() => {
            notification.style.opacity = '0';
        }, 2000);
    });
}

// Функция для фильтрации казино
function filterCasinos() {
    const filterValue = document.getElementById('casino-filter').value.toLowerCase();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    
    let filteredCasinos = casinos;
    
    // Фильтрация по категории
    if (activeCategory !== 'all') {
        filteredCasinos = filteredCasinos.filter(casino => casino.category === activeCategory);
    }
    
    // Фильтрация по поисковому запросу
    if (filterValue) {
        filteredCasinos = filteredCasinos.filter(casino => 
            casino.searchWords.some(word => word.toLowerCase().includes(filterValue)) ||
            casino.name.toLowerCase().includes(filterValue)
        );
    }
    
    renderCasinos(filteredCasinos);
}

// Функции для модального окна
function openModal() {
    document.getElementById('instruction-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('instruction-modal').style.display = 'none';
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Первоначальная отрисовка всех казино
    renderCasinos(casinos);
    
    // Обработчик для поля фильтра
    document.getElementById('casino-filter').addEventListener('input', filterCasinos);
    
    // Обработчик для копирования промокода
    document.getElementById('promo-code').addEventListener('click', copyPromoCode);
    
    // Обработчики для кнопок категорий
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterCasinos();
        });
    });
    
    // Обработчики для модального окна
    document.getElementById('instruction-btn').addEventListener('click', openModal);
    document.querySelector('.close').addEventListener('click', closeModal);
    
    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('instruction-modal')) {
            closeModal();
        }
    });
});
