# Lezione del 2019.03.13

* Autenticazione nelle API
* Token JWT
  * [JWT](https://jwt.io/)
  * package [fastify-jwt](https://www.npmjs.com/package/fastify-jwt)
* Standard OAuth2
* Salvataggio password
  * package [bcrypt](https://www.npmjs.com/package/bcrypt)

* Codice di esempio: [Dottor.Abc.Fastify/JWT](https://github.com/andreadottor/Dottor.Abc.Fastify/tree/master/JWT)




### Tabella Users

* Id            INTEGER IDENTITY(1,1) NOT NULL
* Username      nvarchar(50)  NOT NULL
* Password      nvarchar(250) NOT NULL
* FullName      nvarchar(50)  NULL
* CreationDate  datetime      NOT NULL getdate()
* LastLogin     datetime      NULL


### API da implementare

* POST /api/account/register         registrazione nuovo utente
* POST /token                        login, restituisce il token
* GET  /api/news                     senza autenticazione
* POST /api/news                     deve richiedere autenticazione

