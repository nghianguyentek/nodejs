const { SESSION_ID_NAME, Session } = require('../../../../vn/kihon/http/session'),
    { COOKIE_HEADER } = require('../../../../vn/kihon/http/cookie')

const dataName = 'dataName',
    dataValue = 'dataValue'

let sessionId;

test('new session', () => {
    const session = Session.from()
    expect(session.isNew()).toBeTruthy()

    sessionId = session.getId()
    session.respond({ setHeader: (name, value) => {} })
    expect(session.isNew()).toBeFalsy()

    session.putData(dataName, dataValue)
    expect(session.getData(dataName)).toMatch(dataValue)
})

test('new session <= 1ms', () => {
    const start = Date.now()
    Session.from()
    const end = Date.now()
    expect(end - start).toBeLessThanOrEqual(1)
})

test('current session', () => {
    const req = { headers: {} }
    req.headers[COOKIE_HEADER] = `${SESSION_ID_NAME}=${sessionId}`

    const session = Session.from(req)
    expect(session.isNew()).toBeFalsy()
    expect(session.getData(dataName)).toMatch(dataValue)
})

test('current session <= 1ms', () => {
    const req = { headers: {} }
    req.headers[COOKIE_HEADER] = `${SESSION_ID_NAME}=${sessionId}`

    const start = Date.now()
    Session.from(req)
    const end = Date.now()
    expect(end - start).toBeLessThanOrEqual(1)
})

test('renew', () => {
    const req = { headers: {} }
    req.headers[COOKIE_HEADER] = `${SESSION_ID_NAME}=${sessionId}`

    const session = Session.from(req)
    expect(session.isNew()).toBeFalsy()
    expect(session.getData(dataName)).toMatch(dataValue)

    session.renew()
    expect(session.isNew()).toBeTruthy()
    expect(session.getData(dataName)).toBeFalsy()
})

test('renew <= 1ms', () => {
    const req = { headers: {} }
    req.headers[COOKIE_HEADER] = `${SESSION_ID_NAME}=${sessionId}`

    const session = Session.from(req)

    const start = Date.now()
    session.renew()
    const end = Date.now()
    expect(end - start).toBeLessThanOrEqual(1)
    expect(session.isNew()).toBeTruthy()
    expect(session.getData(dataName)).toBeFalsy()
})