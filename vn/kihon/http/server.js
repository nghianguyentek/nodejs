const badReqDesc = Buffer.from('Bad Request');

function writeResp(resp, data) {
    resp.on('error', err => console.log(err))

    resp.statusCode = data.code
    for (const header in data.headers)
        resp.setHeader(header, data.headers[header])
    
    if (data.value)
        resp.end(data.value)
    else
        resp.end()
}

function HTTPServer() {
    let useSession = false;
    const server = require('http').createServer((req, resp) => {
        let reqData = [],
            session

        const respData = { code: 400, 
            headers: { 'Content-Type': 'text/plain' }, 
            value: badReqDesc 
        }

        req.on('data', data => reqData.push(data))
            .on('end', () => {
                if (resp.complete)
                    return

                if (!req.complete) {
                    console.log('Client disconnected');
                    return
                }

                reqData = Buffer.concat(reqData);

                if (useSession)
                    session = require('./session').from(req);
                
            })
    });

    this.useSession = () => useSession = true;
    this.start = (port = 8000) => 
        server.listen(port, () => console.log(`HTTPServer started at port ${port}`))
}

exports.HTTPServer = HTTPServer
    