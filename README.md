![RajskieDrzewo.pl](http://www.rajskiedrzewo.pl/assets/images/logo_big.png)
# RajskieDrzewo.pl
###Description in Polish, English version below

RajskeDrzewo.pl jest serwisem internetowym służącym do wyszukiwania i zamawiania jabłek w małym hurcie (na skrzynki). 

Projekt z założenia ogólnie dostępny, darmowy i rozwijany przez społeczność.


Wyszukiwanie odbywa się na podstawie informacji zgłoszonych/przesłanych przez producentów i sprzedawców jabłek.
RajskeDrzewo.pl nie jest sklepem, nie dolicza żadnej marży i nie pobiera od Użytkowników żadnych opłat. Zapłata za zamówiony towar odbywa się na warunkach przedstawionych przez sprzedawcę/sadownika.


Sponsorowanie hostingu [RajskieDrzewo.pl](http://rajskiedrzewo.pl) oraz organizaje rozwoju projektu zapewnia firma Sviete. [sviete.pl](http://sviete.pl)

Kod projektu bazuje na otwartych rozwiązaniach i jest dostępny na licencji wolnego i otwartego oprogramowania GNU GPL v3.




###Description in English, Polish version above



## Technical Description
### Prerequisites
You need to have the following tools installed globally on you machine:

- node
- npm
- bower


### Installation

Clone the repo via git:
```sh
$ git clone https://github.com/sviete/RajskieDrzewo.pl.git && cd RajskieDrzewo.pl
```

Install depencencies:
```sh
$ npm install
$ bower install
```
### Running the App

To run the app you have simply run:
```sh
$ grunt watch
```
This will run the `build` and the `delta` task. You can now open a browser at `http://localhost:9000`.

The task also takes care of re-running sub targets during development when changes occur.

### Configuration
To configure the app, makes changes in the `build.conf.js` file accordingly.

### Build Tasks

- `grunt build` - generates a build of the app. This can be run in the browser.
- `grunt compile` - compiles a built app. The result is a production ready package.
- `grunt compile-debug` - same as `compile` without uglified JavaScript


#Contribute

We'd love you to contribute.
Please contact us: [info@sviete.pl](info@sviete.pl)


