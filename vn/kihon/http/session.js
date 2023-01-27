const config = { sid: 'sid', 
    domain: undefined,
    path: undefined,
    secure: true,
    httpOnly: true
}

const domainPart = ';Domain='
    pathPart = ';Path=',
    securePart = ';Secure',
    httpOnlyPart = ';HttpOnly',
    listSeparator = '; ',
    nameValueSeparator = '='

function newSessionId() {
    return Date.now().toString();
}

function Session(cookies) {
    let id = cookies[config.sid],
        setCookieValue

    const isNew = id === undefined
    if (isNew) {
        id = newSessionId()
        setCookieValue = `${config.sid}=${id}`;

        if (config.domain)
            setCookieValue += `${domainPart}${config.domain}` 
        
        if (config.path)
            setCookieValue += `${pathPart}${config.domain}` 

        if (config.secure)
            setCookieValue += securePart

        if (config.httpOnly)
            setCookieValue += httpOnlyPart
    }


    this.isNew = () => isNew
    this.getId = () => id
    this.getSetCookieHeaderValue = () => setCookieValue
}

exports.from = req => {
    let header = req.headers['cookie']
    if (!header)
        return null

    header = header.split(listSeparator)
    const cookies = {};
    for (let cookie of header) {
        cookie = cookie.split(nameValueSeparator)
        cookies[cookie[0]] = cookie[1]
    }

    return new Session(cookies, resp);
}