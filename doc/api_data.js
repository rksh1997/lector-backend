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
    "url": "/api/genres",
    "title": "Create new genre",
    "name": "CreateGenre",
    "group": "Genre",
    "version": "1.0.0",
    "description": "<p>private route can only be used by the admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Genre's name REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"_id\": \"5a0148cb311cbb22a0c06095\",\n  \"name\": \"أكشن\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/genre.js",
    "groupTitle": "Genre"
  },
  {
    "type": "delete",
    "url": "/api/genres/:id",
    "title": "Delete genre",
    "name": "DeteleGenre",
    "group": "Genre",
    "version": "1.0.0",
    "description": "<p>private route can only be used by the admin</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"_id\": \"5a0148cb311cbb22a0c06095\",\n  \"name\": \"أكشن\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/genre.js",
    "groupTitle": "Genre"
  },
  {
    "type": "get",
    "url": "/api/genres",
    "title": "Get stories' genres",
    "name": "GetGenres",
    "group": "Genre",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5a0148cb311cbb22a0c06095\",\n    \"name\": \"أكشن\",\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/genre.js",
    "groupTitle": "Genre"
  },
  {
    "type": "put",
    "url": "/api/genres/:id",
    "title": "Update genre",
    "name": "UpdateGenre",
    "group": "Genre",
    "version": "1.0.0",
    "description": "<p>private route can only be used by the admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Genre's name REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"_id\": \"5a0148cb311cbb22a0c06095\",\n  \"name\": \"أكشن\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/genre.js",
    "groupTitle": "Genre"
  },
  {
    "type": "post",
    "url": "/api/parts",
    "title": "Create new part",
    "name": "CreatePart",
    "group": "Part",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Part's title REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Part's html content REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>An array containing part's tags.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storyId",
            "description": "<p>The id of the story to add this part to REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"createdAt\": \"2017-11-25T13:32:08.880Z\",\n  \"updatedAt\": \"2017-11-25T13:32:08.880Z\",\n  \"title\": \"Part 1\",\n  \"content\": \"<h1>Hello, World</h1>\",\n  \"story\": \"5a1836cdc1085f25f43be705\",\n  \"_id\": \"5a1970d8a010db054c238c66\",\n  \"removed\": false,\n  \"tags\": [\n      \"Hello\",\n      \"World\"\n  ],\n  \"dislikes\": 0,\n  \"likes\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Part"
  },
  {
    "type": "delete",
    "url": "/api/parts/:id",
    "title": "Delete part",
    "name": "Delete_Part",
    "group": "Part",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"createdAt\": \"2017-11-25T13:32:08.880Z\",\n  \"updatedAt\": \"2017-11-25T13:32:08.880Z\",\n  \"title\": \"Part 1\",\n  \"content\": \"<h1>Hello, World</h1>\",\n  \"story\": \"5a1836cdc1085f25f43be705\",\n  \"_id\": \"5a1970d8a010db054c238c66\",\n  \"removed\": false,\n  \"tags\": [\n      \"Hello\",\n      \"World\"\n  ],\n  \"dislikes\": 0,\n  \"likes\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Part"
  },
  {
    "type": "get",
    "url": "/api/parts/:id",
    "title": "Get part",
    "name": "GetPart",
    "group": "Part",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"createdAt\": \"2017-11-25T13:32:08.880Z\",\n  \"updatedAt\": \"2017-11-25T13:32:08.880Z\",\n  \"title\": \"Part 1\",\n  \"content\": \"<h1>Hello, World</h1>\",\n  \"story\": \"5a1836cdc1085f25f43be705\",\n  \"_id\": \"5a1970d8a010db054c238c66\",\n  \"removed\": false,\n  \"tags\": [\n      \"Hello\",\n      \"World\"\n  ],\n  \"dislikes\": 0,\n  \"likes\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Part"
  },
  {
    "type": "put",
    "url": "/api/parts/:id",
    "title": "Update part",
    "name": "UpdatePart",
    "group": "Part",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Part's title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Part's html content.</p>"
          },
          {
            "group": "Parameter",
            "type": "[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>An array containing part's tags.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storyId",
            "description": "<p>The id of the story to add this part to.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"createdAt\": \"2017-11-25T13:32:08.880Z\",\n  \"updatedAt\": \"2017-11-25T13:32:08.880Z\",\n  \"title\": \"Updated part\",\n  \"content\": \"<h1>Hello, World, Updated</h1>\",\n  \"story\": \"5a1836cdc1085f25f43be705\",\n  \"_id\": \"5a1970d8a010db054c238c66\",\n  \"removed\": false,\n  \"tags\": [\n      \"Hello\",\n      \"World\"\n  ],\n  \"dislikes\": 0,\n  \"likes\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/part.js",
    "groupTitle": "Part"
  },
  {
    "type": "post",
    "url": "/api/stories",
    "title": "Create new story",
    "name": "CreateStory",
    "group": "Story",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Story's title REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Story's short description REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "genre",
            "description": "<p>Genre id REQUIRED.</p>"
          },
          {
            "group": "Parameter",
            "type": "Image",
            "optional": false,
            "field": "picture",
            "description": "<p>Story's cover REQUIRED.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"createdAt\": \"2017-11-25T13:46:36.541Z\",\n  \"updatedAt\": \"2017-11-25T13:46:36.541Z\",\n  \"author\": \"5a166233aeb0e40e70e486c9\",\n  \"title\": \"Story number 1\",\n  \"picture\": \"https://www.example.com/john.jpeg\"\n  \"description\": \"this is a short description\",\n  \"genre\": \"5a0148cb311cbb22a0c06095\",\n  \"_id\": \"5a19743ceeef190f68704c3a\",\n  \"removed\": false,\n  \"stars\": 0,\n  \"parts\": [\"5a19743ceeef190f68704c3a\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/story.js",
    "groupTitle": "Story"
  },
  {
    "type": "delete",
    "url": "/api/stories/:id",
    "title": "Delete story",
    "name": "DeleteStory",
    "group": "Story",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"createdAt\": \"2017-11-25T13:46:36.541Z\",\n  \"updatedAt\": \"2017-11-25T13:46:36.541Z\",\n  \"author\": \"5a166233aeb0e40e70e486c9\",\n  \"title\": \"Story number 1\",\n  \"picture\": \"https://www.example.com/john.jpeg\"\n  \"description\": \"this is a short description\",\n  \"genre\": \"5a0148cb311cbb22a0c06095\",\n  \"_id\": \"5a19743ceeef190f68704c3a\",\n  \"removed\": false,\n  \"stars\": 0,\n  \"parts\": [\"5a19743ceeef190f68704c3a\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/story.js",
    "groupTitle": "Story"
  },
  {
    "type": "get",
    "url": "/api/stories",
    "title": "Get stories",
    "name": "GetStories",
    "group": "Story",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The page number you want to fetch QUERYSTRING.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>How many stories to fetch per page QUERYSTRING.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[ \n  {\n    \"createdAt\": \"2017-11-25T13:46:36.541Z\",\n    \"updatedAt\": \"2017-11-25T13:46:36.541Z\",\n    \"author\": \"5a166233aeb0e40e70e486c9\",\n    \"title\": \"Story number 1\",\n    \"picture\": \"https://www.example.com/john.jpeg\"\n    \"description\": \"this is a short description\",\n    \"genre\": \"5a0148cb311cbb22a0c06095\",\n    \"_id\": \"5a19743ceeef190f68704c3a\",\n    \"removed\": false,\n    \"stars\": 0,\n    \"parts\": [\"5a19743ceeef190f68704c3a\"]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/story.js",
    "groupTitle": "Story"
  },
  {
    "type": "get",
    "url": "/api/stories/:id",
    "title": "Get story",
    "name": "GetStory",
    "group": "Story",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"createdAt\": \"2017-11-25T13:46:36.541Z\",\n  \"updatedAt\": \"2017-11-25T13:46:36.541Z\",\n  \"author\": \"5a166233aeb0e40e70e486c9\",\n  \"title\": \"Story number 1\",\n  \"picture\": \"https://www.example.com/john.jpeg\"\n  \"description\": \"this is a short description\",\n  \"genre\": \"5a0148cb311cbb22a0c06095\",\n  \"_id\": \"5a19743ceeef190f68704c3a\",\n  \"removed\": false,\n  \"stars\": 0,\n  \"parts\": [\"5a19743ceeef190f68704c3a\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/story.js",
    "groupTitle": "Story"
  },
  {
    "type": "put",
    "url": "/api/stories/:id",
    "title": "Update story",
    "name": "UpdateStory",
    "group": "Story",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Story's title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Story's short description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "genre",
            "description": "<p>Genre id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n{\n  \"createdAt\": \"2017-11-25T13:46:36.541Z\",\n  \"updatedAt\": \"2017-11-25T13:46:36.541Z\",\n  \"author\": \"5a166233aeb0e40e70e486c9\",\n  \"title\": \"Updated Story\",\n  \"picture\": \"https://www.example.com/john.jpeg\"\n  \"description\": \"this is a short description\",\n  \"genre\": \"5a0148cb311cbb22a0c06095\",\n  \"_id\": \"5a19743ceeef190f68704c3a\",\n  \"removed\": false,\n  \"stars\": 0,\n  \"parts\": [\"5a19743ceeef190f68704c3a\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes/story.js",
    "groupTitle": "Story"
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