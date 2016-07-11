define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/order/call",
    "title": "Call Taxi",
    "name": "Call_Taxi",
    "group": "WebAPI",
    "description": "<p>This API receives JSON request. Sent request to taxi driver</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "latFrom",
            "description": "<p>(Required) From latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "lonFrom",
            "description": "<p>(Required) From longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressFrom",
            "description": "<p>(Required) From address</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "latTo",
            "description": "<p>(Required) To latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "lonTo",
            "description": "<p>(Required) To longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressTo",
            "description": "<p>(Required) To address</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "crewNum",
            "description": "<p>(Required) Number of passengers</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnknownError",
            "description": "<p>6000000</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorLatitudeFrom",
            "description": "<p>6000017</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorLongitudeFrom",
            "description": "<p>6000018</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorNoAddressFrom",
            "description": "<p>6000019</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorLatitudeTo",
            "description": "<p>6000020</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorLongitudeTo",
            "description": "<p>6000021</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorNoAddressTo",
            "description": "<p>6000022</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorCrewNumber",
            "description": "<p>6000023</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{ code: 1, time: 1467125660699 }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/Backend/Controllers/Order/CallOrderController.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "get",
    "url": "/api/v1/test/error",
    "title": "error",
    "name": "General_Error_Response",
    "group": "WebAPI",
    "description": "<p>Returns error</p>",
    "version": "0.0.0",
    "filename": "src/server/WebAPI/Backend/Controllers/Test/TestController.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/api/v1/signin",
    "title": "SignIn",
    "name": "General_Signin",
    "group": "WebAPI",
    "description": "<p>Signin to backend and generate new token for the user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(Required)  Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(Required)  Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secret",
            "description": "<p>(Required)  Secret</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnknownError",
            "description": "<p>6000000</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorNoEmail",
            "description": "<p>6000001</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorNoPassword",
            "description": "<p>6000002</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorNoSecret",
            "description": "<p>6000003</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SignInError",
            "description": "<p>6000008</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ code: 6000008, time: 1467124038393 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\tcode: 1,\n\ttime: 1467123777463,\n\tdata: {\n\t\ttoken_new: 'UpQM5SM2hKyCzKoP',\n\t\tuser: {\n\t\t\t__v: 0,\n\t\t\temail: 'testT61gb@test.com',\n\t\t\tpassword: '*****',\n\t\t\tcreated: 1467123777437,\n\t\t\t_id: '5772884116cc68e662fc072f'\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/Backend/Controllers/Signin/SigninGeneralController.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/api/v1/signup",
    "title": "Signup",
    "name": "General_Signup",
    "group": "WebAPI",
    "description": "<p>Reigster new user to database and returns new token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(Required) Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(Required) Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secret",
            "description": "<p>(Required) Secret</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnknownError",
            "description": "<p>6000000</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorNoEmail",
            "description": "<p>6000001</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorNoPassword",
            "description": "<p>6000002</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorNoSecret",
            "description": "<p>6000003</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorWrongEmail",
            "description": "<p>6000004</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorWrongPassword",
            "description": "<p>6000005</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorEmailExists",
            "description": "<p>6000006</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorWrongSecret",
            "description": "<p>6000007</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    code: 6000006, \n    time: 1467124038393 \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\tcode: 1,\n\ttime: 1467123777463,\n\tdata: {\n\t\ttoken_new: 'UpQM5SM2hKyCzKoP',\n\t\tuser: {\n\t\t\t__v: 0,\n\t\t\temail: 'testT61gb@test.com',\n\t\t\tpassword: '*****',\n\t\t\tcreated: 1467123777437,\n\t\t\t_id: '5772884116cc68e662fc072f'\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/Backend/Controllers/Signup/SignupGeneralController.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "get",
    "url": "/api/v1/test",
    "title": "just test",
    "name": "Test",
    "group": "WebAPI",
    "description": "<p>Returns text &quot;test&quot;</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{ code: 1, time: 1467125660699, data: 'test' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/Backend/Controllers/Test/TestController.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/api/v1/profile/update",
    "title": "Update Profile",
    "name": "UpdateProfile",
    "group": "WebAPI",
    "description": "<p>This API receives multipart url-form-encoded request not JSON. Update user's profile, both for taxt driver and user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(Required) Name of user/driver</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>(Required) User type should be &quot;user&quot; or &quot;driver&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telNum",
            "description": "<p>(Required) Telephone number of user/driver (+385981234567, +385 99 1234 655, ...)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Age of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>note</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_type",
            "description": "<p>CarType</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_registration",
            "description": "<p>Car registration number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fee_start",
            "description": "<p>Start fee</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fee_km",
            "description": "<p>Fee per km</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>picture file (png,jpeg,gif)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnknownError",
            "description": "<p>6000000</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorNoName",
            "description": "<p>6000010</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorWrongType",
            "description": "<p>6000011</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorFeeStart",
            "description": "<p>6000013</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorFeeKm",
            "description": "<p>6000014</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorWrongImageType",
            "description": "<p>6000012</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorAge",
            "description": "<p>6000015</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamErrorWrongTelNum",
            "description": "<p>6000016</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{ code: 1, time: 1467125660699}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/Backend/Controllers/Profile/UpdateProfileController.js",
    "groupTitle": "WebAPI"
  }
] });
