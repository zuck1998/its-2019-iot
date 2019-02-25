# Lezione del 2019.02.25

* Ripasso Fastify [https://www.fastify.io/](https://www.fastify.io/)
  * Rispondere a chiamate in GET
  * Rispondere a chiamate in POST
  * Recupero parametri da Query String
  * Recupero parametri dall'url
  * Recupero oggetti/parametri dal Body

## Esercitazione 1

* Create funzione che esegua operazione matematica in GET e ritorni un JSON con il risultato
  * GET api/operations/add?num1=12&num2=34
  * GET api/operations/sub?num1=12&num2=34
  * GET api/operations/mul?num1=12&num2=34
  * GET api/operations/div?num1=12&num2=34
* Creare funzione che esegua le operazioni metematiche in POST
  * POST api/operations/execute
    * nel campo *operation" passare il tipo di operazione da eseguire
    * nei campi *num1* e *num2* passare i numeri da utilizzare
    * body: { "num1" : 12, "num2": 34, "operation": "add" }
* Tutti i metodi devono ritornare un JSON:
    * { "result" : valore }

## Esercitazione 2

* Esporre i metodi creati per l'esecitazione della lezione [Introduzione a Node.JS](https://github.com/andreadottor/its-2019-iot/tree/master/20190214-Intro-NodeJS) tramite servizi REST utilizzando Fastify.