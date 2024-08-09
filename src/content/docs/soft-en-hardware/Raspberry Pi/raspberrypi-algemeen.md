---
title: Algemene Pi tips
---

## Installeren Raspberry Pi OS (incl. headless)

Voorheen moest je allemaal irritante dingen doen met images en SD kaart writers, maar tegenwoordig heeft Raspberry een eigen superhandige Imager, [Raspberry Pi imager](https://www.raspberrypi.com/software/).

Meestal, of vaak, wil je de Pi headless installeren. Headless betekent dat je hem niet aan een scherm gaat hangen maar gaat benaderen via SSH. Voorheen moest dat door wat files aan te passen na het imagen op de SD kaart, tegenwoordig kun je dat direct mee nemen bij het schrijven van de image naar de SD door `text CTRL + SHIFT + X` in te voeren in de Raspberry Pi Imager, en daar vervolgens SSH en/of je Wi-Fi in te stellen.

## Hostnames ipv IP adressen

Meestal heb je thuis een lokale DHCP server draaien die elk nieuw device een dynamisch IP adres serveert. Zo kan het zijn dat je Pi om wat voor reden een nieuw IP adres krijgt. Het achterhalen van een IP adres van je Pi, met name een headless Pi, is wat lastig. HDMI kabel zoeken, aansluiten, opzoeken. Gedoe gedoe.

Door gebruik te maken van hostnames los je dat op. Je Pi broadcast de hostname over je netwerk waardoor alle clients weten hoe de Pi heet. Op die manier kun je de Pi direct benaderen op zijn naam en maakt het IP adres niet meer uit.

De hostname instellen kan via `raspi-config`. Vervolgens is de Pi te bereiken op `gekozenaam.local`

## Voeding en undervoltage

's zijn gevoelig voor voldoende voeding. Bij onvoldoende voeding gaat hij throttlen, wordt traag en onstabiel. Een willekeurige telefoon USB voeding levert waarschijnlijk niet in alle situaties voldoende stroom. Dit is te zien door een bliksem icoontje in beeld (als je hem met scherm gebruikt) en anders kun je via `/opt/vc/bin/vcgencmd get_throttled` zien of hij throttled is (en dus undervoltage heeft). Is de response `throttled=0x0` dan is alles koek en ei.
