const COOKIE_HEADER = 'cookie'

const securePart = ';Secure',
    httpOnlyPart = ';HttpOnly',
    listSeparator = '; ',
    nameValueSeparator = '='

function Cookies() {
    const cookies = {}

    this.addCookie = (name, value) => cookies[name] = new Cookie(name, value)
    this.getCookieByName = name => cookies[name]
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

        cookies[cookie.getName()] = cookie
    }

    return cookies
}

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
}

Cookie.from = cookieStr => {
    if (!cookieStr)
        return null
    
    const nameValuePair = cookieStr.split(nameValueSeparator)
    if (2 !== nameValuePair.length)
        return null

    return new Cookie(nameValuePair[0], nameValuePair[1])
}

module.exports = { COOKIE_HEADER, Cookies, Cookie }