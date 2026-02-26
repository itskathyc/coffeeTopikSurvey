export type Language = 'en' | 'ko' | 'zh' | 'vi' | 'id';

export interface Question {
    id: string;
    text: Record<Language, string>;
    options: Record<Language, string[]>;
}

export interface SurveySet {
    id: string;
    title: Record<Language, string>;
    questions: Question[];
}

export const SURVEY_DATA: SurveySet = {
    id: 'market',
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
                zh: '近来 TOPIK 越来越转向电脑考试（IBT）。用纸质题集学习时，你是否因为与真实考试环境不同어感到不安或不方便？',
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
};

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
