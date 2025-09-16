// Переменная для отслеживания текущего режима отображения
let isCompactView = false;

// Функция для отображения казино
function renderCasinos(casinosToRender) {
    const casinoList = document.getElementById('casino-list');
    casinoList.innerHTML = '';
    
    // Применяем класс компактного вида если нужно
    if (isCompactView) {
        casinoList.classList.add('compact-view');
    } else {
        casinoList.classList.remove('compact-view');
    }
    
    casinosToRender.forEach(casino => {
        const casinoItem = document.createElement('div');
        casinoItem.className = 'casino-item';
        
        // Баннер казино
        const casinoBanner = document.createElement('div');
        casinoBanner.className = 'casino-banner';
        
        if (casino.image) {
            casinoBanner.style.backgroundImage = `url(${casino.image})`;
            casinoBanner.innerHTML = ''; // Убираем текст если есть изображение
        } else {
            casinoBanner.innerHTML = `<div>${casino.name}</div>`;
        }
        
        // Добавляем бейдж ТОП для казино из этой категории
        if (casino.isTop) {
            const topBadge = document.createElement('div');
            topBadge.className = 'top-badge';
            topBadge.innerHTML = '<i class="fas fa-fire"></i> ТОП';
            casinoBanner.appendChild(topBadge);
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

// Функция для переключения вида
function toggleView() {
    isCompactView = !isCompactView;
    const toggleBtn = document.getElementById('view-toggle');
    
    if (isCompactView) {
        toggleBtn.innerHTML = '<i class="fas fa-th"></i>';
        toggleBtn.title = 'Переключить на 3 колонки';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-th-large"></i>';
        toggleBtn.title = 'Переключить на 4 колонки';
    }
    
    // Перерисовываем казино с новыми настройками
    filterCasinos();
}

// Функция для прокрутки вверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Первоначальная отрисовка всех казино
    renderCasinos(casinos);
    
    // Обработчик для поля фильтра
    document.getElementById('casino-filter').addEventListener('input', filterCasinos);
    
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
    
    // Обработчик для переключения вида
    document.getElementById('view-toggle').addEventListener('click', toggleView);
    
    // Обработчик для кнопки "Вверх"
    document.getElementById('scroll-to-top').addEventListener('click', scrollToTop);
    
    // Показываем/скрываем кнопку "Вверх" при прокрутке
    window.addEventListener('scroll', function() {
        const scrollToTopBtn = document.getElementById('scroll-to-top');
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});
