export type Language = 'en' | 'ko' | 'zh' | 'vi' | 'id';

export interface Question {
    id: string;
    text: Record<Language, string>;
    options: Record<Language, string[]>;
}

// export interface SurveySet {
//     id: 'market' | 'package';
//     title: Record<Language, string>;
//     questions: Question[];
// }

export const SURVEY_DATA = {
    market: {
        title: {
            en: 'Market Validation',
            ko: '시장검증',
            zh: '市场验证',
            vi: 'Kiểm chứng thị trường',
            id: 'Validasi Pasar',
        },
        questions: [
            {
                id: 'q1',
                text: {
                    ko: '현재 목표로 준비 중인 TOPIK 급수는 무엇입니까?',
                    en: 'Which TOPIK level are you currently preparing for as your target?',
                    zh: '你目前正在以哪个 TOPIK 等级为目标进行准备？',
                    vi: 'Bạn đang chuẩn bị TOPIK ở cấp độ nào làm mục tiêu?',
                    id: 'Anda sedang mempersiapkan TOPIK tingkat berapa sebagai target?',
                },
                options: {
                    ko: ['TOPIK I (1~2급)', 'TOPIK II (3~4급)', 'TOPIK II (5~6급)'],
                    en: ['TOPIK I (Level 1–2)', 'TOPIK II (Level 3–4)', 'TOPIK II (Level 5–6)'],
                    zh: ['TOPIK I（1–2级）', 'TOPIK II（3–4级）', 'TOPIK II（5–6级）'],
                    vi: ['TOPIK I (Cấp 1–2)', 'TOPIK II (Cấp 3–4)', 'TOPIK II (Cấp 5–6)'],
                    id: ['TOPIK I (Level 1–2)', 'TOPIK II (Level 3–4)', 'TOPIK II (Level 5–6)'],
                },
            },
            {
                id: 'q2',
                text: {
                    ko: 'TOPIK을 응시하는 목적은 무엇입니까?',
                    en: 'What is your main purpose for taking TOPIK?',
                    zh: '你参加 TOPIK 的主要目的是什么？',
                    vi: 'Mục đích chính của bạn khi thi TOPIK là gì?',
                    id: 'Apa tujuan utama Anda mengikuti TOPIK?',
                },
                options: {
                    ko: ['대학교/대학원 입학', '취업', '승진 및 장학금', '비자'],
                    en: ['University/Graduate school admission', 'Employment', 'Promotion & scholarships', 'Visa'],
                    zh: ['大学/研究生院入学', '就业', '晋升及奖学金', '签证'],
                    vi: ['Nhập học đại học/cao học', 'Việc làm', 'Thăng tiến & học bổng', 'Visa'],
                    id: ['Masuk universitas/pascasarjana', 'Pekerjaan', 'Kenaikan jabatan & beasiswa', 'Visa'],
                },
            },
            {
                id: 'q3',
                text: {
                    ko: '현재 TOPIK 시험 대비를 위해 지출하는 월평균 비용(교재비, 학원비 등)은 대략 어느 정도입니까?',
                    en: 'Approximately how much do you spend per month on TOPIK preparation (books, classes, etc.)?',
                    zh: '你目前为备考 TOPIK 每月平均花费大约是多少（教材费、补习费等）？',
                    vi: 'Bạn chi khoảng bao nhiêu mỗi tháng cho việc ôn TOPIK (sách, học phí, v.v.)?',
                    id: 'Kira-kira berapa pengeluaran rata-rata per bulan untuk persiapan TOPIK (buku, kursus, dll.)?',
                },
                options: {
                    ko: ['1만 원 미만', '1만 원~3만 원', '3만 원~5만 원', '5만 원 이상'],
                    en: ['Under KRW 10,000', 'KRW 10,000–30,000', 'KRW 30,000–50,000', 'KRW 50,000 or more'],
                    zh: ['1万韩元以下', '1万–3万韩元', '3万–5万韩元', '5万韩元以上'],
                    vi: ['Dưới 10.000 won', '10.000–30.000 won', '30.000–50.000 won', 'Từ 50.000 won trở lên'],
                    id: ['Di bawah 10.000 KRW', '10.000–30.000 KRW', '30.000–50.000 KRW', '50.000 KRW atau lebih'],
                },
            },
            {
                id: 'q4',
                text: {
                    ko: '현재 주로 어떤 방식으로 TOPIK 모의고사를 연습하고 계십니까?',
                    en: 'How do you mainly practice TOPIK mock exams right now?',
                    zh: '你目前主要通过什么方式练习 TOPIK 模拟考试？',
                    vi: 'Hiện tại bạn chủ yếu luyện đề TOPIK bằng cách nào?',
                    id: 'Saat ini, bagaimana cara utama Anda berlatih ujian coba TOPIK?',
                },
                options: {
                    ko: ['시중의 종이 기출문제집', '어학원/학교 자체 교재', '유튜브/인스타그램 등 온라인 서비스', '유료 온라인 교육 서비스'],
                    en: ['Commercial paper past-exam books', 'Academy/School materials', 'Online services (YouTube/Instagram, etc.)', 'Paid online education services'],
                    zh: ['市售纸质真题/题集', '语言学校/学校自编教材', 'YouTube/Instagram 等在线服务', '付费在线教育服务'],
                    vi: ['Sách giấy đề thi/đề cũ bán trên thị trường', 'Tài liệu của trung tâm/trường', 'Dịch vụ online (YouTube/Instagram, v.v.)', 'Dịch vụ học online trả phí'],
                    id: ['Buku cetak soal/soal asli di pasaran', 'Materi dari kursus/sekolah', 'Layanan online (YouTube/Instagram, dll.)', 'Layanan pendidikan online berbayar'],
                },
            },
            {
                id: 'q5',
                text: {
                    ko: '최근 TOPIK 시험이 컴퓨터(IBT) 방식으로 전환되는 추세입니다. 기존 종이 문제집으로 공부할 때 실제 시험과 환경이 달라 불안하거나 불편함을 느낀 적이 있습니까?',
                    en: 'TOPIK is increasingly shifting to a computer-based format (IBT). When studying with paper workbooks, have you felt anxious or uncomfortable because the environment differs from the real exam?',
                    zh: '近来 TOPIK 越来越转向电脑考试（IBT）。用纸质题集学习时，你是否因为与真实考试环境不同而感到不安或不方便？',
                    vi: 'Gần đây TOPIK có xu hướng chuyển sang thi trên máy tính (IBT). Khi học bằng sách giấy, bạn có từng thấy lo lắng hoặc bất tiện vì khác môi trường thi thật không?',
                    id: 'TOPIK belakangan cenderung beralih ke ujian berbasis komputer (IBT). Saat belajar dengan buku kertas, apakah Anda pernah merasa cemas atau tidak nyaman karena berbeda dari lingkungan ujian sebenarnya?',
                },
                options: {
                    ko: ['매우 자주 느낀다', '가끔 느낀다', '별로 느끼지 않는다', '전혀 느끼지 않는다'],
                    en: ['Very often', 'Sometimes', 'Not really', 'Not at all'],
                    zh: ['非常频繁', '偶尔', '不太会', '完全不会'],
                    vi: ['Rất thường xuyên', 'Thỉnh thoảng', 'Không nhiều', 'Hoàn toàn không'],
                    id: ['Sangat sering', 'Kadang-kadang', 'Tidak terlalu', 'Tidak sama sekali'],
                },
            },
            {
                id: 'q6',
                text: {
                    ko: '현재 TOPIK 모의고사나 기출문제를 풀면서 가장 답답하거나 부족하다고 느끼는 점은 무엇입니까? (최대 2개 선택)',
                    en: 'When solving TOPIK mock tests or past papers, what feels most frustrating or insufficient? (Select up to 2)',
                    zh: '在做 TOPIK 模考或真题时，你觉得最困扰或最不足的是什么？（最多选2项）',
                    vi: 'Khi làm đề TOPIK (thi thử/đề thật), điều gì khiến bạn bức bối hoặc thấy thiếu nhất? (Chọn tối đa 2)',
                    id: 'Saat mengerjakan tryout atau soal asli TOPIK, apa yang paling membuat Anda frustrasi atau terasa kurang? (Pilih maksimal 2)',
                },
                options: {
                    ko: [
                        '풀 수 있는 문제의 절대적인 양이 부족하다 (금방 답을 외움)',
                        '내가 특정 유형(듣기, 읽기 등) 중 어디에 약한지 정확히 알기 어렵다',
                        '교재가 너무 무겁고 들고 다니기 불편하다',
                        '채점하고 오답을 확인하는 과정이 번거롭다',
                    ],
                    en: [
                        'Not enough total questions to practice (I memorize answers quickly)',
                        'Hard to know exactly which sections (listening/reading, etc.) I am weak in',
                        'Materials are too heavy and inconvenient to carry',
                        'Scoring and checking wrong answers is cumbersome',
                    ],
                    zh: [
                        '可练习的题量绝对不足（很快就把答案背下来了）',
                        '难以准确知道自己在某些题型（听力、阅读等）上的弱点',
                        '教材太重，携带不便',
                        '评分和核对错题的过程很麻烦',
                    ],
                    vi: [
                        'Số lượng câu hỏi để luyện còn quá ít (nhanh thuộc đáp án)',
                        'Khó xác định chính xác mình yếu ở phần nào (nghe/đọc, v.v.)',
                        'Tài liệu quá nặng, mang theo bất tiện',
                        'Chấm điểm và kiểm tra câu sai khá phiền',
                    ],
                    id: [
                        'Jumlah soal latihan tidak cukup (cepat hafal jawabannya)',
                        'Sulit mengetahui secara tepat bagian mana yang lemah (listening/reading, dll.)',
                        'Materi terlalu berat dan tidak praktis dibawa',
                        'Menilai dan mengecek jawaban salah itu merepotkan',
                    ],
                },
            },
            {
                id: 'q7',
                text: {
                    ko: '만약 스마트폰/PC로 언제든 풀 수 있는 새로운 모의고사 서비스가 나온다면, 가장 필수적이라고 생각하는 기능은 무엇입니까?',
                    en: 'If a new mock exam service you can use anytime on smartphone/PC becomes available, which feature would be most essential?',
                    zh: '如果推出可在手机/电脑随时使用的新模考服务，你认为最必不可少的功能是什么？',
                    vi: 'Nếu có dịch vụ thi thử mới có thể làm bất cứ lúc nào trên điện thoại/PC, tính năng nào là thiết yếu nhất?',
                    id: 'Jika ada layanan tryout baru yang bisa dikerjakan kapan saja lewat ponsel/PC, fitur mana yang paling wajib?',
                },
                options: {
                    ko: [
                        '실제 시험과 똑같은 IBT 실전 모의고사 환경',
                        'AI가 분석해 주는 나의 취약 유형 리포트(약한 유형 계속 풀기)',
                        '한 번 풀고 버리는 것이 아닌, 매번 새롭게 주어지는 무제한 문제',
                    ],
                    en: [
                        'An IBT mock exam environment identical to the real test',
                        'An AI-generated report of my weak question types (keep practicing weak areas)',
                        'Unlimited questions that are newly generated each time (not one-and-done)',
                    ],
                    zh: [
                        '与真实考试完全相同的 IBT 实战模考环境',
                        'AI 分析的薄弱题型报告（持续练弱项）',
                        '不是做一次就结束，而是每次都能获得新的无限题目',
                    ],
                    vi: [
                        'Môi trường thi thử IBT giống hệt kỳ thi thật',
                        'Báo cáo AI phân tích dạng bài yếu (luyện yếu liên tục)',
                        'Câu hỏi không phải làm một lần rồi bỏ, mà mỗi lần đều có đề mới không giới hạn',
                    ],
                    id: [
                        'Lingkungan tryout IBT yang sama persis dengan ujian asli',
                        'Laporan AI tentang tipe soal yang lemah (latihan terus bagian lemah)',
                        'Soal tanpa batas yang selalu baru setiap kali (bukan sekali pakai)',
                    ],
                },
            },
            {
                id: 'q8',
                text: {
                    ko: '‘IBT 실전 모의고사 + 약점 분석 + 무제한 풀이’ 기능이 모두 포함된 앱이 있다면, 기존에 구매하시던 종이 문제집을 대체하여 사용하실 의향이 있습니까?',
                    en: 'If an app included “IBT real mock exams + weakness analysis + unlimited practice,” would you be willing to replace the paper workbooks you usually buy?',
                    zh: '如果有一款包含“IBT实战模考 + 薄弱点分析 + 无限练习”的应用，你愿意用它来替代你平时购买的纸质题集吗？',
                    vi: 'Nếu có app bao gồm “thi thử IBT như thật + phân tích điểm yếu + luyện không giới hạn”, bạn có sẵn sàng thay thế sách giấy bạn thường mua không?',
                    id: 'Jika ada aplikasi yang mencakup “tryout IBT seperti asli + analisis kelemahan + latihan tanpa batas”, apakah Anda bersedia menggantikan buku kertas yang biasa Anda beli?',
                },
                options: {
                    ko: ['종이책 대신 이 앱을 메인으로 쓸 것이다', '앱과 종이책을 함께 병행해서 쓸 것이다', '그래도 종이책 위주로 공부할 것이다'],
                    en: ['I would use this app as my main tool instead of paper books', 'I would use both the app and paper books together', 'I would still mainly study with paper books'],
                    zh: ['我会用这款应用替代纸质题集作为主要工具', '我会同时使用应用和纸质题集', '我仍会以纸质题集为主'],
                    vi: ['Tôi sẽ dùng app này làm công cụ chính thay cho sách giấy', 'Tôi sẽ dùng cả app và sách giấy song song', 'Tôi vẫn sẽ chủ yếu học bằng sách giấy'],
                    id: ['Saya akan menjadikan aplikasi ini sebagai alat utama menggantikan buku kertas', 'Saya akan menggunakan aplikasi dan buku kertas bersamaan', 'Saya tetap akan belajar terutama dengan buku kertas'],
                },
            },
            {
                id: 'q9',
                text: {
                    ko: '(지불 의사 확인) 이 서비스를 이용하기 위해 당신이 기꺼이 지불할 수 있는 1회(또는 1개월) 적정 이용 금액은 얼마라고 생각하십니까?',
                    en: '(Willingness to pay) What do you think is a reasonable price you would willingly pay per session (or per month) for this service?',
                    zh: '（付费意愿）为了使用该服务，你认为你愿意支付的单次（或每月）合理价格是多少？',
                    vi: '(Sẵn lòng chi trả) Bạn nghĩ mức giá hợp lý mà bạn sẵn sàng trả cho mỗi lần (hoặc mỗi tháng) sử dụng dịch vụ này là bao nhiêu?',
                    id: '(Kesediaan membayar) Menurut Anda, berapa harga wajar yang bersedia Anda bayar per sesi (atau per bulan) untuk layanan ini?',
                },
                options: {
                    ko: ['3,000원 ~ 5,000원 (커피 한 잔 가격)', '5,000원 ~ 10,000원 (밥 한 끼 가격)', '10,000원 ~ 20,000원 (종이 문제집 1권 가격)', '무료가 아니면 쓰지 않겠다'],
                    en: ['KRW 3,000–5,000 (a cup of coffee)', 'KRW 5,000–10,000 (a meal)', 'KRW 10,000–20,000 (the price of one workbook)', 'I wouldn’t use it unless it’s free'],
                    zh: ['3,000–5,000韩元（咖啡一杯价格）', '5,000–10,000韩元（一顿饭价格）', '10,000–20,000韩元（一本纸质题集价格）', '不是免费的就不用'],
                    vi: ['3.000–5.000 won (giá 1 ly cà phê)', '5.000–10.000 won (giá 1 bữa ăn)', '10.000–20.000 won (giá 1 cuốn sách luyện đề)', 'Nếu không miễn phí thì tôi không dùng'],
                    id: ['3.000–5.000 KRW (harga secangkir kopi)', '5.000–10.000 KRW (harga satu kali makan)', '10.000–20.000 KRW (harga satu buku latihan)', 'Kalau tidak gratis, saya tidak akan pakai'],
                },
            },
            {
                id: 'q10',
                text: {
                    ko: '평소 스마트폰을 활용해 언어 공부를 하는 비중은 전체 공부 시간의 몇 % 정도 됩니까?',
                    en: 'Roughly what percentage of your total study time do you use your smartphone for language learning?',
                    zh: '你平时用手机学习语言占总学习时间的百分之多少？',
                    vi: 'Thông thường, bạn dùng điện thoại để học ngôn ngữ chiếm khoảng bao nhiêu % tổng thời gian học?',
                    id: 'Kira-kira berapa persen dari total waktu belajar Anda yang menggunakan ponsel untuk belajar bahasa?',
                },
                options: {
                    ko: ['10% 미만', '10%~30%', '30%~50%', '50% 이상'],
                    en: ['Under 10%', '10%–30%', '30%–50%', '50% or more'],
                    zh: ['10%以下', '10%–30%', '30%–50%', '50%以上'],
                    vi: ['Dưới 10%', '10%–30%', '30%–50%', 'Từ 50% trở lên'],
                    id: ['Di bawah 10%', '10%–30%', '30%–50%', '50% atau lebih'],
                },
            },
        ],
    },
};

