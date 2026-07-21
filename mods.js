const MODS_DATA = {
    "1.16.5": {
        "Оптимизация": [
            { name: "Alternate Current", desc: "Оптимизация алгоритмов редстоуна." },
            { name: "Cull Leaves", desc: "Оптимизация рендеринга листвы." },
            { name: "FerriteCore", desc: "Оптимизация памяти (ОЗУ)." },
            { name: "Krypton", desc: "Оптимизация сетевого соединения." },
            { name: "Let Me Despawn", desc: "Фикс деспавна мобов." },
            { name: "Lithium", desc: "Оптимизация физики, игрового мира и ИИ." },
            { name: "Memory Leak Fix", desc: "Исправление утечек оперативной памяти." },
            { name: "ModernFix", desc: "Комплексное ускорение и оптимизация игры." },
            { name: "Phosphor", desc: "Оптимизация системы освещения." }
        ],
        "Рендеринг и графика": [
            { name: "ImmediatelyFast", desc: "Ускорение отрисовки интерфейса и элементов." },
            { name: "Indium", desc: "Адаптер рендеринга для поддержки модов с Sodium." },
            { name: "Iris", desc: "Современный движок для поддержки шейдеров." },
            { name: "Reese's Sodium Options", desc: "Удобное и переработанное меню настроек Sodium." },
            { name: "Sodium", desc: "Главный высокопроизводительный движок рендеринга." },
            { name: "Sodium Extra", desc: "Дополнительные графические настройки для Sodium." }
        ],
        "Библиотеки и зависимости": [
            { name: "Fabric API", desc: "Основная базовая библиотека для модов Fabric." }
        ],
        "Утилиты, фиксы и интерфейс": [
            { name: "Borderless Mining", desc: "Запуск игры в оконном режиме без рамки." },
            { name: "Clean Cut", desc: "Удары оружием сквозь высокую траву." },
            { name: "Crash Assistant", desc: "Полезный помощник при вылетах и крашах игры." },
            { name: "Dynamic FPS", desc: "Снижение потребления ресурсов, когда игра свернута." },
            { name: "Enhanced Block Entities", desc: "Улучшенный рендеринг сундуков и других объектов." },
            { name: "EntityCulling-Fabric", desc: "Скрытие невидимых за стенами мобов для роста FPS." },
            { name: "LazyDFU", desc: "Ускорение холодного запуска игры." },
            { name: "Mod Menu", desc: "Удобное внутригровое меню списка модов." },
            { name: "Mouse Tweaks", desc: "Улучшенное и ускоренное управление инвентарем мышью." },
            { name: "Packet Fixer", desc: "Фиксы сетевых пакетов для стабильности соединения." }
        ]
    },
    "1.18.2": {
        "Оптимизация": [
            { name: "Alternate Current", desc: "Оптимизация алгоритмов редстоуна." },
            { name: "Clumps", desc: "Группировка сфер опыта в один объект для уменьшения нагрузки." },
            { name: "Concurrent Chunk Management Engine", desc: "Многопоточное управление чанками (C2ME)." },
            { name: "Connectivity Mod", desc: "Сетевая оптимизация для снижения пинга." },
            { name: "Dynamic FPS", desc: "Снижение потребления ресурсов, когда игра свернута." },
            { name: "FerriteCore", desc: "Оптимизация и сжатие оперативной памяти (ОЗУ)." },
            { name: "Gpu memory leak fix mod", desc: "Исправление утечек видеопамяти." },
            { name: "Krypton", desc: "Оптимизация сетевого стека." },
            { name: "LazyDFU", desc: "Ускорение холодного запуска игры." },
            { name: "Let Me Despawn", desc: "Оптимизация и фикс деспавна мобов." },
            { name: "Lithium", desc: "Оптимизация физики, игрового мира и ИИ." },
            { name: "ModernFix", desc: "Комплексное ускорение и оптимизация игры." },
            { name: "ServerCore", desc: "Оптимизация производительности серверной части." },
            { name: "Starlight", desc: "Переработанный и быстрый движок освещения." },
            { name: "Very Many Players", desc: "Оптимизация для сервера с большим количеством игроков." }
        ],
        "Рендеринг и графика": [
            { name: "Cull Leaves", desc: "Оптимизация рендеринга листвы." },
            { name: "Enhanced Block Entities", desc: "Улучшенный рендеринг сундуков и блоков." },
            { name: "ImmediatelyFast", desc: "Ускорение отрисовки элементов интерфейса и графики." },
            { name: "Indium", desc: "Адаптер рендеринга для поддержки модов с Sodium." },
            { name: "Iris", desc: "Движок для поддержки пользовательских шейдеров." },
            { name: "More Culling", desc: "Расширенная оптимизация видимости моделей и блоков." },
            { name: "Reese's Sodium Options", desc: "Удобный интерфейс настроек Sodium." },
            { name: "Smart Particles", desc: "Оптимизация и настройка отображения частиц." },
            { name: "Sodium", desc: "Высокопроизводительный движок рендеринга графики." },
            { name: "Sodium Extra", desc: "Дополнительные графические настройки для Sodium." }
        ],
        "Библиотеки и зависимости": [
            { name: "Bad Packets", desc: "Служебная библиотека для передачи сетевых пакетов." },
            { name: "Cloth Config v6", desc: "Библиотека конфигурации внутриигровых меню." },
            { name: "Fabric API", desc: "Основная базовая библиотека для модов Fabric." }
        ],
        "Утилиты, фиксы и интерфейс": [
            { name: "Borderless Mining", desc: "Запуск игры в оконном режиме без рамок." },
            { name: "Crash Assistant", desc: "Помощник и анализ при вылетах игры." },
            { name: "Debugify", desc: "Автоматическое исправление ванильных багов." },
            { name: "EntityCulling-Fabric", desc: "Скрытие невидимых за стенами сущностей для роста FPS." },
            { name: "Language Reload", desc: "Быстрая перезагрузка языковых пакетов." },
            { name: "Mod Menu", desc: "Удобное внутриигровое меню списка модов." },
            { name: "Model Gap Fix", desc: "Устранение визуальных щелей в моделях блоков." },
            { name: "Mouse Tweaks", desc: "Улучшенное управление предметами в инвентаре." },
            { name: "PacketFixer", desc: "Исправление проблем с сетевыми пакетами." },
            { name: "Textile Backup", desc: "Утилита для создания резервных копий." },
            { name: "recipecache", desc: "Кэширование рецептов крафта для ускорения работы." }
        ]
    },
    "1.20.1": {
        "Оптимизация": [
            { name: "Alternate Current", desc: "Оптимизация алгоритмов редстоуна." },
            { name: "BadOptimizations", desc: "Дополнительная оптимизация ванильного кода." },
            { name: "Clumps", desc: "Группировка сфер опыта в один объект для лагов." },
            { name: "Concurrent Chunk Management Engine", desc: "Многопоточное управление чанками (C2ME)." },
            { name: "Connectivity Mod", desc: "Сетевая оптимизация для снижения пинга." },
            { name: "Dynamic FPS", desc: "Снижение FPS в свернутом окне." },
            { name: "FastAnim", desc: "Оптимизация различных внутригровых анимаций." },
            { name: "FerriteCore", desc: "Глубокая оптимизация потребления ОЗУ." },
            { name: "Gpu memory leak fix mod", desc: "Исправление утечек видеопамяти." },
            { name: "Krypton", desc: "Оптимизация сетевого стека." },
            { name: "Let Me Despawn", desc: "Правильный деспавн мобов." },
            { name: "Lithium", desc: "Оптимизация физики и игровой логики." },
            { name: "Memory Leak Fix", desc: "Исправление утечек оперативной памяти." },
            { name: "ModernFix", desc: "Комплексная оптимизация запуска и работы." },
            { name: "StutterFix", desc: "Устранение микрофризов и подлагиваний." },
            { name: "ThreadTweak", desc: "Тонкая настройка потоков процессора." },
            { name: "Very Many Players", desc: "Оптимизация сервера для игры с большим числом игроков." },
            { name: "cupboard", desc: "Оптимизированное вспомогательное ядро." }
        ],
        "Рендеринг и графика": [
            { name: "Enhanced Block Entities", desc: "Оптимизация рендеринга сундуков и блоков." },
            { name: "ImmediatelyFast", desc: "Ускорение отрисовки элементов графики." },
            { name: "Indium", desc: "Адаптер совместимости для Sodium." },
            { name: "Iris", desc: "Движок для подключения шейдеров." },
            { name: "More Culling", desc: "Расширенная оптимизация видимости моделей блоков." },
            { name: "Reese's Sodium Options", desc: "Улучшенный интерфейс настроек графики." },
            { name: "Sodium", desc: "Главный высокопроизводительный движок графики." },
            { name: "Sodium Extra", desc: "Дополнительные настройки графики для Sodium." }
        ],
        "Библиотеки и зависимости": [
            { name: "Almanac", desc: "Вспомогательная библиотека." },
            { name: "Athena", desc: "Библиотека для управления динамическими текстурами." },
            { name: "Bad Packets", desc: "Служебная библиотека для передачи пакетов." },
            { name: "Cloth Config v11", desc: "Библиотека конфигурации графических меню." },
            { name: "Fabric API", desc: "Базовый набор библиотек для модов Fabric." },
            { name: "YetAnotherConfigLib", desc: "Современная библиотека настроек модов." }
        ],
        "Утилиты, фиксы и интерфейс": [
            { name: "Borderless Mining", desc: "Полноэкранный режим без рамок." },
            { name: "Crash Assistant", desc: "Помощник при аварийном завершении игры." },
            { name: "Debugify", desc: "Автоматическое исправление сотен ванильных багов." },
            { name: "EntityCulling", desc: "Скрытие невидимых объектов для роста FPS." },
            { name: "Language Reload", desc: "Быстрая перезагрузка языковых пакетов." },
            { name: "Model Gap Fix", desc: "Исправление визуальных щелей в моделях." },
            { name: "Mouse Tweaks", desc: "Улучшенное управление предметами мышью." },
            { name: "No Chat Reports", desc: "Отключение системы отправки жалоб на чат в Mojang." },
            { name: "Not Enough Crashes", desc: "Удобный экран с информацией о крашах игры." },
            { name: "PacketFixer", desc: "Исправление проблем с сетевыми пакетами." }
        ]
    },
    "26.1": {
        "Оптимизация": [
            { name: "Alternate Current", desc: "Оптимизация логики редстоуна." },
            { name: "BadOptimizations", desc: "Оптимизация неэффективных участков кода." },
            { name: "Clumps", desc: "Объединение опыта для уменьшения нагрузки." },
            { name: "Concurrent Chunk Management Engine", desc: "Многопоточный движок чанков (C2ME)." },
            { name: "Connectivity Mod", desc: "Улучшение сетевого взаимодействия." },
            { name: "Dynamic FPS", desc: "Динамическое снижение нагрузки при сворачивании." },
            { name: "FerriteCore", desc: "Эффективное сжатие используемой памяти ОЗУ." },
            { name: "Gpu memory leak fix mod", desc: "Устранение утечек памяти видеокарты." },
            { name: "Krypton", desc: "Оптимизация сетевого стека." },
            { name: "Lithium", desc: "Оптимизация серверной логики и физики." },
            { name: "ModernFix", desc: "Комплексное улучшение производительности игры." },
            { name: "Smooth Boot", desc: "Плавная инициализация потоков при запуске." },
            { name: "Stutterfix", desc: "Устранение подтормаживаний и фризов." },
            { name: "Very ManyPlayers", desc: "Оптимизация производительности в мультиплеере." },
            { name: "cupboard", desc: "Оптимизированное вспомогательное ядро." }
        ],
        "Рендеринг и графика": [
            { name: "ImmediatelyFast", desc: "Ускорение рендеринга интерфейса." },
            { name: "Iris", desc: "Поддержка пользовательских шейдеров." },
            { name: "More Culling", desc: "Оптимизация отсечения невидимой геометрии." },
            { name: "Reese's Sodium Options", desc: "Удобное меню настроек графики." },
            { name: "Sodium", desc: "Высокопроизводительный движок рендеринга." },
            { name: "Sodium Extra", desc: "Дополнительные настройки отображения." }
        ],
        "Библиотеки и зависимости": [
            { name: "Athena", desc: "Библиотека для работы с текстурами." },
            { name: "Bad Packets", desc: "Вспомогательный API для пакетов." },
            { name: "Cloth Config v26.1", desc: "Библиотека для отображения настроек." },
            { name: "Fabric API", desc: "Базовый API модов." },
            { name: "Fabric Language Kotlin", desc: "Библиотека языка Kotlin для работы модов." },
            { name: "Placeholder API", desc: "API для подстановки текстовых данных." },
            { name: "YetAnotherConfigLib", desc: "Библиотека параметров конфигурации." }
        ],
        "Утилиты, фиксы и интерфейс": [
            { name: "Borderless Mining Updated", desc: "Окно без рамок для удобной игры." },
            { name: "Crash Assistant", desc: "Инструмент помощи при вылетах." },
            { name: "EntityCulling", desc: "Скрытие невидимых объектов." },
            { name: "Language Reload", desc: "Ускоренная смена локализации." },
            { name: "Mod Menu", desc: "Меню управления установленными модами." },
            { name: "Mouse Tweaks", desc: "Удобное управление инвентарем." },
            { name: "No Chat Reports", desc: "Отключение системы жалоб в чате." },
            { name: "Packet Fixer", desc: "Фикс стабильности пакетов сети." }
        ]
    }
};
