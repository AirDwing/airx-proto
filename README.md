# 报文规范

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