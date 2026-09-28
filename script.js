// Data Materi SMA (30 Materi lengkap)
const dataMateri = [
    { id: 1, kelas: "Kelas 10", judul: "Eksponen dan Logaritma", ringkasan: "Konsep pemangkatan dan kebalikan fungsi eksponen.", detail: "Eksponen menjelaskan perkalian berulang. Sifat utama: a^m * a^n = a^(m+n). Logaritma adalah kebalikan eksponen: ^a log b = c berarti a^c = b." },
    { id: 2, kelas: "Kelas 10", judul: "Persamaan Nilai Mutlak", ringkasan: "Jarak nilai x dari titik nol pada garis bilangan.", detail: "Nilai mutlak |x| bernilai x jika x >= 0, dan -x jika x < 0. Sifat utama: |x| = a maka x = a atau x = -a." },
    { id: 3, kelas: "Kelas 10", judul: "Sistem Persamaan Linear Tiga Variabel (SPLTV)", ringkasan: "Persamaan matematika dengan tiga variabel berbeda.", detail: "Metode penyelesaian SPLTV dapat menggunakan eliminasi, substitusi, atau gabungan keduanya." },
    { id: 4, kelas: "Kelas 10", judul: "Sistem Pertidaksamaan Dua Variabel", ringkasan: "Pertidaksamaan linear dan kuadrat dua variabel.", detail: "Himpunan penyelesaian ditentukan melalui daerah arsiran pada grafik kartesius." },
    { id: 5, kelas: "Kelas 10", judul: "Fungsi Kuadrat", ringkasan: "Fungsi dengan derajat tertinggi variabel dua.", detail: "Bentuk umum f(x) = ax^2 + bx + c. Titik puncak dapat dicari dengan rumus (-b/2a, -D/4a)." },
    { id: 6, kelas: "Kelas 10", judul: "Trigonometri Dasar", ringkasan: "Perbandingan sisi segitiga siku-siku.", detail: "Sinus = depan/miring, Cosinus = samping/miring, Tangen = depan/samping." },
    { id: 7, kelas: "Kelas 10", judul: "Aturan Sinus dan Cosinus", ringkasan: "Hubungan panjang sisi dan sudut pada segitiga sembarang.", detail: "Aturan Sinus: a/sin A = b/sin B = c/sin C. Aturan Cosinus: a^2 = b^2 + c^2 - 2bc.cos A." },
    { id: 8, kelas: "Kelas 10", judul: "Vektor", ringkasan: "Besaran yang memiliki nilai dan arah.", detail: "Operasi vektor meliputi penjumlahan, pengurangan, perkalian titik (dot product), dan perkalian silang." },
    { id: 9, kelas: "Kelas 10", judul: "Barisan dan Deret Aritmatika", ringkasan: "Pola bilangan dengan beda yang tetap.", detail: "Suku ke-n: Un = a + (n-1)b. Jumlah n suku pertama: Sn = n/2 (2a + (n-1)b)." },
    { id: 10, kelas: "Kelas 10", judul: "Barisan dan Deret Geometri", ringkasan: "Pola bilangan dengan rasio tetap.", detail: "Suku ke-n: Un = a * r^(n-1). Jumlah n suku pertama: Sn = a(r^n - 1) / (r - 1)." },

    { id: 11, kelas: "Kelas 11", judul: "Induksi Matematika", ringkasan: "Metode pembuktian rumus matematika.", detail: "Langkah pembuktian: 1. Buktikan n=1 benar. 2. Asumsikan n=k benar, lalu buktikan n=k+1 benar." },
    { id: 12, kelas: "Kelas 11", judul: "Program Linear", ringkasan: "Optimasi masalah matematika dengan kendala.", detail: "Menentukan nilai maksimum/minimum menggunakan titik pojok daerah penyelesaian." },
    { id: 13, kelas: "Kelas 11", judul: "Matriks", ringkasan: "Susunan bilangan berbentuk persegi panjang.", detail: "Operasi matriks meliputi penjumlahan, pengurangan, perkalian matriks, serta determinan dan invers." },
    { id: 14, kelas: "Kelas 11", judul: "Transformasi Geometri", ringkasan: "Perubahan posisi atau ukuran titik/bangun.", detail: "Meliputi Translasi (pergeseran), Refleksi (pencerminan), Rotasi (perputaran), dan Dilatasi (perkalian skala)." },
    { id: 15, kelas: "Kelas 11", judul: "Limit Fungsi Aljabar", ringkasan: "Nilai pendekatan suatu fungsi.", detail: "Dapat diselesaikan dengan substitusi langsung, pemfaktoran, atau mengalikan dengan sekawan." },
    { id: 16, kelas: "Kelas 11", judul: "Turunan Fungsi Aljabar", ringkasan: "Laju perubahan suatu fungsi.", detail: "Jika f(x) = a*x^n, maka turunan f'(x) = a*n*x^(n-1)." },
    { id: 17, kelas: "Kelas 11", judul: "Aplikasi Turunan", ringkasan: "Penggunaan turunan pada garis singgung dan naik/turun.", detail: "Digunakan untuk menentukan gradien garis singgung m = f'(x) dan nilai stasioner/maksimum/minimum." },
    { id: 18, kelas: "Kelas 11", judul: "Integral Tak Tentu", ringkasan: "Kebalikan (anti-turunan) dari proses turunan.", detail: "Rumus umum: Integral x^n dx = (1/(n+1)) * x^(n+1) + C." },
    { id: 19, kelas: "Kelas 11", judul: "Integral Tentu", ringkasan: "Integral yang memiliki batas atas dan bawah.", detail: "Digunakan untuk menghitung luas daerah di bawah kurva dan volume benda putar." },
    { id: 20, kelas: "Kelas 11", judul: "Lingkaran", ringkasan: "Persamaan garis tempat kedudukan titik berjarak sama.", detail: "Persamaan standar lingkaran pusat (0,0): x^2 + y^2 = r^2. Pusat (a,b): (x-a)^2 + (y-b)^2 = r^2." },

    { id: 21, kelas: "Kelas 12", judul: "Geometri Dimensi Tiga", ringkasan: "Jarak titik, garis, dan bidang dalam ruang.", detail: "Perhitungan jarak titik ke titik, titik ke garis, dan titik ke bidang menggunakan teorema Pythagoras." },
    { id: 22, kelas: "Kelas 12", judul: "Statistika - Ukuran Pemusatan", ringkasan: "Perhitungan Mean, Median, dan Modus.", detail: "Menghitung nilai rata-rata (mean), nilai tengah (median), dan nilai yang sering muncul (modus) data kelompok." },
    { id: 23, kelas: "Kelas 12", judul: "Statistika - Ukuran Penyebaran", ringkasan: "Varians, Simpangan Baku, dan Kuartil.", detail: "Mengukur sejauh mana data menyebar dari nilai rata-ratanya." },
    { id: 24, kelas: "Kelas 12", judul: "Kaidah Pencacahan", ringkasan: "Aturan perkalian, permutasi, dan kombinasi.", detail: "Permutasi memperhatikan urutan (nPr), Kombinasi tidak memperhatikan urutan (nCr)." },
    { id: 25, kelas: "Kelas 12", judul: "Peluang Kejadian", ringkasan: "Kemungkinan terjadinya suatu peristiwa.", detail: "P(A) = n(A) / n(S). Peluang majemuk meliputi kejadian saling lepas dan saling bebas." },
    { id: 26, kelas: "Kelas 12", judul: "Limit Fungsi Trigonometri", ringkasan: "Limit yang melibatkan fungsi trigonometri.", detail: "Rumus dasar: lim (x->0) sin(x)/x = 1 dan lim (x->0) tan(x)/x = 1." },
    { id: 27, kelas: "Kelas 12", judul: "Turunan Trigonometri", ringkasan: "Turunan fungsi sin, cos, dan tan.", detail: "Turunan sin(x) adalah cos(x). Turunan cos(x) adalah -sin(x). Turunan tan(x) adalah sec^2(x)." },
    { id: 28, kelas: "Kelas 12", judul: "Integral Subtitusi Trigonometri", ringkasan: "Teknik pengintegralan fungsi trigonometri kompleks.", detail: "Mengubah variabel kompleks menjadi variabel u untuk mempermudah perhitungan integral." },
    { id: 29, kelas: "Kelas 12", judul: "Distribusi Peluang Binomial", ringkasan: "Peluang eksperimen dengan dua hasil (sukses/gagal).", detail: "Menggunakan rumus P(X=k) = nCk * p^k * (1-p)^(n-k)." },
    { id: 30, kelas: "Kelas 12", judul: "Distribusi Normal", ringkasan: "Konsep Kurva Gauss dalam probabilitas.", detail: "Standardisasi data menggunakan Z-Score: Z = (X - Mean) / Simpangan Baku." }
];

