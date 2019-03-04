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
var getProducts = async function(){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
                .query('select top 10 * from SalesLT.Product');
        console.dir(result.recordset);
        pool.close();
    } catch (error) {
        console.log(error);
    }
}
getProducts();


var getProductsById = async function(productId){
    try {
        let pool = await sql.connect(config);
        /*
        let result = await pool.request()
                .input("id", sql.Int, productId)
                .query('select * from SalesLT.Product where ProductId = @id');
        */
       const result = await sql.query`
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
            
        if(result.recordset.length == 0)
            console.log("Prodotto non trovato");
        else
            console.log(result.recordset[0]);

        pool.close();
    } catch (error) {
        console.log(error);
    }
}
getProductsById(680);