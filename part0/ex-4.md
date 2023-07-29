The user is on the page https://studies.cs.helsinki.fi/exampleapp/notes. The user writes "hello world" in the text box and clicks the submit button. The interaction between the browser and the server is as follows:

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note<br>The request has the following body:<br>note=hello+world
    activate server
    Note over server: Server side script appends the note to data.json<br>and sends a redirect instruction
    server-->>browser: 302 Found<br>Location: https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server

    Note over browser: Redirect is not a document, it is an instruction<br>that the browser must follow
    browser->>server: https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    Note over browser: Browser determines it needs main.css<br>and main.js to display the document
    browser->>server: https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: Content of main.css
    deactivate server

    browser->>server: https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: Content of main.js
    deactivate server

    Note over browser: Browser executes main.js which<br>(1) requests data.json from the server<br>(2) call a function when data is received
    browser->>server: https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Content of data.json which contain the new note
    deactivate server

    Note over browser: Browser triggers the callback function<br>The function renders the notes present in data.json
```
