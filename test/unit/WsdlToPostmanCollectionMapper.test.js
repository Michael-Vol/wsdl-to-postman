const {
  assert
} = require('chai');
const {
  Collection
} = require('postman-collection');

const {
    WsdlToPostmanCollectionMapper
  } = require('../../lib/WsdlToPostmanCollectionMapper'),
  expect = require('chai').expect,
  wsdlMockObject = {
    operationsArray: [{
      name: 'NumberToWords',
      description: 'Returns the word corresponding to the positive number passed as parameter.',
      style: 'document',
      url: 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
      input: {
        children: [{
          children: [],
          name: 'ubiNum',
          isComplex: false,
          type: 'integer',
          maximum: 2147483647,
          minimum: -2147483648
        }],
        name: 'NumberToWords',
        isComplex: true,
        type: 'complex',
        namespace: 'http://www.dataaccess.com/webservicesserver/'
      },
      output: {
        children: [{
          children: [],
          name: 'NumberToWordsResult',
          isComplex: false,
          type: 'string'
        }],
        name: 'NumberToWordsResponse',
        isComplex: true,
        type: 'complex',
        namespace: 'http://www.dataaccess.com/webservicesserver/'
      },
      fault: {
        children: [{
          children: [],
          name: 'faultcode',
          isComplex: false,
          type: 'string'
        }],
        name: 'fault',
        isComplex: true,
        type: 'complex',
        namespace: ''
      },
      portName: 'NumberConversionSoap',
      serviceName: 'NumberConversion',
      method: 'POST',
      protocol: 'soap'
    },
    {
      name: 'NumberToDollars',
      description: 'Returns the non-zero dollar amount of the passed number.',
      style: 'document',
      url: 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
      input: {
        children: [{
          children: [],
          name: 'dNum',
          isComplex: false,
          type: 'number'
        }],
        name: 'NumberToDollars',
        isComplex: true,
        type: 'complex',
        namespace: 'http://www.dataaccess.com/webservicesserver/'
      },
      output: undefined,
      fault: undefined,
      portName: 'NumberConversionSoap',
      serviceName: 'NumberConversion',
      method: 'POST',
      protocol: 'soap'
    },
    {
      name: 'NumberToWords',
      description: 'Returns the word corresponding to the positive number passed as parameter.',
      style: 'document',
      url: 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
      input: {
        children: [{
          children: [],
          name: 'ubiNum',
          isComplex: false,
          type: 'integer',
          maximum: 2147483647,
          minimum: -2147483648
        }],
        name: 'NumberToWords',
        isComplex: true,
        type: 'complex',
        namespace: 'http://www.dataaccess.com/webservicesserver/'
      },
      output: undefined,
      fault: undefined,
      portName: 'NumberConversionSoap12',
      serviceName: 'NumberConversion',
      method: 'POST',
      protocol: 'soap12'
    },
    {
      name: 'NumberToDollars',
      description: 'Returns the non-zero dollar amount of the passed number.',
      style: 'document',
      url: 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
      input: {
        children: [child = {
          children: [],
          name: 'dNum',
          isComplex: false,
          type: 'number'
        }],
        name: 'NumberToDollars',
        isComplex: true,
        type: 'complex',
        namespace: 'http://www.dataaccess.com/webservicesserver/'
      },
      output: undefined,
      fault: undefined,
      portName: 'NumberConversionSoap12',
      serviceName: 'NumberConversion',
      method: 'POST',
      protocol: 'soap12'
    }
    ],
    targetNamespace: {
      key: 'targetNamespace',
      url: 'http://www.dataaccess.com/webservicesserver/',
      isDefault: false
    },
    wsdlNamespace: {
      key: 'xmlns',
      url: 'http://schemas.xmlsoap.org/wsdl/',
      isDefault: true
    },
    SOAPNamespace: {
      key: 'soap',
      url: 'http://schemas.xmlsoap.org/wsdl/soap/',
      isDefault: false
    },
    SOAP12Namespace: {
      key: 'soap12',
      url: 'http://schemas.xmlsoap.org/wsdl/soap12/',
      isDefault: false
    },
    schemaNamespace: {
      key: 'xs',
      url: 'http://www.w3.org/2001/XMLSchema',
      isDefault: false
    },
    tnsNamespace: {
      key: 'xmlns:tns',
      url: 'http://www.dataaccess.com/webservicesserver/',
      isDefault: false
    },
    allNameSpaces: [{
      key: 'xmlns',
      url: 'http://schemas.xmlsoap.org/wsdl/',
      isDefault: true
    },
    {
      key: 'xmlns:xs',
      url: 'http://www.w3.org/2001/XMLSchema',
      isDefault: false
    },
    {
      key: 'xmlns:soap',
      url: 'http://schemas.xmlsoap.org/wsdl/soap/',
      isDefault: false
    },
    {
      key: 'xmlns:soap12',
      url: 'http://schemas.xmlsoap.org/wsdl/soap12/',
      isDefault: false
    },
    {
      key: 'xmlns:tns',
      url: 'http://www.dataaccess.com/webservicesserver/',
      isDefault: false
    },
    {
      key: 'targetNamespace',
      url: 'http://www.dataaccess.com/webservicesserver/',
      isDefault: false
    }
    ],
    fileName: undefined,
    log: {
      errors: ''
    }
  };

