// Fungsi buka/tutup surat
function showLetter(num) {
    document.getElementById('letter' + num).classList.remove('hidden');
}

function hideLetter(num) {
    document.getElementById('letter' + num).classList.add('hidden');
}

// Play musik otomatis
document.getElementById('playBtn').addEventListener('click', function() {
    const audio = document.getElementById('music');
    audio.play();
});