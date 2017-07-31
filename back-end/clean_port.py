import pandas as pd
import datetime as dt
from sqlalchemy import create_engine

con = create_engine('mysql+pymysql://javierq:abcd1234@ec2-54-68-139-60.us-west-2.compute.amazonaws.com')


def getData(id,name,table):
    sql = "select * from read_port.{0}".format(table)
    clean_data = {'metric':[],'metric_value':[],'date_key':[]}
    results = con.connect().execute(sql).fetchall()
    for line in results:
        reading = line[1].split(',')
        if len(reading)==2:
            date1 = dt.datetime(line[0].year,line[0].month,line[0].day,line[0].hour)
            try:
                 clean_data['metric_value'].append(float(reading[1].rstrip()))
                 clean_data['metric'].append(reading[0])
                 clean_data['date_key'].append(date1)
            except ValueError:
                continue

    df = pd.DataFrame(clean_data)
    df = df.groupby(['date_key','metric']).mean()
    df['date_key'] = df.index.get_level_values(0)
    df['metric'] = df.index.get_level_values(1)
    df['cabinet_id'] = id
    df['cabinet_name'] = name
    return df

# df1 = getData(1,'Blake House','temp1')
# df2 = getData(2,'Blake Garage','temp2')

tables = {'Unit 1': ['temp1',1], 'Unit 2': ['temp2',2], 'Unit 3': ['temp3',3],
'Unit 4': ['temp4',4]}
for table in tables:
    df = getData(tables[table][1],table,tables[table][0])
    try:
        df.to_sql(con=con, name='fact_readings', index=False, schema='read_port', if_exists='append')
    except:
        print 'Duplicate Entry'
    sql = "delete from read_port.{0}".format(tables[table][0])
    con.connect().execute(sql)
