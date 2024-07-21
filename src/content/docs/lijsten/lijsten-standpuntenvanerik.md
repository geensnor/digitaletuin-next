---
title: Erik's standpunten
parent: Lijsten
---

Als het aan Erik lag, was alles beter. Onderstaand een lijst met zijn {{site.data.standpuntenvanerik | size}} standpunten.

---

{% assign i = 0 %}

{% for woord in site.data.standpunten %}
{% increment i %}. {{ woord | newline_to_br  }}
{% endfor %}