// Contoh Soal Generator
const contohSoalData = [
    {
        materiId: 1,
        soal: "Hitung nilai dari 2^3 * 2^4 / 2^5!",
        jawaban: "4",
        langkah: "1. Gunakan sifat eksponen perkalian: 2^3 * 2^4 = 2^(3+4) = 2^7.\n2. Gunakan sifat pembagian eksponen: 2^7 / 2^5 = 2^(7-5) = 2^2.\n3. Hasil akhir: 2^2 = 4."
    },
    {
        materiId: 6,
        soal: "Pada segitiga siku-siku ABC di B, jika panjang AB = 3 dan BC = 4, berapakah nilai sin A?",
        jawaban: "4/5",
        langkah: "1. Cari panjang miring AC: AC = √(3^2 + 4^2) = √(9 + 16) = √25 = 5.\n2. Sin A = Sisi Depan / Sisi Miring = BC / AC.\n3. Sin A = 4 / 5."
    },
    {
        materiId: 9,
        soal: "Suku pertama aritmatika adalah 5 dan bedanya 3. Tentukan suku ke-10!",
        jawaban: "32",
        langkah: "1. Rumus Un = a + (n-1)b.\n2. U10 = 5 + (10 - 1) * 3.\n3. U10 = 5 + (9 * 3) = 5 + 27 = 32."
    }
];

