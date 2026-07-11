// ============================================
// DATA GALERI FOTO - GANTI DENGAN FOTO ANDA
// ============================================
const photoGallery = [
    {
        id: 1,
        title: "📸 Rita Sari",
        description: "Ini adalah foto saya",
        imageUrl: "assets/fot&vid/rit1.jpeg"
    },
    {
        id: 2,
        title: "📸 foto bersama sahabat saya di studio foto",
        description: "ini momen berharga saya dengan sahabat",
        imageUrl: "assets/fot&vid/rit2.jpeg"
    },
    {
        id: 3,
        title: "📸 Foto bersama teman di studio  PMTK Angkatan 2023",
        description: "ini momen foto bersama teman-teman kelas saya",
        imageUrl: "assets/fot&vid/rit3.jpeg"
    },
    {
        id: 4,
        title: "📸 Foto bersama teman di studio  PMTK Angkatan 2023",
        description: "ini momen foto bersama teman-teman kelas saya",
        imageUrl: "assets/fot&vid/rit4.jpeg"
    },
    {
        id: 5,
        title: "📸 Lampiran: PKL Masa SMK – STIMIK Surya Intan",
        description: "ini merupakan dokumentasi saya saat saya PKL",
        imageUrl: "assets/fot&vid/rit5.jpeg"
    },
    {
        id: 6,
        title: "📸 Dokumentasi Kegiatan MASTAMA UMKO 2023",
        description: "ini momen saya saat masuk MASTAMA",
        imageUrl: "assets/fot&vid/rit6.jpeg"
    },
    {
        id: 7,
        title: "📸 Dokumentasi Kegiatan SAMO Universitas Muhammadiyah Kotabumi",
        description: "ini dokumentasi organisasi",
        imageUrl: "assets/fot&vid/rit7.jpeg"
    },
    {
        id: 8,
        title: "📸 Dokumentasi Kegiatan Seminar Desain Grafis",
        description: "ini dokumentasi organisasi",
        imageUrl: "assets/fot&vid/rit8.jpeg"
    }
];

// ============================================
// DATA VIDEO - PERBAIKI PATH FILE VIDEO ANDA
// ============================================
const videoList = [
    {
        id: 1,
        title: "🎬 Rita Sari",
        description: "Ini adalah Momen Kerandomanku!",
        videoUrl: "assets/fot&vid/vid.mp4",
        thumbnail: "assets/fot&vid/rit1.jpeg",
        duration: "",
        tag: "Behind The Scene"
    },
    {
        id: 3,
        title: "🎬 Studio Foto",
        description: "Video random bersama teman.",
        videoUrl: "assets/fot&vid/vid3.mp4",
        thumbnail: "assets/fot&vid/rit3.jpeg",
        duration: "",
        tag: "Behind The Scene"
    },
    {
        id: 4,
        title: "🎬 Studio Foto",
        description: "Foto-foto aku dan teman.",
        videoUrl: "assets/fot&vid/vid4.mp4",
        thumbnail: "assets/fot&vid/rit3.jpeg",
        duration: "",
        tag: "Behind The Scene"
    }
];

