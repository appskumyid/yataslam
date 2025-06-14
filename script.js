// Navigation function
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Slideshow functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show current slide
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Auto-advance slideshow
function autoSlide() {
    changeSlide(1);
}

// Start auto-slideshow
setInterval(autoSlide, 5000); // Change slide every 5 seconds

// Program detail function
function showProgramDetail(programId) {
    const programDetails = {
        'durusul1': {
            title: 'Durusul Lughoh 1 (Hari Sabtu)',
            schedule: 'Setiap Hari Sabtu, 08:00 - 10:00 WIB',
            duration: '3 Bulan (12 Pertemuan)',
            level: 'Pemula',
            description: 'Program pembelajaran bahasa Arab dasar dengan fokus pada:\n• Pengenalan huruf hijaiyah dan cara penulisannya\n• Tata bahasa dasar (Nahwu dan Shorof)\n• Kosakata sehari-hari\n• Percakapan sederhana\n• Membaca teks Arab sederhana',
            requirements: '• Tidak ada syarat khusus\n• Membawa Al-Qur\'an dan alat tulis\n• Komitmen mengikuti pembelajaran',
            fee: 'Rp 200.000/bulan'
        },
        'durusul2': {
            title: 'Durusul Lughoh 2',
            schedule: 'Setiap Hari Minggu, 08:00 - 10:00 WIB',
            duration: '4 Bulan (16 Pertemuan)',
            level: 'Menengah',
            description: 'Program lanjutan pembelajaran bahasa Arab dengan fokus pada:\n• Tata bahasa tingkat menengah\n• Analisis teks Arab klasik\n• Pemahaman struktur kalimat kompleks\n• Latihan menerjemahkan\n• Diskusi dalam bahasa Arab',
            requirements: '• Telah menyelesaikan Durusul Lughoh 1\n• Mampu membaca teks Arab sederhana\n• Memiliki kosakata dasar bahasa Arab',
            fee: 'Rp 250.000/bulan'
        },
        'tahsin-akhwat': {
            title: 'Tahsin Akhwat',
            schedule: 'Setiap Hari Rabu, 14:00 - 16:00 WIB',
            duration: '2 Bulan (8 Pertemuan)',
            level: 'Semua Level',
            description: 'Program perbaikan bacaan Al-Qur\'an khusus muslimah:\n• Perbaikan makharijul huruf\n• Pembelajaran tajwid yang benar\n• Praktik membaca dengan tartil\n• Koreksi kesalahan bacaan\n• Hafalan surat-surat pendek',
            requirements: '• Khusus muslimah\n• Mampu membaca huruf hijaiyah\n• Membawa mushaf Al-Qur\'an',
            fee: 'Rp 150.000/bulan'
        },
        'tahsin-ikhwan': {
            title: 'Tahsin Ikhwan',
            schedule: 'Setiap Hari Jumat, 19:30 - 21:30 WIB',
            duration: '2 Bulan (8 Pertemuan)',
            level: 'Semua Level',
            description: 'Program perbaikan bacaan Al-Qur\'an khusus muslimin:\n• Perbaikan makharijul huruf\n• Pembelajaran tajwid yang benar\n• Praktik membaca dengan tartil\n• Koreksi kesalahan bacaan\n• Hafalan surat-surat pendek',
            requirements: '• Khusus muslimin\n• Mampu membaca huruf hijaiyah\n• Membawa mushaf Al-Qur\'an',
            fee: 'Rp 150.000/bulan'
        },
        'kajian-kitab': {
            title: 'Kajian Kitab',
            schedule: 'Setiap Hari Selasa, 19:30 - 21:00 WIB',
            duration: 'Berkelanjutan',
            level: 'Menengah - Lanjut',
            description: 'Program kajian kitab-kitab klasik Islam:\n• Kajian Fiqh (Safinah An-Najah)\n• Kajian Hadits (Bulughul Maram)\n• Kajian Aqidah (Aqidah Wasithiyah)\n• Kajian Akhlaq (Ihya Ulumuddin)\n• Diskusi dan tanya jawab',
            requirements: '• Mampu membaca teks Arab\n• Memiliki dasar ilmu agama\n• Membawa kitab yang dikaji',
            fee: 'Rp 100.000/bulan'
        }
    };

    const program = programDetails[programId];
    if (program) {
        const detailHtml = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 2000; display: flex; align-items: center; justify-content: center;" onclick="this.remove()">
                <div style="background: white; padding: 2.5rem; border-radius: 20px; max-width: 650px; max-height: 85vh; overflow-y: auto; margin: 1rem; box-shadow: 0 20px 60px rgba(0,0,0,0.3);" onclick="event.stopPropagation()">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                        <h2 style="color: #2c5530; margin: 0; font-family: 'Montserrat', sans-serif; font-size: 1.8rem; font-weight: 600;">${program.title}</h2>
                        <button onclick="this.closest('div[style*=\"position: fixed\"]').remove()" style="background: none; border: none; font-size: 2rem; cursor: pointer; color: #999; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='none'">&times;</button>
                    </div>
                    <div style="margin-bottom: 1.2rem; padding: 1rem; background: #f8f9fa; border-radius: 10px;"><strong style="color: #2c5530;">📅 Jadwal:</strong> ${program.schedule}</div>
                    <div style="margin-bottom: 1.2rem; padding: 1rem; background: #f8f9fa; border-radius: 10px;"><strong style="color: #2c5530;">⏱️ Durasi:</strong> ${program.duration}</div>
                    <div style="margin-bottom: 1.2rem; padding: 1rem; background: #f8f9fa; border-radius: 10px;"><strong style="color: #2c5530;">📊 Level:</strong> ${program.level}</div>
                    <div style="margin-bottom: 1.2rem; padding: 1rem; background: #f8f9fa; border-radius: 10px;"><strong style="color: #2c5530;">💰 Biaya:</strong> ${program.fee}</div>
                    <div style="margin-bottom: 1.2rem;"><strong style="color: #2c5530;">📝 Deskripsi:</strong><br><pre style="white-space: pre-wrap; font-family: inherit; margin: 0.8rem 0; background: #f8f9fa; padding: 1rem; border-radius: 10px; line-height: 1.6;">${program.description}</pre></div>
                    <div style="margin-bottom: 2rem;"><strong style="color: #2c5530;">✅ Persyaratan:</strong><br><pre style="white-space: pre-wrap; font-family: inherit; margin: 0.8rem 0; background: #f8f9fa; padding: 1rem; border-radius: 10px; line-height: 1.6;">${program.requirements}</pre></div>
                    <div style="text-align: center;">
                        <a href="https://wa.me/6281769366607?text=Assalamu'alaikum, saya ingin mendaftar program ${program.title}" style="background: #d4af37; color: white; padding: 1.2rem 2.5rem; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem; transition: all 0.3s ease; display: inline-block;" onmouseover="this.style.background='#c0a030'" onmouseout="this.style.background='#d4af37'">Daftar Sekarang</a>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', detailHtml);
    }
}

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            const whatsappMessage = `Assalamu'alaikum, saya ${name} (${email}${phone ? ', ' + phone : ''}). ${message}`;
            const whatsappUrl = `https://wa.me/6281769366607?text=${encodeURIComponent(whatsappMessage)}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

    // Register form submission
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const address = document.getElementById('address').value;
            const course = document.getElementById('course').value;
            const registerMessage = document.getElementById('registerMessage').value;
            
            let whatsappMessage = `Assalamu'alaikum, saya ingin mendaftar di Yayasan Yataslam.\n\n`;
            whatsappMessage += `Nama: ${fullName}\n`;
            whatsappMessage += `Tempat Tinggal: ${address}\n`;
            whatsappMessage += `Kursus yang Diminati: ${course}\n`;
            if (registerMessage) {
                whatsappMessage += `Pesan: ${registerMessage}\n`;
            }
            whatsappMessage += `\nMohon informasi lebih lanjut mengenai pendaftaran. Terima kasih.`;
            
            const whatsappUrl = `https://wa.me/6281769366607?text=${encodeURIComponent(whatsappMessage)}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }
});

