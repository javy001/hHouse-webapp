<?php
date_default_timezone_set('America/Los_Angeles');
$db = new mysqli('ec2-54-68-139-60.us-west-2.compute.amazonaws.com', 'javierq', 'abcd1234');

if($_SERVER['REQUEST_METHOD']=='GET'){
    // return individual test data
    if(isset($_GET['id'])){
        $cabId = $_GET['id'];
        $sql = "select *
        from read_port.fact_readings
        where cabinet_id=$cabId
        and metric in ('IAH','IAT','pH','WT')
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
    elseif(isset($_GET['all'])){
        $sql = "select cabinet_id, cabinet_name, count(*)
        from read_port.fact_readings
        where metric in ('IAH','IAT','pH','WT')
        group by 1,2";
        $data = $db->query($sql);
        if($data){
            while($row = $data->fetch_assoc()){
                $id = $row['cabinet_id'];
                $returnData[$id] = $row['cabinet_name'];
            }
        }
        echo(json_encode($returnData));
    }
}


 ?>
