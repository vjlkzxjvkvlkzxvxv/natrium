// =====================================================================
// ГЛОБАЛЬНЫЕ НАСТРОЙКИ СБОРКИ NATRIUM
// =====================================================================

const Config = {
    // ---------------------------------------------------
    // 1. БАЗОВЫЕ ТУМБЛЕРЫ И ФУНКЦИОНАЛ
    // ---------------------------------------------------
    FUNCTIONAL: {
        isSiteEnabled: true,             // Вкл/выкл сайт
        isResponsive: true,              // Адаптивность для мобильных
        showTimeWidget: true,            // Отображать виджет времени
        showSocialLinks: true,           // Отображать ссылки на соцсети
        searchDebounceDelay: 250,        // Задержка поиска модов (мс)
        rouletteSpinDuration: 5100,      // Длительность рулетки (мс)
        timeLocale: "ru-RU",             // Локаль времени
        easterEggCode: "78,65,84,82,73,85,77", // Пасхалка клавиатуры: NATRIUM
        easterEggClicks: 7               // Пасхалка кликов для мобилок
    },

    // ---------------------------------------------------
    // 2. ГЛОБАЛЬНАЯ ПАЛИТРА И ВНЕШНИЙ ВИД
    // ---------------------------------------------------
    /* 
        Доступные базовые цвета (можно писать словами): 
        "золотой", "неоновый", "пурпурный", "кислотно-лаймовый", "красный", 
        "небесно-голубой", "мятный", "изумрудный", "глубокий синий", "розовый неон",
        "оранжевый", "малиновый", "бирюзовый", "лавандовый", "белый".
    */
    SITE: {
        favicon: "favicon.png?v=6",
        logo: "logo.webp",
        defaultThemeMode: "dark", // "dark" или "light" по умолчанию
        defaultColor: "золотой"   // Дефолтный цвет для новых пользователей
    },

    // Справочник оттенков для админа (Автоматически генерирует градиенты в app.js)
    COLOR_DICTIONARY: {
        "золотой": "#ffaa00",
        "неоновый": "#ff00ff",
        "пурпурный": "#9933ff",
        "кислотно-лаймовый": "#ccff00",
        "красный": "#ff3333",
        "небесно-голубой": "#33ccff",
        "мятный": "#00ffcc",
        "изумрудный": "#00e676",
        "глубокий синий": "#0055cc",
        "розовый неон": "#ff00aa",
        "оранжевый": "#ff6600",
        "малиновый": "#e6005c",
        "бирюзовый": "#00b3b3",
        "лавандовый": "#b399ff",
        "белый": "#ffffff"
    },

    // ---------------------------------------------------
    // 3. НАСТРОЙКИ ТРЕЙЛА (ИСКРЫ МЫШИ) - Только для ПК
    // ---------------------------------------------------
    TRAIL: {
        sparksPerStep: 2,        // Количество создаваемых частиц за движение
        maxSparks: 50,           // Лимит искр на экране
        decaySpeed: 0.015,       // Базовая скорость затухания искр
        maxSize: 3               // Базовый максимальный размер искры
    },

    // ---------------------------------------------------
    // 4. ТЕКСТЫ И UI ИНТЕРФЕЙСА
    // ---------------------------------------------------
    UI: {
        pageTitle: "NATRIUM | Идеальная оптимизация",
        title: "NATRIUM",
        subtitle: "Сборка-каркас на Minecraft, состоящая из бескомпромиссной оптимизации",
        maintenanceText: "Сайт временно недоступен. Идёт обновление квантовых ядер.",
        timePrefix: "Время:",
        timeZoneLabel: "GMT",
        greetings: {
            night: "Доброй ночи.", morning: "Доброе утро.", day: "Добрый день.", evening: "Добрый вечер."
        },
        buttons: {
            rouletteOpen: "Рулетка версий",
            download: "Скачать сборку",
            modsList: "Список модов",
            spin: "Крутить рулетку",
            spinAgain: "Крутить еще раз",
            home: "На главную",
            downloadRoulette: "Скачать NATRIUM"
        },
        modals: {
            modsTitlePrefix: "Моды",
            modsTitleHighlight: "NATRIUM",
            searchPlaceholder: "Умный поиск модов...",
            rouletteTitlePrefix: "Рулетка",
            rouletteTitleHighlight: "NATRIUM",
            versionPrefix: "Версия",
            rouletteItemHighlight: "NATRIUM",
            downloadTitlePrefix: "Начало загрузки:",
            downloadInfoText: "Ваша сборка генерируется и скоро скачается. Присоединяйтесь к нашим ресурсам!",
            downloadLinks: [
                { text: "Telegram-канал проекта", url: "https://t.me/NatriumProject", type: "primary" },
                { text: "Канал разработчика", url: "https://t.me/JavaFixer", type: "secondary" }
            ]
        }
    },

    // ---------------------------------------------------
    // 5. ИНСТРУКЦИИ ПО УСТАНОВКЕ
    // ---------------------------------------------------
    INSTRUCTION: {
        buttonText: "Как установить сборку",
        title: "Пошаговая установка Natrium:",
        steps: [
            "Скачай файл сборки в формате .mrpack под нужную версию с нашего сайта.",
            `Скачай и установи современный лаунчер с поддержкой Modrinth.<br>
            <ul style='margin-top: 10px; margin-bottom: 10px; padding-left: 20px; list-style-type: disc; color: var(--text-muted);'>
                <li style='margin-bottom: 6px;'>Лицензия: <a href='https://prismlauncher.org/' target='_blank' style='color: var(--primary); font-weight: bold;'>Prism Launcher</a> или <a href='https://modrinth.com/app' target='_blank' style='color: var(--primary); font-weight: bold;'>Modrinth App</a>.</li>
                <li>Пиратки: <a href='https://elyprismlauncher.github.io/' target='_blank' style='color: var(--primary); font-weight: bold;'>Ely Prism</a> или <a href='https://atlauncher.com/' target='_blank' style='color: var(--primary); font-weight: bold;'>ATLauncher</a>.</li>
            </ul>
            <span style="color: var(--primary); font-size: 0.9em; font-weight: 600;">Важно: Если не открывается сайт или лаунчер — включите VPN!</span>`,
            "В лаунчере нажми кнопку «Добавить экземпляр» (или Импорт) и выбери скачанный файл .mrpack.",
            "Дождись, пока лаунчер автоматически загрузит все моды, и запускай игру."
        ]
    },

    // ---------------------------------------------------
    // 6. БЛОК ПРЕИМУЩЕСТВ (ПОЧЕМУ NATRIUM?)
    // ---------------------------------------------------
    ADVANTAGES: {
        title: "Почему именно Natrium?",
        disclaimerText: "Внимание: Фактический прирост FPS строго индивидуален и зависит от конфигурации вашего ПК, фоновых процессов и выбранной версии игры.",
        cards: [
            { icon: "🚀", title: "Максимальный FPS", desc: "Ядро сборки настроено на экстремальное повышение частоты кадров даже на слабых ПК." },
            { icon: "⚖️", title: "Идеальный баланс", desc: "Никаких конфликтов. Только проверенные моды, работающие как единый часовой механизм." },
            { icon: "⚡", title: "Мгновенный запуск", desc: "Забудьте о долгих загрузках благодаря алгоритмической оптимизации кэширования." },
            { icon: "📦", title: "Формат .mrpack", desc: "Современный и легкий формат. Лаунчер сам скачает актуальные версии модов без лишнего мусора." }
        ]
    },

    // ---------------------------------------------------
    // 7. МАССИВЫ ДАННЫХ: ВЕРСИИ И СОЦСЕТИ
    // ---------------------------------------------------
    VERSIONS: [
        { versionNum: "1.20.1", fileType: "Модпак .mrpack", link: "./Natrium_1.20.1.mrpack", fileName: "Natrium_1.20.1.mrpack" },
        { versionNum: "26.1", fileType: "Модпак .mrpack", link: "./Natrium_26.1.mrpack", fileName: "Natrium_26.1.mrpack" },
        { versionNum: "1.16.5", fileType: "Модпак .mrpack", link: "./Natrium_1.16.5.mrpack", fileName: "Natrium_1.16.5.mrpack" }
    ],

    SOCIALS: [
        { text: "Наш Telegram-канал:", span: "@NatriumProject", url: "https://telegram.me/NatriumProject" },
        { text: "Наш Telegram-чат:", span: "@NatriumChat", url: "https://telegram.me/NatriumChat" },
        { text: "Нашли баг или краш? Бот:", span: "@JavaFixerTEXbot", url: "https://telegram.me/JavaFixerTEXbot" }
    ],

    // ---------------------------------------------------
    // 8. СПИСКИ МОДОВ
    // ---------------------------------------------------
    MODS: {
        translit: {
            "содиум": "sodium", "айрис": "iris", "мод меню": "mod menu", 
            "клампс": "clumps", "дебагифай": "debugify", "энтити": "entityculling", "модернфикс": "modernfix"
        },
        "1.20.1": {
            "Оптимизация": [
                { name: "Alternate Current", desc: "Оптимизация редстоуна." },
                { name: "BadOptimizations", desc: "Патчи от микрофризов." },
                { name: "Clumps", desc: "Оптимизация сфер опыта." },
                { name: "Concurrent Chunk Management Engine", desc: "Многопоточные чанки." },
                { name: "Connectivity", desc: "Ускорение сети." },
                { name: "Cupboard", desc: "Оптимизированное ядро." },
                { name: "Dynamic FPS", desc: "Снижение нагрузки в фоне." },
                { name: "Enhanced Block Entities", desc: "Оптимизация рендера сундуков." },
                { name: "Entity Culling", desc: "Отсечение невидимых мобов." },
                { name: "FastAnim", desc: "Быстрые анимации 2D." },
                { name: "FerriteCore", desc: "Очистка ОЗУ." },
                { name: "Gpu memory leak fix mod", desc: "Фикс утечек VRAM." },
                { name: "ImmediatelyFast", desc: "Ускорение рендера частиц." },
                { name: "Indium", desc: "Рендер-адаптер." },
                { name: "Krypton", desc: "Сетевая оптимизация." },
                { name: "Lithium", desc: "Оптимизация ИИ и физики." },
                { name: "Memory Leak Fix", desc: "Защита от утечек RAM." },
                { name: "ModernFix", desc: "Экстремально быстрый запуск." },
                { name: "More Culling", desc: "Отсечение граней блоков." },
                { name: "Sodium", desc: "Главный движок." },
                { name: "Sodium Extra", desc: "Расширенные настройки графики." },
                { name: "ThreadTweak", desc: "Настройка потоков CPU." },
                { name: "Very Many Players", desc: "Серверная оптимизация." }
            ],
            "Библиотеки": [
                { name: "Fabric API", desc: "Базовое ядро Fabric." },
                { name: "Cloth Config v11", desc: "Библиотека конфигов." },
                { name: "YetAnotherConfigLib (YACL)", desc: "Интерфейс настроек." },
                { name: "bad packets", desc: "Сетевая либа." }
            ],
            "Исправления и Утилиты": [
                { name: "Almanac", desc: "Система гайдов." },
                { name: "Athena", desc: "CTM Текстуры." },
                { name: "Crash Assistant", desc: "Помощник при крашах." },
                { name: "Debugify", desc: "Пакет багфиксов." },
                { name: "Iris Shaders", desc: "Шейдерный движок." },
                { name: "Language Reload", desc: "Быстрая смена языка." },
                { name: "Let Me Despawn", desc: "Очистка мобов." },
                { name: "Mod Menu", desc: "Список модов в игре." },
                { name: "Model Gap Fix", desc: "Убирает щели в руках." },
                { name: "Not Enough Crashes", desc: "Перехват крашей." },
                { name: "Packet Fixer", desc: "Фикс лимита пакетов." },
                { name: "Reese's Sodium Options", desc: "Удобное меню Sodium." }
            ]
        },
        "26.1": {
            "Оптимизация": [
                { name: "Alternate Current", desc: "Оптимизация редстоуна." },
                { name: "BadOptimizations", desc: "Убирает фризы." },
                { name: "Clumps", desc: "Группировка сфер опыта." },
                { name: "Connectivity Mod", desc: "Ускорение пинга." },
                { name: "Dynamic FPS", desc: "Оптимизация свернутой игры." },
                { name: "EntityCulling", desc: "Скрытие мобов за стенами." },
                { name: "FerriteCore", desc: "Очистка памяти." },
                { name: "Gpu memory leak fix mod", desc: "Фикс памяти GPU." },
                { name: "ImmediatelyFast", desc: "Быстрый рендер." },
                { name: "Krypton", desc: "Патчи сети." },
                { name: "Lithium", desc: "Физика сервера." },
                { name: "ModernFix", desc: "Ускорение меню и загрузки." },
                { name: "More Culling", desc: "Доп. куллинг." },
                { name: "Smooth Boot", desc: "Сглаживание пиков CPU." },
                { name: "Sodium", desc: "Движок рендера." },
                { name: "Sodium Extra", desc: "Тумблеры Sodium." },
                { name: "Stutterfix", desc: "Устранение статтеров." },
                { name: "Very Many Players", desc: "Мультиплеерная оптимизация." },
                { name: "cupboard", desc: "Библиотека оптимизации." }
            ],
            "Библиотеки": [
                { name: "Bad Packets", desc: "Служебный API." },
                { name: "Cloth Config v26.1", desc: "Настройки модов." },
                { name: "Fabric API", desc: "Ядро." },
                { name: "Fabric Language Kotlin", desc: "Поддержка Kotlin." },
                { name: "Placeholder API", desc: "Форматирование текста." },
                { name: "YetAnotherConfigLib", desc: "UI для настроек." }
            ],
            "Исправления и Утилиты": [
                { name: "Iris", desc: "Шейдеры." },
                { name: "Language Reload", desc: "Язык без фризов." },
                { name: "Mod Menu", desc: "Меню модификаций." },
                { name: "Mouse Tweaks", desc: "Твики мыши." },
                { name: "No Chat Reports", desc: "Удаление репортов." },
                { name: "Packet Fixer", desc: "Фикс NBT." },
                { name: "Reese's Sodium Options", desc: "Кастомное меню." }
            ]
        },
        "1.16.5": {
            "Оптимизация": [
                { name: "Alternate Current", desc: "Патч редстоуна." },
                { name: "Cull Leaves", desc: "Оптимизация листвы." },
                { name: "Dynamic FPS", desc: "Контроль FPS." },
                { name: "Enhanced Block Entities", desc: "Быстрые сундуки." },
                { name: "EntityCulling-Fabric", desc: "Отсечение мобов." },
                { name: "FerriteCore", desc: "Снижение RAM." },
                { name: "Indium", desc: "Поддержка API." },
                { name: "Krypton", desc: "Сетевой патч." },
                { name: "LazyDFU", desc: "Очень быстрый запуск." },
                { name: "Lithium", desc: "Физика игры." },
                { name: "Memory Leak Fix", desc: "Фикс утечек." },
                { name: "ModernFix", desc: "Универсальный фиксер." },
                { name: "Phosphor", desc: "Быстрое освещение." },
                { name: "Sodium", desc: "Движок Sodium." },
                { name: "Sodium Extra", desc: "Доп. опции." }
            ],
            "Библиотеки": [
                { name: "Fabric API", desc: "Базовый мод." }
            ],
            "Исправления и Утилиты": [
                { name: "Borderless Mining", desc: "Игра без рамок." },
                { name: "CleanCut", desc: "Удар через траву." },
                { name: "Crash Assistant", desc: "Чтение логов." },
                { name: "Iris Shaders", desc: "Шейдеры." },
                { name: "Let Me Despawn", desc: "Деспавн мобов." },
                { name: "Mod Menu", desc: "Меню для модов." },
                { name: "Packet Fixer", desc: "Большие пакеты данных." },
                { name: "Reese's Sodium Options", desc: "Улучшенное меню графики." }
            ]
        }
    }
};
