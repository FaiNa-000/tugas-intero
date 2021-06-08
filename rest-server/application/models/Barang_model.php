<?php

class Barang_model extends CI_Model
{
    public function getBarang($id_barang = null)
    {
        if ($id_barang === null) {
            return $this->db->get('barang')->result_array();
        } else {
            return $this->db->get_where('barang', ['id_barang' => $id_barang])->result_array();
        }
    }
}
