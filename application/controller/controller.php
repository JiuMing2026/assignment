<?php

class Controller {
    public $load;
    public $model;

    function __construct($pageURI = null) {
        $this->load = new Load();
        $this->model = new Model();

        $this->$pageURI();
    }
    function home() {
        $this->load->view('view3DAppData');
    }

    function apiCreateTable() {
        $data = $this->model->dbCreateTable();
        $this->load->view('view3DAppData', $data);
    }

    function apiInsertData() {
        $data = $this->model->dbInsertData();
        $this->load->view('view3DAppData', $data);
    }

    function apiGetData() {
        $data = $this->model->dbGetData();
        $this->load->view('view3DAppData', $data);
    }
}
