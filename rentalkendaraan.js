const kendaraanList = [
    { id: "ABC-01", nama: "Honda Beat", jenis: "Motor", tarifHari: 30000, status: "Aktif"},
    { id: "ABC-02", nama: "Vario", jenis: "Motor", tarifHari: 25000, status: "Aktif"},
    { id: "ABC-03", nama: "CBR", jenis: "Motor", tarifHari: 50000, status: "Aktif"},
    { id: "ABC-04", nama: "Ninja", jenis: "Motor", tarifHari: 50000, status: "Aktif"},
    { id: "ABC-05", nama: "Beat Karbu", jenis: "Motor", tarifHari: 20000, status: "Aktif"},
    { id: "ABC-06", nama: "Mio", jenis: "Motor", tarifHari: 15000, status: "Aktif"},
    { id: "ABC-07", nama: "N-Max", jenis: "Motor", tarifHari: 80000, status: "Aktif"},
    { id: "ABC-08", nama: "Supra", jenis: "Motor", tarifHari: 30000, status: "Aktif"},
    { id: "ABC-09", nama: "Revo", jenis: "Motor", tarifHari: 25000, status: "Aktif"},
    { id: "ABC-10", nama: "Vespa", jenis: "Motor", tarifHari: 60000, status: "Aktif"},
    { id: "ABC-11", nama: "Lamborgini", jenis: "Mobil", tarifHari: 3000000, status: "Aktif"},
    { id: "ABC-12", nama: "Pajero", jenis: "Mobil", tarifHari: 400000, status: "Aktif"},
    { id: "ABC-13", nama: "Wuling", jenis: "Mobil", tarifHari: 300000, status: "Aktif"},
    { id: "ABC-14", nama: "Sedan", jenis: "Mobil", tarifHari: 600000, status: "Aktif"},
    { id: "ABC-15", nama: "Avanza", jenis: "Mobil", tarifHari: 700000, status: "Aktif"},
    { id: "ABC-16", nama: "Kijang", jenis: "Mobil", tarifHari: 800000, status: "Aktif"},
    { id: "ABC-17", nama: "Sport", jenis: "Mobil", tarifHari: 100000, status: "Aktif"},
    { id: "ABC-18", nama: "Angkot", jenis: "Mobil", tarifHari: 350000, status: "Aktif"},
    { id: "ABC-19", nama: "Truk", jenis: "Mobil", tarifHari: 900000, status: "Aktif"},
    { id: "ABC-20", nama: "Bajaj", jenis: "Mobil", tarifHari: 50000, status: "Aktif"},
]

