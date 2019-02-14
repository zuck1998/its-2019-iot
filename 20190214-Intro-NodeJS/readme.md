# Lezione del 2019.02.14 - Introduzione a Node.JS

- introduzione ai moduli
- [node.js modules](https://nodejs.org/api/modules.html)
- scrittura di un modulo
- utilizzo di un modulo
- utilizzo di npm
  - npm install nome-modulo --> installa nella cartella corrente
  - npm install -g nome-modulo --> installa a livello globale
  - npm update nome-modulo
  - npm update
  - npm install     --> installa tutte le dipendenze specificate nel package.json
- uso dei moduli core di node
  - http [https://nodejs.org/api/http.html](https://nodejs.org/api/http.html)
  - fs [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html)
  - path [https://nodejs.org/api/path.html](https://nodejs.org/api/path.html)


## Esercitazione

>### 1_ Array
> - file main1.js di avvio
> -  file utilities/arrayUtils.js
>       - getList(count) 		-> ritorna un'array di string con X elementi
>       - taken(list, maxItems) -> ritorna i primi (maxItems) dell'array passato come argomento
>       - sortReverse(list)		-> ritorna l'array ordinato al contrario
>       - getEven(list)			-> ritorna un array con i soli elementi presenti agli indici pari
>-  dal file main1.js richiamare il metodo getList per farsi dare un array e poi richiamare i metodi di arrayUtils.js

>### 2_ File System
> - file main2.js di avvio
> - scrivere nella console tutti i file di una precisa directory
	
>### 3_ File System + http
> - file main3.js di avvio
> - data una richiesta http, far ritornare un testo contenente l'elenco di file di una precisa directory
	
>### 4_ File System + http
> - file main4.js di avvio
> -ad ogni richiesta http scrivere un file con la data e ora corrente, htttp method, url e l'ip da qui proviene la richiesta
>

Per recuperare l'IP di chi sta eseguendo la richiesta corrente:

``` javascript	
var ip = req.headers['x-forwarded-for'] 
            || req.connection.remoteAddress 
            ||  req.socket.remoteAddress 
            || (req.connection.socket ? req.connection.socket.remoteAddress : null);
```
