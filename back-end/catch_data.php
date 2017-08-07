<?php
include 'config.php';

date_default_timezone_set('America/Los_Angeles');
$db = new mysqli( $db_host, $user, $pass, $db_name, $db_port );

    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_POST)){
            $data = filter_var_array(json_decode(file_get_contents('php://input'), true), FILTER_SANITIZE_SPECIAL_CHARS);
            $userdata = $data["data"];
            $sql = sprintf("INSERT INTO coinsurf_hhouse.userinput (id, user, unit, water, grow, micro, bloom, roots, light, height, comment, logdate) VALUES ( NULL,'%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')",
                $data["user"],
                $data["unit"],
                $userdata["water"],
                $userdata["grow"],
                $userdata["micro"],
                $userdata["bloom"],
                $userdata["roots"],
                $userdata["light"],
                $userdata["height"],
                $userdata["comment"],
                $userdata["date"]
                );
            $db->query($sql);
            echo($db->error);
        }
    }
?>