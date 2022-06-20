require("dotenv").config();
const parseXML = require('xml2js').parseString;
const axios = require("axios");
const express = require("express");
const app = express();


app.get('/query', (req, res) => {
    const queryData = req.query.param;
    const currentDateTime = new Date().toISOString();
    const startDateTime = '2013-12-17T03:24:00';
    const nrDosar = '1206/112/2019';

    const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <CautareDosare xmlns="portalquery.just.ro">
          <numarDosar>${nrDosar}</numarDosar>
          <obiectDosar>string</obiectDosar>
          <numeParte>string</numeParte>
          <institutie>CurteadeApelBUCURESTI</institutie>
          <dataStart>${currentDateTime}</dataStart>
          <dataStop>${startDateTime}</dataStop>
        </CautareDosare>
      </soap:Body>
    </soap:Envelope>`;

    const options = {
        headers: {'Content-Type': 'text/xml'}
    }

    axios.post('http://portalquery.just.ro/Query.asmx?op=CautareDosare', xmlBody, options)
    .then(response => {
        parseXML(response.data, { explicitArray: false }, function(err, result) {
            console.log(result)
            res.json(result);
        });
    })
    .catch(err => console.log(err))
});




app.listen(3001, () => console.log('Server started on port 3001..'));