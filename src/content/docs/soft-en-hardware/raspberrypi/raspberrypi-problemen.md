---
title: Pi problemen
---

# Problemen

En hoe je ze op kan lossen...

## Je SSH client verwacht op het betreffende IP adres een ander apparaat

Dan krijg je deze error
`WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!`

Dan moet je even dit doen
`ssh-keygen -R <ip van het apparaat waar je naartoe wil ssh-en>`
