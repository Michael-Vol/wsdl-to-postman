const expect = require('chai').expect,
  fs = require('fs'),
  Index = require('../../index.js'),
  async = require('async'),
  validWSDLs = 'test/data/validWSDLs';

describe('Test convert function in SchemaPack', function() {
  var validWSDLsFolder = fs.readdirSync(validWSDLs);
  async.each(validWSDLsFolder, function (file, cb) {
    it('Should take a wsdl file and convert it into a Postman Collection ' + file, function () {
      let fileContent = fs.readFileSync(validWSDLs + '/' + file, 'utf8'),
        opsArray = 0;
      Index.convert({ type: 'string', data: fileContent }, {}, (err, conversionResult) => {
        expect(err).to.be.null;
        expect(conversionResult.result).to.equal(true);
        if (conversionResult.result){
          expect(conversionResult.output[0].type).to.equal('collection');
          expect(conversionResult.output[0].data).to.have.property('info');
          expect(conversionResult.output[0].data).to.have.property('item');
          opsArray = conversionResult.output[0].data.item;
          conversionResult.output[0].data.item.forEach((item) => {
            expect(item).to.include.all.keys('name', 'description', 'request', 'response');
            expect(item.request).to.include.all.keys('url', 'header', 'method', 'body');
            expect(item.response[0]).to.include.all.keys('name', 'originalRequest', 'status', 'code', 'header', 'body');
          });
        } 
        else {
          return cb(null);
        }
      });
    });
  });
});
