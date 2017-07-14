<?php
date_default_timezone_set('America/Los_Angeles');
$db = new mysqli('ec2-54-68-139-60.us-west-2.compute.amazonaws.com', 'javierq', 'abcd1234');

if($_SERVER['REQUEST_METHOD']=='GET'){
    // return individual test data
    if(isset($_GET['id'])){
        $cabId = $_Get['id'];
        $sql = "select *
        from read_port.fact_readings
        where cabinet_id=$cabId
        order by date_key";
        $data = $db->query($sql);
        if($data){
            while($row = $data->fetch_assoc()){
                $dk = strtotime($row['date_key'])*1000;
                $returnData['name'] = $row['cabinet_name'];
                $metric = $row['metric'];
                $returnData['time_series'][$metric][] = array($dk,floatval($row['metric_value']));
            }
        }
        echo(json_encode($returnData));
    }
}


 ?>
