---
title: RSS Feeds
parent: Abonnementen
---

# RSS Feeds

Hieronder staan de RSS feeds die we lezen, per categorie. Het overzicht wordt gegeneereerd vanuit [Feedly](https://feedly.com).

<br>
<ul>
{% for group in site.data.feeds.opml.body.outline %}
    <li>{{ group.title }}</li>
    {% if group.outline.title %}
        <ul>
            <li><a target="_blank" href="{{ group.outline.htmlUrl }}">{{ group.outline.title }}</a></li>
        </ul>
    {% else %}
        <ul>
        {% for source in group.outline %}
            <li><a target="_blank" href="{{ source.htmlUrl }}">{{ source.title }}</a></li>
        {% endfor %}
        </ul>
    {% endif %}
{% endfor %}
</ul>