// Generator 10 Soal Dummy per Materi
function generateQuizQuestions(materiId) {
    const list = [];
    for (let i = 1; i <= 10; i++) {
        list.push({
            id: i,
            soal: `Soal Latihan No. ${i} untuk Materi ID #${materiId}: Berapakah hasil dari ${i} + ${i} * 2?`,
            options: [`${i * 2}`, `${i * 3}`, `${i * 4}`, `${i * 5}`],
            correctIndex: 1 // indeks opsi benar
        });
    }
    return list;
}

// State Aplikasi
let currentUser = null;
let currentQuiz = {
    materiId: null,
    materiJudul: "",
    questions: [],
    currentIndex: 0,
    answers: {}
};

// DOM Elements
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const appContainer = document.getElementById('app');
const displayName = document.getElementById('display-name');
const displayClass = document.getElementById('display-class');
const logoutBtn = document.getElementById('logout-btn');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    checkUserSession();
    renderMateri();
    renderContohSoal();
    renderQuizTopics();
    renderNilaiTable();

    // Event Listeners Navigasi
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.dataset.target;
            switchTab(target);
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Event Listener Search
    document.getElementById('search-materi').addEventListener('input', (e) => {
        renderMateri(e.target.value);
    });

    // Close Modal Materi
    document.getElementById('close-materi-modal').addEventListener('click', () => {
        document.getElementById('materi-modal').classList.add('hidden');
    });
});

// User Session Management
function checkUserSession() {
    const savedUser = localStorage.getItem('math_learn_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        displayName.textContent = currentUser.name;
        displayClass.textContent = currentUser.class;
        loginModal.classList.add('hidden');
        appContainer.classList.remove('hidden');
    } else {
        loginModal.classList.remove('hidden');
        appContainer.classList.add('hidden');
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-name').value;
    const userClass = document.getElementById('user-class').value;

    currentUser = { name, class: userClass };
    localStorage.setItem('math_learn_user', JSON.stringify(currentUser));
    checkUserSession();
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('math_learn_user');
    checkUserSession();
});

// Navigation Controller
function switchTab(targetId) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(`sec-${targetId}`).classList.add('active');
}

// Render Materi Card
function renderMateri(filter = '') {
    const grid = document.getElementById('materi-grid');
    grid.innerHTML = '';
    
    const filtered = dataMateri.filter(m => m.judul.toLowerCase().includes(filter.toLowerCase()));

    filtered.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div>
                <span class="badge">${m.kelas}</span>
                <h3 style="margin-top:10px">${m.judul}</h3>
                <p>${m.ringkasan}</p>
            </div>
            <button class="btn btn-outline" style="width:100%" onclick="openMateriDetail(${m.id})">Baca Materi</button>
        `;
        grid.appendChild(card);
    });
}

function openMateriDetail(id) {
    const materi = dataMateri.find(m => m.id === id);
    if (!materi) return;

    document.getElementById('modal-materi-title').textContent = materi.judul;
    document.getElementById('modal-materi-content').innerHTML = `
        <p><strong>Tingkat:</strong> ${materi.kelas}</p><br>
        <p>${materi.detail}</p>
    `;
    document.getElementById('materi-modal').classList.remove('hidden');
}

// Render Contoh Soal Accordion
function renderContohSoal() {
    const container = document.getElementById('contoh-soal-container');
    container.innerHTML = '';

    contohSoalData.forEach(item => {
        const materi = dataMateri.find(m => m.id === item.materiId);
        const accordion = document.createElement('div');
        accordion.className = 'accordion-item';
        accordion.innerHTML = `
            <div class="accordion-header">
                <span>${materi ? materi.judul : 'Contoh Soal'} - ${item.soal}</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="accordion-content">
                <p><strong>Jawaban:</strong> ${item.jawaban}</p>
                <br>
                <p><strong>Langkah Pembahasan:</strong></p>
                <p style="white-space: pre-line">${item.langkah}</p>
            </div>
        `;

        accordion.querySelector('.accordion-header').addEventListener('click', () => {
            accordion.classList.toggle('active');
        });

        container.appendChild(accordion);
    });
}

// Quiz System Logic
function renderQuizTopics() {
    const grid = document.getElementById('quiz-topic-grid');
    grid.innerHTML = '';

    dataMateri.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${m.judul}</h3>
            <p>10 Soal Pilihan Ganda</p>
            <button class="btn btn-primary" onclick="startQuiz(${m.id}, '${m.judul}')">Mulai Latihan</button>
        `;
        grid.appendChild(card);
    });
}

