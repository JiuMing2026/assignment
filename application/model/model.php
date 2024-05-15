<?php

class Model {
    public $dbhandle;
    public function __construct() {
        $dsn = ('sqlite:./db/assignment.db');

        try {
            $this->dbhandle = new PDO(
                $dsn,  'user',  'password', array(
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
            $this->dbhandle -> exec("
                            CREATE TABLE Model_3D (
                                id INTEGER PRIMARY KEY,
                                exhURL TEXT,
                                modelURL TEXT,
                                galleryImageURL TEXT,
                                imagesURL TEXT
                            );
                            CREATE TABLE ExtraModel(
                                id INTEGER PRIMARY KEY,
                                defaultModelURL TEXT,
                                action1ModelURL TEXT,
                                action2ModelURL TEXT
                            )
                ");
            return "Tables are successfully created inside assignment.db file";
        }
        catch (PDOEXception $e) {
            print new Exception($e->getMessage());
        }
    }

    function dbInsertData() {
        try {
            $this->dbhandle -> exec(
                "
                INSERT INTO Model_3D (exhURL, modelURL, galleryImageURL, imagesURL) 
                VALUES ('../application/assets/images/Coke.png', '../application/assets/models/export/bottleSpin.x3d', '../application/assets/images/3Dimg/coke-render.png', '../application/assets/models/renderoutput/coke-render.png');" .
                "INSERT INTO Model_3D (exhURL, modelURL, galleryImageURL, imagesURL) 
                VALUES ('../application/assets/images/Fanta.png', '../application/assets/models/export/canSpin.x3d', '../application/assets/images/3Dimg/fanta-render.png', '../application/assets/models/renderoutput/fanta-render.jpg');" .
                "INSERT INTO Model_3D (exhURL, modelURL, galleryImageURL, imagesURL) 
               VALUES ('../application/assets/images/Sprite.png', '../application/assets/models/export/cupSpin.x3d', '../application/assets/images/3Dimg/sprite-render.png', '../application/assets/models/renderoutput/sprite-render.png');" .
                "INSERT INTO ExtraModel (defaultModelURL, action1ModelURL, action2ModelURL)
                VALUES ('../application/assets/models/export/modelNoAction.x3d', '../application/assets/models/export/modelAction1.x3d', '../application/assets/models/export/modelAction2.x3d');"
            );
            return "New record created successfully";
        }
        catch (PDOEXception $e) {
            print new Exception($e->getMessage());
        }
    }


    function dbGetData() {
        try {
            $sql = 'SELECT M.*, E.defaultModelURL, E.action1ModelURL, E.action2ModelURL FROM Model_3D M CROSS JOIN ExtraModel E';
            $stmt = $this -> dbhandle -> query($sql);
            $result = null;
            $i = 0;
            while ($data = $stmt -> fetch()) {
                $result[$i]['id'] = $data['id'];
                $result[$i]['exhURL'] = $data['exhURL'];
                $result[$i]['modelURL'] = $data['modelURL'];
                $result[$i]['galleryImageURL'] = $data['galleryImageURL'];
                $result[$i]['imagesURL'] = $data['imagesURL'];

                $result[$i]['defaultModelURL'] = $data['defaultModelURL'];
                $result[$i]['action1ModelURL'] = $data['action1ModelURL'];
                $result[$i]['action2ModelURL'] = $data['action2ModelURL'];
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

