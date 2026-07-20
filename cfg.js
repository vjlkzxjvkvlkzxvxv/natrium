const Config = {
    // ---------------------------------------------------
    // 1. ФУНКЦИОНАЛЬНЫЕ НАСТРОЙКИ
    // ---------------------------------------------------
    FUNCTIONAL: {
        isSiteEnabled: true,             // Вкл/выкл сайт (false = полная блокировка и вывод экрана тех.работ)
        isResponsive: true,              // Адаптивность для мобильных
        showTimeWidget: true,            // Отображать ли виджет времени
        showSocialLinks: true,           // Отображать ли ссылки на соцсети внизу
        searchDebounceDelay: 250,        // Задержка поиска модов (в мс)
        rouletteSpinDuration: 5100,      // Длительность рулетки (в мс)
        timeLocale: "ru-RU",             // Локаль времени
        easterEggCode: "78,65,84,82,73,85,77", // Пасхалка: NATRIUM
        easterEggClicks: 7
    },

    // ---------------------------------------------------
    // 2. ЭКСПЕРИМЕНТЫ (ОПАСНЫЕ И ЭКСПЕРИМЕНТАЛЬНЫЕ ФУНКЦИИ)
    // ---------------------------------------------------
    EXPERIMENTS: {
        // Убирает абсолютно все тексты на сайте (оставляет только фон, иконки и свечения)
        hideAllText: false,
        
        // Удаляет весь контент с сайта, имитируя удаление файлов (подойдет для розыгрыша)
        deleteAllFilesMode: false,

        // Радужный динамический градиент на весь сайт
        rainbowMode: false,

        // Полное отключение анимации частиц на фоне для экономии ресурсов слабых ПК
        disableCanvasBackground: false,

        // Принудительный режим экономии памяти (отключает графические эффекты размытия)
        ultraLowMemoryMode: false,

        // Блокировка вызова роулетки
        disableRoulette: false
    },

    // ---------------------------------------------------
    // 3. НАСТРОЙКИ САЙТА (РЕСУРСЫ И СТИЛИ)
    // ---------------------------------------------------
    SITE: {
        favicon: "favicon.png?v=5",
        logo: "logo.webp",
        colors: {
            primary: "#ffaa00",
            gradientStart: "#ffcc00",
            gradientEnd: "#ff5500",
            background: "#050506",
            modalBg: "rgba(18, 18, 24, 0.95)"
        },
        versions: [
            { versionNum: "1.20.1", fileType: "Модпак .mrpack", link: "./Natrium_1.20.1.mrpack", fileName: "Natrium_1.20.1.mrpack" },
            { versionNum: "26.1", fileType: "Модпак .mrpack", link: "./Natrium_26.1.mrpack", fileName: "Natrium_26.1.mrpack" },
            { versionNum: "1.16.5", fileType: "Модпак .mrpack", link: "./Natrium_1.16.5.mrpack", fileName: "Natrium_1.16.5.mrpack" }
        ],
        socials: [
            { text: "Наш Telegram-канал:", span: "@NatriumProject", url: "https://telegram.me/NatriumProject" },
            { text: "Наш Telegram-чат:", span: "@NatriumChat", url: "https://telegram.me/NatriumChat" },
            { text: "Нашли баг или краш? Пишите в бота:", span: "@JavaFixerTEXbot", url: "https://telegram.me/JavaFixerTEXbot" }
        ]
    },

    // ---------------------------------------------------
    // 4. ТЕКСТЫ И ИНТЕРФЕЙС
    // ---------------------------------------------------
    UI: {
        pageTitle: "NATRIUM",
        title: "NATRIUM",
        subtitle: "Сборка-каркас на Minecraft, состоящая из полной оптимизации",
        maintenanceText: "Сайт временно недоступен. Ведутся технические работы.",
        timePrefix: "Время:",
        timeZoneLabel: "GMT",
        greetings: {
            night: "Доброй ночи.", morning: "Доброе утро.", day: "Добрый день.", evening: "Добрый вечер."
        },
        buttons: {
            rouletteOpen: "Рулетка версий",
            download: "Скачать сборку",
            modsList: "Список модов",
            copyList: "Скопировать список",
            spin: "Крутить рулетку",
            spinAgain: "Крутить еще раз",
            home: "На главную",
            downloadRoulette: "Скачать NATRIUM"
        },
        modals: {
            modsTitlePrefix: "Моды сборки",
            modsTitleHighlight: "NATRIUM",
            searchPlaceholder: "Поиск мода...",
            rouletteTitlePrefix: "Рулетка версий",
            rouletteTitleHighlight: "NATRIUM",
            versionPrefix: "Версия",
            rouletteItemHighlight: "NATRIUM",
            downloadTitlePrefix: "Начало загрузки:"
        }
    },

    // ---------------------------------------------------
    // 5. БЛОК "ПОЧЕМУ NATRIUM" (Объем сайта)
    // ---------------------------------------------------
    WHY_NATRIUM: {
        title: "Почему Natrium",
        facts: [
            { title: "Тотальная оптимизация", desc: "Глубокая переработка алгоритмов игры с помощью движков Sodium, Lithium и Krypton для достижения максимального FPS." },
            { title: "Экстремальная экономия ОЗУ", desc: "За счет FerriteCore и систем исправления утечек памяти, сборка потребляет значительно меньше оперативной памяти." },
            { title: "Стабильность и фиксы", desc: "Интеграция ModernFix и Debugify избавляет игру от микрофризов, долгих загрузок и сотен ванильных багов." },
            { title: "Универсальный фундамент", desc: "Сборка является идеальным каркасом. Вы можете легко добавлять любые свои моды поверх готовой оптимизированной базы." }
        ]
    },

    // ---------------------------------------------------
    // 6. ИНСТРУКЦИЯ ПО УСТАНОВКЕ
    // ---------------------------------------------------
    INSTRUCTION: {
        buttonText: "Как установить",
        title: "Как установить сборку Natrium:",
        steps: [
            "Скачай файл сборки в формате .mrpack под нужную версию с нашего сайта.",
            "Скачай и установи современный лаунчер с поддержкой Modrinth (например: <a href='https://elyprism.ru/' target='_blank'>PineconeMc (Elyprism)</a>, <a href='https://atlauncher.com/' target='_blank'>ATLauncher</a>, <a href='https://prismlauncher.org/' target='_blank'>Prism Launcher</a> или <a href='https://modrinth.com/app' target='_blank'>Modrinth App</a>).",
            "В лаунчере нажми кнопку «Добавить экземпляр» (или «Импорт») и выбери скачанный ранее файл .mrpack.",
            "Дождись, пока лаунчер автоматически скачает все необходимые моды из конфига сборки, и запускай игру."
        ]
    },

    // ---------------------------------------------------
    // 7. МОДЫ (С КАТЕГОРИЯМИ)
    // ---------------------------------------------------
    MODS: {
        "1.16.5": {
            "Список модов": [
                { name: "Alternate Current", desc: "Оптимизация редстоуна." },
                { name: "Borderless Mining", desc: "Окно без рамок." },
                { name: "Clean Cut", desc: "Удары сквозь траву." },
                { name: "Crash Assistant", desc: "Помощник по крашам." },
                { name: "Cull Leaves", desc: "Оптимизация рендеринга листвы." },
                { name: "Dynamic FPS", desc: "Оптимизация свернутой игры." },
                { name: "Enhanced Block Entities", desc: "Быстрые сундуки." },
                { name: "EntityCulling-Fabric", desc: "Скрытие невидимых мобов." },
                { name: "Fabric API", desc: "Базовая библиотека." },
                { name: "FerriteCore", desc: "Сокращение ОЗУ." },
                { name: "ImmediatelyFast", desc: "Ускорение рендеринга." },
                { name: "Indium", desc: "Адаптер для Sodium." },
                { name: "Iris", desc: "Движок шейдеров." },
                { name: "Krypton", desc: "Снижение пинга." },
                { name: "LazyDFU", desc: "Быстрый запуск игры." },
                { name: "Let Me Despawn", desc: "Очистка мобов." },
                { name: "Lithium", desc: "Оптимизация ИИ и физики." },
                { name: "Memory Leak Fix", desc: "Очистка RAM." },
                { name: "Mod Menu", desc: "Меню модов." },
                { name: "ModernFix", desc: "Ускорение алгоритмов." },
                { name: "Mouse Tweaks", desc: "Улучшенное управление мышью." },
                { name: "Packet Fixer", desc: "Фикс вылетов из-за пакетов." },
                { name: "Phosphor", desc: "Оптимизация света." },
                { name: "Reese's Sodium Options", desc: "Расширенные графические настройки." },
                { name: "Sodium", desc: "Движок рендеринга." },
                { name: "Sodium Extra", desc: "Доп. настройки Sodium." }
            ]
        },
        "1.20.1": {
            "Список модов": [
                { name: "Almanac", desc: "Улучшенная документация." },
                { name: "Alternate Current", desc: "Оптимизация алгоритмов редстоуна." },
                { name: "Athena", desc: "Инструмент динамических текстур." },
                { name: "Bad Packets", desc: "Безопасная синхронизация пакетов." },
                { name: "BadOptimizations", desc: "Патчи для устранения микрофризов." },
                { name: "Borderless Mining", desc: "Окно без рамок." },
                { name: "Cloth Config v11", desc: "Конфигурационный экран." },
                { name: "Clumps", desc: "Объединение сфер опыта." },
                { name: "Concurrent Chunk Management Engine", desc: "Многопоточная обработка чанков." },
                { name: "Connectivity Mod", desc: "Оптимизация сетевых соединений." },
                { name: "Crash Assistant", desc: "Помощник при крашах." },
                { name: "Debugify", desc: "Комплексное исправление багов." },
                { name: "Dynamic FPS", desc: "Снижение нагрузки при свернутой игре." },
                { name: "Enhanced Block Entities", desc: "Рендеринг сундуков на Sodium." },
                { name: "EntityCulling", desc: "Скрытие невидимых мобов." },
                { name: "Fabric API", desc: "Библиотека-ядро." },
                { name: "FastAnim", desc: "Ускорение просчета анимаций." },
                { name: "FerriteCore", desc: "Экстремальное сокращение потребления ОЗУ." },
                { name: "Gpu memory leak fix mod", desc: "Блокировка утечек памяти в видеокарте." },
                { name: "ImmediatelyFast", desc: "Ускорение рендеринга." },
                { name: "Indium", desc: "Адаптер для рендеринга Sodium." },
                { name: "Iris", desc: "Движок шейдеров." },
                { name: "Krypton", desc: "Оптимизация сетевого стека." },
                { name: "Language Reload", desc: "Моментальное переключение языков." },
                { name: "Let Me Despawn", desc: "Очистка мобов." },
                { name: "Lithium", desc: "Оптимизация физики и ИИ мобов." },
                { name: "Memory Leak Fix", desc: "Очистка утечек RAM." },
                { name: "Mod Menu", desc: "Интерфейс просмотра модов." },
                { name: "Model Gap Fix", desc: "Исправляет щели в 3D моделях." },
                { name: "ModernFix", desc: "Ускорение запуска игры и структур данных." },
                { name: "More Culling", desc: "Отсечение рендеринга невидимых граней." },
                { name: "Mouse Tweaks", desc: "Улучшенное управление мышью." },
                { name: "No Chat Reports", desc: "Блокировка репортов чата." },
                { name: "Not Enough Crashes", desc: "Не дает вылетать при ошибке." },
                { name: "PacketFixer", desc: "Исправляет вылеты от больших пакетов." },
                { name: "Reese's Sodium Options", desc: "Интерфейс настроек Sodium." },
                { name: "Sodium", desc: "Главный движок оптимизации." },
                { name: "Sodium Extra", desc: "Дополнительные настройки Sodium." },
                { name: "StutterFix", desc: "Устранение статтеров." },
                { name: "ThreadTweak", desc: "Умное перераспределение потоков CPU." },
                { name: "Very Many Players", desc: "Оптимизация для серверов." },
                { name: "YetAnotherConfigLib", desc: "Библиотека слоев конфигурации." },
                { name: "cupboard", desc: "Фоновое оптимизированное ядро." }
            ]
        },
        "26.1": {
            "Список модов": [
                { name: "Alternate Current", desc: "Оптимизация редстоуна." },
                { name: "Athena", desc: "Инструмент динамических текстур." },
                { name: "Bad Packets", desc: "Безопасная синхронизация пакетов." },
                { name: "BadOptimizations", desc: "Патчи от микрофризов." },
                { name: "Borderless Mining Updated", desc: "Окно без рамок." },
                { name: "Cloth Config v26.1", desc: "Конфигурационный экран." },
                { name: "Clumps", desc: "Объединение сфер опыта." },
                { name: "Concurrent Chunk Management Engine", desc: "Многопоточная обработка чанков." },
                { name: "Connectivity Mod", desc: "Сетевая оптимизация." },
                { name: "Crash Assistant", desc: "Помощник по крашам." },
                { name: "Dynamic FPS", desc: "Оптимизация при свернутой игре." },
                { name: "EntityCulling", desc: "Скрытие невидимых мобов." },
                { name: "Fabric API", desc: "Основная библиотека." },
                { name: "Fabric Language Kotlin", desc: "Поддержка языка Kotlin." },
                { name: "FerriteCore", desc: "Сокращение потребления ОЗУ." },
                { name: "Gpu memory leak fix mod", desc: "Фикс утечек GPU." },
                { name: "ImmediatelyFast", desc: "Ускорение рендеринга." },
                { name: "Iris", desc: "Движок шейдеров." },
                { name: "Krypton", desc: "Оптимизация сетевого стека." },
                { name: "Language Reload", desc: "Моментальная смена языка." },
                { name: "Lithium", desc: "Оптимизация физики." },
                { name: "Mod Menu", desc: "Список модов в игре." },
                { name: "ModernFix", desc: "Быстрый запуск игры." },
                { name: "More Culling", desc: "Отсечение невидимых граней." },
                { name: "Mouse Tweaks", desc: "Улучшенное управление мышью." },
                { name: "No Chat Reports", desc: "Блокировка репортов чата." },
                { name: "Packet Fixer", desc: "Фикс пакетов." },
                { name: "Placeholder API", desc: "Система плейсхолдеров." },
                { name: "Reese's Sodium Options", desc: "Меню настроек Sodium." },
                { name: "Smooth Boot", desc: "Оптимизация запуска." },
                { name: "Sodium", desc: "Главный движок." },
                { name: "Sodium Extra", desc: "Тумблеры Sodium." },
                { name: "Stutterfix", desc: "Устранение статтеров." },
                { name: "Very Many Players", desc: "Оптимизация сервера." },
                { name: "YetAnotherConfigLib", desc: "Интерфейсы настроек." },
                { name: "cupboard", desc: "Оптимизированное ядро." }
            ]
        }
    }
};
