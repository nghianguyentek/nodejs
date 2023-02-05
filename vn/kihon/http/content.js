const CONTENT_TYPE_HEADER = 'Content-Type',
    CONTENT_ENCODING_HEADER = 'Content-Encoding'

const contentTypeHeader = 'content-type',
    contentEncodingHeader = 'content-encoding',
    parameterSeparator = ';',
    typeSubtypeSeparator = '/',
    nameValueSeparator = '=',
    charsetName = 'charset',
    textType = 'text',
    jsonType = 'json',
    multipartType = 'multipart',
    defaultCharset = 'UTF-8'

function MediaType(value, type, subtype, charset) {
    const _isText = textType === type,
        _isMultipart = multipartType === type,
        _isJSON = jsonType === subtype

    if (_isText && !charset)
        charset = defaultCharset

    this.isText = () => _isText
    this.isMultipart = () => _isMultipart
    this.isJSON = () => _isJSON
    this.getCharset = () => charset

    Object.freeze(this)
}

MediaType.from = str => {
    const paramsList = str.split(parameterSeparator)
    if (2 < paramsList.length) {
        queueMicrotask(() => console.log(`Unrecognized media type '${str}'`))
        return null
    }

    const value = paramsList[0]
    const typeSubtypePair = value.split(typeSubtypeSeparator)
    if (2 !== typeSubtypePair.length) {
        queueMicrotask(() => console.log(`Invalid media type '${str}'`))
        return null
    }

    if (1 === paramsList.length)
        return new MediaType(value, typeSubtypePair[0], typeSubtypePair[1])

    const nameValuePair = paramsList[1].split(nameValueSeparator)
    if (2 !== nameValuePair.length) {
        queueMicrotask(() => console.log(`Invalid media type '${str}'`))
        return null
    }

    if (charsetName !== nameValuePair[0]) {
        queueMicrotask(() => console.log(`Unrecognized media type '${str}'`))
        return null
    }

    return new MediaType(value, typeSubtypePair[0], typeSubtypePair[1], nameValuePair[1])
}

function ContentType(mediaType) {
    this.isText = () => mediaType.isText()
    this.isMultipart = () => mediaType.isMultipart()
    this.isJSON = () => mediaType.isJSON()
    this.getCharset = () => mediaType.getCharset()

    Object.freeze(this)
}

ContentType.from = req => {
    if (!req || !req.headers)
        return null

    const headerValue = req.headers[contentTypeHeader]
    if (!headerValue)
        return null

    const mediaType = MediaType.from(headerValue)
    if (!mediaType)
        return null

    return new ContentType(mediaType)
}

function ContentEncoding(value) {
    Object.freeze(this)
}

ContentEncoding.from = req => {
    if (!req && !req.headers)
        return null

    const headerValue = req.headers[contentEncodingHeader]
    if (!headerValue)
        return null
}

module.exports = { CONTENT_TYPE_HEADER, ContentType }