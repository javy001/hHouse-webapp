<?php
date_default_timezone_set('America/Los_Angeles');
$db = new mysqli('ec2-54-68-139-60.us-west-2.compute.amazonaws.com', 'javierq', 'abcd1234');

if($_SERVER['REQUEST_METHOD']=='GET'){
    // return individual test data
    if(isset($_GET['id'])){
        $cabId = $_GET['id'];
        $metric = $_GET['metric'];
        $sql = "select date_key, cabinet_name, metric,
        case when metric in ('IAT','WT') then metric_value*9.0/5+32 else metric_value end as metric_value
        from read_port.fact_readings
        where cabinet_id=$cabId
        and metric = '$metric'
        order by date_key";
        $data = $db->query($sql);
        if($data){
            while($row = $data->fetch_assoc()){
                $dk = strtotime($row['date_key'])*1000;
                $returnData['name'] = $row['cabinet_name'];
                $metric = $row['metric'];
                $returnData['time_series'][$metric][] = array($dk,round(floatval($row['metric_value']),3));
            }
        }
        echo(json_encode($returnData));
    }
    elseif(isset($_GET['all'])){
        $sql = "
        select a.cabinet_id, b.cabinet_name, b.metric,
        case when b.metric in ('IAT','WT') then b.metric_value*9.0/5+32 else b.metric_value end as metric_value,
        b.date_key
        from
        (select cabinet_id, max(date_key) as date_key
        from read_port.fact_readings
        where metric in ('IAH','IAT','pH','WT')
        group by 1) a
        left join
        (select cabinet_id, date_key, cabinet_name, metric, metric_value
        from read_port.fact_readings
        where metric in ('IAH','IAT','pH','WT')
        ) b on a.cabinet_id=b.cabinet_id and a.date_key=b.date_key
        order by 3
        ";
        $data = $db->query($sql);
        if($data){
            while($row = $data->fetch_assoc()){
                $name = $row['cabinet_name'];
                $metric = $row['metric'];
                $returnData[$name]['id'] = $row['cabinet_id'];
                $returnData[$name]['data'][$metric] = round(floatval($row['metric_value']),2);
                $returnData[$name]['time'] = $row['date_key'];
            }
        }
        echo(json_encode($returnData));
    }
}


 ?>
