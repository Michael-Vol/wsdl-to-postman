module.exports = {
  operationsArray: [
    {
      name: "Add",
      description: "Adds two integers. This is a test WebService. ©DNE Online",
      style: "document",
      url: "http://www.dneonline.com/calculator.asmx",
      input: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intA",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intB",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "Add",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true
      }],
      output: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "AddResult",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "AddResponse",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      fault: null,
      portName: "CalculatorSoap",
      serviceName: "Calculator",
      method: "POST",
      protocol: "soap",
      xpathInfo: {
        xpath: "//definitions//binding[@name=\"CalculatorSoap\"]//operation[@name=\"Add\"]",
        wsdlNamespaceUrl: "http://schemas.xmlsoap.org/wsdl/",
      },
    },
    {
      name: "Subtract",
      description: "",
      style: "document",
      url: "http://www.dneonline.com/calculator.asmx",
      input: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intA",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intB",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "Subtract",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      output: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "SubtractResult",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "SubtractResponse",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      fault: null,
      portName: "CalculatorSoap",
      serviceName: "Calculator",
      method: "POST",
      protocol: "soap",
      xpathInfo: {
        xpath: "//definitions//binding[@name=\"CalculatorSoap\"]//operation[@name=\"Subtract\"]",
        wsdlNamespaceUrl: "http://schemas.xmlsoap.org/wsdl/",
      },
    },
    {
      name: "Multiply",
      description: "",
      style: "document",
      url: "http://www.dneonline.com/calculator.asmx",
      input: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intA",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intB",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "Multiply",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      output: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "MultiplyResult",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "MultiplyResponse",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      fault: null,
      portName: "CalculatorSoap",
      serviceName: "Calculator",
      method: "POST",
      protocol: "soap",
      xpathInfo: {
        xpath: "//definitions//binding[@name=\"CalculatorSoap\"]//operation[@name=\"Multiply\"]",
        wsdlNamespaceUrl: "http://schemas.xmlsoap.org/wsdl/",
      },
    },
    {
      name: "Divide",
      description: "",
      style: "document",
      url: "http://www.dneonline.com/calculator.asmx",
      input: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intA",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intB",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "Divide",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      output: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "DivideResult",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "DivideResponse",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      fault: null,
      portName: "CalculatorSoap",
      serviceName: "Calculator",
      method: "POST",
      protocol: "soap",
      xpathInfo: {
        xpath: "//definitions//binding[@name=\"CalculatorSoap\"]//operation[@name=\"Divide\"]",
        wsdlNamespaceUrl: "http://schemas.xmlsoap.org/wsdl/",
      },
    },
    {
      name: "Add",
      description: "Adds two integers. This is a test WebService. ©DNE Online",
      style: "document",
      url: "http://www.dneonline.com/calculator.asmx",
      input: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intA",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intB",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "Add",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      output: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "AddResult",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "AddResponse",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      fault: null,
      portName: "CalculatorSoap12",
      serviceName: "Calculator",
      method: "POST",
      protocol: "soap12",
      xpathInfo: {
        xpath: "//definitions//binding[@name=\"CalculatorSoap12\"]//operation[@name=\"Add\"]",
        wsdlNamespaceUrl: "http://schemas.xmlsoap.org/wsdl/",
      },
    },
    {
      name: "Subtract",
      description: "",
      style: "document",
      url: "http://www.dneonline.com/calculator.asmx",
      input: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intA",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intB",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "Subtract",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      output: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "SubtractResult",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "SubtractResponse",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      fault: null,
      portName: "CalculatorSoap12",
      serviceName: "Calculator",
      method: "POST",
      protocol: "soap12",
      xpathInfo: {
        xpath: "//definitions//binding[@name=\"CalculatorSoap12\"]//operation[@name=\"Subtract\"]",
        wsdlNamespaceUrl: "http://schemas.xmlsoap.org/wsdl/",
      },
    },
    {
      name: "Multiply",
      description: "",
      style: "document",
      url: "http://www.dneonline.com/calculator.asmx",
      input: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intA",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intB",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "Multiply",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      output: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "MultiplyResult",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "MultiplyResponse",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      fault: null,
      portName: "CalculatorSoap12",
      serviceName: "Calculator",
      method: "POST",
      protocol: "soap12",
      xpathInfo: {
        xpath: "//definitions//binding[@name=\"CalculatorSoap12\"]//operation[@name=\"Multiply\"]",
        wsdlNamespaceUrl: "http://schemas.xmlsoap.org/wsdl/",
      },
    },
    {
      name: "Divide",
      description: "",
      style: "document",
      url: "http://www.dneonline.com/calculator.asmx",
      input: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intA",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "intB",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "Divide",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      output: [{
        children: [
          {
            children: [
            ],
            minOccurs: "1",
            maxOccurs: "1",
            name: "DivideResult",
            type: "integer",
            isComplex: false,
            namespace: "",
            maximum: 2147483647,
            minimum: -2147483648,
            maxLength: undefined,
            minLength: undefined,
            pattern: undefined,
            enum: undefined,
          },
        ],
        minOccurs: "0",
        maxOccurs: "1",
        name: "DivideResponse",
        type: "complex",
        isComplex: true,
        namespace: "http://tempuri.org/",
        maximum: undefined,
        minimum: undefined,
        maxLength: undefined,
        minLength: undefined,
        pattern: undefined,
        enum: undefined,
        isElement: true,
      }],
      fault: null,
      portName: "CalculatorSoap12",
      serviceName: "Calculator",
      method: "POST",
      protocol: "soap12",
      xpathInfo: {
        xpath: "//definitions//binding[@name=\"CalculatorSoap12\"]//operation[@name=\"Divide\"]",
        wsdlNamespaceUrl: "http://schemas.xmlsoap.org/wsdl/",
      },
    },
  ],
  targetNamespace: {
    key: "targetNamespace",
    url: "http://tempuri.org/",
    prefixFilter: "targetNamespace:",
    isDefault: false,
  },
  wsdlNamespace: {
    key: "wsdl",
    url: "http://schemas.xmlsoap.org/wsdl/",
    prefixFilter: "wsdl:",
    isDefault: false,
  },
  SOAPNamespace: {
    key: "soap",
    url: "http://schemas.xmlsoap.org/wsdl/soap/",
    prefixFilter: "xmlns:soap:",
    isDefault: false,
  },
  SOAP12Namespace: {
    key: "soap12",
    url: "http://schemas.xmlsoap.org/wsdl/soap12/",
    prefixFilter: "xmlns:soap12:",
    isDefault: false,
  },
  HTTPNamespace: {
    key: "http",
    url: "http://schemas.xmlsoap.org/wsdl/http/",
    prefixFilter: "xmlns:http:",
    isDefault: false,
  },
  schemaNamespace: {
    key: "s",
    url: "http://www.w3.org/2001/XMLSchema",
    prefixFilter: "s:",
    tnsDefinitionURL: "http://tempuri.org/",
    isDefault: false,
  },
  tnsNamespace: {
    key: "tns",
    url: "http://tempuri.org/",
    prefixFilter: "xmlns:tns:",
    isDefault: false,
  },
  allNameSpaces: [
    {
      key: "soap",
      url: "http://schemas.xmlsoap.org/wsdl/soap/",
      prefixFilter: "xmlns:soap:",
      isDefault: false,
    },
    {
      key: "tm",
      url: "http://microsoft.com/wsdl/mime/textMatching/",
      prefixFilter: "xmlns:tm:",
      isDefault: false,
    },
    {
      key: "soapenc",
      url: "http://schemas.xmlsoap.org/soap/encoding/",
      prefixFilter: "xmlns:soapenc:",
      isDefault: false,
    },
    {
      key: "mime",
      url: "http://schemas.xmlsoap.org/wsdl/mime/",
      prefixFilter: "xmlns:mime:",
      isDefault: false,
    },
    {
      key: "tns",
      url: "http://tempuri.org/",
      prefixFilter: "xmlns:tns:",
      isDefault: false,
    },
    {
      key: "s",
      url: "http://www.w3.org/2001/XMLSchema",
      prefixFilter: "xmlns:s:",
      isDefault: false,
    },
    {
      key: "soap12",
      url: "http://schemas.xmlsoap.org/wsdl/soap12/",
      prefixFilter: "xmlns:soap12:",
      isDefault: false,
    },
    {
      key: "http",
      url: "http://schemas.xmlsoap.org/wsdl/http/",
      prefixFilter: "xmlns:http:",
      isDefault: false,
    },
    {
      key: "wsdl",
      url: "http://schemas.xmlsoap.org/wsdl/",
      prefixFilter: "xmlns:wsdl:",
      isDefault: false,
    },
    {
      key: "targetNamespace",
      url: "http://tempuri.org/",
      prefixFilter: "targetNamespace:",
      isDefault: false,
    },
  ],
  fileName: "",
  securityPolicyArray: [
  ],
  log: {
    errors: "",
  },
  xmlParsed: {
    "wsdl:definitions": {
      "@_xmlns:soap": "http://schemas.xmlsoap.org/wsdl/soap/",
      "@_xmlns:tm": "http://microsoft.com/wsdl/mime/textMatching/",
      "@_xmlns:soapenc": "http://schemas.xmlsoap.org/soap/encoding/",
      "@_xmlns:mime": "http://schemas.xmlsoap.org/wsdl/mime/",
      "@_xmlns:tns": "http://tempuri.org/",
      "@_xmlns:s": "http://www.w3.org/2001/XMLSchema",
      "@_xmlns:soap12": "http://schemas.xmlsoap.org/wsdl/soap12/",
      "@_xmlns:http": "http://schemas.xmlsoap.org/wsdl/http/",
      "@_xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/",
      "@_targetNamespace": "http://tempuri.org/",
      "wsdl:types": {
        "s:schema": {
          "@_elementFormDefault": "qualified",
          "@_targetNamespace": "http://tempuri.org/",
          "s:element": [
            {
              "@_name": "Add",
              "s:complexType": {
                "s:sequence": {
                  "s:element": [
                    {
                      "@_minOccurs": "1",
                      "@_maxOccurs": "1",
                      "@_name": "intA",
                      "@_type": "s:int",
                    },
                    {
                      "@_minOccurs": "1",
                      "@_maxOccurs": "1",
                      "@_name": "intB",
                      "@_type": "s:int",
                    },
                  ],
                },
              },
            },
            {
              "@_name": "AddResponse",
              "s:complexType": {
                "s:sequence": {
                  "s:element": {
                    "@_minOccurs": "1",
                    "@_maxOccurs": "1",
                    "@_name": "AddResult",
                    "@_type": "s:int",
                  },
                },
              },
            },
            {
              "@_name": "Subtract",
              "s:complexType": {
                "s:sequence": {
                  "s:element": [
                    {
                      "@_minOccurs": "1",
                      "@_maxOccurs": "1",
                      "@_name": "intA",
                      "@_type": "s:int",
                    },
                    {
                      "@_minOccurs": "1",
                      "@_maxOccurs": "1",
                      "@_name": "intB",
                      "@_type": "s:int",
                    },
                  ],
                },
              },
            },
            {
              "@_name": "SubtractResponse",
              "s:complexType": {
                "s:sequence": {
                  "s:element": {
                    "@_minOccurs": "1",
                    "@_maxOccurs": "1",
                    "@_name": "SubtractResult",
                    "@_type": "s:int",
                  },
                },
              },
            },
            {
              "@_name": "Multiply",
              "s:complexType": {
                "s:sequence": {
                  "s:element": [
                    {
                      "@_minOccurs": "1",
                      "@_maxOccurs": "1",
                      "@_name": "intA",
                      "@_type": "s:int",
                    },
                    {
                      "@_minOccurs": "1",
                      "@_maxOccurs": "1",
                      "@_name": "intB",
                      "@_type": "s:int",
                    },
                  ],
                },
              },
            },
            {
              "@_name": "MultiplyResponse",
              "s:complexType": {
                "s:sequence": {
                  "s:element": {
                    "@_minOccurs": "1",
                    "@_maxOccurs": "1",
                    "@_name": "MultiplyResult",
                    "@_type": "s:int",
                  },
                },
              },
            },
            {
              "@_name": "Divide",
              "s:complexType": {
                "s:sequence": {
                  "s:element": [
                    {
                      "@_minOccurs": "1",
                      "@_maxOccurs": "1",
                      "@_name": "intA",
                      "@_type": "s:int",
                    },
                    {
                      "@_minOccurs": "1",
                      "@_maxOccurs": "1",
                      "@_name": "intB",
                      "@_type": "s:int",
                    },
                  ],
                },
              },
            },
            {
              "@_name": "DivideResponse",
              "s:complexType": {
                "s:sequence": {
                  "s:element": {
                    "@_minOccurs": "1",
                    "@_maxOccurs": "1",
                    "@_name": "DivideResult",
                    "@_type": "s:int",
                  },
                },
              },
            },
          ],
        },
      },
      "wsdl:message": [
        {
          "@_name": "AddSoapIn",
          "wsdl:part": {
            "@_name": "parameters",
            "@_element": "tns:Add",
          },
        },
        {
          "@_name": "AddSoapOut",
          "wsdl:part": {
            "@_name": "parameters",
            "@_element": "tns:AddResponse",
          },
        },
        {
          "@_name": "SubtractSoapIn",
          "wsdl:part": {
            "@_name": "parameters",
            "@_element": "tns:Subtract",
          },
        },
        {
          "@_name": "SubtractSoapOut",
          "wsdl:part": {
            "@_name": "parameters",
            "@_element": "tns:SubtractResponse",
          },
        },
        {
          "@_name": "MultiplySoapIn",
          "wsdl:part": {
            "@_name": "parameters",
            "@_element": "tns:Multiply",
          },
        },
        {
          "@_name": "MultiplySoapOut",
          "wsdl:part": {
            "@_name": "parameters",
            "@_element": "tns:MultiplyResponse",
          },
        },
        {
          "@_name": "DivideSoapIn",
          "wsdl:part": {
            "@_name": "parameters",
            "@_element": "tns:Divide",
          },
        },
        {
          "@_name": "DivideSoapOut",
          "wsdl:part": {
            "@_name": "parameters",
            "@_element": "tns:DivideResponse",
          },
        },
      ],
      "wsdl:portType": {
        "@_name": "CalculatorSoap",
        "wsdl:operation": [
          {
            "@_name": "Add",
            "wsdl:documentation": {
              "#text": "Adds two integers. This is a test WebService. ©DNE Online",
              "@_xmlns:wsdl": "http://schemas.xmlsoap.org/wsdl/",
            },
            "wsdl:input": {
              "@_message": "tns:AddSoapIn",
            },
            "wsdl:output": {
              "@_message": "tns:AddSoapOut",
            },
          },
          {
            "@_name": "Subtract",
            "wsdl:input": {
              "@_message": "tns:SubtractSoapIn",
            },
            "wsdl:output": {
              "@_message": "tns:SubtractSoapOut",
            },
          },
          {
            "@_name": "Multiply",
            "wsdl:input": {
              "@_message": "tns:MultiplySoapIn",
            },
            "wsdl:output": {
              "@_message": "tns:MultiplySoapOut",
            },
          },
          {
            "@_name": "Divide",
            "wsdl:input": {
              "@_message": "tns:DivideSoapIn",
            },
            "wsdl:output": {
              "@_message": "tns:DivideSoapOut",
            },
          },
        ],
      },
      "wsdl:binding": [
        {
          "@_name": "CalculatorSoap",
          "@_type": "tns:CalculatorSoap",
          "soap:binding": {
            "@_transport": "http://schemas.xmlsoap.org/soap/http",
          },
          "wsdl:operation": [
            {
              "@_name": "Add",
              "soap:operation": {
                "@_soapAction": "http://tempuri.org/Add",
                "@_style": "document",
              },
              "wsdl:input": {
                "soap:body": {
                  "@_use": "literal",
                },
              },
              "wsdl:output": {
                "soap:body": {
                  "@_use": "literal",
                },
              },
            },
            {
              "@_name": "Subtract",
              "soap:operation": {
                "@_soapAction": "http://tempuri.org/Subtract",
                "@_style": "document",
              },
              "wsdl:input": {
                "soap:body": {
                  "@_use": "literal",
                },
              },
              "wsdl:output": {
                "soap:body": {
                  "@_use": "literal",
                },
              },
            },
            {
              "@_name": "Multiply",
              "soap:operation": {
                "@_soapAction": "http://tempuri.org/Multiply",
                "@_style": "document",
              },
              "wsdl:input": {
                "soap:body": {
                  "@_use": "literal",
                },
              },
              "wsdl:output": {
                "soap:body": {
                  "@_use": "literal",
                },
              },
            },
            {
              "@_name": "Divide",
              "soap:operation": {
                "@_soapAction": "http://tempuri.org/Divide",
                "@_style": "document",
              },
              "wsdl:input": {
                "soap:body": {
                  "@_use": "literal",
                },
              },
              "wsdl:output": {
                "soap:body": {
                  "@_use": "literal",
                },
              },
            },
          ],
        },
        {
          "@_name": "CalculatorSoap12",
          "@_type": "tns:CalculatorSoap",
          "soap12:binding": {
            "@_transport": "http://schemas.xmlsoap.org/soap/http",
          },
          "wsdl:operation": [
            {
              "@_name": "Add",
              "soap12:operation": {
                "@_soapAction": "http://tempuri.org/Add",
                "@_style": "document",
              },
              "wsdl:input": {
                "soap12:body": {
                  "@_use": "literal",
                },
              },
              "wsdl:output": {
                "soap12:body": {
                  "@_use": "literal",
                },
              },
            },
            {
              "@_name": "Subtract",
              "soap12:operation": {
                "@_soapAction": "http://tempuri.org/Subtract",
                "@_style": "document",
              },
              "wsdl:input": {
                "soap12:body": {
                  "@_use": "literal",
                },
              },
              "wsdl:output": {
                "soap12:body": {
                  "@_use": "literal",
                },
              },
            },
            {
              "@_name": "Multiply",
              "soap12:operation": {
                "@_soapAction": "http://tempuri.org/Multiply",
                "@_style": "document",
              },
              "wsdl:input": {
                "soap12:body": {
                  "@_use": "literal",
                },
              },
              "wsdl:output": {
                "soap12:body": {
                  "@_use": "literal",
                },
              },
            },
            {
              "@_name": "Divide",
              "soap12:operation": {
                "@_soapAction": "http://tempuri.org/Divide",
                "@_style": "document",
              },
              "wsdl:input": {
                "soap12:body": {
                  "@_use": "literal",
                },
              },
              "wsdl:output": {
                "soap12:body": {
                  "@_use": "literal",
                },
              },
            },
          ],
        },
      ],
      "wsdl:service": {
        "@_name": "Calculator",
        "wsdl:port": [
          {
            "@_name": "CalculatorSoap",
            "@_binding": "tns:CalculatorSoap",
            "soap:address": {
              "@_location": "http://www.dneonline.com/calculator.asmx",
            },
          },
          {
            "@_name": "CalculatorSoap12",
            "@_binding": "tns:CalculatorSoap12",
            "soap12:address": {
              "@_location": "http://www.dneonline.com/calculator.asmx",
            },
          },
        ],
      },
    },
  },
  version: "1.1",
  documentation: "",
  securityPolicyNamespace: null,

};
