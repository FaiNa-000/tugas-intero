<<?php

    use Restserver\Libraries\REST_Controller;

    defined('BASEPATH') or exit('No direct script access allowed');

    require APPPATH . 'libraries/REST_Controller.php';
    require APPPATH . 'libraries/Format.php';


    class Barang extends REST_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->load->model('Barang_model', 'barang');
        }
        public function index_get()
        {
            $id_barang = $this->get('id_barang');
            if ($id_barang === null) {
                $barang = $this->barang->getBarang();
            } else {
                $barang = $this->barang->getBarang($id_barang);
            }


            // $barang = $this->barang->getBarang();

            if ($barang) {
                $this->response([
                    'status' => true,
                    'data' => $barang
                ], REST_Controller::HTTP_OK);
            } else {
                $this->response([
                    'status' => false,
                    'message' => 'id not found'
                ], REST_Controller::HTTP_NOT_FOUND);
            }
        }

        public function index_delete()
        {
            $id = $this->delete('id');
        }
    }