describe('WsdlToPostmanCollectionMapper constructor', function() {
  it('Should return a WsdlToPostmanCollectionMapper object', function() {
    const mapper = new WsdlToPostmanCollectionMapper(wsdlMockObject);
    expect(mapper instanceof WsdlToPostmanCollectionMapper).to.be.true;
  });

  it('Should throw an error if wsdlObject is undefined', function() {
    const undefinedWsdl = undefined,
      expectedMessage = 'Wsdl Object must be provided and must not be empty';
    try {
      let mapper = new WsdlToPostmanCollectionMapper(undefinedWsdl);
      assert.fail('We expect an error');
      return mapper;
    }
    catch (error) {
      expect(error.message).to.equal(expectedMessage);
    }
  });

  it('Should throw an error if wsdlObject is null', function() {
    const nullWsdl = null,
      expectedMessage = 'Wsdl Object must be provided and must not be empty';
    try {
      let mapper = new WsdlToPostmanCollectionMapper(nullWsdl);
      assert.fail('We expect an error');
      return mapper;
    }
    catch (error) {
      expect(error.message).to.equal(expectedMessage);
    }
  });
});

describe('WsdlToPostmanCollectionMapper getPostmanCollection', function() {
  it('Should return a PostmanCollection object', function() {
    const mapper = new WsdlToPostmanCollectionMapper(wsdlMockObject);
    let postmanCollection = mapper.getPostmanCollection('collection name');
    expect(postmanCollection instanceof Collection).to.be.true;
  });

  it(
    'Should return a postman collection with name equals to providedName when it is different than empty string',
    function() {
      const providedName = 'provided name',
        mapper = new WsdlToPostmanCollectionMapper(wsdlMockObject),
        postmanCollection = mapper.getPostmanCollection({}, providedName);
      expect(postmanCollection.name).to.be.equal(providedName);
    }
  );

  it(
    `Should return a postman collection with name equals to provided wsdlObject targetNamespace url
    when provided name is equal to empty string`,
    function() {
      const providedEmptyStringName = '',
        expectedName = wsdlMockObject.targetNamespace.url,
        mapper = new WsdlToPostmanCollectionMapper(wsdlMockObject),
        postmanCollection = mapper.getPostmanCollection(providedEmptyStringName);
      expect(postmanCollection.name).to.be.equal(expectedName);
    }
  );
});

describe('WsdlToPostmanCollectionMapper createItemsFromOperations', function() {
  it('Should return postmanCollection items definition from wsdlObject.operationsArray', function() {
    const mapper = new WsdlToPostmanCollectionMapper(wsdlMockObject);
    let urls = mapper.getUrlFromOperations(wsdlMockObject.operationsArray),
      urlVariables = mapper.getVariablesFromUrlList(urls),
      items = mapper.createItemsFromOperations(wsdlMockObject.operationsArray, urlVariables),
      requests;
    expect(items).to.be.an('array');
    requests = items.map((item) => {
      expect(item).to.include.all.keys('name', 'description', 'request');
      return item.request;
    });
    requests.forEach((request) => {
      expect(request).to.be.an('object')
        .to.include.all.keys('url', 'method', 'header', 'body');
    });
  });
});

describe('WsdlToPostmanCollectionMapper getUrlFromOperations', function() {
  it('Should an array of urls', function() {
    const mapper = new WsdlToPostmanCollectionMapper(wsdlMockObject);
    let urls = mapper.getUrlFromOperations(wsdlMockObject.operationsArray);
    expect(urls).to.be.an('array');
  });
});

describe('WsdlToPostmanCollectionMapper getVariablesFromUrlList', function() {
  it('Should return an array of objects with format {key, value}', function() {
    const mapper = new WsdlToPostmanCollectionMapper(wsdlMockObject),
      urls = [
        'https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
        'https://app.flowkey.com/browse/category/rock',
        'https://heasarc.gsfc.nasa.gov/lheasoft/download.html'
      ];
    let variables = mapper.getVariablesFromUrlList(urls);
    expect(variables).to.be.an('array');
    variables.forEach((variable) => {
      expect(variable).to.be.an('object')
        .to.include.all.keys('key', 'value');
    });
    expect(variables[0].value).to.equal('https://www.dataaccess.com/');
    expect(variables[1].value).to.equal('https://app.flowkey.com/');
    expect(variables[2].value).to.equal('https://heasarc.gsfc.nasa.gov/');
  });
});

describe('generateMappingObject method', function() {
  it('Should return a mappingObject with provided name', function() {
    const expectedName = 'providedName',
      mapper = new WsdlToPostmanCollectionMapper(wsdlMockObject),
      mappingObject = mapper.generateMappingObject(wsdlMockObject, {}, expectedName);
    expect(mappingObject.info.name).to.be.equal(expectedName);
  });
});