const rentalRaw = [
  { id: "R01", idKendaraan: "ABC-01", penyewa: "Zidan", tglMulai: "2026-10-01", tglKembali: "2026-10-10", diskon: 0.05 },
  { id: "R02", idKendaraan: "ABC-02", penyewa: "Zumi", tglMulai: "2026-10-02", tglKembali: "2026-10-04", diskon: 0.05 },
  { id: "R03", idKendaraan: "ABC-03", penyewa: "Reagan", tglMulai: "2026-10-03", tglKembali: "2026-10-10", diskon: 0.05 },
  { id: "R04", idKendaraan: "ABC-04", penyewa: "Rendi", tglMulai: "2026-02-06", tglKembali: "2026-02-08", diskon: 0.05 },
  { id: "R05", idKendaraan: "ABC-05", penyewa: "Fakhri", tglMulai: "2026-03-05", tglKembali: "2026-03-07", diskon: 0.05 },
  { id: "R06", idKendaraan: "ABC-06", penyewa: "Alex", tglMulai: "2026-07-06", tglKembali: "2026-07-10", diskon: 0.05 },
  { id: "R07", idKendaraan: "ABC-07", penyewa: "Tomi", tglMulai: "2026-06-10", tglKembali: "2026-07-11", diskon: 0.05 },
  { id: "R08", idKendaraan: "ABC-08", penyewa: "Muji", tglMulai: "2026-07-11", tglKembali: "2026-07-12", diskon: 0.05 },
  { id: "R09", idKendaraan: "ABC-09", penyewa: "Sonyy", tglMulai: "2026-07-09", tglKembali: "2026-07-13", diskon: 0.05 },
  { id: "R10", idKendaraan: "ABC-10", penyewa: "Amir", tglMulai: "2026-07-10", tglKembali: "2026-07-14", diskon: 0.05 },
  { id: "R11", idKendaraan: "ABC-11", penyewa: "Nasrul", tglMulai: "2026-07-01", tglKembali: "2026-07-15", diskon: 0.05 },
  { id: "R12", idKendaraan: "ABC-12", penyewa: "Azka", tglMulai: "2026-07-12", tglKembali: "2026-07-16", diskon: 0.05 },
  { id: "R13", idKendaraan: "ABC-13", penyewa: "Nazmi", tglMulai: "2026-07-13", tglKembali: "2026-07-17", diskon: 0.05 },
  { id: "R14", idKendaraan: "ABC-14", penyewa: "Agus", tglMulai: "2026-07-14", tglKembali: "2026-07-18", diskon: 0.05 },
  { id: "R15", idKendaraan: "ABC-15", penyewa: "Dadang", tglMulai: "2026-07-15", tglKembali: "2026-07-19", diskon: 0.05 },
  { id: "R16", idKendaraan: "ABC-16", penyewa: "Darto", tglMulai: "2026-07-10", tglKembali: "2026-07-20", diskon: 0.05 },
  { id: "R17", idKendaraan: "ABC-17", penyewa: "Bojan", tglMulai: "2026-07-17", tglKembali: "2026-07-21", diskon: 0.05 },
  { id: "R18", idKendaraan: "ABC-18", penyewa: "Putra", tglMulai: "2026-07-18", tglKembali: "2026-07-22", diskon: 0.05 },
  { id: "R19", idKendaraan: "ABC-19", penyewa: "Naim", tglMulai: "2026-07-19", tglKembali: "2026-07-23", diskon: 0.05 },
  { id: "R20", idKendaraan: "ABC-20", penyewa: "Wahyu", tglMulai: "2026-07-20", tglKembali: "2026-07-24", diskon: 0.05 },
  { id: "R21", idKendaraan: "ABC-02", penyewa: "Galang", tglMulai: "2026-07-21", tglKembali: "2026-07-29", diskon: 0.05 },
  { id: "R22", idKendaraan: "ABC-03", penyewa: "Rido", tglMulai: "2026-07-22", tglKembali: "2026-07-26", diskon: 0.05 },
  { id: "R23", idKendaraan: "ABC-04", penyewa: "Sulham", tglMulai: "2026-07-23", tglKembali: "2026-07-27", diskon: 0.05 },
  { id: "R24", idKendaraan: "ABC-05", penyewa: "Dimas", tglMulai: "2026-07-24", tglKembali: "2026-07-31", diskon: 0.05 },
  { id: "R25", idKendaraan: "ABC-06", penyewa: "Dewi", tglMulai: "2026-07-25", tglKembali: "2026-08-29", diskon: 0.05 },
  { id: "R26", idKendaraan: "ABC-07", penyewa: "Ayu", tglMulai: "2026-07-26", tglKembali: "2026-07-30", diskon: 0.05 },
  { id: "R27", idKendaraan: "ABC-08", penyewa: "Nunu", tglMulai: "2026-07-27", tglKembali: "2026-07-31", diskon: 0.05 },
  { id: "R28", idKendaraan: "ABC-09", penyewa: "Adam", tglMulai: "2026-07-28", tglKembali: "2026-08-01", diskon: 0.05 },
  { id: "R29", idKendaraan: "ABC-10", penyewa: "Raka", tglMulai: "2026-07-29", tglKembali: "2026-07-30", diskon: 0.05 },
  { id: "R30", idKendaraan: "ABC-11", penyewa: "Arif", tglMulai: "2026-07-30", tglKembali: "2026-08-03", diskon: 0.05 },
];

function hitungLamaRental(tglMulai, tglKembali) {
    const MS_PER_HARI = 1000 * 60 * 60 * 24;
    const mulai = new Date(tglMulai);
    const kembali = new Date(tglKembali);
    return Math.round((kembali - mulai) / MS_PER_HARI);
}

function tentukanStatusTransaksi(lamaRental) {
    if (lamaRental <= 3) return "SHORT";
    if (lamaRental <= 7) return "MEDIUM";
    return "LONG";
}

