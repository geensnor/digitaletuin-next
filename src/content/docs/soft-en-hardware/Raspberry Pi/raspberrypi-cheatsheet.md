---
title: Pi cheatsheet
---

Niet allemaal puur Raspberry Pi specifiek

## Algemene handige commando's

| Wat                                                                                                               | Commando                                                 |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Default username/password Raspberry Pi OS (voorheen raspbian)                                                     | pi/raspberry                                             |
| Controleren welke DNS server de Raspberry Pi heeft gekregen                                                       | `sudo nano /etc/resolv.conf`                             |
| Config menu Raspberry Pi starten                                                                                  | `sudo raspi-config`                                      |
| IP adres van PI bekijken                                                                                          | `ifconfig`                                               |
| Hostname van PI bekijken                                                                                          | `Hostname`                                               |
| Tekstbestand aanpassen                                                                                            | `nano <locatie/bestand>` eventueel met Sudo voor rechten |
| Commando uitvoeren met extra rechten                                                                              | `sudo <command>`                                         |
| Message buffer van de kernel tonen (jaja). Als je Pi bijvoorbeeld te weinig spanning heeft, zie je dat daar staan | `dmesg`                                                  |
| Directory weggooien met alles erin, zonder te vragen                                                              | `rm -r -f <directory>`                                   |
| Uitgebreide lijst van onderdelen in een directory. Ook verborgen directories met een . ervoor bijvoorbeeld        | `ls -al`                                                 |
| Package weggooien                                                                                                 | `sudo apt-get purge samba`                               |

### Updaten van je Pi

| Wat                            | Commando                                                          | Opmerkingen                                                                                                                                                                                                                                                     |
| ------------------------------ | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Update and upgrade raspbian    | `sudo apt-get update && sudo apt-get upgrade`                     | -                                                                                                                                                                                                                                                               |
| Updaten na grotere wijzigingen | `sudo apt-get update --allow-releaseinfo-change`                  | Te gebruiken als er grotere wijzigingen in repo's zijn waar de update over gaat zeuren, denk aan major releases en bij de foutcode `This must be accepted explicitly before updates for this repository can be applied. See apt-secure(8) manpage for details.` |
| Dist. upgrade                  | `sudo apt-get dist-upgrade`                                       | Gebruik je eigenlijk nooit                                                                                                                                                                                                                                      |
| Firmware update                | `sudo apt-get install rpi-update` en vervolgens `sudo rpi-update` | Gebruik je ook bijna nooit                                                                                                                                                                                                                                      |
| Pi-hole updaten                | `pihole -up`                                                      | Lekker snel eenvoudig je pihole updaten                                                                                                                                                                                                                         |
