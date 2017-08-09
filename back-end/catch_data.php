<?php
include 'config.php';

date_default_timezone_set('America/Los_Angeles');
$db = new mysqli( $db_host, $user, $pass, $db_name, $db_port );

    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_POST)){
            $data = filter_var_array(json_decode(file_get_contents('php://input'), true), FILTER_SANITIZE_SPECIAL_CHARS);
            $sql = sprintf("INSERT INTO %s.%s (id, user, %s) VALUES ( NULL, '%s', '%s')",
                $db_name,
                $table_name,
                implode(" ,", array_keys($data["data"])),
                $data["user"],
                implode("', '", $data["data"])
                );
            $db->query($sql);
            //echo($db->error); //security issue, uncomment for debug purposes
        }
    }
?>