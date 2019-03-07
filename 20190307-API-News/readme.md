# Lezione del 2019.03.07

Creazione di un'API che esegua la CRUD (Create, Read, Update, Delete) su una nuova tabella creata su SQL Server.

```sql 
CREATE TABLE [dbo].[News](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Author] [nvarchar](50) NOT NULL,
	[Title] [nvarchar](250) NOT NULL,
	[Article] [nvarchar](max) NULL,
	[CreationDate] [datetime] NOT NULL,
	[Visible] [bit] NOT NULL,
 CONSTRAINT [PK_News] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[News] ADD  CONSTRAINT [DF_News_CreationDate]  DEFAULT (getdate()) FOR [CreationDate]
GO

ALTER TABLE [dbo].[News] ADD  CONSTRAINT [DF_News_Visible]  DEFAULT ((0)) FOR [Visible]
GO
```

prevedere quindi che l'applicativo gestisca:

* Lista: *GET /api/news*
* Dettaglio: *GET /api/news/1*
* Inserimento: *POST /api/news*
* Modifica: *PUT /api/news/1*
* Cancellazione: *DELETE /api/news/1*

utilizzare i seguenti package

* mssql
* fastify