/*
export const SURVEY_DATA: Record<'market' | 'package', SurveySet> = {
    market: {
        id: 'market',
        title: {
            en: 'Market Validation',
            ko: '시장검증',
            zh: '市场验证',
            vi: 'Kiểm chứng thị trường',
            id: 'Validasi Pasar'
        },
        questions: [
            {
                id: 'q1',
                text: {
                    ko: '현재 TOPIK 공부를 하고 계신가요?',
                    en: 'Are you currently studying for TOPIK?',
                    zh: '你目前在学习TOPIK吗？',
                    vi: 'Bạn có đang học TOPIK không?',
                    id: 'Apakah Anda sedang belajar TOPIK?'
                },
                options: {
                    ko: ['적극적으로 준비 중이다', '가끔 공부한다', '생각은 있지만 시작하지 않았다', '전혀 계획 없다'],
                    en: ['Actively preparing', 'Studying occasionally', 'Thinking about it but haven\'t started', 'No plans at all'],
                    zh: ['正在积极准备', '偶尔学习', '有想法但还没开始', '完全没有计划'],
                    vi: ['Đang tích cực chuẩn bị', 'Thỉnh thoảng học', 'Có ý định nhưng chưa bắt đầu', 'Hoàn toàn không có kế hoạch'],
                    id: ['Sedang aktif mempersiapkan', 'Belajar sesekali', 'Sudah terpikir tapi belum mulai', 'Tidak ada rencana sama sekali']
                }
            },
            {
                id: 'q2',
                text: {
                    ko: '한국어능력시험(TOPIK)을 공부하는/하게된다면 주된 목적은 무엇인가요?',
                    en: 'What is your main purpose for studying TOPIK?',
                    zh: '学习TOPIK的主要目的是什么？',
                    vi: 'Mục đích chính của việc học TOPIK là gì?',
                    id: 'Apa tujuan utama Anda belajar TOPIK?'
                },
                options: {
                    ko: ['대학 입학', '취업 / 아르바이트', '비자 / 체류 목적', '개인 관심 / 취미'],
                    en: ['University admission', 'Employment / Part-time job', 'Visa / Stay purpose', 'Personal interest / Hobby'],
                    zh: ['大学入学', '就业/兼职', '签证/滞留目的', '个人兴趣/爱好'],
                    vi: ['Nhập học đại học', 'Việc làm / Làm thêm', 'Visa / Mục đích cư trú', 'Sở thích cá nhân'],
                    id: ['Masuk universitas', 'Pekerjaan / Kerja paruh waktu', 'Visa / Tujuan tinggal', 'Minat pribadi / Hobi']
                }
            },
            {
                id: 'q3',
                text: {
                    ko: '현재 사용하는 공부 방법은 무엇인가요?',
                    en: 'What is your current study method?',
                    zh: '你目前使用的学习方法是什么？',
                    vi: 'Phương pháp học tập hiện tại của bạn là gì?',
                    id: 'Apa metode belajar yang Anda gunakan saat ini?'
                },
                options: {
                    ko: ['학원 / 과외', '문제집', '유튜브 / 무료 콘텐츠', '별도로 하지 않음'],
                    en: ['Academy / Tutoring', 'Workbooks', 'YouTube / Free content', 'Not doing anything specific'],
                    zh: ['学院/家教', '习题集', 'YouTube/免费内容', '没有特别学习'],
                    vi: ['Trung tâm / Gia sư', 'Sách bài tập', 'YouTube / Nội dung miễn phí', 'Không làm gì cụ thể'],
                    id: ['Kursus / Privat', 'Buku latihan', 'YouTube / Konten gratis', 'Tidak melakukan apa pun secara khusus']
                }
            },
            {
                id: 'q4',
                text: {
                    ko: 'AI가 제출하고 한국어교사가 검토한 자료의 퀄리티는 어떨 것 같나요?',
                    en: 'What do you think about the quality of materials generated by AI and reviewed by Korean teachers?',
                    zh: '你认为AI生成并由韩国语教师审核的资料质量如何？',
                    vi: 'Bạn nghĩ gì về chất lượng tài liệu do AI tạo ra và giáo viên tiếng Hàn kiểm duyệt?',
                    id: 'Bagaimana menurut Anda kualitas materi yang dibuat oleh AI dan ditinjau oleh pengajar bahasa Korea?'
                },
                options: {
                    ko: ['실제 시험과 비슷하다', '연습하기 나쁘지 않다', '사용하고 싶지 않다', '모르겠다'],
                    en: ['Similar to the real exam', 'Not bad for practice', 'Don\'t want to use it', 'Don\'t know'],
                    zh: ['与实际考试相似', '练习还不错', '不想使用', '不知道'],
                    vi: ['Giống với kỳ thi thật', 'Không tệ để ôn tập', 'Không muốn sử dụng', 'Không biết'],
                    id: ['Mirip dengan ujian asli', 'Lumayan untuk latihan', 'Tidak ingin menggunakan', 'Tidak tahu']
                }
            },
            {
                id: 'q5',
                text: {
                    ko: '실제 시험과 같은 환경(IBT)으로 연습하는 것이 중요하다고 생각하시나요?',
                    en: 'Do you think it\'s important to practice in the same environment (IBT) as the real exam?',
                    zh: '你认为在与实际考试相同的环境（IBT）中练习重要吗？',
                    vi: 'Bạn có nghĩ việc luyện tập trong môi trường giống kỳ thi thật (IBT) là quan trọng không?',
                    id: 'Apakah Anda menganggap penting untuk berlatih di lingkungan yang sama (IBT) dengan ujian asli?'
                },
                options: {
                    ko: ['매우 중요하다', '어느 정도 중요하다', '별로 중요하지 않다', '전혀 중요하지 않다'],
                    en: ['Very important', 'Somewhat important', 'Not very important', 'Not important at all'],
                    zh: ['非常重要', '在一定程度上重要', '不太重要', '完全不重要'],
                    vi: ['Rất quan trọng', 'Quan trọng ở mức nào đó', 'Không quan trọng lắm', 'Hoàn toàn không quan trọng'],
                    id: ['Sangat penting', 'Cukup penting', 'Kurang penting', 'Sama sekali tidak penting']
                }
            },
            {
                id: 'q6',
                text: {
                    ko: '자신의 약한 부분만 집중적으로 연습할 수 있는 기능이 필요하다고 생각하시나요?',
                    en: 'Do you think a feature to practice only your weak areas intensively is necessary?',
                    zh: '你认为有必要集中练习自己薄弱环节的功能吗？',
                    vi: 'Bạn có nghĩ cần chức năng cho phép luyện tập tập trung vào những phần còn yếu không?',
                    id: 'Apakah Anda merasa fitur untuk berlatih bagian yang lemah secara intensif itu perlu?'
                },
                options: {
                    ko: ['매우 필요하다', '어느 정도 필요하다', '잘 모르겠다', '필요하지 않다'],
                    en: ['Very necessary', 'Somewhat necessary', 'Don\'t know', 'Not necessary'],
                    zh: ['非常必要', '在一定程度上必要', '不知道', '不需要'],
                    vi: ['Rất cần thiết', 'Cần thiết ở mức nào đó', 'Không biết', 'Không cần thiết'],
                    id: ['Sangat perlu', 'Cukup perlu', 'Tidak tahu', 'Tidak perlu']
                }
            },
            {
                id: 'q7',
                text: {
                    ko: '토픽 서비스가 있다면 아래 기능 중 가장 필요하다고 생각하는 것은 무엇인가요?',
                    en: 'If there were a TOPIK service, which of the following features would you need the most?',
                    zh: '如果有TOPIK服务，你认为最需要以下哪些功能？',
                    vi: 'Nếu có dịch vụ TOPIK, bạn nghĩ chức năng nào sau đây là cần thiết nhất?',
                    id: 'Jika ada layanan TOPIK, fitur mana yang menurut Anda paling dibutuhkan?'
                },
                options: {
                    ko: ['실제 시험 환경 모의시험', '약점 분석 리포트', '무제한 문제풀이', '별로 필요 없음'],
                    en: ['Mock exam in real environment', 'Weakness analysis report', 'Unlimited practice questions', 'Not really needed'],
                    zh: ['实际考试环境模拟考试', '薄弱环节分析报告', '无限解题', '不太需要'],
                    vi: ['Thi thử trong môi trường thật', 'Báo cáo phân tích điểm yếu', 'Giải bài tập không giới hạn', 'Không thực sự cần thiết'],
                    id: ['Ujian simulasi di lingkungan asli', 'Laporan analisis kelemahan', 'Latihan soal tanpa batas', 'Kurang perlu']
                }
            },
            {
                id: 'q8',
                text: {
                    ko: '월 3,000~5,000원 수준의 비용으로 TOPIK 연습 서비스를 이용할 의향이 있나요?',
                    en: 'Would you be willing to use a TOPIK practice service for 3,000-5,000 KRW per month?',
                    zh: '你愿意每月支付3,000-5,000韩元使用TOPIK练习服务吗？',
                    vi: 'Bạn có sẵn lòng sử dụng dịch vụ luyện tập TOPIK với mức giá khoảng 3.000~5.000 won mỗi tháng không?',
                    id: 'Apakah Anda bersedia menggunakan layanan latihan TOPIK dengan biaya 3.000~5.000 KRW per bulan?'
                },
                options: {
                    ko: ['있다', '조건에 따라 다르다', '잘 모르겠다', '없다'],
                    en: ['Yes', 'Depends on conditions', 'Don\'t know', 'No'],
                    zh: ['有', '视条件而定', '不知道', '没有'],
                    vi: ['Có', 'Tùy điều kiện', 'Không biết', 'Không'],
                    id: ['Ya', 'Tergantung kondisi', 'Tidak tahu', 'Tidak']
                }
            },
            {
                id: 'q9',
                text: {
                    ko: '이런 서비스가 있어도 사용하지 않을 이유는 무엇인가요?',
                    en: 'What would be the reason for not using such a service even if it were available?',
                    zh: '即使有这样的服务，不使用的原因是什么？',
                    vi: 'Lý do gì khiến bạn không sử dụng dịch vụ này ngay cả khi nó có sẵn?',
                    id: 'Apa alasan Anda tidak akan menggunakan layanan tersebut meskipun tersedia?'
                },
                options: {
                    ko: ['시간 부족', '현재 공부 방식으로 충분', '가격이 아깝다', '필요성을 못 느낌'],
                    en: ['Lack of time', 'Current study method is enough', 'Price is too high', 'Don\'t feel the need'],
                    zh: ['时间不足', '目前的学习方式已足够', '觉得价格可惜', '没感觉到必要性'],
                    vi: ['Thiếu thời gian', 'Phương pháp học hiện tại đã đủ', 'Tiếc tiền', 'Không cảm thấy cần thiết'],
                    id: ['Kurang waktu', 'Metode belajar saat ini sudah cukup', 'Harganya sayang', 'Merasa tidak butuh']
                }
            },
            {
                id: 'q10',
                text: {
                    ko: '이런 서비스를 사용한다면 응시하기 얼마 전 부터 사용할 것 같나요?',
                    en: 'If you were to use such a service, how long before the exam would you start?',
                    zh: '如果要使用这样的服务，考试前多久会开始使用？',
                    vi: 'Nếu sử dụng dịch vụ này, bạn nghĩ sẽ bắt đầu sử dụng từ bao giờ trước khi thi?',
                    id: 'Jika menggunakan layanan ini, kira-kira berapa lama sebelum ujian Anda akan mulai menggunakannya?'
                },
                options: {
                    ko: ['한 달 전', '6개월 전', '일주일 전', '한두 번'],
                    en: ['One month before', '6 months before', 'One week before', 'One or two times'],
                    zh: ['一个月前', '6个月前', '一周前', '一两次'],
                    vi: ['Một tháng trước', '6 tháng trước', 'Một tuần trước', 'Một hai lần'],
                    id: ['Satu bulan sebelumnya', '6 bulan sebelumnya', 'Satu minggu sebelumnya', 'Satu atau dua kali']
                }
            }
        ]
    },
};

*/

