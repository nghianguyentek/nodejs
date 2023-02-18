const { BRAND_HEADER, AGENT_HEADER, UserAgent } = require('../../../../vn/kihon/http/user-agent')

test('user-agent:useragent:from:valid', () => {
    expect(UserAgent.from()).toBeNull()

    const userAgent = UserAgent.from({ headers: {} }),
       emptyUserAgent = new UserAgent()

    expect(userAgent.equals(emptyUserAgent)).toBeTruthy()
})

test('user-agent:useragent:from:hasBrandNoPlatform', () => {
    const req = { headers: {} }
    req.headers[BRAND_HEADER] = '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"'

    const userAgent = UserAgent.from(req),
        expectedResult = new UserAgent('Microsoft Edge', '109')

    expect(userAgent.equals(expectedResult)).toBeTruthy()
})

test('user-agent:useragent:from:hasPlatformNoBrand', () => {
    const req = { headers: {} }
    req.headers[AGENT_HEADER] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.70'

    const userAgent = UserAgent.from(req),
        expectedResult = new UserAgent(null, null, 'Windows NT 10.0; Win64; x64')

    expect(userAgent.equals(expectedResult)).toBeTruthy()
})

test('user-agent:useragent:from:hasBrandAndPlatform', () => {
    const req = { headers: {} }
    req.headers[BRAND_HEADER] = '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"'
    req.headers[AGENT_HEADER] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.70'

    const userAgent = UserAgent.from(req),
        expectedResult = new UserAgent('Microsoft Edge', '109', 'Windows NT 10.0; Win64; x64')

    expect(userAgent.equals(expectedResult)).toBeTruthy()
})

test('user-agent:useragent:from:hasBrandAndPlatform:lessThan1ms', () => {
    const req = { headers: {} }
    req.headers[BRAND_HEADER] = '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"'
    req.headers[AGENT_HEADER] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.70'

    const start = Date.now()
    UserAgent.from(req)
    const end = Date.now()

    expect(end - start).toBeLessThanOrEqual(1)
})