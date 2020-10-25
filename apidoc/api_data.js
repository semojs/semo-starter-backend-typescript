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
  }
] });