/* export const SURVEY_DATA: Record<'market' | 'package', SurveySet> = {
    market: {
        id: 'market',
        title: {
            en: 'Market Validation',
            ko: '시장검증',
            zh: '市场验证',
            vi: 'Kiểm chứng thị trường',
            id: 'Validasi Pasar'
        },
        questions: [
            {
                id: 'q1',
                text: {
                    ko: '현재 TOPIK 공부를 하고 계신가요?',
                    en: 'Are you currently studying for TOPIK?',
                    zh: '你目前在学习TOPIK吗？',
                    vi: 'Bạn có đang học TOPIK không?',
                    id: 'Apakah Anda sedang belajar TOPIK?'
                },
                options: {
                    ko: ['적극적으로 준비 중이다', '가끔 공부한다', '생각은 있지만 시작하지 않았다', '전혀 계획 없다'],
                    en: ['Actively preparing', 'Studying occasionally', 'Thinking about it but haven\'t started', 'No plans at all'],
                    zh: ['正在积极准备', '偶尔学习', '有想法但还没开始', '完全没有计划'],
                    vi: ['Đang tích cực chuẩn bị', 'Thỉnh thoảng học', 'Có ý định nhưng chưa bắt đầu', 'Hoàn toàn không có kế hoạch'],
                    id: ['Sedang aktif mempersiapkan', 'Belajar sesekali', 'Sudah terpikir tapi belum mulai', 'Tidak ada rencana sama sekali']
                }
            },
            {
                id: 'q2',
                text: {
                    ko: '한국어능력시험(TOPIK)을 공부하는/하게된다면 주된 목적은 무엇인가요?',
                    en: 'What is your main purpose for studying TOPIK?',
                    zh: '学习TOPIK的主要目的是什么？',
                    vi: 'Mục đích chính của việc học TOPIK là gì?',
                    id: 'Apa tujuan utama Anda belajar TOPIK?'
                },
                options: {
                    ko: ['대학 입학', '취업 / 아르바이트', '비자 / 체류 목적', '개인 관심 / 취미'],
                    en: ['University admission', 'Employment / Part-time job', 'Visa / Stay purpose', 'Personal interest / Hobby'],
                    zh: ['大学入学', '就业/兼职', '签证/滞留目的', '个人兴趣/爱好'],
                    vi: ['Nhập học đại học', 'Việc làm / Làm thêm', 'Visa / Mục đích cư trú', 'Sở thích cá nhân'],
                    id: ['Masuk universitas', 'Pekerjaan / Kerja paruh waktu', 'Visa / Tujuan tinggal', 'Minat pribadi / Hobi']
                }
            },
            {
                id: 'q3',
                text: {
                    ko: '현재 사용하는 공부 방법은 무엇인가요?',
                    en: 'What is your current study method?',
                    zh: '你目前使用的学习方法是什么？',
                    vi: 'Phương pháp học tập hiện tại của bạn là gì?',
                    id: 'Apa metode belajar yang Anda gunakan saat ini?'
                },
                options: {
                    ko: ['학원 / 과외', '문제집', '유튜브 / 무료 콘텐츠', '별도로 하지 않음'],
                    en: ['Academy / Tutoring', 'Workbooks', 'YouTube / Free content', 'Not doing anything specific'],
                    zh: ['学院/家教', '习题集', 'YouTube/免费内容', '没有特别学习'],
                    vi: ['Trung tâm / Gia sư', 'Sách bài tập', 'YouTube / Nội dung miễn phí', 'Không làm gì cụ thể'],
                    id: ['Kursus / Privat', 'Buku latihan', 'YouTube / Konten gratis', 'Tidak melakukan apa pun secara khusus']
                }
            },
            {
                id: 'q4',
                text: {
                    ko: 'AI가 제출하고 한국어교사가 검토한 자료의 퀄리티는 어떨 것 같나요?',
                    en: 'What do you think about the quality of materials generated by AI and reviewed by Korean teachers?',
                    zh: '你认为AI生成并由韩国语教师审核的资料质量如何？',
                    vi: 'Bạn nghĩ gì về chất lượng tài liệu do AI tạo ra và giáo viên tiếng Hàn kiểm duyệt?',
                    id: 'Bagaimana menurut Anda kualitas materi yang dibuat oleh AI dan ditinjau oleh pengajar bahasa Korea?'
                },
                options: {
                    ko: ['실제 시험과 비슷하다', '연습하기 나쁘지 않다', '사용하고 싶지 않다', '모르겠다'],
                    en: ['Similar to the real exam', 'Not bad for practice', 'Don\'t want to use it', 'Don\'t know'],
                    zh: ['与实际考试相似', '练习还不错', '不想使用', '不知道'],
                    vi: ['Giống với kỳ thi thật', 'Không tệ để ôn tập', 'Không muốn sử dụng', 'Không biết'],
                    id: ['Mirip dengan ujian asli', 'Lumayan untuk latihan', 'Tidak ingin menggunakan', 'Tidak tahu']
                }
            },
            {
                id: 'q5',
                text: {
                    ko: '실제 시험과 같은 환경(IBT)으로 연습하는 것이 중요하다고 생각하시나요?',
                    en: 'Do you think it\'s important to practice in the same environment (IBT) as the real exam?',
                    zh: '你认为在与实际考试相同的环境（IBT）中练习重要吗？',
                    vi: 'Bạn có nghĩ việc luyện tập trong môi trường giống kỳ thi thật (IBT) là quan trọng không?',
                    id: 'Apakah Anda menganggap penting untuk berlatih di lingkungan yang sama (IBT) dengan ujian asli?'
                },
                options: {
                    ko: ['매우 중요하다', '어느 정도 중요하다', '별로 중요하지 않다', '전혀 중요하지 않다'],
                    en: ['Very important', 'Somewhat important', 'Not very important', 'Not important at all'],
                    zh: ['非常重要', '在一定程度上重要', '不太重要', '完全不重要'],
                    vi: ['Rất quan trọng', 'Quan trọng ở mức nào đó', 'Không quan trọng lắm', 'Hoàn toàn không quan trọng'],
                    id: ['Sangat penting', 'Cukup penting', 'Kurang penting', 'Sama sekali tidak penting']
                }
            },
            {
                id: 'q6',
                text: {
                    ko: '자신의 약한 부분만 집중적으로 연습할 수 있는 기능이 필요하다고 생각하시나요?',
                    en: 'Do you think a feature to practice only your weak areas intensively is necessary?',
                    zh: '你认为有必要集中练习自己薄弱环节的功能吗？',
                    vi: 'Bạn có nghĩ cần chức năng cho phép luyện tập tập trung vào những phần còn yếu không?',
                    id: 'Apakah Anda merasa fitur untuk berlatih bagian yang lemah secara intensif itu perlu?'
                },
                options: {
                    ko: ['매우 필요하다', '어느 정도 필요하다', '잘 모르겠다', '필요하지 않다'],
                    en: ['Very necessary', 'Somewhat necessary', 'Don\'t know', 'Not necessary'],
                    zh: ['非常必要', '在一定程度上必要', '不知道', '不需要'],
                    vi: ['Rất cần thiết', 'Cần thiết ở mức nào đó', 'Không biết', 'Không cần thiết'],
                    id: ['Sangat perlu', 'Cukup perlu', 'Tidak tahu', 'Tidak perlu']
                }
            },
            {
                id: 'q7',
                text: {
                    ko: '토픽 서비스가 있다면 아래 기능 중 가장 필요하다고 생각하는 것은 무엇인가요?',
                    en: 'If there were a TOPIK service, which of the following features would you need the most?',
                    zh: '如果有TOPIK服务，你认为最需要以下哪些功能？',
                    vi: 'Nếu có dịch vụ TOPIK, bạn nghĩ chức năng nào sau đây là cần thiết nhất?',
                    id: 'Jika ada layanan TOPIK, fitur mana yang menurut Anda paling dibutuhkan?'
                },
                options: {
                    ko: ['실제 시험 환경 모의시험', '약점 분석 리포트', '무제한 문제풀이', '별로 필요 없음'],
                    en: ['Mock exam in real environment', 'Weakness analysis report', 'Unlimited practice questions', 'Not really needed'],
                    zh: ['实际考试环境模拟考试', '薄弱环节分析报告', '无限解题', '不太需要'],
                    vi: ['Thi thử trong môi trường thật', 'Báo cáo phân tích điểm yếu', 'Giải bài tập không giới hạn', 'Không thực sự cần thiết'],
                    id: ['Ujian simulasi di lingkungan asli', 'Laporan analisis kelemahan', 'Latihan soal tanpa batas', 'Kurang perlu']
                }
            },
            {
                id: 'q8',
                text: {
                    ko: '월 3,000~5,000원 수준의 비용으로 TOPIK 연습 서비스를 이용할 의향이 있나요?',
                    en: 'Would you be willing to use a TOPIK practice service for 3,000-5,000 KRW per month?',
                    zh: '你愿意每月支付3,000-5,000韩元使用TOPIK练习服务吗？',
                    vi: 'Bạn có sẵn lòng sử dụng dịch vụ luyện tập TOPIK với mức giá khoảng 3.000~5.000 won mỗi tháng không?',
                    id: 'Apakah Anda bersedia menggunakan layanan latihan TOPIK dengan biaya 3.000~5.000 KRW per bulan?'
                },
                options: {
                    ko: ['있다', '조건에 따라 다르다', '잘 모르겠다', '없다'],
                    en: ['Yes', 'Depends on conditions', 'Don\'t know', 'No'],
                    zh: ['有', '视条件而定', '不知道', '没有'],
                    vi: ['Có', 'Tùy điều kiện', 'Không biết', 'Không'],
                    id: ['Ya', 'Tergantung kondisi', 'Tidak tahu', 'Tidak']
                }
            },
            {
                id: 'q9',
                text: {
                    ko: '이런 서비스가 있어도 사용하지 않을 이유는 무엇인가요?',
                    en: 'What would be the reason for not using such a service even if it were available?',
                    zh: '即使有这样的服务，不使用的原因是什么？',
                    vi: 'Lý do gì khiến bạn không sử dụng dịch vụ này ngay cả khi nó có sẵn?',
                    id: 'Apa alasan Anda tidak akan menggunakan layanan tersebut meskipun tersedia?'
                },
                options: {
                    ko: ['시간 부족', '현재 공부 방식으로 충분', '가격이 아깝다', '필요성을 못 느낌'],
                    en: ['Lack of time', 'Current study method is enough', 'Price is too high', 'Don\'t feel the need'],
                    zh: ['时间不足', '目前的学习方式已足够', '觉得价格可惜', '没感觉到必要性'],
                    vi: ['Thiếu thời gian', 'Phương pháp học hiện tại đã đủ', 'Tiếc tiền', 'Không cảm thấy cần thiết'],
                    id: ['Kurang waktu', 'Metode belajar saat ini sudah cukup', 'Harganya sayang', 'Merasa tidak butuh']
                }
            },
            {
                id: 'q10',
                text: {
                    ko: '이런 서비스를 사용한다면 응시하기 얼마 전 부터 사용할 것 같나요?',
                    en: 'If you were to use such a service, how long before the exam would you start?',
                    zh: '如果要使用这样的服务，考试前多久会开始使用？',
                    vi: 'Nếu sử dụng dịch vụ này, bạn nghĩ sẽ bắt đầu sử dụng từ bao giờ trước khi thi?',
                    id: 'Jika menggunakan layanan ini, kira-kira berapa lama sebelum ujian Anda akan mulai menggunakannya?'
                },
                options: {
                    ko: ['한 달 전', '6개월 전', '일주일 전', '한두 번'],
                    en: ['One month before', '6 months before', 'One week before', 'One or two times'],
                    zh: ['一个月前', '6个月前', '一周前', '一两次'],
                    vi: ['Một tháng trước', '6 tháng trước', 'Một tuần trước', 'Một hai lần'],
                    id: ['Satu bulan sebelumnya', '6 bulan sebelumnya', 'Satu minggu sebelumnya', 'Satu atau dua kali']
                }
            }
        ]
    },
    package: {
        id: 'package',
        title: {
            en: 'Package Design',
            ko: '패키지',
            zh: '套餐设计',
            vi: 'Gói dịch vụ',
            id: 'Paket Layanan'
        },
        questions: [
            {
                id: 'q1',
                text: {
                    ko: '실제 시험 환경과 다른 방식으로 연습하면서 어려움을 느낀 적이 있나요?',
                    en: 'Have you ever felt difficulty practicing in a way different from the real exam environment?',
                    zh: '在以与实际考试环境不同的方式练习时，你是否感到困难？',
                    vi: 'Bạn đã bao giờ gặp khó khăn khi luyện tập theo cách khác với môi trường thi thật chưa?',
                    id: 'Pernahkah Anda merasa kesulitan saat berlatih dengan cara yang berbeda dari lingkungan ujian asli?'
                },
                options: {
                    ko: ['매우 자주 있다', '가끔 있다', '거의 없다', '없다'],
                    en: ['Very often', 'Sometimes', 'Rarely', 'Never'],
                    zh: ['非常频繁', '有时', '几乎没有', '没有'],
                    vi: ['Rất thường xuyên', 'Thỉnh thoảng', 'Hầu như không', 'Không'],
                    id: ['Sangat sering', 'Kadang-kadang', 'Hampir tidak pernah', 'Tidak pernah']
                }
            },
            {
                id: 'q2',
                text: {
                    ko: '어디서나 시험과 동일한 환경(IBT)에서 연습할 수 있다면 도움이 될 것 같나요?',
                    en: 'Do you think it would be helpful if you could practice in the same environment (IBT) anywhere?',
                    zh: '如果你能在任何地方以与考试相同的环境（IBT）练习，你认为会有帮助吗？',
                    vi: 'Bạn có nghĩ sẽ hữu ích nếu có thể luyện tập trong môi trường giống kỳ thi thật (IBT) ở bất cứ đâu không?',
                    id: 'Apakah menurut Anda akan sangat membantu jika bisa berlatih di lingkungan yang sama (IBT) di mana saja?'
                },
                options: {
                    ko: ['매우 그렇다', '그렇다', '보통이다', '아니다'],
                    en: ['Very much so', 'Yes', 'Neutral', 'No'],
                    zh: ['非常是', '是', '一般', '不是'],
                    vi: ['Rất đúng', 'Đúng', 'Bình thường', 'Không'],
                    id: ['Sangat setuju', 'Setuju', 'Biasa saja', 'Tidak']
                }
            },
            {
                id: 'q3',
                text: {
                    ko: '자신의 약한 유형만 골라 반복 연습할 수 있다면 학습 효율이 높아질 것 같나요?',
                    en: 'Do you think study efficiency would increase if you could choose and practice only your weak question types?',
                    zh: '如果你能选择并反复练习自己薄弱的题型，你认为学习效率会提高吗？',
                    vi: 'Bạn có nghĩ hiệu quả học tập sẽ cao hơn nếu có thể chọn và luyện tập lặp lại chỉ những dạng bài còn yếu không?',
                    id: 'Apakah menurut Anda efisiensi belajar akan meningkat jika dapat memilih dan berlatih berulang kali tipe soal yang lemah saja?'
                },
                options: {
                    ko: ['매우 그렇다', '그렇다', '보통이다', '아니다'],
                    en: ['Very much so', 'Yes', 'Neutral', 'No'],
                    zh: ['非常是', '是', '一般', '不是'],
                    vi: ['Rất đúng', 'Đúng', 'Bình thường', 'Không'],
                    id: ['Sangat setuju', 'Setuju', 'Biasa saja', 'Tidak']
                }
            },
            {
                id: 'q4',
                text: {
                    ko: '본인의 취약점을 분석해주는 기능이 있다면 필요하다고 느끼시나요?',
                    en: 'Do you feel a feature that analyzes your weaknesses is necessary?',
                    zh: '你认为有必要分析自己薄弱环节的功能吗？',
                    vi: 'Bạn có cảm thấy cần chức năng phân tích điểm yếu của bản thân không?',
                    id: 'Apakah Anda merasa perlu fitur yang menganalisis kelemahan Anda?'
                },
                options: {
                    ko: ['매우 필요하다', '필요하다', '보통이다', '필요 없다'],
                    en: ['Very necessary', 'Necessary', 'Neutral', 'Not necessary'],
                    zh: ['非常必要', '必要', '一般', '不需要'],
                    vi: ['Rất cần thiết', 'Cần thiết', 'Bình thường', 'Không cần thiết'],
                    id: ['Sangat perlu', 'Perlu', 'Biasa saja', 'Tidak perlu']
                }
            },
            {
                id: 'q5',
                text: {
                    ko: '책을 사는 것보다 무제한으로 문제를 풀 수 있는 서비스가 더 효과적이라고 생각하시나요?',
                    en: 'Do you think a service that allows unlimited problem solving is more effective than buying workbooks?',
                    zh: '你认为可以无限解题的服务比买书更有效吗？',
                    vi: 'Bạn có nghĩ dịch vụ giải bài tập không giới hạn hiệu quả hơn việc mua sách không?',
                    id: 'Apakah Anda menganggap layanan yang memungkinkan latihan soal tanpa batas lebih efektif daripada membeli buku?'
                },
                options: {
                    ko: ['매우 그렇다', '그렇다', '보통이다', '아니다'],
                    en: ['Very much so', 'Yes', 'Neutral', 'No'],
                    zh: ['非常是', '是', '一般', '不是'],
                    vi: ['Rất đúng', 'Đúng', 'Bình thường', 'Không'],
                    id: ['Sangat setuju', 'Setuju', 'Biasa saja', 'Tidak']
                }
            },
            {
                id: 'q6',
                text: {
                    ko: '커피 한 잔 가격(월 3,000~5,000원)으로 이런 서비스를 이용할 수 있다면 부담 없이 사용할 수 있나요?',
                    en: 'If you could use this service for the price of a cup of coffee (3,000-5,000 KRW/month), would you use it without burden?',
                    zh: '如果可以以一杯咖啡的价格（每月3,000-5,000韩元）使用这样的服务，你会毫无负担地使用吗？',
                    vi: 'Nếu có thể sử dụng dịch vụ này với mức giá một ly cà phê (3.000~5.000 won/tháng), bạn có sẵn lòng dùng mà không thấy áp lực không?',
                    id: 'Jika dapat menggunakan layanan ini dengan harga secangkir kopi (3.000~5.000 KRW/bulan), apakah Anda dapat menggunakannya tanpa beban?'
                },
                options: {
                    ko: ['매우 그렇다', '그렇다', '보통이다', '아니다'],
                    en: ['Very much so', 'Yes', 'Neutral', 'No'],
                    zh: ['非常是', '是', '一般', '不是'],
                    vi: ['Rất đúng', 'Đúng', 'Bình thường', 'Không'],
                    id: ['Sangat setuju', 'Setuju', 'Biasa saja', 'Tidak']
                }
            },
            {
                id: 'q7',
                text: {
                    ko: 'IBT 모의시험 + 약점 분석 + 무제한 문제풀이 기능이 모두 포함된 서비스가 있다면 사용 의향이 있나요?',
                    en: 'Would you be willing to use a service that includes IBT mock exams, weakness analysis, and unlimited problem solving?',
                    zh: '如果有包含IBT模拟考试+薄弱环节分析+无限解题功能的服务，你愿意使用吗？',
                    vi: 'Nếu có dịch vụ bao gồm tất cả các chức năng: Thi thử IBT + Phân tích điểm yếu + Giải bài tập không giới hạn, bạn có ý định sử dụng không?',
                    id: 'Apakah Anda bersedia menggunakan layanan yang mencakup simulasi ujian IBT + analisis kelemahan + latihan soal tanpa batas?'
                },
                options: {
                    ko: ['바로 사용하고 싶다', '사용해보고 싶다', '고민해볼 것 같다', '사용하지 않을 것 같다'],
                    en: ['Want to use immediately', 'Want to try it', 'Might consider it', 'Unlikely to use'],
                    zh: ['想立即使用', '想试用', '可能会考虑', '似乎不会使用'],
                    vi: ['Muốn sử dụng ngay', 'Muốn dùng thử', 'Sẽ cân nhắc', 'Chắc là không dùng'],
                    id: ['Ingin segera menggunakan', 'Ingin mencoba', 'Sepertinya akan mempertimbangkan', 'Sepertinya tidak akan menggunakan']
                }
            },
            {
                id: 'q8',
                text: {
                    ko: '이런 서비스가 있다면 TOPIK 점수 향상에 도움이 될 것 같나요?',
                    en: 'Do you think such a service would help improve your TOPIK scores?',
                    zh: '如果有这样的服务，你认为会有助于提高TOPIK分数吗？',
                    vi: 'Nếu có dịch vụ này, bạn có nghĩ nó sẽ giúp cải thiện điểm TOPIK không?',
                    id: 'Apakah menurut Anda layanan semacam itu akan membantu meningkatkan skor TOPIK Anda?'
                },
                options: {
                    ko: ['매우 그렇다', '그렇다', '보통이다', '아니다'],
                    en: ['Very much so', 'Yes', 'Neutral', 'No'],
                    zh: ['非常是', '是', '一般', '不是'],
                    vi: ['Rất đúng', 'Đúng', 'Bình thường', 'Không'],
                    id: ['Sangat setuju', 'Setuju', 'Biasa saja', 'Tidak']
                }
            },
            {
                id: 'q9',
                text: {
                    ko: '위 조건을 고려했을 때, 해당 서비스가 필요하다고 생각하시나요?',
                    en: 'Considering the above conditions, do you think this service is necessary?',
                    zh: '考虑到以上条件，你认为该服务必要吗？',
                    vi: 'Cân nhắc các điều kiện trên, bạn có nghĩ dịch vụ này là cần thiết không?',
                    id: 'Mempertimbangkan kondisi di atas, apakah menurut Anda layanan tersebut perlu?'
                },
                options: {
                    ko: ['매우 필요하다', '필요하다', '보통이다', '필요 없다'],
                    en: ['Very necessary', 'Necessary', 'Neutral', 'Not necessary'],
                    zh: ['非常必要', '必要', '一般', '不需要'],
                    vi: ['Rất cần thiết', 'Cần thiết', 'Bình thường', 'Không cần thiết'],
                    id: ['Sangat perlu', 'Perlu', 'Biasa saja', 'Tidak perlu']
                }
            },
            {
                id: 'q10',
                text: {
                    ko: '모바일로 틈틈이 학습하는 것이 효과적이라고 생각하시나요?',
                    en: 'Do you think studying occasionally on mobile is effective?',
                    zh: '你认为利用业余时间在手机上学习有效吗？',
                    vi: 'Bạn có nghĩ việc học tranh thủ trên điện thoại là hiệu quả không?',
                    id: 'Apakah Anda menganggap belajar di waktu luang melalui ponsel itu efektif?'
                },
                options: {
                    ko: ['매우 그렇다', '그렇다', '보통이다', '아니다'],
                    en: ['Very much so', 'Yes', 'Neutral', 'No'],
                    zh: ['非常是', '是', '一般', '辨别力'],
                    vi: ['Rất đúng', 'Đúng', 'Bình thường', 'Không'],
                    id: ['Sangat setuju', 'Setuju', 'Biasa saja', 'Tidak']
                }
            }
        ]
    }
};
*/


