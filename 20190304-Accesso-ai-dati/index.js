const sql = require("mssql");

// configurazione per il collegamento a SQL Server
//
const config = {
    user: 'sa',
    password: 'p4ssw0rd',
    server: 'localhost', // You can use 'localhost\\sqlexpress' to connect to named instance
    database: 'AdventureWorksLT2016',
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
};

// recupero tutti i record della tabella products
// 
var getProducts = async function () {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query('select top 10 * from SalesLT.Product');
        sql.close();
        console.dir(result.recordset);

    } catch (error) {
        console.log(error);
        sql.close();
    }
}
// getProducts();


var getProductsById = async function (productId) {
    try {
        let pool = await sql.connect(config);
        /*
        let result = await pool.request()
                .input("id", sql.Int, productId)
                .query('select * from SalesLT.Product where ProductId = @id');
        */
        const result = await pool.request().query`
            select
                [ProductID]
                ,[Name]
                ,[ProductNumber]
                ,[Color]
                ,[StandardCost]
                ,[ListPrice]
                ,[Size]
                ,[Weight]
                ,[ProductCategoryID]
                ,[ProductModelID]
                ,[SellStartDate]
                ,[SellEndDate]
                ,[DiscontinuedDate]
                ,[ThumbNailPhoto]
                ,[ThumbnailPhotoFileName]
                ,[rowguid]
                ,[ModifiedDate]
            from SalesLT.Product 
            where ProductId = ${productId}`

        sql.close();
        
        if (result.recordset.length == 0)
            console.log("Prodotto non trovato");
        else
            console.log(result.recordset[0]);
    } catch (error) {
        console.log(error);
        sql.close();
    }
}
getProductsById(680);