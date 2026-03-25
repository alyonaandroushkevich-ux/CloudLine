// script.js

// ===== ПЕРЕВОДЫ =====
const translations = {
    ru: {
        // Навигация
        home: "Главная",
        services: "Услуги",
        calculator: "Калькулятор",
        about: "О компании",
        contact: "Контакты",
        
        // Главная
        hero_title: "Облачные решения для вашего бизнеса",
        hero_subtitle: "S3-хранилища, резервное копирование и аварийное восстановление в Беларуси",
        hero_btn_calc: "Рассчитать стоимость",
        hero_btn_services: "Все услуги",
        services_title: "Наши услуги",
        services_desc: "Современные облачные решения для любого бизнеса",
        service_s3: "S3-хранилище",
        service_s3_desc: "Масштабируемое объектное хранилище",
        service_baas: "BaaS",
        service_baas_desc: "Резервное копирование",
        service_draas: "DRaaS",
        service_draas_desc: "Аварийное восстановление",
        service_iaas: "IaaS",
        service_iaas_desc: "Виртуальная инфраструктура",
        more: "Подробнее",
        
        // Страница услуг
        services_page_title: "Наши услуги",
        services_page_desc: "Мы предлагаем полный спектр облачных решений для вашего бизнеса",
        service_s3_desc_full: "Масштабируемое объектное хранилище для любых типов данных. Идеально подходит для хранения контента сайтов, резервных копий, логов и аналитических данных. Полная совместимость с S3 API — стандартом для объектных хранилищ.",
        s3_feat1: "✓ Безлимитное масштабирование",
        s3_feat2: "✓ Надёжность 99.99%",
        s3_feat3: "✓ Интеграция с CDN",
        service_baas_desc_full: "Автоматическое резервное копирование ваших данных с гибкими настройками расписания и глубины хранения. Защита от вирусов-шифровальщиков.",
        baas_feat1: "✓ Резервное копирование 24/7",
        baas_feat2: "✓ Мгновенное восстановление",
        baas_feat3: "✓ Хранение в нескольких ЦОД",
        service_draas_desc_full: "Аварийное восстановление критически важных систем. Гарантированное время восстановления (RTO) и точка восстановления (RPO) в соответствии с вашими потребностями.",
        draas_feat1: "✓ RTO от 15 минут",
        draas_feat2: "✓ Регулярное тестирование",
        draas_feat3: "✓ Автоматическое переключение",
        service_iaas_desc_full: "Аренда виртуальных серверов с предустановленным ПО или вашими образами. Гибкая конфигурация CPU, RAM, дисков.",
        iaas_feat1: "✓ Выделенные ресурсы",
        iaas_feat2: "✓ Масштабирование за минуты",
        iaas_feat3: "✓ Защита DDoS",
price_label: "Стоимость:",
price_label_base: "Базовая стоимость:",
calc_individual: "Рассчитать индивидуальную стоимость →",
// Дополнительные преимущества S3
s3_feat4: "✓ Гибкое управление доступом",
s3_feat5: "✓ Версионирование файлов",
s3_feat6: "✓ Шифрование данных",

// Варианты использования
use_case_hosting: "Хостинг статических сайтов",
use_case_media: "Хранение медиа-контента",
use_case_backup: "Резервное копирование",
use_case_analytics: "Аналитические данные",

// Для BaaS
baas_feat4: "✓ Дедупликация данных",
baas_feat5: "✓ Инкрементальные копии",
baas_feat6: "✓ Политики хранения до 7 лет",

// Для DRaaS
draas_feat4: "✓ RPO от 5 минут",
draas_feat5: "✓ Географическая распределённость",

// Для IaaS
iaas_feat4: "✓ Балансировщик нагрузки",
iaas_feat5: "✓ Резервное копирование",
iaas_feat6: "✓ Мониторинг 24/7",
iaas_software1: "Windows Server 2019/2022",
iaas_software2: "Ubuntu, CentOS, Debian",
iaas_software3: "1С-Битрикс",
iaas_software4: "Базы данных (MySQL, PostgreSQL)",

per_month: "в месяц",
from: "от",
gb: "ГБ",
resources: "ресурсы",
        
        // Калькулятор
        calc_page_title: "Калькулятор стоимости",
        calc_page_desc: "Рассчитайте предварительную стоимость услуг CloudLine",
        calc_service: "Выберите услугу:",
        calc_s3: "S3-хранилище",
        calc_baas: "BaaS",
        calc_draas: "DRaaS",
        calc_iaas: "IaaS",
        calc_storage: "Объём (ГБ):",
        calc_months: "Срок (мес):",
        calc_btn: "Рассчитать",
        calc_result: "Итого:",
        calc_info_title: "Как рассчитывается стоимость?",
        calc_info_text: "Цены указаны в белорусских рублях и включают НДС. При заказе от 3 месяцев предоставляется скидка 5%, от 6 месяцев – 10%, от 12 месяцев – 15%. Окончательная стоимость зависит от выбранной услуги, объёма хранилища и срока. Для индивидуальных условий свяжитесь с нами.",

        
        // Контакты
         // Контакты
        contact_page_title: "Контакты",
        contact_page_desc: "Свяжитесь с нами любым удобным способом",
        contact_address: "Адрес",
        contact_address_val: "Минск, ул. Мележа, 5",
        contact_phone: "Телефон",
        contact_email: "Email",
        contact_name: "Имя",
        contact_message: "Сообщение",
        contact_send: "Отправить",
        
        // Дополнительные переводы для страницы услуг (русский)
        s3_features_title: "Преимущества:",
        s3_usage_title: "Варианты использования:",
        s3_examples_title: "Примеры расчёта:",
        baas_features_title: "Ключевые возможности:",
        baas_support_title: "Поддерживаемые системы:",
        baas_examples_title: "Примеры расчёта:",
        draas_sla_title: "SLA гарантии:",
        draas_tariffs_title: "Тарифные планы (цена за ГБ):",
        draas_examples_title: "Примеры расчёта (тариф \"Бизнес\"):",
        iaas_resources_title: "Тарифы на ресурсы:",
        iaas_configs_title: "Готовые конфигурации:",
        iaas_options_title: "Дополнительные опции:",
        iaas_software_title: "Предустановленное ПО:",

        // Заголовки таблиц
        table_header_volume: "Объём",
        table_header_1month: "1 месяц",
        table_header_3months: "3 месяца (скидка 5%)",
        table_header_12months: "12 месяцев (скидка 15%)",
        table_header_tariff: "Тариф",
        table_header_rto: "RTO",
        table_header_rpo: "RPO",
        table_header_price_per_gb: "Цена за ГБ",
        table_header_resource: "Ресурс",
        table_header_price: "Цена",
        table_header_config: "Конфигурация",
        table_header_vcpu: "vCPU",
        table_header_ram: "RAM",
        table_header_disk: "Диск (SSD)",
        table_header_price_per_month: "Цена/мес",

        // Значения таблиц
        gb_100: "100 ГБ",
        gb_500: "500 ГБ",
        tb_1: "1 ТБ (1024 ГБ)",
        tariff_basic: "Базовый",
        tariff_business: "Бизнес",
        tariff_critical: "Критический",
        config_micro: "Микро",
        config_basic: "Базовый",
        config_standard: "Стандарт",
        config_pro: "Про",
        config_corporate: "Корпоративный",
        resource_vcpu: "vCPU (процессор)",
        resource_ram: "RAM (оперативная память)",
        resource_ssd: "SSD диск",
        resource_hdd: "HDD диск",
        price_per_core: "8 BYN/ядро в месяц",
        price_per_gb_ram: "4 BYN/ГБ в месяц",
        price_per_gb_ssd: "0.30 BYN/ГБ в месяц",
        price_per_gb_hdd: "0.15 BYN/ГБ в месяц",
        
        // О компании
        about_page_title: "О компании CloudLine",
        about_page_desc: "Надёжные облачные решения с белорусскими корнями",
        about_title: "Мы делаем облака ближе",
        about_text1: "CloudLine — это молодая и амбициозная команда профессионалов, которая строит современную облачную инфраструктуру в Беларуси. Мы объединили многолетний опыт ведущих инженеров и страсть к технологиям, чтобы создать сервис, которому можно доверять.",
        about_text2: "Наша миссия — сделать облачные технологии доступными, надёжными и безопасными для белорусского бизнеса. Мы не просто арендуем серверы — мы строим экосистему, в которой ваш бизнес будет расти.",
        stat_years: "лет опыта",
        stat_clients: "клиентов",
        stat_uptime: "доступность",
        stat_support: "поддержка",
        values_title: "Наши ценности",
        value_security: "Безопасность",
        value_security_desc: "Шифрование данных, резервное копирование и защита от DDoS — мы заботимся о ваших данных",
        value_speed: "Скорость",
        value_speed_desc: "Высокопроизводительное оборудование и быстрые каналы связи для ваших задач",
        value_support: "Поддержка",
        value_support_desc: "Живые инженеры на связи 24/7, которые решают проблемы, а не читают скрипты",
        value_scale: "Масштабирование",
        value_scale_desc: "Растите без границ — мы подстроимся под любые объёмы",
        team_title: "Команда CloudLine",
        team_desc: "За каждым сервисом стоят люди, которые любят своё дело",
position_tech_dir: "Технический директор",
position_support_head: "Руководитель поддержки",
position_lead_engineer: "Ведущий инженер",
position_business_dev: "Развитие бизнеса",
name_alexey: "Алексей Смирнов",
name_tatsiana: "Татьяна Ковалёва",
name_dmitry: "Дмитрий Харитонов",
name_maria: "Мария Леонович",
        
        // Подвал
        footer_about: "Надёжные облачные решения для бизнеса",
        footer_services: "Услуги",
        footer_s3: "S3",
        footer_baas: "BaaS",
        footer_draas: "DRaaS",
        footer_iaas: "IaaS",
        footer_contacts: "Контакты",
        
        // Уведомления
        success_msg: "Сообщение отправлено!",
        error_msg: "Ошибка отправки. Попробуйте позже.",
        required_field: "Заполните все поля",
        in_development: "Раздел в разработке"
    },

be: {
    // Навигация
    home: "Галоўная",
    services: "Паслугі",
    calculator: "Калькулятар",
    about: "Пра кампанію",
    contact: "Кантакты",
    
    // Главная
    hero_title: "Воблачныя рашэнні для вашага бізнесу",
    hero_subtitle: "S3-сховішчы, рэзервовае капіраванне і аварыйнае аднаўленне ў Беларусі",
    hero_btn_calc: "Разлічыць кошт",
    hero_btn_services: "Усе паслугі",
    services_title: "Нашы паслугі",
    services_desc: "Сучасныя воблачныя рашэнні для любога бізнесу",
    service_s3: "S3-сховішча",
    service_s3_desc: "Масштабаванае аб'ектнае сховішча",
    service_baas: "BaaS",
    service_baas_desc: "Рэзервовае капіраванне",
    service_draas: "DRaaS",
    service_draas_desc: "Аварыйнае аднаўленне",
    service_iaas: "IaaS",
    service_iaas_desc: "Віртуальная інфраструктура",
    more: "Падрабязней",
    
    // Страница услуг
    services_page_title: "Нашы паслугі",
    services_page_desc: "Мы прапануем поўны спектр воблачных рашэнняў для вашага бізнесу",
    service_s3_desc_full: "Масштабаванае аб'ектнае сховішча для любых тыпаў даных. Ідэальна падыходзіць для захоўвання кантэнту сайтаў, рэзервовых копій, логаў і аналітычных даных. Поўная сумяшчальнасць з S3 API — стандартам для аб'ектных сховішчаў.",
    s3_feat1: "✓ Бесперапыннае маштабаванне",
    s3_feat2: "✓ Надзейнасць 99.99%",
    s3_feat3: "✓ Інтэграцыя з CDN",
    service_baas_desc_full: "Аўтаматычнае рэзервовае капіраванне вашых даных з гнуткімі наладамі раскладу і глыбіні захоўвання. Абарона ад вірусаў-шыфравальшчыкаў.",
    baas_feat1: "✓ Рэзервовае капіраванне 24/7",
    baas_feat2: "✓ Імгненнае аднаўленне",
    baas_feat3: "✓ Захоўванне ў некалькіх ЦОД",
    service_draas_desc_full: "Аварыйнае аднаўленне крытычна важных сістэм. Гарантаваны час аднаўлення (RTO) і кропка аднаўлення (RPO) у адпаведнасці з вашымі патрэбамі.",
    draas_feat1: "✓ RTO ад 15 хвілін",
    draas_feat2: "✓ Рэгулярнае тэсціраванне",
    draas_feat3: "✓ Аўтаматычнае пераключэнне",
    service_iaas_desc_full: "Арэнда віртуальных сервераў з прадусталяваным ПЗ або вашымі вобразамі. Гнуткая канфігурацыя CPU, RAM, дыскаў.",
    iaas_feat1: "✓ Выдзеленыя рэсурсы",
    iaas_feat2: "✓ Маштабаванне за хвіліны",
    iaas_feat3: "✓ Абарона DDoS",
resources: "рэсурсы",
    
    // Калькулятор
    calc_page_title: "Калькулятар кошту",
    calc_page_desc: "Разлічыце папярэдні кошт паслуг CloudLine",
    calc_service: "Абярыце паслугу:",
    calc_s3: "S3-сховішча",
    calc_baas: "BaaS",
    calc_draas: "DRaaS",
    calc_iaas: "IaaS",
    calc_storage: "Аб'ём (ГБ):",
    calc_months: "Тэрмін (мес):",
    calc_btn: "Разлічыць",
    calc_result: "Разам:",
    calc_info_title: "Як разлічваецца кошт?",
    calc_info_text: "Цэны паказаны ў беларускіх рублях і ўключаюць ПДВ. Пры замове ад 3 месяцаў прадастаўляецца скідка 5%, ад 6 месяцаў – 10%, ад 12 месяцаў – 15%. Канчатковы кошт залежыць ад абранай паслугі, аб'ёму сховішча і тэрміну. Для індывідуальных умоў звяжыцеся з намі.",
    
    // Контакты
    contact_page_title: "Кантакты",
    contact_page_desc: "Звяжыцеся з намі любым зручным спосабам",
    contact_address: "Адрас",
    contact_address_val: "Мінск, вул. Мележа, 5",
    contact_phone: "Тэлефон",
    contact_email: "Email",
    contact_name: "Імя",
    contact_message: "Паведамленне",
    contact_send: "Даслаць",
    
    // О компании
    about_page_title: "Пра кампанію CloudLine",
    about_page_desc: "Надзейныя воблачныя рашэнні з беларускімі каранямі",
    about_title: "Мы робім воблакі бліжэй",
    about_text1: "CloudLine — гэта маладая і амбіцыйная каманда прафесіяналаў, якая будуе сучасную воблачную інфраструктуру ў Беларусі. Мы аб'ядналі шматгадовы вопыт вядучых інжынераў і запал да тэхналогій, каб стварыць сэрвіс, якому можна давяраць.",
    about_text2: "Наша місія — зрабіць воблачныя тэхналогіі даступнымі, надзейнымі і бяспечнымі для беларускага бізнесу. Мы не проста арэндуем серверы — мы будуем экасістэму, у якой ваш бізнес будзе расці.",
    stat_years: "гадоў вопыту",
    stat_clients: "кліентаў",
    stat_uptime: "даступнасць",
    stat_support: "падтрымка",
    values_title: "Нашы каштоўнасці",
    value_security: "Бяспека",
    value_security_desc: "Шыфраванне даных, рэзервовае капіраванне і абарона ад DDoS — мы клапоцімся пра вашы даныя",
    value_speed: "Хуткасць",
    value_speed_desc: "Высокапрадукцыйнае абсталяванне і хуткія каналы сувязі для вашых задач",
    value_support: "Падтрымка",
    value_support_desc: "Жывыя інжынеры на сувязі 24/7, якія вырашаюць праблемы, а не чытаюць скрыпты",
    value_scale: "Маштабаванне",
    value_scale_desc: "Расціце без межаў — мы падладзімся пад любыя аб'ёмы",
    team_title: "Каманда CloudLine",
    team_desc: "За кожным сэрвісам стаяць людзі, якія любяць сваю справу",
    
    // Цены и единицы измерения
    price_label: "Кошт:",
    price_label_base: "Базавы кошт:",
    calc_individual: "Разлічыць індывідуальны кошт →",
    from: "ад",
    gb: "ГБ",
    per_month: "у месяц",
    
    // Дополнительные переводы для страницы услуг
    s3_features_title: "Перавагі:",
    s3_usage_title: "Варыянты выкарыстання:",
    s3_examples_title: "Прыклады разліку:",
    baas_features_title: "Ключавыя магчымасці:",
    baas_support_title: "Падтрымоўваныя сістэмы:",
    baas_examples_title: "Прыклады разліку:",
    draas_sla_title: "SLA гарантыі:",
    draas_tariffs_title: "Тарыфныя планы (кошт за ГБ):",
    draas_examples_title: "Прыклады разліку (тарыф \"Бізнес\"):",
    iaas_resources_title: "Тарыфы на рэсурсы:",
    iaas_configs_title: "Гатовыя канфігурацыі:",
    iaas_options_title: "Дадатковыя опцыі:",
    iaas_software_title: "Прадусталяванае ПЗ:",
    
    // Заголовки таблиц
    table_header_volume: "Аб'ём",
    table_header_1month: "1 месяц",
    table_header_3months: "3 месяцы (скідка 5%)",
    table_header_12months: "12 месяцаў (скідка 15%)",
    table_header_tariff: "Тарыф",
    table_header_rto: "RTO",
    table_header_rpo: "RPO",
    table_header_price_per_gb: "Кошт за ГБ",
    table_header_resource: "Рэсурс",
    table_header_price: "Кошт",
    table_header_config: "Канфігурацыя",
    table_header_vcpu: "vCPU",
    table_header_ram: "RAM",
    table_header_disk: "Дыск (SSD)",
    table_header_price_per_month: "Кошт/мес",
    
    // Значения таблиц
    gb_100: "100 ГБ",
    gb_500: "500 ГБ",
    tb_1: "1 ТБ (1024 ГБ)",
    tariff_basic: "Базавы",
    tariff_business: "Бізнес",
    tariff_critical: "Крытычны",
    config_micro: "Мікра",
    config_basic: "Базавы",
    config_standard: "Стандарт",
    config_pro: "Про",
    config_corporate: "Карпаратыўны",
    resource_vcpu: "vCPU (працэсар)",
    resource_ram: "RAM (аператыўная памяць)",
    resource_ssd: "SSD дыск",
    resource_hdd: "HDD дыск",
    price_per_core: "8 BYN/ядро ў месяц",
    price_per_gb_ram: "4 BYN/ГБ у месяц",
    price_per_gb_ssd: "0.30 BYN/ГБ у месяц",
    price_per_gb_hdd: "0.15 BYN/ГБ у месяц",
    
    // Дополнительные пункты для S3
    s3_feat4: "✓ Гнуткае кіраванне доступам",
    s3_feat5: "✓ Версіянаванне файлаў",
    s3_feat6: "✓ Шыфраванне даных",
    
    // Варианты использования
    use_case_hosting: "Хостынг статычных сайтаў",
    use_case_media: "Захоўванне медыя-кантэнту",
    use_case_backup: "Рэзервовае капіраванне",
    use_case_analytics: "Аналітычныя даныя",
    
    // Для BaaS
    baas_feat4: "✓ Дэдуплікацыя даных",
    baas_feat5: "✓ Інкрэментальныя копіі",
    baas_feat6: "✓ Палітыкі захоўвання да 7 гадоў",
    
    // Для DRaaS
    draas_feat4: "✓ RPO ад 5 хвілін",
    draas_feat5: "✓ Геаграфічная размеркаванасць",
    
    // Для IaaS
    iaas_feat4: "✓ Балансавальнік нагрузкі",
    iaas_feat5: "✓ Рэзервовае капіраванне",
    iaas_feat6: "✓ Маніторынг 24/7",
    iaas_software1: "Windows Server 2019/2022",
    iaas_software2: "Ubuntu, CentOS, Debian",
    iaas_software3: "1С-Бітрыкс",
    iaas_software4: "Базы даных (MySQL, PostgreSQL)",
    
    // Имена и должности команды
    position_tech_dir: "Тэхнічны дырэктар",
    position_support_head: "Кіраўнік падтрымкі",
    position_lead_engineer: "Вядучы інжынер",
    position_business_dev: "Развіццё бізнесу",
    name_alexey: "Аляксей Смірноў",
    name_tatsiana: "Таццяна Кавалёва",
    name_dmitry: "Дзмітрый Харытонаў",
    name_maria: "Марыя Ляоновіч",
    
    // Подвал
    footer_about: "Надзейныя воблачныя рашэнні для бізнесу",
    footer_services: "Паслугі",
    footer_s3: "S3",
    footer_baas: "BaaS",
    footer_draas: "DRaaS",
    footer_iaas: "IaaS",
    footer_contacts: "Кантакты",
    
    // Уведомления
    success_msg: "Паведамленне адпраўлена!",
    error_msg: "Памылка адпраўкі. Паспрабуйце пазней.",
    required_field: "Запоўніце ўсе палі",
    in_development: "Раздзел у распрацоўцы"
},
    
    en: {
        // Navigation
        home: "Home",
        services: "Services",
        calculator: "Calculator",
        about: "About",
        contact: "Contact",
        
        // Home
        hero_title: "Cloud solutions for your business",
        hero_subtitle: "S3 storage, backup, and disaster recovery in Belarus",
        hero_btn_calc: "Calculate cost",
        hero_btn_services: "All services",
        services_title: "Our services",
        services_desc: "Modern cloud solutions for any business",
        service_s3: "S3 storage",
        service_s3_desc: "Scalable object storage",
        service_baas: "BaaS",
        service_baas_desc: "Backup as a service",
        service_draas: "DRaaS",
        service_draas_desc: "Disaster recovery",
        service_iaas: "IaaS",
        service_iaas_desc: "Virtual infrastructure",
        more: "Learn more",
        
        // Services page
        services_page_title: "Our services",
        services_page_desc: "We offer a full range of cloud solutions for your business",
        service_s3_desc_full: "Scalable object storage for any data type. Ideal for website content, backups, logs, and analytics. Fully compatible with S3 API — the standard for object storage.",
        s3_feat1: "✓ Unlimited scaling",
        s3_feat2: "✓ 99.99% reliability",
        s3_feat3: "✓ CDN integration",
        service_baas_desc_full: "Automatic data backup with flexible schedule and retention settings. Protection against ransomware.",
        baas_feat1: "✓ 24/7 backup",
        baas_feat2: "✓ Instant recovery",
        baas_feat3: "✓ Multi-datacenter storage",
        service_draas_desc_full: "Disaster recovery for critical systems. Guaranteed RTO and RPO according to your needs.",
        draas_feat1: "✓ RTO from 15 minutes",
        draas_feat2: "✓ Regular testing",
        draas_feat3: "✓ Automatic failover",
        service_iaas_desc_full: "Virtual servers with preinstalled software or your own images. Flexible CPU, RAM, storage configuration.",
        iaas_feat1: "✓ Dedicated resources",
        iaas_feat2: "✓ Scale in minutes",
        iaas_feat3: "✓ DDoS protection",
price_label: "Price:",
price_label_base: "Base price:",
calc_individual: "Calculate individual price →",  
// Additional S3 features
s3_feat4: "✓ Flexible access management",
s3_feat5: "✓ File versioning",
s3_feat6: "✓ Data encryption",

// Use cases
use_case_hosting: "Static website hosting",
use_case_media: "Media content storage",
use_case_backup: "Backup storage",
use_case_analytics: "Analytics data lake",

// For BaaS
baas_feat4: "✓ Data deduplication",
baas_feat5: "✓ Incremental backups",
baas_feat6: "✓ Retention policies up to 7 years",

// For DRaaS
draas_feat4: "✓ RPO from 5 minutes",
draas_feat5: "✓ Geographic distribution",

// For IaaS
iaas_feat4: "✓ Load balancer",
iaas_feat5: "✓ Backup",
iaas_feat6: "✓ 24/7 monitoring",
iaas_software1: "Windows Server 2019/2022",
iaas_software2: "Ubuntu, CentOS, Debian",
iaas_software3: "1С-Bitrix",
iaas_software4: "Databases (MySQL, PostgreSQL)",

per_month: "per month",
from: "from",
gb: "GB",     
resources: "resources", 

        // Calculator
        calc_page_title: "Cost calculator",
        calc_page_desc: "Estimate the cost of CloudLine services",
        calc_service: "Choose service:",
        calc_s3: "S3 storage",
        calc_baas: "BaaS",
        calc_draas: "DRaaS",
        calc_iaas: "IaaS",
        calc_storage: "Volume (GB):",
        calc_months: "Term (months):",
        calc_btn: "Calculate",
        calc_result: "Total:",
        calc_info_title: "How is the cost calculated?",
        calc_info_text: "Prices are in Belarusian rubles including VAT. Discounts: 5% for 3+ months, 10% for 6+ months, 15% for 12+ months. The final cost depends on the selected service, storage volume, and term. For custom conditions, contact us.",
// Additional translations for services page (English)
s3_features_title: "Features:",
s3_usage_title: "Use cases:",
s3_examples_title: "Calculation examples:",
baas_features_title: "Key features:",
baas_support_title: "Supported systems:",
baas_examples_title: "Calculation examples:",
draas_sla_title: "SLA guarantees:",
draas_tariffs_title: "Tariff plans (price per GB):",
draas_examples_title: "Calculation examples (\"Business\" tariff):",
iaas_resources_title: "Resource tariffs:",
iaas_configs_title: "Ready configurations:",
iaas_options_title: "Additional options:",
iaas_software_title: "Pre-installed software:",

// Table headers
table_header_volume: "Volume",
table_header_1month: "1 month",
table_header_3months: "3 months (5% discount)",
table_header_12months: "12 months (15% discount)",
table_header_tariff: "Tariff",
table_header_rto: "RTO",
table_header_rpo: "RPO",
table_header_price_per_gb: "Price per GB",
table_header_resource: "Resource",
table_header_price: "Price",
table_header_config: "Configuration",
table_header_vcpu: "vCPU",
table_header_ram: "RAM",
table_header_disk: "SSD Disk",
table_header_price_per_month: "Price/month",

// Table values
gb_100: "100 GB",
gb_500: "500 GB",
tb_1: "1 TB (1024 GB)",
tariff_basic: "Basic",
tariff_business: "Business",
tariff_critical: "Critical",
config_micro: "Micro",
config_basic: "Basic",
config_standard: "Standard",
config_pro: "Pro",
config_corporate: "Corporate",
resource_vcpu: "vCPU (processor)",
resource_ram: "RAM (memory)",
resource_ssd: "SSD disk",
resource_hdd: "HDD disk",
price_per_core: "8 BYN/core per month",
price_per_gb_ram: "4 BYN/GB per month",
price_per_gb_ssd: "0.30 BYN/GB per month",
price_per_gb_hdd: "0.15 BYN/GB per month",
        
        // Contacts
        contact_page_title: "Contacts",
        contact_page_desc: "Contact us in any convenient way",
        contact_address: "Address",
        contact_address_val: "Minsk, Melezha str., 5",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_name: "Name",
        contact_message: "Message",
        contact_send: "Send",
        
        // About
        about_page_title: "About CloudLine",
        about_page_desc: "Reliable cloud solutions with Belarusian roots",
        about_title: "We bring clouds closer",
        about_text1: "CloudLine is a young and ambitious team of professionals building modern cloud infrastructure in Belarus. We combine years of experience from leading engineers with a passion for technology to create a service you can trust.",
        about_text2: "Our mission is to make cloud technologies accessible, reliable, and secure for Belarusian businesses. We don't just rent servers — we build an ecosystem where your business can grow.",
        stat_years: "years of experience",
        stat_clients: "clients",
        stat_uptime: "uptime",
        stat_support: "support",
        values_title: "Our values",
        value_security: "Security",
        value_security_desc: "Data encryption, backup, and DDoS protection — we care about your data",
        value_speed: "Speed",
        value_speed_desc: "High-performance hardware and fast communication channels for your tasks",
        value_support: "Support",
        value_support_desc: "Live engineers 24/7 who solve problems, not read scripts",
        value_scale: "Scaling",
        value_scale_desc: "Grow without limits — we adapt to any volume",
        team_title: "CloudLine Team",
        team_desc: "Behind every service are people who love what they do",
position_tech_dir: "Technical Director",
position_support_head: "Support Head",
position_lead_engineer: "Lead Engineer",
position_business_dev: "Business Development",
name_alexey: "Alex Smirnov",
name_tatsiana: "Tatsiana Kovaleva",
name_dmitry: "Dmitry Haritonov",
name_maria: "Maria Leonovich",
        
        // Footer
        footer_about: "Reliable cloud solutions for business",
        footer_services: "Services",
        footer_s3: "S3",
        footer_baas: "BaaS",
        footer_draas: "DRaaS",
        footer_iaas: "IaaS",
        footer_contacts: "Contacts",
        
        // Notifications
        success_msg: "Message sent!",
        error_msg: "Send error. Try again later.",
        required_field: "Please fill all fields",
        in_development: "Section under construction"
    }
};

