define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_Rashad_Kokash_Downloads_github_lector_backend_doc_main_js",
    "groupTitle": "C__Users_Rashad_Kokash_Downloads_github_lector_backend_doc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/auth/facebook",
    "title": "Register/Login with facebook",
    "name": "Facebook_Login",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's Facebook account token REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n    \"_id\": \"5a19676854f7c9267c13ade1\",\n    \"username\": \"HJeOw1vlG\",\n    \"email\": \"john@doe.com\"\n  },\n  \"token\": \"tbJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE5Njc2ODU0ZjdjOTI2N2MxM2FkZTEiLCJ1c2VybmFtZSI6IkhKZU93MXZsRyIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWF0IjoxNTExNjE0MzEyfQ.KCDKLqAhz1JYfWm9J_fgSBHnu2MlvDfwOv6_Zcpq6NQ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/authentication.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/forgot",
    "title": "Request reset password email",
    "name": "Forgot_Password",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No-Content",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/authentication.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Login user",
    "name": "Login",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n    \"_id\": \"5a19676854f7c9267c13ade1\",\n    \"username\": \"HJeOw1vlG\",\n    \"email\": \"john@doe.com\"\n  },\n  \"token\": \"tbJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE5Njc2ODU0ZjdjOTI2N2MxM2FkZTEiLCJ1c2VybmFtZSI6IkhKZU93MXZsRyIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWF0IjoxNTExNjE0MzEyfQ.KCDKLqAhz1JYfWm9J_fgSBHnu2MlvDfwOv6_Zcpq6NQ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/authentication.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Register new user",
    "name": "Register",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name[first]",
            "description": "<p>User's firstname REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name[last]",
            "description": "<p>User's lastname REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>User's pircture url.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's unique email REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n    \"_id\": \"5a19676854f7c9267c13ade1\",\n    \"username\": \"HJeOw1vlG\",\n    \"email\": \"john@doe.com\"\n  },\n  \"token\": \"tbJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE5Njc2ODU0ZjdjOTI2N2MxM2FkZTEiLCJ1c2VybmFtZSI6IkhKZU93MXZsRyIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWF0IjoxNTExNjE0MzEyfQ.KCDKLqAhz1JYfWm9J_fgSBHnu2MlvDfwOv6_Zcpq6NQ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/authentication.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/reset",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token we've sent to the email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/authentication.js",
    "groupTitle": "User"
  }
] });
