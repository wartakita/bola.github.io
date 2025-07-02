document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollBtn.classList.add("show");
            scrollBtn.classList.remove("hide");
        } else {
            scrollBtn.classList.remove("show");
            scrollBtn.classList.add("hide");
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const shareLabel = document.getElementById('share-label');
    if (shareLabel) {
        const lang = navigator.language || navigator.userLanguage;
        const translations = {
            id: 'Bagikan:',
            en: 'Share:',
            es: 'Compartir:',
            fr: 'Partager:',
            de: 'Teilen:',
            ja: '共有:',
            zh: '分享:'
        };
        for (const [key, value] of Object.entries(translations)) {
            if (lang.startsWith(key)) {
                shareLabel.textContent = value;
                break;
            }
        }
    }

    const i18nStrings = {
        id: {
            title: 'BolabongTV',
            'all-status': 'Semua Status',
            'not-started': 'Belum Mulai',
            'finished': 'Selesai',
            'live': 'Langsung',
            'search-team': 'Cari tim...'
        },
        en: {
            title: 'BolabongTV',
            'all-status': 'All Status',
            'not-started': 'Not Started',
            'finished': 'Finished',
            'live': 'Live',
            'search-team': 'Search team...'
        },
        es: {
            title: 'BolabongTV',
            'all-status': 'Todos los estados',
            'not-started': 'No iniciado',
            'finished': 'Finalizado',
            'live': 'En vivo',
            'search-team': 'Buscar equipo...'
        },
        fr: {
            title: 'BolabongTV',
            'all-status': 'Tous les statuts',
            'not-started': 'Pas commencé',
            'finished': 'Terminé',
            'live': 'En direct',
            'search-team': 'Rechercher une équipe...'
        },
        de: {
            title: 'BolabongTV',
            'all-status': 'Alle Status',
            'not-started': 'Nicht gestartet',
            'finished': 'Beendet',
            'live': 'Live',
            'search-team': 'Team suchen...'
        },
        ja: {
            title: 'BolabongTV',
            'all-status': 'すべてのステータス',
            'not-started': '未開始',
            'finished': '終了',
            'live': 'ライブ',
            'search-team': 'チームを検索...'
        },
        zh: {
            title: 'BolabongTV',
            'all-status': '所有状态',
            'not-started': '未开始',
            'finished': '已结束',
            'live': '直播',
            'search-team': '搜索队伍...'
        }
    };

    const userLang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2);
    const strings = i18nStrings[userLang] || {};

    Object.entries(strings).forEach(([key, val]) => {
        document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
            if (el) el.textContent = val;
        });
        document.querySelectorAll(`[data-i18n-placeholder="${key}"]`).forEach(el => {
            if (el) el.placeholder = val;
        });
    });
});