// ============================================
// DATA LAGU - PERBAIKI PATH FILE MP3 ANDA
// ============================================
const favoriteSongs = [
    {
        id: 1,
        title: "Runtuh",
        artist: "Feby Putri & Fiersa Besari",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
        explanation: "Lagu ini selalu mengingatkan saya bahwa menjadi calon guru juga punya masa-masa lelah dan hampir runtuh. Tapi seperti liriknya, kita boleh tidak kuat sesekali, lalu bangkit lagi. Lagu ini jadi penguat saat saya menghadapi tantangan dalam praktik mengajar.",
        audioUrl: "assets/list_lagu/Feby Putri - Runtuh feat Fiersa Besari Lirik Lagu Indonesia.mp3"
    },
    {
        id: 2,
        title: "Blinding Lights",
        artist: "The Weeknd",
        imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
        explanation: "Lagu dengan energi positif ini menemani saya saat begadang menyusun RPP dan materi ajar. Iramanya yang bersemangat membuat saya tetap terjaga dan termotivasi. Cocok banget diputar saat sedang persiapan mengajar atau setelah seharian praktik di sekolah.",
        audioUrl: "assets/list_lagu/The Weeknd - Blinding Lights (Official Video).mp3"
    },
    {
        id: 3,
        title: "Those Eyes",
        artist: "New West",
        imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop",
        explanation: "Melodi lembut lagu ini mengingatkan saya pada mata-mata polos murid-murid saya nanti. Setiap mendengar lagu ini, saya semakin termotivasi untuk menjadi guru yang baik, penuh perhatian, dan mampu melihat potensi setiap anak didik.",
        audioUrl: "assets/list_lagu/New West - Those Eyes (Home Session).mp3"
    },
    {
        id: 4,
        title: "Yellow",
        artist: "Coldplay",
        imageUrl: "https://asset.tribunnews.com/OccmVJVy6lQQXln9pxcjOgij9d8=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/manado/foto/bank/originals/lirik-dan-terjemahan-lagu-yellow-coldplay-terjemahan-bahasa-inggris-ke-bahasa-indonesia.jpg",
        explanation: "Lagu klasik ini mengajarkan tentang ketulusan. Sebagai calon guru, saya ingin mendidik dengan tulus, seperti warna kuning yang cerah dan hangat. Lagu ini selalu mengingatkan saya untuk tidak pernah lelah berbuat baik untuk anak didik.",
        audioUrl: "assets/list_lagu/Coldplay - Yellow (Official Video).mp3"
    },
    {
        id: 5,
        title: "Hati-Hati di Jalan",
        artist: "Tulus",
        imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
        explanation: "Pesan dalam lagu ini sangat dalam — tentang merelakan dan mendoakan yang terbaik. Saya terinspirasi untuk menjadi guru yang bisa melepas murid-murid dengan doa terbaik, setelah membekali mereka ilmu dan karakter. Sangat menyentuh hati sebagai calon pendidik.",
        audioUrl: "assets/list_lagu/TULUS - Hati-Hati di Jalan (Official Lyric Video).mp3"
    }
];

// ============================================
// STATE & VARIABEL
// ============================================
let currentIndex = 0;
let isPlaying = false;
let audio = null;

const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const modalClose = document.getElementById('videoModalClose');

// ============================================
// FUNGSI RENDER GALERI FOTO
// ============================================
function renderPhotoGallery() {
    const container = document.getElementById('photo-grid-container');
    if (!container) return;

    let html = '';
    photoGallery.forEach((photo, index) => {
        html += `
            <div class="photo-card" data-index="${index}">
                <div class="photo-wrapper">
                    <img src="${photo.imageUrl}" alt="${escapeHtml(photo.title)}" loading="lazy">
                </div>
                <div class="photo-content">
                    <div class="photo-title">${escapeHtml(photo.title)}</div>
                    <div class="photo-desc">${escapeHtml(photo.description)}</div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;

    // Event listener untuk buka lightbox
    document.querySelectorAll('.photo-card').forEach(card => {
        card.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            openPhotoModal(index);
        });
    });
}

// ============================================
// FUNGSI MODAL FOTO (LIGHTBOX)
// ============================================
const photoModal = document.getElementById('photoModal');
const modalPhoto = document.getElementById('modalPhoto');
const photoModalClose = document.getElementById('photoModalClose');

function openPhotoModal(index) {
    const photo = photoGallery[index];
    if (!photo) return;

    modalPhoto.src = photo.imageUrl;
    modalPhoto.alt = photo.title;
    photoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
    photoModal.classList.remove('active');
    document.body.style.overflow = '';
}

photoModalClose.addEventListener('click', closePhotoModal);

photoModal.addEventListener('click', function(e) {
    if (e.target === this) {
        closePhotoModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && photoModal.classList.contains('active')) {
        closePhotoModal();
    }
});

// ============================================
// FUNGSI RENDER VIDEO
// ============================================
function renderVideos() {
    const container = document.getElementById('video-grid-container');
    if (!container) return;

    let html = '';
    videoList.forEach((video, index) => {
        html += `
            <div class="video-card" data-index="${index}">
                <div class="video-wrapper">
                    <video poster="${video.thumbnail}" preload="metadata">
                        <source src="${video.videoUrl}" type="video/mp4">
                        Browser Anda tidak mendukung video.
                    </video>
                    <div class="play-btn-overlay" data-index="${index}">
                        <div class="play-circle">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <div class="video-duration">${video.duration}</div>
                </div>
                <div class="card-content">
                    <div class="video-title">${video.title}</div>
                    <div class="video-desc"><i class="fas fa-quote-right"></i> ${video.description}</div>
                    <span class="video-tag"><i class="fas fa-tag"></i> ${video.tag}</span>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;

    // Event listener untuk tombol play di setiap video
    document.querySelectorAll('.play-btn-overlay').forEach(el => {
        el.addEventListener('click', function(e) {
            e.stopPropagation();
            const index = parseInt(this.getAttribute('data-index'));
            openVideoModal(index);
        });
    });

    // Event listener untuk klik pada video wrapper
    document.querySelectorAll('.video-wrapper').forEach(el => {
        el.addEventListener('click', function(e) {
            if (e.target.closest('.play-btn-overlay')) return;
            const card = this.closest('.video-card');
            if (card) {
                const index = parseInt(card.getAttribute('data-index'));
                openVideoModal(index);
            }
        });
    });
}

// ============================================
// FUNGSI MODAL VIDEO
// ============================================
function openVideoModal(index) {
    const video = videoList[index];
    if (!video) return;

    modalVideo.src = video.videoUrl;
    modalVideo.load();
    modalVideo.play().catch(err => console.log('Autoplay tidak diizinkan:', err));

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    modalVideo.pause();
    modalVideo.src = '';
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listener modal
modalClose.addEventListener('click', closeVideoModal);

modal.addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideoModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeVideoModal();
    }
});

