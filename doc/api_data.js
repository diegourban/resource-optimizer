define({ "api": [
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Minify CSS",
    "version": "0.2.0",
    "name": "MinifyCSS",
    "group": "Minify",
    "examples": [
      {
        "title": "Exemplo:",
        "content": "curl -X POST -H \"Content-Type: text/css\" --data-binary \"@/home/urban/inputs/input.css\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.css",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>text/css</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Conteúdo minificado.</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/CssRouter.js",
    "groupTitle": "Minify"
  },
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Minify HTML",
    "version": "0.1.0",
    "name": "MinifyHTML",
    "group": "Minify",
    "examples": [
      {
        "title": "Exemplo:",
        "content": "curl -X POST -H \"Content-Type: text/html\" --data-binary \"@/home/urban/inputs/input.html\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.html",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>text/html</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Conteúdo minificado.</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/HtmlRouter.js",
    "groupTitle": "Minify"
  },
  {
    "type": "post",
    "url": "/api/minify/image",
    "title": "Minify JPEG",
    "version": "0.1.0",
    "name": "MinifyJPEG",
    "group": "Minify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "lossless",
            "description": "<p>true para compressão sem perdas.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo:",
        "content": "curl -X POST -H \"Content-Type: image/jpeg\" --data-binary \"@/home/urban/inputs/input.jpg\" https://resource-optimizer-api.herokuapp.com/api/minify/image >> /home/urban/outputs/output.jpg",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>image/jpeg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Buffer",
            "optional": false,
            "field": "body",
            "description": "<p>Conteúdo minificado.</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/ImageRouter.js",
    "groupTitle": "Minify"
  },
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Minify JS",
    "version": "0.1.0",
    "name": "MinifyJS",
    "group": "Minify",
    "examples": [
      {
        "title": "Exemplo:",
        "content": "curl -X POST -H \"Content-Type: text/javascript\" --data-binary \"@/home/urban/inputs/input.js\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.js",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>text/javascript</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Conteúdo minificado.</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/JsRouter.js",
    "groupTitle": "Minify"
  },
  {
    "type": "post",
    "url": "/api/minify/image",
    "title": "Minify PNG",
    "version": "0.1.0",
    "name": "MinifyPNG",
    "group": "Minify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quality",
            "description": "<p>Nível de Qualidade: low, med ou high.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo:",
        "content": "curl -X POST -H \"Content-Type: image/png\" --data-binary \"@/home/urban/inputs/input.png\" https://resource-optimizer-api.herokuapp.com/api/minify/image >> /home/urban/outputs/output.png",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>image/png</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Buffer",
            "optional": false,
            "field": "body",
            "description": "<p>Conteúdo minificado.</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/ImageRouter.js",
    "groupTitle": "Minify"
  }
] });
