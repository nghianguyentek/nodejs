const { SESSION_ID_NAME, from } = require('../../../../vn/kihon/http/session'),
    { COOKIE_HEADER } = require('../../../../vn/kihon/http/cookie')

const dataName = 'dataName',
    dataValue = 'dataValue'

let sessionId;

test('session:from:new', () => {
    const session = from()
    expect(session.isNew()).toBeTruthy()

    sessionId = session.getId()
    session.respond({ setHeader: (name, value) => {} })
    expect(session.isNew()).toBeFalsy()

    session.putData(dataName, dataValue)
    expect(session.getData(dataName)).toMatch(dataValue)
})

test('session:from:lessThan1ms', () => {
    const start = Date.now()
    from()
    const end = Date.now()
    expect(end - start).toBeLessThanOrEqual(1)
})

test('session:from:existed', () => {
    const req = { headers: {} }
    req.headers[COOKIE_HEADER] = `${SESSION_ID_NAME}=${sessionId}`

    const session = from(req)
    expect(session.isNew()).toBeFalsy()
    expect(session.getData(dataName)).toMatch(dataValue)
})

test('session:from:existed:lessThan1ms', () => {
    const req = { headers: {} }
    req.headers[COOKIE_HEADER] = `${SESSION_ID_NAME}=${sessionId}`

    const start = Date.now()
    from(req)
    const end = Date.now()
    expect(end - start).toBeLessThanOrEqual(1)
})

test('session:from:existed:then:renew', () => {
    const req = { headers: {} }
    req.headers[COOKIE_HEADER] = `${SESSION_ID_NAME}=${sessionId}`

    const session = from(req)
    expect(session.isNew()).toBeFalsy()
    expect(session.getData(dataName)).toMatch(dataValue)

    session.renew()
    expect(session.isNew()).toBeTruthy()
    expect(session.getData(dataName)).toBeFalsy()
})

test('session:from:existed:then:renew:lessThan1ms', () => {
    const req = { headers: {} }
    req.headers[COOKIE_HEADER] = `${SESSION_ID_NAME}=${sessionId}`

    const session = from(req)

    const start = Date.now()
    session.renew()
    const end = Date.now()
    expect(end - start).toBeLessThanOrEqual(1)
    expect(session.isNew()).toBeTruthy()
    expect(session.getData(dataName)).toBeFalsy()
})