// ============================================
// FUNGSI AUDIO
// ============================================
function escapeHtml(str) {
    return str ? str.replace(/[&<>]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])) : '';
}

function initAudio(index) {
    const song = favoriteSongs[index];
    if (!song || !song.audioUrl) {
        console.error('Audio URL tidak ditemukan untuk lagu:', song);
        return;
    }

    audio = new Audio(song.audioUrl);

    audio.addEventListener('ended', function() {
        const nextIndex = (currentIndex + 1) % favoriteSongs.length;
        playSong(nextIndex);
    });

    audio.addEventListener('error', function(e) {
        console.error('Error memutar audio:', e);
        alert('Gagal memutar musik. Pastikan file MP3 ada di folder assets/list_lagu/');
    });
}

function playSong(index) {
    const song = favoriteSongs[index];
    if (!song) return;

    if (audio) {
        audio.pause();
        audio = null;
    }

    currentIndex = index;
    initAudio(index);

    if (audio) {
        audio.play()
            .then(() => {
                isPlaying = true;
                showToast(song.title, song.artist);
                updatePlayIcons(true);
            })
            .catch(err => {
                console.error('Gagal memutar:', err);
                alert('Gagal memutar musik. Pastikan file MP3 ada dan formatnya benar.');
            });
    }
}

function togglePlay(index) {
    if (index !== undefined && index !== currentIndex) {
        playSong(index);
        return;
    }

    if (!audio) {
        initAudio(currentIndex);
        if (audio) {
            audio.play()
                .then(() => {
                    isPlaying = true;
                    const song = favoriteSongs[currentIndex];
                    showToast(song.title, song.artist);
                    updatePlayIcons(true);
                })
                .catch(err => console.error(err));
        }
        return;
    }

    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        updatePlayIcons(false);
    } else {
        audio.play()
            .then(() => {
                isPlaying = true;
                updatePlayIcons(true);
            })
            .catch(err => console.error(err));
    }
}

function updatePlayIcons(playing) {
    document.querySelectorAll('.play-icon i, .card-media .play-icon i').forEach(icon => {
        if (playing) {
            icon.className = 'fas fa-pause';
        } else {
            icon.className = 'fas fa-play';
        }
    });
}

// ============================================
// RENDER GALERI MUSIK
// ============================================
function renderMusicGallery() {
    const container = document.getElementById('music-grid-container');
    if (!container) return;

    let cardsHTML = '';
    favoriteSongs.forEach((song, index) => {
        cardsHTML += `
            <div class="music-card" data-index="${index}">
                <div class="card-media" data-index="${index}">
                    <img src="${song.imageUrl}" alt="${escapeHtml(song.title)}" class="card-image" loading="lazy">
                    <div class="play-overlay">
                        <div class="play-icon" data-index="${index}">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="song-title"><span>${escapeHtml(song.title)}</span><i class="fas fa-music"></i></div>
                    <div class="artist">${escapeHtml(song.artist)}</div>
                    <div class="explanation"><i class="fas fa-quote-right"></i> ${escapeHtml(song.explanation)}</div>
                    <div class="music-note"><i class="fas fa-chalkboard-user"></i> Inspirasi untuk calon guru</div>
                </div>
            </div>
        `;
    });
    container.innerHTML = cardsHTML;

    document.querySelectorAll('.play-icon, .card-media').forEach(el => {
        el.addEventListener('click', function(e) {
            e.stopPropagation();
            const index = parseInt(this.getAttribute('data-index'));
            if (!isNaN(index)) {
                togglePlay(index);
            }
        });
    });
}

