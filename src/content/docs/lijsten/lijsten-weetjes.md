---
title: Weetjes
parent: Lijsten
---

Wist je dat we al {{site.data.weetjes | size}} weetjes hebben!

---

{% assign i = 1 %}

{% for weetje in site.data.weetjes %}
{% increment i %}. {{ weetje | newline_to_br  }}
{% endfor %}
