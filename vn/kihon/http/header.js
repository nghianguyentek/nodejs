const BRAND_HEADER = 'sec-ch-ua',
    AGENT_HEADER = 'user-agent',
    platformHeader = 'sec-ch-ua-platform',
    listItemSeparator = ',',
    brandVersionPairSeparator = '";v="',
    systemInfoPrefix = '(',
    systemInfoSuffix = ')'
 
function getBrand(req, userAgent) {
    const headerValue = req.headers[BRAND_HEADER];
    if (!headerValue)
        return

    const brandList = headerValue.split(listItemSeparator)
    if (3 !== brandList.length) {
        console.warn(`Unrecognized 'sec-ch-ua' header pattern '${headerValue}'`)
        return
    }

    const brandVersionPair = brandList[1].split(brandVersionPairSeparator)
    if (2 !== brandVersionPair.length) {
        console.warn(`Unrecognized 'sec-ch-ua' header pattern '${headerValue}'`)
        return
    }

    userAgent.brand = brandVersionPair[0].slice(2)
    userAgent.brandVersion = brandVersionPair[1].slice(0, brandVersionPair[1].length - 1)
}

function getPlatform(req, userAgent) {
    let headerValue = req.headers[AGENT_HEADER]
    if (!headerValue) {
        headerValue = req.headers[platformHeader]
        if (headerValue)
            userAgent.platform = headerValue.slice(1, headerValue.length - 1)

        return
    }
        
    let start = headerValue.indexOf(systemInfoPrefix, 12);
    if (-1 === start) {
        console.warn(`Unrecognized 'user-agent' header pattern '${headerValue}'`)
        return
    }

    let end = headerValue.indexOf(systemInfoSuffix, ++start);
    if (-1 === end) {
        console.warn(`Unrecognized 'user-agent' header pattern '${headerValue}'`)
        return
    }

    userAgent.platform = headerValue.slice(start, end)
}

function getUserAgent(req) {
    const userAgent = { toString: function() { return JSON.stringify(this) } }

    if (!req || !req.headers)
        return userAgent

    getBrand(req, userAgent)
    getPlatform(req, userAgent)

    return userAgent
}

module.exports = { 
    AGENT_HEADER,
    BRAND_HEADER,
    getUserAgent
}