function startQuiz(materiId, judul) {
    currentQuiz = {
        materiId,
        materiJudul: judul,
        questions: generateQuizQuestions(materiId),
        currentIndex: 0,
        answers: {}
    };

    document.getElementById('quiz-selection-view').classList.add('hidden');
    document.getElementById('quiz-active-view').classList.remove('hidden');
    document.getElementById('quiz-title').textContent = `Latihan: ${judul}`;

    loadQuestion();
}

function loadQuestion() {
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    document.getElementById('quiz-progress').textContent = `Soal ${currentQuiz.currentIndex + 1} / 10`;
    document.getElementById('quiz-question').textContent = q.soal;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (currentQuiz.answers[currentQuiz.currentIndex] === idx) {
            btn.classList.add('selected');
        }
        btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
        btn.onclick = () => selectOption(idx);
        optionsContainer.appendChild(btn);
    });

    // Control Buttons
    document.getElementById('prev-q-btn').disabled = currentQuiz.currentIndex === 0;
    if (currentQuiz.currentIndex === currentQuiz.questions.length - 1) {
        document.getElementById('next-q-btn').classList.add('hidden');
        document.getElementById('submit-q-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-q-btn').classList.remove('hidden');
        document.getElementById('submit-q-btn').classList.add('hidden');
    }
}

function selectOption(index) {
    currentQuiz.answers[currentQuiz.currentIndex] = index;
    loadQuestion();
}

document.getElementById('prev-q-btn').addEventListener('click', () => {
    if (currentQuiz.currentIndex > 0) {
        currentQuiz.currentIndex--;
        loadQuestion();
    }
});

document.getElementById('next-q-btn').addEventListener('click', () => {
    if (currentQuiz.currentIndex < currentQuiz.questions.length - 1) {
        currentQuiz.currentIndex++;
        loadQuestion();
    }
});

document.getElementById('submit-q-btn').addEventListener('click', () => {
    let score = 0;
    let total = currentQuiz.questions.length;

    currentQuiz.questions.forEach((q, idx) => {
        if (currentQuiz.answers[idx] === q.correctIndex) {
            score++;
        }
    });

    const finalScore = (score / total) * 100;
    const resultData = {
        materi: currentQuiz.materiJudul,
        totalSoal: total,
        benar: score,
        salah: total - score,
        nilai: finalScore,
        tanggal: new Date().toLocaleDateString('id-ID')
    };

    saveNilai(resultData);
    alert(`Latihan Selesai!\nNilai Anda: ${finalScore}`);

    // Reset View
    document.getElementById('quiz-active-view').classList.add('hidden');
    document.getElementById('quiz-selection-view').classList.remove('hidden');
    switchTab('nilai');
});

// Storage Nilai
function saveNilai(data) {
    let history = JSON.parse(localStorage.getItem('math_learn_scores')) || [];
    history.unshift(data);
    localStorage.setItem('math_learn_scores', JSON.stringify(history));
    renderNilaiTable();
}

function renderNilaiTable() {
    const tbody = document.getElementById('nilai-table-body');
    const history = JSON.parse(localStorage.getItem('math_learn_scores')) || [];

    tbody.innerHTML = '';
    if (history.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color: var(--text-muted);">Belum ada riwayat nilai latihan.</td></tr>`;
        return;
    }

    history.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${row.materi}</strong></td>
            <td>${row.totalSoal}</td>
            <td style="color:var(--success)">${row.benar}</td>
            <td style="color:var(--danger)">${row.salah}</td>
            <td><span class="badge" style="font-size:0.9rem">${row.nilai}</span></td>
            <td>${row.tanggal}</td>
        `;
        tbody.appendChild(tr);
    });
}
