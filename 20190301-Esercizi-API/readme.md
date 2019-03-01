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

#### STEP 2:

Gestire le richieste anche per un oggetto Category con le seguenti proprietà:

* id
* name

l'url base dovrà essere */api/categories/*.