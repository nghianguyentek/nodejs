const BRAND_HEADER = 'sec-ch-ua',
    AGENT_HEADER = 'user-agent'

const platformHeader = 'sec-ch-ua-platform',
    itemSeparator = ',',
    brandVersionSeparator = '";v="',
    systemInfoPrefix = '(',
    systemInfoSuffix = ')'

function getBrand(req) {
    const headerValue = req.headers[BRAND_HEADER];
    if (!headerValue)
        return null

    const brandList = headerValue.split(itemSeparator)
    if (3 !== brandList.length) {
        queueMicrotask(() => console.info(`Unrecognized 'sec-ch-ua' header pattern '${headerValue}'`))
        return null
    }

    const brandVersionPair = brandList[1].split(brandVersionSeparator)
    if (2 !== brandVersionPair.length) {
        queueMicrotask(() => console.warn(`Unrecognized 'sec-ch-ua' header pattern '${headerValue}'`))
        return null
    }

    return { 
        brand: brandVersionPair[0].slice(2),
        brandVersion: brandVersionPair[1].slice(0, brandVersionPair[1].length - 1)
    }
}

function getPlatform(req) {
    let headerValue = req.headers[AGENT_HEADER]
    if (!headerValue) {
        headerValue = req.headers[platformHeader]
        if (headerValue)
            return headerValue.slice(1, headerValue.length - 1)

        return null
    }
        
    let start = headerValue.indexOf(systemInfoPrefix, 12);
    if (-1 === start) {
        queueMicrotask(() => console.info(`Unrecognized 'user-agent' header pattern '${headerValue}'`))
        return null
    }

    let end = headerValue.indexOf(systemInfoSuffix, ++start);
    if (-1 === end) {
        queueMicrotask(() => console.info(`Unrecognized 'user-agent' header pattern '${headerValue}'`))
        return null
    }

    return headerValue.slice(start, end)
}

function UserAgent(brand = null, brandVersion = null, platform = null) {
    this.getBrand = () => brand
    this.getBrandVersion = () => brandVersion
    this.getPlatform = () => platform
    this.equals = other => {
        if (!(other instanceof UserAgent))
            return false
        
        if ((!brand && other.getBrand()) || (brand && !other.getBrand()))
            return false

        if (brand && other.getBrand() && brand !== other.getBrand())
            return false

        if ((!brandVersion && other.getBrandVersion()) || (brandVersion && !other.getBrandVersion()))
            return false

        if (brandVersion && other.getBrandVersion() && brandVersion !== other.getBrandVersion())
            return false

        if ((!platform && other.getPlatform()) || (platform && !other.getPlatform()))
            return false

        if (platform && other.getPlatform() && platform !== other.getPlatform())
            return false

        return true
    }

    Object.freeze(this)
}

UserAgent.from = req => {
    if (!req || !req.headers)
        return null

    const brandInfo = getBrand(req), 
        platform = getPlatform(req)

    if (brandInfo)
        return new UserAgent(brandInfo.brand, brandInfo.brandVersion, platform)

    return new UserAgent(null, null, platform)
}

module.exports = { BRAND_HEADER, AGENT_HEADER, UserAgent }