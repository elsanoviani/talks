const NEWS = [
  {
    title: 'Ibu Hamil Perlu Rapid Test Saat Periksakan Kandungan',
    url: 'https://www.jawapos.com/kesehatan/30/08/2020/ibu-hamil-perlu-rapid-test-saat-periksakan-kandungan/',
    timestamp: 1598789974092
  },
  {
    title: 'Corona DKI Rekor Lagi, Anak Buah Anies Salahkan Long Weekend',
    url: 'https://www.cnbcindonesia.com/news/20200830190614-4-183124/corona-dki-rekor-lagi-anak-buah-anies-salahkan-long-weekend',
    timestamp: 1598789752019
  },
  {
    title: 'Luhut ke Pejabat: Jangan Cuma \'Omdo\', Beli Produk-produk RI!',
    url: 'https://www.cnbcindonesia.com/news/20200830183658-4-183120/luhut-ke-pejabat-jangan-cuma-omdo-beli-produk-produk-ri',
    timestamp: 1598788912020
  },
  {
    title: 'Pasutri Meninggal Kena Corona, Awalnya Dikira Gegara Sarang Nyamuk',
    url: 'https://jateng.suara.com/read/2020/08/30/190045/pasutri-meninggal-kena-corona-awalnya-dikira-gegara-sarang-nyamuk',
    timestamp: 1598788800987
  },
  {
    title: 'Terombang-ambing di Laut Mediterania, Kapal Penyelamat Berisi Jasad-jasad Imigran Ini Sampai Harus Memohon-mohon Agar Bisa Masuk Ke Eropa di Tengah Pandemi Covid-19',
    url: 'https://intisari.grid.id/read/032313352/terombang-ambing-di-laut-mediterania-kapal-penyelamat-berisi-jasad-jasad-imigran-ini-sampai-harus-memohon-mohon-agar-bisa-masuk-ke-eropa-di-tengah-pandemi-covid',
    timestamp: 1598788136236
  },
  {
    title: 'Perkuat Pertanian Saat Pandemi, Mentan Geber Korporasi Petani',
    url: 'https://www.cnbcindonesia.com/news/20200830174055-4-183114/perkuat-pertanian-saat-pandemi-mentan-geber-korporasi-petani',
    timestamp: 1598788012021
  },
  {
    title: 'Rekor Lagi! Kasus Harian Covid-19 DKI Hari ini Tembus 1.000',
    url: 'https://www.cnbcindonesia.com/news/20200830181647-4-183117/rekor-lagi-kasus-harian-covid-19-dki-hari-ini-tembus-1000',
    timestamp: 1598788012020
  },
  {
    title: 'Kasus Terus Meningkat, Airin Pesimistis Putus Mata Rantai Corona di Tangsel',
    url: 'https://banten.suara.com/read/2020/08/30/184221/kasus-terus-meningkat-airin-pesimistis-putus-mata-rantai-corona-di-tangsel',
    timestamp: 1598787720988
  },
  {
    title: 'Musim Pagebluk, Kredit Bank DKI Tercatat Tumbuh 8,3 Persen',
    url: 'https://www.suara.com/bisnis/2020/08/30/183403/musim-pagebluk-kredit-bank-dki-tercatat-tumbuh-83-persen',
    timestamp: 1598787240989
  },
  {
    title: 'Ngobrol dengan World Bank, Luhut Dapat Bisikan soal Recovery Indonesia',
    url: 'https://www.jawapos.com/ekonomi/30/08/2020/ngobrol-dengan-world-bank-luhut-dapat-bisikan-soal-recovery-indonesia/',
    timestamp: 1598784927093
  },
  {
    title: 'Pecah Rekor, 1.114 Pasien Positif Covid-19 di Jakarta Hari Ini',
    url: 'https://www.suara.com/news/2020/08/30/175354/pecah-rekor-1114-pasien-positif-covid-19-di-jakarta-hari-ini',
    timestamp: 1598784780990
  },
  {
    title: 'Pemprov DKI: Kasus Covid-19 Tembus Seribu, Efek Libur Panjang Akhir Pekan',
    url: 'https://www.liputan6.com/news/read/4343414/pemprov-dki-kasus-covid-19-tembus-seribu-efek-libur-panjang-akhir-pekan',
    timestamp: 1598784780008
  },
  {
    title: 'Corona Jakarta Melonjak 1.114 Kasus sejak Long Weekend',
    url: 'https://www.cnnindonesia.com/nasional/20200830164403-20-540904/corona-jakarta-melonjak-1114-kasus-sejak-long-weekend',
    timestamp: 1598784413915
  },
  {
    title: 'Rekor! Per Minggu, India Catat 78 Ribu Kasus Harian Covid-19',
    url: 'https://www.cnbcindonesia.com/news/20200830144602-7-183090/rekor-per-minggu-india-catat-78-ribu-kasus-harian-covid-19',
    timestamp: 1598784412022
  },
  {
    title: 'Presiden Brasil Bolsonaro Tambah Paket Bantuan Ekonomi Covid-19',
    url: 'https://dunia.tempo.co/read/1380924/presiden-brasil-bolsonaro-tambah-paket-bantuan-ekonomi-covid-19',
    timestamp: 1598783820774
  },
  {
    title: 'Masih Tutup karena Covid-19, DPRD DKI Pastikan Tetap Ada PAW Anggota',
    url: 'https://www.liputan6.com/news/read/4343282/masih-tutup-karena-covid-19-dprd-dki-pastikan-tetap-ada-paw-anggota',
    timestamp: 1598783520008
  },
  {
    title: 'Peta Sebaran Corona COVID-19 Surabaya pada 29 Agustus 2020',
    url: 'https://surabaya.liputan6.com/read/4343398/peta-sebaran-corona-covid-19-surabaya-pada-29-agustus-2020',
    timestamp: 1598783400009
  },
  {
    title: 'Menko Luhut: Jangan Pesimistis, Pasien Sembuh Covid-19 Indonesia Tertinggi di Dunia',
    url: 'https://www.liputan6.com/bisnis/read/4343322/menko-luhut-jangan-pesimistis-pasien-sembuh-covid-19-indonesia-tertinggi-di-dunia',
    timestamp: 1598783400008
  },
  {
    title: 'Tambahan Pasien Positif COVID-19 di Jawa Timur Capai 466 Orang',
    url: 'https://surabaya.liputan6.com/read/4343374/tambahan-pasien-positif-covid-19-di-jawa-timur-capai-466-orang',
    timestamp: 1598781600009
  },
  {
    title: 'Tolak Pembatasan Covid-19, 38.000 Orang Gelar Protes Anti-Corona di Jerman',
    url: 'https://www.suara.com/news/2020/08/30/165815/tolak-pembatasan-covid-19-38000-orang-gelar-protes-anti-corona-di-jerman',
    timestamp: 1598781480992
  },
  {
    title: 'Wuhan Buka Kembali Sekolah untuk Semua Jenjang Mulai 1 September',
    url: 'https://www.suara.com/news/2020/08/30/165845/wuhan-buka-kembali-sekolah-untuk-semua-jenjang-mulai-1-september',
    timestamp: 1598781480991
  },
  {
    title: 'Sebaran Penambahan Positif Covid-19 di 34 Provinsi Per 30 Agustus 2020',
    url: 'https://www.liputan6.com/news/read/4343390/sebaran-penambahan-positif-covid-19-di-34-provinsi-per-30-agustus-2020',
    timestamp: 1598781300019
  },
  {
    title: 'Luhut sebut tingkat kesembuhan Covid-19 di Indonesia tertinggi dari rata-rata dunia',
    url: 'https://Nasional.kontan.co.id/news/luhut-sebut-tingkat-kesembuhan-covid-19-di-indonesia-tertinggi-dari-rata-rata-dunia',
    timestamp: 1598781120987
  },
  {
    title: 'Daftar 4 Produsen Vaksin Asing yang Dijajaki Erick Thohir',
    url: 'http://money.kompas.com/read/2020/08/30/165234626/daftar-4-produsen-vaksin-asing-yang-dijajaki-erick-thohir',
    timestamp: 1598781120335
  },
  {
    title: 'INFOGRAFIS: Pasang Surut Perfilman Korea kala Diterpa Corona',
    url: 'https://www.cnnindonesia.com/hiburan/20200830024133-223-540733/infografis-pasang-surut-perfilman-korea-kala-diterpa-corona',
    timestamp: 1598780813916
  },
  {
    title: 'Pakar di Eropa Serukan Lebih Banyak Tes until Lawan Gelombang Covid-19',
    url: 'https://www.jawapos.com/internasional/30/08/2020/pakar-di-eropa-serukan-lebih-banyak-tes-until-lawan-gelombang-covid-19/',
    timestamp: 1598780692094
  },
  {
    title: 'Persatuan Perguruan Tinggi di Inggris Tolak Pembukaan Sekolah Kembali',
    url: 'http://www.kompas.com/global/read/2020/08/30/164211170/persatuan-perguruan-tinggi-di-inggris-tolak-pembukaan-sekolah-kembali',
    timestamp: 1598780520335
  },
  {
    title: 'Doni Monardo: Klaster Kantor, Pekerja Terpapar Covid-19 di Transportasi Umum',
    url: 'https://www.liputan6.com/news/read/4343377/doni-monardo-klaster-kantor-pekerja-terpapar-covid-19-di-transportasi-umum',
    timestamp: 1598780520019
  },
  {
    title: 'Hari Ini Jakarta Sumbang 1.094 Pasien Corona, 4 Provinsi Lain Nihil Kasus',
    url: 'https://www.suara.com/news/2020/08/30/163703/hari-ini-jakarta-sumbang-1094-pasien-corona-4-provinsi-lain-nihil-kasus',
    timestamp: 1598780220993
  },
  {
    title: 'Indonesia Catatkan 3 Kali Kasus Harian Covid-19 Tertinggi dalam Sepekan, Apa Penyebabnya?',
    url: 'http://www.kompas.com/tren/read/2020/08/30/163000465/indonesia-catatkan-3-kali-kasus-harian-covid-19-tertinggi-dalam-sepekan-apa',
    timestamp: 1598779800336
  },
  {
    title: 'Rekor Baru Lagi, DKI Umumkan 1.114 kasus Positif Covid-19 Hari Ini',
    url: 'https://metro.tempo.co/read/1380928/rekor-baru-lagi-dki-umumkan-1-114-kasus-positif-covid-19-hari-ini',
    timestamp: 1598779680775
  },
  {
    title: 'Drama Hengkang Berlanjut, Messi Tolak Ikuti Tes PCR Barca',
    url: 'https://www.jawapos.com/sepak-bola/sepak-bola-dunia/30/08/2020/drama-hengkang-berlanjut-messi-tolak-ikuti-tes-pcr-barca/',
    timestamp: 1598779377094
  },
  {
    title: 'Kemenristek Kembangkan Alat Uji Rapid Test Generasi Kedua',
    url: 'https://tekno.tempo.co/read/1380926/kemenristek-kembangkan-alat-uji-rapid-test-generasi-kedua',
    timestamp: 1598779200776
  },
  {
    title: 'Sehari Tambah 2.858 Kasus Covid-19, Hampir Separuh Disumbang Jakarta',
    url: 'https://www.jawapos.com/nasional/30/08/2020/sehari-tambah-2-858-kasus-covid-19-hampir-separuh-disumbang-jakarta/',
    timestamp: 1598778701095
  },
  {
    title: 'UPDATE Covid-19 di Kalteng, Kaltim, Kaltara, Gorontalo, Sulbar, Sulsel, dan Sultra 30 Agustus 2020',
    url: 'http://regional.kompas.com/read/2020/08/30/16063681/update-covid-19-di-kalteng-kaltim-kaltara-gorontalo-sulbar-sulsel-dan-sultra',
    timestamp: 1598778360336
  },
  {
    title: 'Update Ahad, 30 Agustus: Kasus Positif Covid-19 Bertambah 2.858 Kasus',
    url: 'https://nasional.tempo.co/read/1380917/update-ahad-30-agustus-kasus-positif-covid-19-bertambah-2-858-kasus',
    timestamp: 1598777220777
  },
  {
    title: 'Update Corona 30 Agustus: 172.053 Positif, 124.185 Sembuh',
    url: 'https://www.cnnindonesia.com/nasional/20200830145758-20-540891/update-corona-30-agustus-172053-positif-124185-sembuh',
    timestamp: 1598777213917
  },
  {
    title: 'Perfilman Korea kala Pandemi: Habis Manis, Telan Pil Pahit',
    url: 'https://www.cnnindonesia.com/hiburan/20200829185713-220-540701/perfilman-korea-kala-pandemi-habis-manis-telan-pil-pahit',
    timestamp: 1598777213917
  },
  {
    title: 'Pesan Luhut: Jangan Terus Berada pada Ketakutan Soal Corona!',
    url: 'https://www.cnbcindonesia.com/news/20200830144146-4-183088/pesan-luhut-jangan-terus-berada-pada-ketakutan-soal-corona',
    timestamp: 1598777212024
  },
  {
    title: 'Terus Meroket! Pasien Covid-19 di RI Tembus 170.000 Orang',
    url: 'https://www.cnbcindonesia.com/news/20200830154029-4-183100/terus-meroket-pasien-covid-19-di-ri-tembus-170000-orang',
    timestamp: 1598777212023
  },
  {
    title: 'Tidak Ada HP, HT pun Jadi',
    url: 'https://www.jawapos.com/features/30/08/2020/tidak-ada-hp-ht-pun-jadi/',
    timestamp: 1598776772095
  },
  {
    title: 'UPDATE Corona Indonesia, Minggu (30/8):172.053 kasus, 124.185 sembuh, 7.343 meninggal',
    url: 'https://Nasional.kontan.co.id/news/update-corona-indonesia-minggu-308172053-kasus-124185-sembuh-7343-meninggal',
    timestamp: 1598776620987
  },
  {
    title: 'Bagaimana Mencegah Balita Tertular Corona? Simak Saran dari IDAI Ini',
    url: 'http://www.kompas.com/tren/read/2020/08/30/152700365/bagaimana-mencegah-balita-tertular-corona-simak-saran-dari-idai-ini',
    timestamp: 1598776020337
  },
  {
    title: '[VIDEO] Menyoal Tingginya Angka Pernikahan Dini di Masa Pandemi',
    url: 'http://www.kompas.com/tren/read/2020/08/30/151734965/video-menyoal-tingginya-angka-pernikahan-dini-di-masa-pandemi',
    timestamp: 1598775420337
  },
  {
    title: 'India Bakal Longgarkan Aktivitas Publik, Covid-19 Terus Meningkat',
    url: 'https://dunia.tempo.co/read/1380900/india-bakal-longgarkan-aktivitas-publik-covid-19-terus-meningkat',
    timestamp: 1598774400778
  },
  {
    title: 'Mengenang Dokter Pejuang TBC Anak yang Meninggal Dunia Akibat Covid-19',
    url: 'https://www.jawapos.com/nasional/30/08/2020/mengenang-dokter-pejuang-tbc-anak-yang-meninggal-dunia-akibat-covid-19/',
    timestamp: 1598773976096
  },
  {
    title: 'Epidemiolog UI Prediksi Angka Positif Covid-19 Tembus 500 Ribu Pada Awal 2021',
    url: 'https://nasional.tempo.co/read/1380894/epidemiolog-ui-prediksi-angka-positif-covid-19-tembus-500-ribu-pada-awal-2021',
    timestamp: 1598773620779
  },
  {
    title: 'Wabah Covid-19 Global Lewati 25 Juta Kasus',
    url: 'https://dunia.tempo.co/read/1380892/wabah-covid-19-global-lewati-25-juta-kasus',
    timestamp: 1598772480780
  },
  {
    title: 'Ketika Keegoisan Negara-negara Superkaya \'Membunuh\' Mimpi Besar nan Mulia WHO Soal Vaksin Covid-19, Negara Miskin akan Semakin Merana',
    url: 'https://intisari.grid.id/read/032312823/ketika-keegoisan-negara-negara-superkaya-membunuh-mimpi-besar-nan-mulia-who-soal-vaksin-covid-19-negara-miskin-akan-semakin-merana',
    timestamp: 1598770016240
  },
  {
    title: 'FOTO: Jerman Dilanda Demo Anti Corona',
    url: 'https://www.cnnindonesia.com/internasional/20200830120003-136-540819/foto-jerman-dilanda-demo-anti-corona',
    timestamp: 1598770013919
  },
  {
    title: 'INFOGRAFIS: Daftar Drama Korea Tunda Produksi karena Corona',
    url: 'https://www.cnnindonesia.com/hiburan/20200829204438-223-540716/infografis-daftar-drama-korea-tunda-produksi-karena-corona',
    timestamp: 1598770013918
  },
  {
    title: 'Ingat, Berkendara Tidak Pakai Masker Berulang Kali Bisa Didenda Rp 1 Juta',
    url: 'http://otomotif.kompas.com/read/2020/08/30/134100315/ingat-berkendara-tidak-pakai-masker-berulang-kali-bisa-didenda-rp-1-juta',
    timestamp: 1598769660337
  },
  {
    title: 'Drama Korea: Sudah Tegak, tapi Jatuh Tertimpa Corona',
    url: 'https://www.cnnindonesia.com/hiburan/20200829171756-220-540678/drama-korea-sudah-tegak-tapi-jatuh-tertimpa-corona',
    timestamp: 1598766413920
  },
  {
    title: 'Covid Hari Ini 30 Agustus 2020: Kasus Virus Corona di Indonesia Mencapai 169.195 dan Penambahan Tertinggi Tiga Kali Berturut-turut',
    url: 'https://intisari.grid.id/read/032312628/covid-hari-ini-30-agustus-2020-kasus-virus-corona-di-indonesia-mencapai-169195-dan-penambahan-tertinggi-tiga-kali-berturut-turut',
    timestamp: 1598762816241
  },
  {
    title: 'Kasus Covid-19 di Indonesia tembus 172.000 kasus, lebih dari 7.300 orang meninggal dunia',
    url: 'http://www.bbc.com/indonesia/indonesia-51232803',
    timestamp: 1598751060985
  },
  {
    title: 'Corona di Indonesia Sabtu (29/8), astaga tambah 3.308 kasus positif baru',
    url: 'https://Kesehatan.kontan.co.id/news/corona-di-indonesia-sabtu-298-astaga-tambah-3308-kasus-positif-baru',
    timestamp: 1598748900989
  },
  {
    title: 'Keluar Lendir dari Tubuh Anda? Coba Perhatikan Warnanya! Jika Muncul Warna Ini, Mungkin Saja Anda Terinfeksi Covid-19, Hati-hati!',
    url: 'https://intisari.grid.id/read/032312015/keluar-lendir-dari-tubuh-anda-coba-perhatikan-warnanya-jika-muncul-warna-ini-mungkin-saja-anda-terinfeksi-covid-19-hati-hati',
    timestamp: 1598744816243
  },
  {
    title: 'Ratusan orang ditangkap dalam demonstrasi anti-corona di Jerman',
    url: 'http://www.bbc.com/indonesia/dunia-53900562',
    timestamp: 1598729520985
  },
  {
    title: '[SALAH] Dokumen WHO Tidak Menganjurkan untuk Memakai Masker Selama Pandemi COVID-19',
    url: 'https://turnbackhoax.id/2020/08/30/salah-dokumen-who-tidak-menganjurkan-untuk-memakai-masker-selama-pandemi-covid-19/',
    timestamp: 1598720400343
  },
  {
    title: 'UPDATE corona di Jatim, DIY, Bali, NTT, NTB, Kalbar dan Kalsel 29 Agustus 2020',
    url: 'https://Regional.kontan.co.id/news/update-corona-di-jatim-diy-bali-ntt-ntb-kalbar-dan-kalsel-29-agustus-2020',
    timestamp: 1598706480990
  },
  {
    title: '90% Pasien Covid-19 di RSUD Klungkung tak bisa mencium bau',
    url: 'https://Regional.kontan.co.id/news/90-pasien-covid-19-di-rsud-klungkung-tak-bisa-mencium-bau',
    timestamp: 1598705340991
  },
  {
    title: 'Pasien Covid-19 Yang Ditangani Makin Bertambah, Dokter Aris Hampir 6 Bulan Tak Serumah dengan Istri dan Anaknya',
    url: 'https://intisari.grid.id/read/032311225/pasien-covid-19-yang-ditangani-makin-bertambah-dokter-aris-hampir-6-bulan-tak-serumah-dengan-istri-dan-anaknya',
    timestamp: 1598705216256
  },
  {
    title: 'Covid Hari Ini 29 Agustus 2020: Epidemiolog Peringatkan Gejala Covid-19 Happy Hypoxia yang Sulit Dideteksi, Bisa Berakibat Hilang Kesadaran hingga Kematian',
    url: 'https://intisari.grid.id/read/032311338/covid-hari-ini-29-agustus-2020-epidemiolog-peringatkan-gejala-covid-19-happy-hypoxia-yang-sulit-dideteksi-bisa-berakibat-hilang-kesadaran-hingga-kematian',
    timestamp: 1598705216255
  },
  {
    title: 'Kini WHO Tak Lagi Ambisius Soal Program \'Vaksin Covid-19 untuk Semua\', Ternyata Inilah Penyebabnya',
    url: 'https://intisari.grid.id/read/032311834/kini-who-tak-lagi-ambisius-soal-program-vaksin-covid-19-untuk-semua-ternyata-inilah-penyebabnya',
    timestamp: 1598705216251
  },
  {
    title: 'Sebaran kasus corona DKI Jakarta tertinggi hingga Sabtu 29 Agustus 2020',
    url: 'https://Nasional.kontan.co.id/news/sebaran-kasus-corona-dki-jakarta-tertinggi-hingga-sabtu-29-agustus-2020',
    timestamp: 1598696400992
  },
  {
    title: 'UPDATE corona di Jabar, Jateng, Banten, Sumsel, Babel, dan Lampung 29 Agustus 2020',
    url: 'https://Regional.kontan.co.id/news/update-corona-di-jabar-jateng-banten-sumsel-babel-dan-lampung-29-agustus-2020',
    timestamp: 1598694540993
  },
  {
    title: 'Kasus baru Covid-19 Indonesia tembus 3000 dua hari berturut-turut',
    url: 'http://www.bbc.com/indonesia/indonesia-51850113',
    timestamp: 1598672220986
  },
  {
    title: 'Anak muda, kasus Covid-19 yang kembali melonjak, dan kemungkinan \'lockdown\' lagi di Eropa',
    url: 'http://www.bbc.com/indonesia/dunia-53956096',
    timestamp: 1598646600986
  },
  {
    title: '[SALAH] Hukuman Masuk Peti Mati Karena Tidak Pakai Masker',
    url: 'https://turnbackhoax.id/2020/08/29/salah-hukuman-masuk-peti-mati-karena-tidak-pakai-masker/',
    timestamp: 1598634000344
  },
  {
    title: 'Lima cara menghindari penularan virus corona di ruangan tertutup',
    url: 'http://www.bbc.com/indonesia/majalah-53917864',
    timestamp: 1598587020987
  },
  {
    title: '7 persoalan serius dalam uji klinik calon obat COVID-19 dari riset Unair, BIN, dan TNI AD',
    url: 'http://theconversation.com/7-persoalan-serius-dalam-uji-klinik-calon-obat-covid-19-dari-riset-unair-bin-dan-tni-ad-145064',
    timestamp: 1598547600608
  },
  {
    title: '75 tahun merdeka, Indonesia masih punya banyak potensi kembangkan sektor kelautan dan perikanan',
    url: 'http://theconversation.com/75-tahun-merdeka-indonesia-masih-punya-banyak-potensi-kembangkan-sektor-kelautan-dan-perikanan-143188',
    timestamp: 1598547600608
  },
  {
    title: 'Restoran Indonesia di London, satu dari ribuan bisnis yang mencoba bangkit di tengah pandemi',
    url: 'http://www.bbc.com/indonesia/majalah-53891397',
    timestamp: 1598547000987
  }
]