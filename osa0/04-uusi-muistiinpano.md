---
title: '0.4: uusi muistiinpano'
author: Jenni Breite
---
```mermaid

sequenceDiagram

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server-->>browser: HTML document
   
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: HTML document
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: CSS stylesheet
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>browser: JavaScript-file
    
    browser->>server: GET https://studies.cs.helsinki.fi/favicon.ico
    server-->>browser: HTML document
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: XMLHttpRequest (XHR)
    
```

