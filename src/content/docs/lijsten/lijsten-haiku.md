---
title: Haiku's
parent: Lijsten
---

# Haiku's

{{site.data.haiku | size}} kleine Japanse gedichtjes met 17 lettergrepen. 


---

{% for haiku in site.data.haiku %}
{{ haiku | newline_to_br  }}
{% endfor %}