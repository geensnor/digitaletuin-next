---
title: Dag van de
parent: Lijsten
---

Elke dag wel iets te vieren. Zelf iets toevoegen? Kijk eens op:

- [fijnedagvan.nl](https://www.fijnedagvan.nl/)

- [beleven.org](https://www.beleven.org/feesten/)

We hebben nu {{site.data.dagvande | size}} dagen dus we zijn er nog niet.

---

<table>
    <tr>
        <th>Dag</th>
        <th>Onderwerp</th>
    </tr>
{% for dag in site.data.dagvande %}
    <tr>
        <td>{{ dag.dag }}</td>
        <td>{{ dag.onderwerp }}</td>
    </tr>
{% endfor %}
</table>
