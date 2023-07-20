
import pandas as pd


def excel(machine):
    # SQL command to retrieve data
    comm1 = "SELECT * FROM paintingsData"
    comm2 = "SELECT * FROM customers"
    comm3 = "SELECT * FROM fans"
    comm4 = "SELECT * FROM paintingsReserved"

    # Read data from SQL using pandas
    df1 = pd.read_sql_query(comm1, con=machine)
    df2 = pd.read_sql_query(comm2, con=machine)
    df3 = pd.read_sql_query(comm3, con=machine)
    df4 = pd.read_sql_query(comm4, con=machine)

    # Export data to excel
    with pd.ExcelWriter('Amet_data_update.xlsx') as writer:
        df1.to_excel(writer, index=False, sheet_name='paintingsData')
        df2.to_excel(writer, index=False, sheet_name='customers')
        df3.to_excel(writer, index=False, sheet_name='fans')
        df4.to_excel(writer, index=False, sheet_name='paintingsReserved')
