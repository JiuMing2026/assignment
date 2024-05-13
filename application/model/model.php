<?php

class Model {
    public $dbhandle;
    public function model3DInfo() {
        return array(
            'model1' => 'Coke Bottle 3D Image',
            'model2' => 'Fanta Can 3D Image',
            'model3' => 'Sprite Cup 3D Image'
        );
    }

    public function __construct() {
        $dsn = 'mysql:../db/assignment.db';

        try {
            $this->dbhandle = new PDO(
                $dsn,  'root',  'LZi9z<k(S8QU', array(
                                                                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                                                                    PDO::ATTR_EMULATE_PREPARES => false,
                                                                    ));
        }
        catch (PDOEXception $e) {
            echo "Connection failed: " . $e->getMessage();
            print new Exception($e->getMessage());
        }
    }

    function dbCreateTable() {
        try {
            $this->dbhandle -> exec(
                "CREATE TABLE Model_3D (
                    id INTEGER PRIMARY KEY,
                    x3dModelTitle TEXT,
                    x3dCreationMethod TEXT,
                    modelTitle TEXT,
                    modelSubtitle TEXT,
                    modelDescription TEXT
                )"
            );
            return "Model_3D table is successfully created inside assignment.db file";
        }
        catch (PDOEXception $e) {
            print new Exception($e->getMessage());
        }
    $this->dbhandle = NULL;
    }

    function dbInsertData() {
        try {
            $this->dbhandle -> exec(
                "INSERT INTO Model_3D (id, x3dModelTitle, x3dCreationMethod, modelTitle, modelSubtitle, modelDescription) VALUES (1, 'Coke Bottle 3D Image', 'Extrusion', 'Coke Bottle', 'Coca Cola', 'A 3D Coke Bottle created using X3D')" .
                "INSERT INTO Model_3D (id, x3dModelTitle, x3dCreationMethod, modelTitle, modelSubtitle, modelDescription) VALUES (2, 'Fanta Can 3D Image', 'Extrusion', 'Fanta Can', 'Fanta', 'A 3D Fanta Can created using X3D')" .
                "INSERT INTO Model_3D (id, x3dModelTitle, x3dCreationMethod, modelTitle, modelSubtitle, modelDescription) VALUES (3, 'Sprite Cup 3D Image', 'Extrusion', 'Sprite Cup', 'Sprite', 'A 3D Sprite Cup created using X3D')"
            );
            return "New record created successfully";
        }
        catch (PDOEXception $e) {
            print new Exception($e->getMessage());
        }
    }


    function dbGetData() {
        try {
            $sql = 'SELECT * FROM Model_3D';
            $stmt = $this -> dbhandle -> query($sql);
            $result = null;
            $i = 0;
            while ($data = $stmt -> fetch()) {
                $result[$i]['id'] = $data['id'];
                $result[$i]['x3dModelTitle'] = $data['x3dModelTitle'];
                $result[$i]['x3dCreationMethod'] = $data['x3dCreationMethod'];
                $result[$i]['modelTitle'] = $data['modelTitle'];
                $result[$i]['modelSubtitle'] = $data['modelSubtitle'];
                $result[$i]['modelDescription'] = $data['modelDescription'];
                $i++;
            }
        }
        catch (PDOEXception $e) {
            print new Exception($e->getMessage());
        }
        $this->dbhandle = NULL;
        return $result;
    }
}