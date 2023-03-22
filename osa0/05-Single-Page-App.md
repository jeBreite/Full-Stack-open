---
title: '0.5: Single Page App'
author: Jenni Breite
---

```mermaid

sequenceDiagram
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser: HTML document
   
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: CSS stylesheet
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->>browser: JavaScript-file
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: json-file - XMLHttpRequest (XHR)
    
    browser->>server: GET https://studies.cs.helsinki.fi/favicon.ico
    server-->>browser: HTML document
    
```
