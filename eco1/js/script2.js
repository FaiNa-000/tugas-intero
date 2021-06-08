function tampilsemua(){
    
    $.getJSON('data/barang.json', function(data) {
        
    
        let barang = data.barang;
        $.each(barang, function(i, data){
            $('#daftar-barang').append('<div class="col-md-4"><div class="card mb-3"><div class="card-body"><table class="table"><tbody><tr><th>id_supplier</th><td>'+ data.id_supplier +'</td></tr><tr><th>nama_supplier</th><td>'+ data.nama_supplier +'</td><tr><th>id_barang</th><td>'+ data.id_barang +'</td></tr><tr><th>nama_barang</th><td>'+ data.nama_barang +'</td>  </tr><tr><th>harga</th><td>'+ data.harga +'</td> </tr><tr><th>stok</th><td>'+ data.stok +'</td></tr></tr></tbody></table></div></div></div>')
        })
    
    
    });
}

tampilsemua();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    console.log(kategori);
    $('h3').html(kategori);

    if(kategori == 'Semua list supplier') {
        tampilsemua();
        return;
    }


    $.getJSON('data/barang.json', function(data){
        let barang = data.barang;
        let content = '';

        $.each(barang, function(i, data){
            if (data.nama_supplier == kategori.toLowerCase()){
                content +=  '<div class="col-md-4"><div class="card mb-3"><div class="card-body"><table class="table"><tbody><tr><th>id_supplier</th><td>'+ data.id_supplier +'</td></tr><tr><th>nama_supplier</th><td>'+ data.nama_supplier +'</td><tr><th>id_barang</th><td>'+ data.id_barang +'</td></tr><tr><th>nama_barang</th><td>'+ data.nama_barang +'</td>  </tr><tr><th>harga</th><td>'+ data.harga +'</td> </tr><tr><th>stok</th><td>'+ data.stok +'</td></tr></tr></tbody></table></div></div></div>' ;
            }

        });

        $('#daftar-barang').html(content);

    });
});