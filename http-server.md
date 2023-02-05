# HTTP Server Requirements

## Functional requirements

- [Serving content](#serving-content)
- [Routing](#routing)
- State management

### Serving content

Serving content is a function to deliver an appropriate content (i.e., a [HTTP Response message](#response-message)) based on the received request. Generally, the response message will be one of these:

- A [rejection](#rejection-message)
- A [redirection](#redirection-message)
- The expected resource(#resource-message)

##### NOT_FOUND_RESPONSE_MESSAGE

### Routing

Routing is a function to deliver a HTTP Request message exactly to a registered [message handler](#message-handler). If no handler was found, returns [NOT_FOUND_RESPONSE_MESSAGE]().

#### Message handler

## Non-functional requirements

### Security

- CSRF prevention

### Response messages

*Response Message Interface*

```
{
    "code": a-response-status-code,
    "headers": a-headers-object
    "content": a-content-object
}
```

#### NOT_FOUND_RESPONSE_MESSAGE

*Default: a Bad Request HTTP Response message*