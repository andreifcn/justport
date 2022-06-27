const express = require("express");
const app = express();
const soapRequest = require("easy-soap-request");
const parseXML = require('xml2js').parseString;
require("dotenv").config();


app.get('/query', (req, res) => {
    const queryData = req.query.param;

    // currentDate time (T) must be 00.00.00.000Z

    const currentDate = new Date().setUTCHours(0, 0, 0, 0);
    const startDateTime = new Date(currentDate).toISOString();
    const stopDateTime = new Date('2016-03-03').toISOString();

    // SOAP 1.2 request headers

    const url = 'http://portalquery.just.ro/Query.asmx?op=CautareDosare2';
    const options = {
        'Content-Type': 'application/soap+xml; charset=utf-8',
    };
  
    const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
        <CautareDosare2 xmlns="portalquery.just.ro">
          <numeParte>${queryData}</numeParte>
          <institutie>TribunalulCLUJ</institutie>
        </CautareDosare2>
      </soap12:Body>
    </soap12:Envelope>`;

    async function getData() {
      try {
        const { response } = await soapRequest({ url: url, headers: options, xml: xmlBody});
        
        // parse xml response to array using xml2js library

        parseXML(await response.body, (err, result) => {
            res.json(result["soap:Envelope"]["soap:Body"][0].CautareDosare2Response[0].CautareDosare2Result[0].Dosar);
            if (err) console.log(err);
        });
      } catch (e) {
        console.log(e)
      }
    }

    getData();
});

app.listen(3001, () => console.log('Server started on port 3001..'));