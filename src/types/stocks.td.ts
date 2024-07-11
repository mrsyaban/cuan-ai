import { Action } from "../enums/action"
import LogoAdaro from '@/assets/mock/logo-adro.png'

export type StocksAnalysis = {
    name: string
    logo: string
    action: Action
    content: string    
}

export const stocksAnalysis: StocksAnalysis = {
    name: 'ADRO',
    logo: LogoAdaro,
    action: Action.buy,
    content: `
### **Pendapatan dan Pertumbuhan**
Pendapatan Apple Inc. meningkat 15% dari tahun lalu. Pertumbuhan yang konsisten ini menunjukkan bahwa Apple terus meningkatkan penjualannya, yang sangat positif bagi masa depan perusahaan.

### **Valuasi yang Menarik**
Saat ini, rasio P/E Apple adalah 18, lebih rendah dari rata-rata industri sebesar 20. Ini berarti bahwa saham Apple mungkin undervalued, memberikan peluang investasi yang baik dengan potensi keuntungan yang menarik.

### **Faktor Eksternal yang Mempengaruhi Kondisi Ekonomi**
Penurunan suku bunga oleh Federal Reserve AS baru-baru ini bisa menjadi katalis bagi pertumbuhan lebih lanjut di sektor teknologi. Biaya pinjaman yang lebih rendah biasanya meningkatkan konsumsi dan investasi, yang bisa berdampak positif pada perusahaan seperti Apple.

### **Geopolitik**
Dengan ketegangan perdagangan antara AS dan China yang mereda, risiko tarif tinggi pada produk Apple berkurang, yang mengurangi potensi biaya tambahan dan ketidakpastian.

### **Berita Terbaru dan Inovasi Peluncuran Produk**
Apple baru saja meluncurkan iPhone terbaru yang mendapatkan ulasan positif dari pengguna dan kritikus. Inovasi dalam produk ini diperkirakan akan meningkatkan penjualan dan menarik lebih banyak pelanggan.

### **Keputusan Keuangan**
Apple mengumumkan peningkatan dividen sebesar 10% dan program buyback saham senilai $50 miliar. Langkah ini menunjukkan kepercayaan diri manajemen terhadap masa depan perusahaan dan memberikan nilai tambah bagi pemegang saham.

`
};