export const UI_STRINGS: Record<Language, any> = {
    ko: {
        selectLanguage: 'Select Language',
        next: '다음',
        start: '시작하기',
        thankYou: '감사합니다!',
        phoneRequest: '번호를 남겨주시면 추첨을 통해 올리브영 쿠폰을 드립니다. 감사합니다!',
        submit: '제출하기',
        adminTitle: '설문 결과',
        back: '뒤로',
        loading: '로딩 중...',
        phonePlaceholder: '010-0000-0000',
    },
    en: {
        selectLanguage: 'Select Language',
        next: 'Next',
        start: 'Start',
        thankYou: 'Thank You!',
        phoneRequest: 'Leave your phone number for a chance to win an Olive Young coupon! Thank you.',
        submit: 'Submit',
        adminTitle: 'Survey Results',
        back: 'Back',
        loading: 'Loading...',
        phonePlaceholder: 'Phone Number',
    },
    zh: {
        selectLanguage: '选择语言',
        next: '下一步',
        start: '开始',
        thankYou: '谢谢！',
        phoneRequest: '留下您的电话号码，就有机会获得Olive Young优惠券！谢谢。',
        submit: '提交',
        adminTitle: '调查结果',
        back: '返回',
        loading: '加载中...',
        phonePlaceholder: '电话号码',
    },
    vi: {
        selectLanguage: 'Chọn ngôn ngữ',
        next: 'Tiếp theo',
        start: 'Bắt đầu',
        thankYou: 'Cảm ơn!',
        phoneRequest: 'Để lại số điện thoại để có cơ hội nhận coupon Olive Young! Cảm ơn.',
        submit: 'Gửi',
        adminTitle: 'Kết quả khảo sát',
        back: 'Quay lại',
        loading: 'Đang tải...',
        phonePlaceholder: 'Số điện thoại',
    },
    id: {
        selectLanguage: 'Pilih Bahasa',
        next: 'Berikutnya',
        start: 'Mulai',
        thankYou: 'Terima Kasih!',
        phoneRequest: 'Tinggalkan nomor telepon Anda untuk kesempatan memenangkan kupon Olive Young! Terima kasih.',
        submit: 'Kirim',
        adminTitle: 'Hasil Survei',
        back: 'Kembali',
        loading: 'Memuat...',
        phonePlaceholder: 'Nomor Telepon',
    }
};
