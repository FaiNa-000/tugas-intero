// let barang = {
//     id_barang     : "100",
//     nama_barang   : "Panel Surya GH 100wp Mono",
//     harga         : "550000",
// }

// console.log(JSON.stringify(barang));

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let barang = JSON.parse(this.responseText);
//         console.log(barang);
//     }
// }

// xhr.open('GET', 'barang.json', true);
// xhr.send();

$.getJSON('barang.json', function(data){
    console.log(data);

});