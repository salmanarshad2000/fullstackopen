 The user opens https://studies.cs.helsinki.fi/exampleapp/spa, a single-page application. The interaction between the browser and the server is as follows:

 ```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    Note over browser: Browser determines it needs main.css<br>and spa.js to display the document
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: Content of main.css
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: Content of spa.js
    deactivate server

    Note over browser: Browser executes spa.js which<br>(1) requests data.json from the server<br>(2) will display the data when it is received<br>(3) call a function when user tries to submit the form
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Content of data.json which contain the new note
    deactivate server

    Note over browser: Browser renders the data (i.e. notes)<br>present in data.json
```
