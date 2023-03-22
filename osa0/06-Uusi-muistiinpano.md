---
title: '0.6: Uusi muistiinpano (Single Page App)'
author: Jenni Breite
---

```mermaid

sequenceDiagram
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->>browser: json-file - XMLHttpRequest (XHR)
    
```
