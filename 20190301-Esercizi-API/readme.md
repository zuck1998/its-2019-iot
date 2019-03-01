# Lezione del 2019.03.01

* Utilizzo del routing di Fastify per definizione delle route in file esterni da quello di avvio

### Esercitazione

#### STEP 1:

Creare un'applicazione node che utilizzi Fastify per esporre dei servizi/api REST per gestire le seguenti richieste:

* GET       /api/products/
* GET       /api/products/*123*
* POST      /api/products/
* PUT       /api/products/*123*
* DELETE    /api/products/*123*

I vari metodi dovranno utilizzare come *storage* un array statico. (Ad ogni riavvio del processo l'array sarà sempre vuoto)

L'oggetto product dovrà avere le seguenti proprietà:

* id
* name
* price

Rispettare gli status code di ritorno

* nel caso di 404 Not Found
  * reply.status(404).send();

#### STEP 2:

Gestire le richieste anche per un oggetto Category con le seguenti proprietà:

* id
* name

l'url base dovrà essere */api/categories/*.