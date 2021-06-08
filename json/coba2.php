<?php

$data = file_get_contents('coba.json');
$barang = json_decode($data, true);

var_dump($barang);

echo $barang[0]["nama_supplier"];
