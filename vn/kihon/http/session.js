let sid = 'sid',
    secure = true,
    httpOnly = true,
    sidLength = sid.length + 1

function generateHeaderValue(id) {
    let headerValue = `${sid}=${id}`

    if (secure)
        headerValue += securePart

    if (httpOnly)
        headerValue += httpOnlyPart

    return headerValue
}

function generateSessionId() {
    return Date.now().toString();
}

let sessionIdGenerator = generateSessionId,
    headerValueGenerator = generateHeaderValue

const sessions = {},
    securePart = ';Secure',
    httpOnlyPart = ';HttpOnly',
    listSeparator = ';',
    nameValueSeparator = '='

function Session(id) {
    let isNew = id === undefined,
        data = {}

    if (isNew) {
        id = sessionIdGenerator()
        sessions[id] = this
    }

    this.isNew = () => isNew
    this.getId = () => id
    this.getHeaderValue = () => headerValueGenerator(id)
    this.renew = () => {
        isNew = true
        data = {}
    }
}

exports.from = req => {
    let cookieHeaderValue = req.headers['cookie']
    if (!cookieHeaderValue)
        return new Session()

    let start = cookieHeaderValue.indexOf(sid)
    if (-1 === start)
        return new Session()

    let end = cookieHeaderValue.indexOf(listSeparator, start + sidLength)
    if (-1 === end)
        end = cookieHeaderValue.length

    start = cookieHeaderValue.lastIndexOf(nameValueSeparator, end)
    if (-1 === start)
        return new Session()

    cookieHeaderValue = cookieHeaderValue.slice(start + 1, end).trim()
    const session = sessions[cookieHeaderValue]
    if (!session)
        return new Session()

    return session
}