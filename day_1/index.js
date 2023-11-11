let bilanganBulat = 10;
let bilanagnPecahan = 9.45;


//string
let teks1 = 'Samsul'
let teks2 = 'Hidayatulloh'

//boolean
let benar = true
let salah = false

//null
let tidakAdaNilai = null

let nilai1 = "" //ada isinya
let nilai2 = null //kosonh

//undefiend
let variabaelBlumDiisi;

//symbol
const simbolUnik = Symbol('deskripsi simbol');
console.log(simbolUnik);


//array
let angka = [1, 2, 3, 4, 5]
console.log(angka)

//function 
function tambah(a, b) {
    return a + b;
}

console.log(tambah(3, 4))

//object
let mahasiswa = {
    nama: 'Zee',
    kelas: 'x',
    jurusan: 'pplg'
}

console.log(mahasiswa)

//operator aritmatika
let hasilPenjumlahan = 4 + 3; //hasilnya 7
let hasilPengurangan = 43 - 4; //hasilnya 39
let hasilPerkalian = 4 * 4; //hasilnya 16
let hasilPembagian = 20 / 4; //hasilnya 5
let hasilSisaBagi = 9 % 4; //sisanya 1

//perbandingan
let hasil = 10 != 5; //true
let hasil2 = 8 > 3; //true
let hasil3 = 3 >= 4
let perbandingan = true && false
let perbandingan2 = true || false
console.log(hasil)

//penugasan
let angka1 = 5
angka += 2

//cheking
let objek = null
let nilai = objek?.properti

//
let umur = 17
let status = (umur >= 17) ? 'Dewasa' : 'Dibawah ukur'
console.log(status)

//statemant
if (umur >= 18) {
    status = "Dewasa"
} else if (umur >= 12 && umur < 18) {
    status = "Remaja"
} else {
    status = "Anak-anak"
}
console.log(status)

//switch statement
let warna = "merah"
let warnaApa = ""

switch (warna) {
    case "kuning":
        break;
    case "merah":
        warnaApa = "warna kuning"
    case "hijau":
        warnaApa = "hijau"
    default:
        warnaApa = "tidak terdeteksi"
        break;
}
console.log(warnaApa)

//function
function sapa(nama) {
    console.log(`Halo ${nama}`)
}
sapa('Zee')

//pure function
function calculateGST(productPrice) {
    return productPrice * 0.05
}

console.log(calculateGST(15))

//arrow function 
let sum = (a, b) => {
    return a + b
}

alert(sum(1, 2))

//first -class function
const great = function (name, kelas) {
    console.log(`Halo ${name}, kelas ${kelas}`)
}

const sayHello = great
sayHello('Azizi', '11')

//default parameter dalam function
function sapa1(nama = "pengunjung") {
    console.log(`Halo ${nama}`)
}
sapa1()//argumen kosong 
sapa1('Christy')//argumen terisi

//mengatasi variabel yang tidak terdeteksi
let jumlah = 10
let hargaSatuan
let total = jumlah + (hargaSatuan || 0)

//ternary
let hargaSatuan2
let harga2 = hargaSatuan2 !== undefined ? hargaSatuan2 : 0
console.log(harga2)

//nullish
let harga3 = hargaSatuan ?? 3
console.log(harga3)

//map
const numbers = [1, 2, 3, 4, 5]

const doubles = numbers.map((numbers) => numbers * 2)
console.log(doubles)

//filter
const numbers1 = [1, 2, 3, 4, 5]
const evenNumbers = numbers1.filter((number) => number % 2 === 0)
console.log(evenNumbers)

//reduce
const _numberReduce = [1, 2, 3, 4, 5]
const _sumReduce = _numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(_sumReduce)

//forEach
const fruits = ['apple', 'grape', 'guava', 'stroberry', 'mulyawan & darmini', 'iwan & lina']
fruits.forEach((fruit) => console.log(fruit))

//sort
const fruits1 = ['apple', 'grape', 'guava', 'stroberry'];
fruits1.sort();
console.log(fruits1)

//find
const numbers2 = [1, 2, 3, 4, 5];
const result = numbers2.find((number) => number > 3);
console.log(result)