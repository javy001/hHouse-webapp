<?php
include 'config.php';

date_default_timezone_set('America/Los_Angeles');
$db = new mysqli('69.195.124.145', $user, $pass, $db_name, $db_port );

    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_POST)){
            $data = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO coinsurf_hhouse.userinput (id, user, water, grow, micro, bloom, roots, logdate) VALUES ( NULL,'" . $data->username . "', '".$data->data->water."', '".$data->data->grow."', '".$data->data->micro."', '".$data->data->bloom."', '".$data->data->roots."', CURRENT_TIMESTAMP)";
            $db->query($sql);
            echo($db->error);
        }
    }

?>

<form method="post" action="catch_data.php">
    <input type="hidden" name="user" value="bert" />
    <button>Go to user 123</button>
</form>