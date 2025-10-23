# Juomapeli – Web-sovellus

## Juomapeli on web-pohjainen peli, jossa pelaajat vuorotellen joko juovat(alkoholia) tai tekevät tehtävän tai vastaavat kysymykseen. Sovellus sisältää 4 eri kategoriaa:

Lämmittely: kevyitä kysymyksiä ja tehtäviä, sopii illan aloitteluun kun ei vielä ole tarpeeksi alkoholia koneessa.

Totuus ja tehtävä: klassinen juomapeli kysymyksiä ja tehtäviä, sopii jos et tunne porukkaa vielä täysin tai et halua seksuaali sävytteisiä.

Spicy: versio seksuaali sävytteinen.

Extra Spicy: extra seksuaalinen versio sellaisesta pitäville.


Peli valitsee joka pelaajalle randomilla 5 kysymystä valitusta kategoriasta. Sama kysymys ei toistu, ja peli etenee vuorotellen.

Sovellus toimii täysin HTML, CSS ja JavaScriptin avulla ilman lisä kirjastoja.

## Ominaisuudet
Responsiivinen ulkoasu, joka toimii tietokoneella sekä puhelimella.
Pelaajien lisääminen ja poistaminen.
Kysymyskategoriat: Lämmittely, Totuus ja tehtävä, Spicy.
Satunnaiset kysymykset, 5 per pelaaja, ei toistoja.
"Seuraava kysymys" -nappi pysyy aina näkyvissä (fixed/sticky).
End-näkymä sisältää kuvan ja “Pelaa uudestaan” -napin.
Pelaajat ja pelin tila tallennetaan localStorageen.
Näkymien vaihto ilman sivun uudelleenlatausta.

## Käyttöohjeet
Avaa sovellus selaimessa (suosittelen live server pluginia vscodessa tai erillistä palvelinta, jotta jsonin kysymykset latautuvat oikein).
Lisää pelaajat kirjoittamalla nimet ja klikkaamalla “Lisää pelaaja nappia”.
Valitse kategoria valikosta.
Paina “Aloita peli” aloittaaksesi.
Pelaajat suorittavat kysymykset vuorotellen, paina “Seuraava kysymys” edetäkseen.
Kun kaikki kysymykset on käyty läpi, näytetään lopetusnäkymä.
Paina “Pelaa uudestaan” aloittaaksesi alusta.


## Tiedostorakenne
```
│
├─ index.html
├─ style.css
├─ script.js
├─ questions.json
├─ images/
│   └─ game-over.png
└─ README.md
```


index.html - Perus rakenne ja näkymä

style.css - Tyylit ja responsiivisuus, suunniteltu niin että toimii puhelimella jonka levys max 1080px tai sitten tietokoneilla ideaali 1920x1080p

script.js - Logiigga, json parse, näkymöiden vaihto yms.

questions.json - kysymykset kategorioiden mukaa(chatgpt generoimat) 50 kpl per kategoria

images/game-over.png - kuva jossa lukee että peli on ohi

## Lähteet / inspiraatio:
StackOverFlow, chatgpt.
Omien ideoiden pohjalta toteutettu juomapeli,
Oma vanhan react projekti joka toimi samaan tyyliin ja oli sama idea.
Kurssilla opitut HTML-, CSS- ja JavaScript-tekniikat
