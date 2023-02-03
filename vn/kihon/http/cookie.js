const COOKIE_HEADER = 'cookie',
    SET_COOKIE_HEADER = 'Set-Cookie'

const securePart = ';Secure',
    httpOnlyPart = ';HttpOnly',
    listSeparator = '; ',
    nameValueSeparator = '='

function Cookie(name, value, secure = true, httpOnly = true) {
    this.getName = () => name
    this.getValue = () => value
    this.toHeaderValue = () => {
        let ret = name + '=' + value
        if (secure)
            ret += securePart

        if (httpOnly)
            ret += httpOnlyPart

        return ret
    }

    Object.freeze(this)
}

Cookie.from = cookieStr => {
    if (!cookieStr)
        return null

    const nameValuePair = cookieStr.split(nameValueSeparator)
    if (2 !== nameValuePair.length)
        return null

    return new Cookie(nameValuePair[0], nameValuePair[1])
}

function Cookies() {
    const cookies = {}

    this.addCookie = cookie => cookies[cookie.getName()] = cookie
    this.getCookieByName = name => cookies[name]

    Object.freeze(this)
}

Cookies.from = req => {
    if (!req || !req.headers)
        return null

    const headerValue = req.headers[COOKIE_HEADER]
    if (!headerValue)
        return null
    
    const cookies = new Cookies()
    const list = headerValue.split(listSeparator)
    for (const item of list) {
        const cookie = Cookie.from(item)
        if (!cookie) {
            queueMicrotask(() => console.info(`Invalid cookie string '${item}'`))
            continue
        }

        cookies.addCookie(cookie)
    }

    return cookies
}

module.exports = { COOKIE_HEADER, SET_COOKIE_HEADER, Cookies, Cookie }