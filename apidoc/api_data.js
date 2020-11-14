define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "示例接口",
    "description": "<p>示例接口描述</p>",
    "name": "GetIndex",
    "group": "DemoGroupName",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>info</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>0 means success, others are error code</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controller/DemoController.ts",
    "groupTitle": "示例分组"
  },
  {
    "type": "get",
    "url": "/api/project/:id",
    "title": "获取项目信息",
    "description": "<p>这是一个 apidoc 接口文档的演示</p>",
    "name": "GetProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Project ID.</p>"
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
            "field": "data",
            "description": "<p>project info</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>0 means success, others are error code</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controller/ProjectController.ts",
    "groupTitle": "示例项目"
  }
] });