function carikendaraan(idKendaraan) {
    const kendaraan = kendaraanList.find((k) => k.id === idKendaraan);
    if (!kendaraan) throw new Error(`kendaraan ${idKendaraan} tidak ditemukan`);
    return kendaraan;
}

function prosesTransaksi(raw) {
    const kendaraan = carikendaraan(raw.idKendaraan);
    const lamaRental = hitungLamaRental(raw.tglMulai, raw.tglKembali);
    const biayaSebelumDiskon = kendaraan.tarifHari * lamaRental;
    const persenDiskon = lamaRental > 7 ? raw.diskon + 0.05 : raw.diskon;
    const nominalDiskon = biayaSebelumDiskon * persenDiskon;
    const statusTransaksi = tentukanStatusTransaksi(lamaRental);
    const biayaAkhir = biayaSebelumDiskon - nominalDiskon;

    return {
        ...raw,
        namaKendaraan: kendaraan.nama,
        jenis: kendaraan.jenis,
        tarifHari: kendaraan.tarifHari,
        lamaRental,
        biayaSebelumDiskon,
        nominalDiskon,
        biayaAkhir,
        statusTransaksi,
    };
}

function buatRingkasan(dataRental) {
    const totalPendapatanRental = dataRental.reduce((total, r) => total + r.biayaAkhir, 0);
    const rataRataNilaiTransaksi =totalPendapatanRental / dataRental.length;
    const transaksiTerbesar = dataRental.reduce((max, r) => (r.biayaAkhir > max ? r.biayaAkhir : max),0
    );
    const transaksiMotor = dataRental.filter((r) => r.jenis === "Motor");
    const transaksiMobil = dataRental.filter((r) => r.jenis === "Mobil");

    const pendapatanDariMotor = transaksiMotor.reduce((total, r) => total + r.biayaAkhir, 0);
    const pendapatanDariMobil = transaksiMobil.reduce((total, r) => total + r.biayaAkhir, 0);

    const jumlahSewaPerKendaraan = {};
    for (const r of dataRental) {
    jumlahSewaPerKendaraan[r.namaKendaraan] = (jumlahSewaPerKendaraan[r.namaKendaraan] || 0) + 1;    }
    let kendaraanPalingSering = null;
    let jumlahTerbanyak = 0;
    for (const [nama, jumlah] of Object.entries(jumlahSewaPerKendaraan)) {
        if (jumlah > jumlahTerbanyak) {
            jumlahTerbanyak = jumlah;
            kendaraanPalingSering = nama;
        }
    }

    return {
        totalPendapatanRental,
        rataRataNilaiTransaksi,
        transaksiTerbesar,
        jumlahTransaksiMotor: transaksiMotor.length,
        jumlahTransaksiMobil: transaksiMobil.length,
        pendapatanDariMotor,
        pendapatanDariMobil,
        kendaraanPalingSeringDisewa: kendaraanPalingSering,
    };
}

const dataRental = rentalRaw.map(prosesTransaksi);
const ringkasan = buatRingkasan(dataRental);

const rp = (angka) => "Rp" + Math.round(angka).toLocaleString("id-ID");

console.log("Data Rental");
console.table(
    dataRental.slice(0, 31).map((r) => ({
        ID: r.id,
        kendaraan: r.namaKendaraan,
        Lama: r.lamaRental + " hari",
        "Biaya Akhir": rp(r.biayaAkhir),
        status: r.statusTransaksi,
    }))
);

console.log("RINGKASAN");
console.log("Total Pendapatan Rental     :", rp(ringkasan.totalPendapatanRental));
console.log("Rata-rata Nilai Transaksi   :", rp(ringkasan.rataRataNilaiTransaksi));
console.log("Transaksi Terbesar          :", rp(ringkasan.transaksiTerbesar));
console.log("Jumlah Transaksi Motor      :", ringkasan.jumlahTransaksiMotor);
console.log("Jumlah Transaksi Mobil      :", ringkasan.jumlahTransaksiMobil);
console.log("Pendapatan Dari Motor       :", rp(ringkasan.pendapatanDariMotor));
console.log("Pendapatan Dari Mobil       :", rp(ringkasan.pendapatanDariMobil));
console.log("Kendaraan Paling Sering Disewa :", ringkasan.kendaraanPalingSeringDisewa);