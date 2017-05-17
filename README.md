# 报文规范

## 命名规范

- 用简单单词表达,尽量均为一个单词
- 常用词存在缩写,用缩写
- 定义常用参数,如温湿度传感器仅需保存`温度`,`湿度`即可

示例:

```proto
message gnns {
  double lat = 1; // 维度
  double lng = 2; // 经度
  double alt = 3; // 海拔高度
  int32 satellites = 5; // 可见卫星数量
  float acc = 6; // 精度（误差）
  google.protobuf.Timestamp timestamp = 7; // 传感器数据时间
}
```

## 消息基本格式

```proto
message Message {
  string did = 1; // 设备id,必须
  google.protobuf.Timestamp timestamp = 2; // 上报时间戳,必须
  Data data = 20;  // 数据报文,可选
  Action action = 50;  // 动作报文,可选
}
```

## 数据报文

```proto
message Data {
  repeated Custom custom = 99;
}
```

## 动作报文

```proto
message Action {
  repeated Custom custom = 99;
}
```

## 自定义数据

```proto
message Custom { // 自定义数据
  string key = 1;
  google.protobuf.Any val = 2;
}
```

## 示例:

```js
{
  did: 'UAV-SN',
  timestamp: 1234567890,
  data: {
    attitude: {
      pitch: 1.23,
      roll: 1.23,
      yaw: 1.23
    },
    battery: {
      remain: 98,
      temprature: 30,
      voltage: 12000
    }
  },
  action: {
    uav: {
      fly: 1
    }
  }
}
```

# 接口请求规范

## 成功状态 200

```js
{
  status: 1,
  data: {
    // users: []
    // user: {}
  } 
}
```

## 错误状态 4xx/5xx

```js
{
  status: 0,
  err: {
    code: 40010,
    msg: '错误信息'
  }
}
```
