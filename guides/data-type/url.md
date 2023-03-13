# URL (Uniform Resource Locator)

An address is used to identify a resource on a target host, especially in a computer network.

## Structure

`scheme://username:password@host:port/path?querystring#fragment`

where:

|Part|Required|Description|
|-|:-:|-|
|`scheme`|Y| the protocol, such as `http`, `https`, etc.|
|`username`|N|the username is used to login to the target host|
|`password`|N|the password is used to login to the target host|
|`host`|Y|the domain name (aka., host name) or IP address of the target host, such as `127.0.0.1`, `localhost`, `www.google.com`, `google.com`, etc.|
|`port`|Y|If missing, it means the default port of the protocol is used. For example, `80` is the default port of the `http` protocol, while `443` is the default port of the `https` protocol.|
|`path`|Y|the path of the request resource on the target host. It can be a path of a directory or file (with or without extension). For example, in the URL `https://github.com/nghianguyentek/nodejs`, the path is `/nghianguyentek/nodejs`. In the case of `https:/google.com`, the URL is automatically added the path `/`.
|`querystring`|N|Begin with an `?` and follow by name-value pairs. While name and value are separated by `=`, pairs are separated by `&`|
|`fragment`|N|Begin with an `#` and is used to indicate the internal section of a document (often be the `id` of an `<a>` tag in a HTML document)

### Examples

#### 1. When we search `url` on Google.com, the URL could be `https://www.google.com/search?q=url&oq=url&aqs=edge..69i57j69i60l5.18490j0j1&sourceid=chrome&ie=UTF-8`

From the URL, we can get:
- `scheme`: `https`
- `host`: `www.google.com`
- `port`: `443`, implicitly
- `path`: `/search`
- `querystring`: `?q=url&oq=url&aqs=edge..69i57j69i60l5.18490j0j1&sourceid=chrome&ie=UTF-8` that has five query parameters `q`, `oq`, `aqs`, `sourceid`, and `ie` and their values.

## URL object in JavaScript

### Properties

- `href`: the string represents the whole URL
- `pathname`: the `path` part of the URL.
- `searchParams`: an [URLSearchParams](url-search-params.md) object contains the query parameters