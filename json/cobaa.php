<?php

// $barang = [
//     [
//         "id_barang"     => "100",
//         "nama_barang"   => "Panel Surya GH 100wp Mono",
//         "harga"         => "550000",
//         "stok"          => "20",
//         "id_supplier"   => "12"
//     ],
//     [
//         "id_barang"     => "101",
//         "nama_barang"   => "Panel Surya GH 200wp Mono",
//         "harga"         => "100000",
//         "stok"          => "22",
//         "id_supplier"   => "2"
//     ],
// ];


$dbh = new PDO('mysql:host=localhost;dbname=ecokarsa', 'root', '');

$db = $dbh->prepare('SELECT * FROM barang');
$db->execute();

$barang = $db->fetchAll(PDO::FETCH_ASSOC);



$data = json_encode($barang);
echo $data;
