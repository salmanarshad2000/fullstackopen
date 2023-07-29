The user is on the page https://studies.cs.helsinki.fi/exampleapp/spa. The user writes "hello world" in the text box and clicks the submit button. The interaction between the browser and the server is as follows:

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: A JavaScript function intercepts the submit event and<br>(1) appends the note to existing notes in the HTML document<br>(2) posts the note using XML HTTP Request
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa<br>The request has a header called Content-Type: application/json<br>And a body consisting of: {"content": "hello world", "date": ...}
    activate server
    Note over server: Server side script appends the note to data.json<br>and sends an acknowledgement
    server-->>browser: 201 Created
    deactivate server

    Note over browser: The data sent by the server is logged in console, it is not used.
```
