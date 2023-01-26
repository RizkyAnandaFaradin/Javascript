const data = Array.from(document.querySelectorAll('[data-duration]'));
const taruh = document.querySelector('.total-durasi');
const jumlahVid = document.querySelector('.jumlah-video');
//Ambil data dari jsLanjut, lalu filter satu satu elemen dari jsLanjut yang didalamnya textcontentnya terdapat tulisan javascript lanjutan
let jsLanjut = data
    .filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    //Mengambil data duration, yang hasilnya 14:30 dll
    .map((item) => item.getAttribute('data-duration'))
    //Telusi 1 per satu array
    //waktu.split akan memisahkan ["16:30"] menjadi ['16'], ['30']
    //lalu ubah menjadi string menjadi [16],[30], dan simpan ke parts
    .map((waktu) => {
        const parts = waktu.split(':').map((part) => parseInt(part));

        //pada parts index ke 0 kalikan 60 dan tambahkan parts[1] dan kembalikan
        return parts[0] * 60 + parts[1];
    })
    //jumlahkan durasi
    .reduce((a, b) => a + b);
//ubah data duration ke jam / menit / detik
//floor ambil pembulatan kebawah
const jam = Math.floor(jsLanjut / 3600);
const menit = Math.floor((jsLanjut % 3600) / 60);
const detik = Math.floor(jsLanjut % 3600) % 60;
const waktu = jam + 'jam ' + menit + 'Menit ' + detik + 'detik';
//simpan di DOM
taruh.textContent = waktu;
let Vidjumlah = data.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
jumlahVid.textContent = Vidjumlah;
