// Fungsi untuk menambahkan data absensi ke tabel
document.getElementById('absensiForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form dikirim secara default

    // Mengambil nilai dari form
    const nama = document.getElementById('nama').value;
    const NIS = document.getElementById('NIS').value;
    const tanggal = document.getElementById('tanggal').value;
    const waktu = document.getElementById('waktu').value;

    // Mendapatkan tabel absensi
    const table = document.getElementById('absensiTable').getElementsByTagName('tbody')[0];

    // Membuat baris baru untuk tabel
    const newRow = table.insertRow();

    // Menambahkan sel ke dalam baris baru
    const cellNama = newRow.insertCell(0);
    const cellNIS = newRow.insertCell(1);
    const cellTanggal = newRow.insertCell(2);
    const cellWaktu = newRow.insertCell(3);

    // Mengisi sel dengan data dari form
    cellNama.innerHTML = nama;
    cellID.innerHTML = idKaryawan;
    cellTanggal.innerHTML = tanggal;
    cellWaktu.innerHTML = waktu;

    // Reset form setelah submit
    document.getElementById('absensiForm').reset();
});