const { SET_COOKIE_HEADER, Cookies } = require('./cookie')

const SESSION_ID_NAME = 'sid'

const sessions = {}

let counter = 0

function Session(id) {
    let _isNew, data = {}
    if (!id) {
        id = Date.now().toString() + (++counter).toString()
        sessions[id] = this
        _isNew = true
    }

    this.getId = () => id
    this.isNew = () => _isNew
    this.isExpired = () => false

    this.putData = (name, value) => data[name] = value
    this.getData = name => data[name]

    this.renew = () => {
        _isNew = true
        data = {}
    }

    this.respond = resp => {
        resp.setHeader(SET_COOKIE_HEADER, id)
        _isNew = false
    }

    if (_isNew)
        Object.freeze(this)
}

Session.from = req => {
    const cookies = Cookies.from(req)
    if (!cookies)
        return new Session()

    const cookie = cookies.getCookieByName(SESSION_ID_NAME)
    if (!cookie)
        return new Session()

    const session = sessions[cookie.getValue()]
    if (!session)
        return new Session()

    if (session.isExpired())
        session.renew()

    return session
}

module.exports = { SESSION_ID_NAME, Session }