define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/device/channelList",
    "title": "设备通道列表",
    "version": "1.0.0",
    "group": "device",
    "name": "ChannelList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authCode",
            "description": "<p>授权码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceID",
            "description": "<p>设备编号，不为空查询该设备下的所有通道，否则查询整个通道列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>页码，分页时默认从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>分页大小，默认为100</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>按通道状态查询，在线：ON；离线：OFF，状态值不区分大小写，非二者则默认查询所有记录</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": true,
            "field": "noPage",
            "description": "<p>是否不分页，true：不分页；false：分页。布尔类型不区分大小写，默认分页</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"errCode\": 200,\n  \"errMsg\": \"Success OK\",\n  \"authCode\": \"188B7DF06C77FDBE69EB25BFE946D33E\" //授权码\n  \"totalCount\": 100 //符合status状态的通道总数\n  \"deviceList\": [\n    {\n      \"channelID\": \"ys666_123\", //通道ID\n      \"channelName\": \"Camera123\", //通道名\n      \"deviceID\": \"ys666\", //设备ID\n      \"status\": \"ON\" //设备状态：ON-在线；OFF-离线\n      \"createdAt\": \"2020-10-20 10-20-10\", //创建时间\n      \"updatedAt\": \"2020-10-20 10-20-10\" //更新时间\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/device.go",
    "groupTitle": "设备信息接口"
  },
  {
    "type": "get",
    "url": "/api/v1/device/list",
    "title": "设备列表",
    "version": "1.0.0",
    "group": "device",
    "name": "DeviceList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authCode",
            "description": "<p>授权码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>页码，分页时默认从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>分页大小，默认100</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>按设备状态查询，在线：ON；离线：OFF，状态值不区分大小写，非二者则默认查询所有记录</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": true,
            "field": "noPage",
            "description": "<p>是否不分页，true：不分页；false：分页。布尔类型不区分大小写，默认分页</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"errCode\": 200,\n  \"errMsg\": \"Success OK\",\n  \"authCode\": \"188B7DF06C77FDBE69EB25BFE946D33E\" //授权码\n  \"totalCount\": 100, //符合status状态的设备总数\n  \"deviceList\": [\n    {\n      \"deviceID\": \"ys666\", //设备ID\n      \"deviceIP\": \"192.168.1.169\", //设备IP\n      \"deviceName\": \"ys\", //设备名\n      \"serialNumber\": \"666666\", //设备序列号\n      \"status\": \"ON\" //设备状态：ON-在线；OFF-离线\n      \"createdAt\": \"2020-10-20 10-20-10\", //创建时间\n      \"updatedAt\": \"2020-10-20 10-20-10\" //更新时间\n    }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/device.go",
    "groupTitle": "设备信息接口"
  },
  {
    "type": "get",
    "url": "/api/v1/stream/start",
    "title": "开始实时直播",
    "version": "1.0.0",
    "group": "stream",
    "name": "Start",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authCode",
            "description": "<p>授权码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceID",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channelID",
            "description": "<p>通道ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"errCode\": 200,\n  \"errMsg\": \"Success OK\",\n  \"authCode\": \"188B7DF06C77FDBE69EB25BFE946D33E\", //授权码\n  \"streamURL\": \"https://www.baidu.com/\" //实时直播URL\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/stream.go",
    "groupTitle": "实时直播接口"
  },
  {
    "type": "get",
    "url": "/api/v1/stream/stop",
    "title": "关闭实时直播",
    "version": "1.0.0",
    "group": "stream",
    "name": "Stop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authCode",
            "description": "<p>授权码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceID",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channelID",
            "description": "<p>通道ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"errCode\": 200,\n  \"errMsg\": \"Success OK\",\n  \"authCode\": \"188B7DF06C77FDBE69EB25BFE946D33E\" //授权码\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/stream.go",
    "groupTitle": "实时直播接口"
  },
  {
    "type": "get",
    "url": "/api/v1/system/info",
    "title": "获取系统信息",
    "version": "1.0.0",
    "group": "system",
    "name": "Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authCode",
            "description": "<p>授权码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"errCode\": 200,\n  \"errMsg\": \"Success OK\",\n  \"authCode\": \"188B7DF06C77FDBE69EB25BFE946D33E\",\n  \"cpuUsedPercent\": \"6%\", //CPU使用率\n  \"virtualMemory\": {\n    \"total\": \"8079MB\", //总内存\n    \"available\": \"2565MB\", //当前可用内存\n    \"used\": \"5514MB\", //当前已使用内存\n    \"usedPercent\": \"68%\" //当前内存使用率\n  },\n  \"network\": {\n    \"uploadSpeed\": \"0KB/s\", //上传速度\n    \"downloadSpeed\": \"0KB/s\" //下载速度\n  },\n  \"deviceInfo\": {\n    \"totalCount\": 0, //设备总数\n    \"onlineCount\": 0 //设备在线总数\n  },\n  \"channelInfo\": {\n    \"totalCount\": 0, //通道总数\n    \"onlineCount\": 0 //通道在线总数\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/system.go",
    "groupTitle": "系统接口"
  },
  {
    "type": "get",
    "url": "/api/v1/system/login",
    "title": "登录",
    "version": "1.0.0",
    "group": "system",
    "name": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"errCode\": 200,\n  \"errMsg\": \"Success OK\",\n  \"authCode\": \"188B7DF06C77FDBE69EB25BFE946D33E\" //授权码，后续所有接口需验证此授权码\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/system.go",
    "groupTitle": "系统接口"
  },
  {
    "type": "get",
    "url": "/api/v1/system/logout",
    "title": "登出",
    "version": "1.0.0",
    "group": "system",
    "name": "Logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authCode",
            "description": "<p>授权码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"errCode\": 200,\n  \"errMsg\": \"Success OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/system.go",
    "groupTitle": "系统接口"
  }
] });
