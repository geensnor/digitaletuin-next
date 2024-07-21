---
title: Facebook en Meta schandalen
permalink: /facebook-en-meta-schandalen/
---

Facebook (sinds oktober 2021: Meta) is een verschrikkelijk bedrijf waardoor er met grote regelmaat nieuwe schandalen in de media komen. Telkens is er even ophef, maar ze verdwijnen ook wel snel naar de achtergrond. De lijst hieronder is een poging om deze schandalen te verzamelen zodat er een gruwelijk overzicht van Facebook ellende ontstaat.

Mark Zuckerberg is overigens doodsbang geworden van dit overzicht. Nadat het een maand online stond, heeft hij de naam van z'n bedrijf gewijzigd in een poging om onze bezoekers om de (digitale) tuin te leiden. We zitten er gelukkig bovenop en gebruiken nu ook de nieuwe naam: Meta.

We hebben inmiddels {{site.data.facebook-schandalen | size}} schandalen en het loopt nog steeds op!

|Datum|Schandaal|Bron|
|-----|---------|---|{% for fb-schandaal in site.data.facebook-schandalen %}
|{{ fb-schandaal.datum }}|{{ fb-schandaal.schandaal }}|[{{ fb-schandaal.bron }}]({{ fb-schandaal.url }})|{% endfor %}
