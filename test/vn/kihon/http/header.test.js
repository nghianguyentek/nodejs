const { 
    AGENT_HEADER, 
    BRAND_HEADER, 
    getUserAgent 
} = require('../../../../vn/kihon/http/header')

describe('testGetUserAgent', () => {
    test('undefined req', () => {
        const ret = getUserAgent()
        expect(ret).not.toBeNull()

        const retPropNames = Object.getOwnPropertyNames(ret)
        expect(retPropNames.length).toBe(1)
        expect(retPropNames[0]).toMatch('toString')
    })

    test('has brand no platform', () => {
        const brand = 'Microsoft Edge',
            brandVersion = '109',
            req = { headers: {} }

        req.headers[BRAND_HEADER] = `"Not_A Brand";v="99", "${brand}";v="${brandVersion}", "Chromium";v="109"`

        const ret = getUserAgent(req)
        expect(ret).not.toBeNull()

        const retPropNames = Object.getOwnPropertyNames(ret)
        expect(retPropNames.length).toBe(3)
        expect(retPropNames[0]).toMatch('toString')
        expect(retPropNames[1]).toMatch('brand')
        expect(retPropNames[2]).toMatch('brandVersion')
        expect(ret[retPropNames[1]]).toMatch(brand)
        expect(ret[retPropNames[2]]).toMatch(brandVersion)
    })

    test('no brand has platform', () => {
        const platform = 'Windows NT 10.0; Win64; x64',
            req = { headers: {} }

        req.headers[AGENT_HEADER] = `Mozilla/5.0 (${platform}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.70`

        const ret = getUserAgent(req)

        expect(ret).not.toBeNull()

        const retPropNames = Object.getOwnPropertyNames(ret)
        expect(retPropNames.length).toBe(2)
        expect(retPropNames[0]).toMatch('toString')
        expect(retPropNames[1]).toMatch('platform')
        expect(ret[retPropNames[1]]).toMatch(platform)
    })

    test('has brand has platform', () => {
        const brand = 'Microsoft Edge',
            brandVersion = '109',
            platform = 'Windows NT 10.0; Win64; x64',
            req = { headers: {} }

        req.headers[BRAND_HEADER] = `"Not_A Brand";v="99", "${brand}";v="${brandVersion}", "Chromium";v="109"`
        req.headers[AGENT_HEADER] = `Mozilla/5.0 (${platform}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.70`

        const ret = getUserAgent(req)

        expect(ret).not.toBeNull()

        const retPropNames = Object.getOwnPropertyNames(ret)
        expect(retPropNames.length).toBe(4)
        expect(retPropNames[0]).toMatch('toString')
        expect(retPropNames[1]).toMatch('brand')
        expect(retPropNames[2]).toMatch('brandVersion')
        expect(retPropNames[3]).toMatch('platform')
        expect(ret[retPropNames[1]]).toMatch(brand)
        expect(ret[retPropNames[2]]).toMatch(brandVersion)
        expect(ret[retPropNames[3]]).toMatch(platform)
    })

    test('execution time <= 1ms', () => {
        const brand = 'Microsoft Edge',
            brandVersion = '109',
            platform = 'Windows NT 10.0; Win64; x64',
            req = { headers: {} }

        req.headers[BRAND_HEADER] = `"Not_A Brand";v="99", "${brand}";v="${brandVersion}", "Chromium";v="109"`
        req.headers[AGENT_HEADER] = `Mozilla/5.0 (${platform}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.70`

        const start = Date.now()
        const ret = getUserAgent(req)
        const end = Date.now()

        expect(end - start).toBeLessThanOrEqual(1)
    })
})
