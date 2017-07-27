<?php
date_default_timezone_set('America/Los_Angeles');
$db = new mysqli('69.195.124.145', 'coinsurf_paal', 'HK0h0.NZ9+q]','coinsurf_hhouse', 3306 );

    if($_SERVER['REQUEST_METHOD']=='POST'){
    // return individual test data
        if ( $_POST ) {
            foreach ( $_POST as $key => $value ) {
                echo "key: ".$key."- Value:".$value."<br />";
            }
        }
    }
    elseif(isset($_GET['all'])){
        $sql = "
        select a.cabinet_id, b.cabinet_name, b.metric, b.metric_value, b.date_key
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
                $returnData[$name]['data'][$metric] = floatval($row['metric_value']);
                $returnData[$name]['time'] = $row['date_key'];
            }
        }
        echo(json_encode($returnData));
    }
}


 ?>