let currentLang = 'ru';

// ===== УВЕДОМЛЕНИЯ =====
function showNotification(message, type = 'success') {
    const container = document.getElementById('notificationContainer');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification__close">&times;</button>
    `;
    container.appendChild(notification);

    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', () => notification.remove());

    setTimeout(() => {
        if (notification.parentNode) notification.remove();
    }, 5000);
}

// ===== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА =====
function switchLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;

    // Сохраняем текущее значение калькулятора
    const totalSpan = document.getElementById('totalPrice');
    const currentTotal = totalSpan ? totalSpan.textContent : '0';

    // Обновляем все элементы с data-lang
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.dataset.lang;
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.type !== 'submit' && el.type !== 'button') {
                    el.placeholder = translations[lang][key];
                }
            } else if (el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            } else if (el.classList.contains('stat-label')) {
                // Специально для статистики на странице "О компании"
                el.textContent = translations[lang][key];
            } else {
                // Для обычных элементов
                const span = el.querySelector('span');
                if (span && el.id !== 'calcResult') {
                    el.childNodes.forEach(node => {
                        if (node.nodeType === 3) {
                            node.textContent = translations[lang][key];
                        }
                    });
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        }
    });

    // Обновляем статистику на странице "О компании" (если есть)
    const yearStat = document.querySelector('.stat-card:nth-child(1) .stat-label');
    const clientsStat = document.querySelector('.stat-card:nth-child(2) .stat-label');
    const uptimeStat = document.querySelector('.stat-card:nth-child(3) .stat-label');
    const supportStat = document.querySelector('.stat-card:nth-child(4) .stat-label');
    
    if (yearStat) yearStat.textContent = translations[lang].stat_years;
    if (clientsStat) clientsStat.textContent = translations[lang].stat_clients;
    if (uptimeStat) uptimeStat.textContent = translations[lang].stat_uptime;
    if (supportStat) supportStat.textContent = translations[lang].stat_support;

    // Восстанавливаем значение калькулятора
    if (totalSpan) {
        totalSpan.textContent = currentTotal;
    }

    // Кнопки языков
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.classList.contains(`lang-btn--${lang}`));
    });

    localStorage.setItem('preferredLanguage', lang);
}

// ===== КАЛЬКУЛЯТОР СО СКИДКОЙ =====
function calculatePrice() {
    const serviceSelect = document.getElementById('serviceType');
    const storageInput = document.getElementById('storage');
    const monthsInput = document.getElementById('months');
    const totalSpan = document.getElementById('totalPrice');

    if (!serviceSelect || !storageInput || !monthsInput || !totalSpan) {
        return;
    }

    const service = serviceSelect.value;
    const storage = parseFloat(storageInput.value) || 0;
    const months = parseInt(monthsInput.value, 10) || 1;

    const prices = {
        s3: 0.15,
        baas: 0.25,
        draas: 0.40,
        iaas: 0.30
    };

    const pricePerGB = prices[service] || 0.15;

    let discount = 0;
    if (months >= 12) {
        discount = 0.15;
    } else if (months >= 6) {
        discount = 0.10;
    } else if (months >= 3) {
        discount = 0.05;
    }

    const totalWithoutDiscount = pricePerGB * storage * months;
    const total = totalWithoutDiscount * (1 - discount);

    totalSpan.textContent = total.toFixed(2);
}

// ===== ОТПРАВКА ФОРМЫ =====
function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
        showNotification(translations[currentLang].required_field, 'error');
        return;
    }

    showNotification(translations[currentLang].success_msg, 'success');
    e.target.reset();
}

// ===== БУРГЕР-МЕНЮ =====
function initBurger() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (!burger || !nav) return;

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('active');
            burger.classList.remove('active');
        }
    });
}

// ===== КНОПКА "НАВЕРХ" =====
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== АКТИВНЫЙ ПУНКТ МЕНЮ =====
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === currentPage);
    });
}

// ===== ЗАГЛУШКА ДЛЯ ССЫЛОК В РАЗРАБОТКЕ =====
function initDummyLinks() {
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification(translations[currentLang].in_development, 'info');
        });
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    // Язык
    const savedLang = localStorage.getItem('preferredLanguage') || 'ru';
    switchLanguage(savedLang);

    // Кнопки языков
    document.querySelectorAll('.lang-btn--ru, .lang-btn--en, .lang-btn--be').forEach(btn => {
        btn.addEventListener('click', () => {
            let lang = 'ru';
            if (btn.classList.contains('lang-btn--ru')) lang = 'ru';
            else if (btn.classList.contains('lang-btn--en')) lang = 'en';
            else if (btn.classList.contains('lang-btn--be')) lang = 'be';
            switchLanguage(lang);
        });
    });

    // Калькулятор
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
        calcBtn.addEventListener('click', calculatePrice);
        setTimeout(calculatePrice, 50);
    }

    // Форма обратной связи
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Бургер
    initBurger();

    // Кнопка "Наверх"
    initScrollTop();

    // Активное меню
    setActiveNav();

    // Заглушки для пустых ссылок
    initDummyLinks();
});