// ============================================
// BUKU TAMU - GUESTBOOK
// ============================================
const guestbookForm = document.getElementById('guestbookForm');
const messagesContainer = document.getElementById('messagesContainer');
let guestMessages = [];

// Load messages from localStorage
function loadMessages() {
    const stored = localStorage.getItem('guestMessages');
    if (stored) {
        try {
            guestMessages = JSON.parse(stored);
        } catch (e) {
            guestMessages = [];
        }
    }
    renderMessages();
}

// Save messages to localStorage
function saveMessages() {
    localStorage.setItem('guestMessages', JSON.stringify(guestMessages));
}

// Format time
function formatTime() {
    const now = new Date();
    const options = { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return now.toLocaleDateString('id-ID', options);
}

// Render messages
function renderMessages() {
    if (guestMessages.length === 0) {
        messagesContainer.innerHTML = `
            <div class="empty-message">
                <i class="fas fa-inbox"></i>
                <p>Belum ada pesan. Jadilah yang pertama!</p>
            </div>
        `;
        return;
    }

    let html = '';
    // Tampilkan pesan terbaru di atas
    const reversed = [...guestMessages].reverse();
    reversed.forEach((msg, index) => {
        html += `
            <div class="message-item" style="animation-delay: ${index * 0.05}s">
                <div class="msg-name">
                    <i class="fas fa-user-circle"></i> ${escapeHtml(msg.name)}
                </div>
                <div class="msg-time">
                    <i class="far fa-clock"></i> ${escapeHtml(msg.time)}
                </div>
                <div class="msg-text">${escapeHtml(msg.message)}</div>
            </div>
        `;
    });
    messagesContainer.innerHTML = html;
}

// Handle form submit
if (guestbookForm) {
    guestbookForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('guestName');
        const messageInput = document.getElementById('guestMessage');
        
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();
        
        if (!name || !message) {
            alert('Silakan isi nama dan pesan Anda!');
            return;
        }
        
        // Add new message
        guestMessages.push({
            name: name,
            message: message,
            time: formatTime()
        });
        
        saveMessages();
        renderMessages();
        
        // Show toast notification
        showToastMessage('Pesan terkirim! Terima kasih 🙏');
        
        // Reset form
        nameInput.value = '';
        messageInput.value = '';
    });
}

// Custom toast for guestbook
function showToastMessage(text) {
    const existing = document.querySelector('.custom-toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle" style="color: #22c55e;"></i>
            <span><strong>${text}</strong></span>
            <button class="toast-close-btn"><i class="fas fa-times"></i></button>
        </div>
    `;
    document.body.appendChild(toast);
    toast.querySelector('.toast-close-btn').addEventListener('click', () => toast.remove());
    setTimeout(() => toast.remove(), 3000);
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(song, artist) {
    const existing = document.querySelector('.custom-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-music"></i>
            <span>
                <strong>🎧 Now Playing</strong><br>
                ${escapeHtml(song)} — ${escapeHtml(artist)}
            </span>
            <button class="toast-close-btn"><i class="fas fa-times"></i></button>
        </div>
    `;
    document.body.appendChild(toast);
    toast.querySelector('.toast-close-btn').addEventListener('click', () => toast.remove());
    setTimeout(() => toast.remove(), 4000);
}

// ============================================
// NAVIGASI & MOBILE MENU
// ============================================
function initNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActive() {
        let current = '';
        const scrollPos = window.scrollY + 100;
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                current = section.id;
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', setActive);
    setActive();

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById(link.getAttribute('href').substring(1));
            if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });
}

function initMobile() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    if (toggle) {
        toggle.addEventListener('click', () => nav.classList.toggle('active'));
    }
}

// ============================================
// INISIALISASI
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderPhotoGallery();
    renderVideos();
    renderMusicGallery();
    initNav();
    initMobile();
    initAudio(0);
    loadMessages();
});