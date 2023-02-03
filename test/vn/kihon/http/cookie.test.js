const { COOKIE_HEADER, Cookies, Cookie } = require('../../../../vn/kihon/http/cookie')

describe('Cookies test cases', () => {
    test('null data', () => {
        expect(Cookies.from()).toBeFalsy()
        expect(Cookies.from({ headers: {} })).toBeFalsy()
    })

    test('valid data with warning', () => {
        const req = { headers: {} } 
        req.headers[COOKIE_HEADER] = 'HSID=AHUSIISYDeij0dAI7; SSID=AX1xtJObsL0UFAkD0; APISID=sZOvFqIIK9vrA51F/AprNiV0-e_Q4kFlQc; SAPISID=9dbVMg1iRfDZsXCw/AqCLXBOwZasVq28w2; __Secure-1PAPISID=9dbVMg1iRfDZsXCw/AqCLXBOwZasVq28w2; __Secure-3PAPISID=9dbVMg1iRfDZsXCw/AqCLXBOwZasVq28w2; OGPC=19026797-1:19026792-1:19015969-1:748494848-2:19010599-1:879517696-1:; OGP=-19026797:-19026792:-19015969:-19010599:-748494848:-879517696:; AEC=ARSKqsLNsUpfRk4IKykcl9Y8vMXv1yYP0uSxzs1kOHjzCwc42ZXcZWHaTNg; SID=TggqCP6rr097MwqHgVVElJ7wS64C9zBMlpqxLfcW6Dh2U8YDGQW9AgA_FJfK4ab1KB6iGA.; __Secure-1PSID=TggqCP6rr097MwqHgVVElJ7wS64C9zBMlpqxLfcW6Dh2U8YDG4o0SjTHSt-UUDaERpfMaA.; __Secure-3PSID=TggqCP6rr097MwqHgVVElJ7wS64C9zBMlpqxLfcW6Dh2U8YD6I3ttmVrLNfgzF2JPAgybQ.; NID=511=bURSezn6s3kUOl9mm03JgZOc4m9hNPfirVEwMdFRx1cLGyflTh267ul0gKZ8_K0bTTQWeD9zv_iFLCckRC9MvXzBEGaOg9RXxveVTF_EX_1geZMVvaZSPeuFLhepbbs7GkdKpdOs9cWWmrpqHtCCPzsruxGgKASFbv2WudtcrFxsEY7y73BPtwJUXBw-1a4_05Mey62mbfwcoJl0XQdE_IfhUGYKGF-IYzD35dPP1ZTIS6jugv3aajnq16m0kVfgA3Q6lSUCeWjoJseIuuD3dMOT55inysDtDbLPMnyEnD521XzFF8OyQGZ-T30Eaf0DLr75ZabUNaxCCIH2lwPENaELGBbrfRCO5azYUVKAGLPqW8nM7uLPB0qkO-amSkyc4dM5yd_u3CjQuzZ2wiOfJZ8p7A; 1P_JAR=2023-02-03-11; SIDCC=AFvIBn8DM-wc44-uFEZDRMtYpKBTsMsbe0gPcrPSxP9hwiMd-ZeN9xvzwnXZ7B1Vqd90mPm0pJLk; __Secure-1PSIDCC=AFvIBn-UxlQ5XmkRJJ0HMgiAq-yQl_M05lVMtH4Lw7ruzYSnlhgV7M12FTcVcH6Kdo3mgyaMxXM; __Secure-3PSIDCC=AFvIBn-xII_dUq__LmYkRxAhpmHJtbXW4l0VUy8UPK-ZjISTXm7PnycBIe34HW1IaFF56KAm-P4'
        
        const cookies = Cookies.from(req)

        expect(cookies).toBeTruthy()
        expect(cookies.getCookieByName('HSID')).toBeTruthy()
        expect(cookies.getCookieByName('HSID').getValue()).toMatch('AHUSIISYDeij0dAI7')
    })

    test('valid data', () => {
        const req = { headers: {} } 
        req.headers[COOKIE_HEADER] = 'HSID=AHUSIISYDeij0dAI7; SSID=AX1xtJObsL0UFAkD0; APISID=sZOvFqIIK9vrA51F/AprNiV0-e_Q4kFlQc; SAPISID=9dbVMg1iRfDZsXCw/AqCLXBOwZasVq28w2; __Secure-1PAPISID=9dbVMg1iRfDZsXCw/AqCLXBOwZasVq28w2; __Secure-3PAPISID=9dbVMg1iRfDZsXCw/AqCLXBOwZasVq28w2; OGPC=19026797-1:19026792-1:19015969-1:748494848-2:19010599-1:879517696-1:; OGP=-19026797:-19026792:-19015969:-19010599:-748494848:-879517696:; AEC=ARSKqsLNsUpfRk4IKykcl9Y8vMXv1yYP0uSxzs1kOHjzCwc42ZXcZWHaTNg; SID=TggqCP6rr097MwqHgVVElJ7wS64C9zBMlpqxLfcW6Dh2U8YDGQW9AgA_FJfK4ab1KB6iGA.; __Secure-1PSID=TggqCP6rr097MwqHgVVElJ7wS64C9zBMlpqxLfcW6Dh2U8YDG4o0SjTHSt-UUDaERpfMaA.; __Secure-3PSID=TggqCP6rr097MwqHgVVElJ7wS64C9zBMlpqxLfcW6Dh2U8YD6I3ttmVrLNfgzF2JPAgybQ.; 1P_JAR=2023-02-03-11; SIDCC=AFvIBn8DM-wc44-uFEZDRMtYpKBTsMsbe0gPcrPSxP9hwiMd-ZeN9xvzwnXZ7B1Vqd90mPm0pJLk; __Secure-1PSIDCC=AFvIBn-UxlQ5XmkRJJ0HMgiAq-yQl_M05lVMtH4Lw7ruzYSnlhgV7M12FTcVcH6Kdo3mgyaMxXM; __Secure-3PSIDCC=AFvIBn-xII_dUq__LmYkRxAhpmHJtbXW4l0VUy8UPK-ZjISTXm7PnycBIe34HW1IaFF56KAm-P4'
        
        const cookies = Cookies.from(req)

        expect(cookies).toBeTruthy()
        expect(cookies).toBeTruthy()
        expect(cookies.getCookieByName('HSID').getValue()).toMatch('AHUSIISYDeij0dAI7')
    })

    test('<= 1ms', () => {
        const req = { headers: {} } 
        req.headers[COOKIE_HEADER] = 'HSID=AHUSIISYDeij0dAI7; SSID=AX1xtJObsL0UFAkD0; APISID=sZOvFqIIK9vrA51F/AprNiV0-e_Q4kFlQc; SAPISID=9dbVMg1iRfDZsXCw/AqCLXBOwZasVq28w2; __Secure-1PAPISID=9dbVMg1iRfDZsXCw/AqCLXBOwZasVq28w2; __Secure-3PAPISID=9dbVMg1iRfDZsXCw/AqCLXBOwZasVq28w2; OGPC=19026797-1:19026792-1:19015969-1:748494848-2:19010599-1:879517696-1:; OGP=-19026797:-19026792:-19015969:-19010599:-748494848:-879517696:; AEC=ARSKqsLNsUpfRk4IKykcl9Y8vMXv1yYP0uSxzs1kOHjzCwc42ZXcZWHaTNg; SID=TggqCP6rr097MwqHgVVElJ7wS64C9zBMlpqxLfcW6Dh2U8YDGQW9AgA_FJfK4ab1KB6iGA.; __Secure-1PSID=TggqCP6rr097MwqHgVVElJ7wS64C9zBMlpqxLfcW6Dh2U8YDG4o0SjTHSt-UUDaERpfMaA.; __Secure-3PSID=TggqCP6rr097MwqHgVVElJ7wS64C9zBMlpqxLfcW6Dh2U8YD6I3ttmVrLNfgzF2JPAgybQ.; 1P_JAR=2023-02-03-11; SIDCC=AFvIBn8DM-wc44-uFEZDRMtYpKBTsMsbe0gPcrPSxP9hwiMd-ZeN9xvzwnXZ7B1Vqd90mPm0pJLk; __Secure-1PSIDCC=AFvIBn-UxlQ5XmkRJJ0HMgiAq-yQl_M05lVMtH4Lw7ruzYSnlhgV7M12FTcVcH6Kdo3mgyaMxXM; __Secure-3PSIDCC=AFvIBn-xII_dUq__LmYkRxAhpmHJtbXW4l0VUy8UPK-ZjISTXm7PnycBIe34HW1IaFF56KAm-P4'
        
        const start = Date.now()
        Cookies.from(req)
        const end = Date.now()

        expect(end - start).toBeLessThanOrEqual(1)
    })
})

describe('Cookie test cases', () => {
    test('valid data', () => {
        const cookie = new Cookie('name', 'value')
        expect(cookie.getName).toBeTruthy()
        expect(cookie.getValue).toBeTruthy()
        expect(cookie.toHeaderValue).toBeTruthy()

        expect(cookie.getName()).toMatch('name')
        expect(cookie.getValue()).toMatch('value')
        expect(cookie.toHeaderValue()).toMatch('name=value;Secure;HttpOnly')
    })

    test('<= 1ms', () => {
        let start = Date.now()
        const cookie = new Cookie('name', 'value') 
        let end = Date.now()
        expect(end - start).toBeLessThanOrEqual(1)

        start = Date.now()
        cookie.toHeaderValue()
        end = Date.now()
        expect(end - start).toBeLessThanOrEqual(1)
    })
})