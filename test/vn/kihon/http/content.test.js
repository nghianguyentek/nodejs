const { CONTENT_TYPE_HEADER, Content, ContentType } = require('../../../../vn/kihon/http/content')

describe('ContentType', () => {
    test('null data', () => {
        expect(ContentType.from()).toBeFalsy()
    })

    test('text type', () => {
        const req = { headers: {} }
        req.headers[CONTENT_TYPE_HEADER] = 'text/html'

        const contentType = ContentType.from(req)
        expect(contentType.isText()).toBeTruthy()
    })

    test('text type with charset', () => {
        const req = { headers: {} }
        req.headers[CONTENT_TYPE_HEADER] = 'text/html; charset=UTF-8'

        const contentType = ContentType.from(req)
        expect(contentType.isText()).toBeTruthy()
        expect(contentType.getCharset()).toMatch('UTF-8')
    })
})

describe('Content', () => {
    const expectedContentType = 'text/html;charset=UTF-8',
        srcHTMLStr = '<h1>Hello, HTML!</h1>',
        falseHTMLStr = '<h1>Hello, HTML!</h1',
        srcBuf = Buffer.from(srcHTMLStr),
        falseBuf = Buffer.from(falseHTMLStr)

    describe('html', () => {
        test('null data', () => {
            expect(Content.html()).toBeFalsy()
        })

        test('valid data', () => {
            const content = Content.html(srcHTMLStr)
            expect(content).toBeTruthy()
            expect(content.getType().toHeaderValue()).toMatch(expectedContentType)
            expect(content.getData().compare(srcBuf)).toBe(0)
            expect(content.getData().compare(falseBuf)).not.toBe(0)
        })
    })
})