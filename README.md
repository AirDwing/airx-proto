# @airx/proto

## 最新版本号

[![npm](https://img.shields.io/npm/v/@airx/proto.svg?style=plastic)](https://npmjs.org/package/@airx/proto) 

## 消息定义

```proto
syntax = "proto3";

message Message {

    string did = 1;
    google.protobuf.Timestamp timestamp = 2;
    Data data = 3;
}

message Data {

    Gateway gateway = 1;
    Attitude attitude = 21;
    Battery battery = 22;
    Dronestatus dronestatus = 23;
    GNSS gnss = 24;
    Signal signal = 25;
    Velocity velocity = 26;
    Atmosphere atmosphere = 31;
    repeated Custom custom = 99;
}

message Custom {

    string key = 1;
    google.protobuf.Any val = 2;
}

message google {

    message protobuf {

        message Timestamp {

            int64 seconds = 1;
            int32 nanos = 2;
        }

        message Any {

            string type_url = 1;
            bytes value = 2;
        }
    }
}

message Gateway {

    string name = 1;
}

message Attitude {

    float pitch = 1;
    float roll = 2;
    float yaw = 3;
}

message Battery {

    uint32 percent = 1;
    bool charging = 2;
    uint32 voltage = 3;
    int32 current = 4;
}

message Dronestatus {

    bool motors = 1;
    bool flying = 2;
}

message GNSS {

    uint32 satellite = 1;
    double latitude = 2;
    double longitude = 3;
    double amsl = 4;
    double ato = 5;
    google.protobuf.Timestamp timestamp = 6;
}

message Signal {

    uint32 percent = 1;
    Type type = 2;
    string protocal = 3;
    int32 rssi = 4;

    enum Type {

        UNDEFINED = 0;
        OTHER = 1;
        TELE2G = 2;
        TELE3G = 3;
        TELE4G = 4;
        TELE5G = 5;
        BAND24GHZ = 6;
        BAND58GHZ = 7;
    }
}

message Velocity {

    float x = 1;
    float y = 2;
    float z = 3;
}

message Atmosphere {

    uint32 pm25 = 1;
    uint32 co = 2;
    uint32 so2 = 3;
    uint32 no2 = 4;
    uint32 o3 = 5;
    int32 temperature = 6;
    uint32 humidity = 7;
    uint32 pm10 = 8;
}
```

## 目录结构

```bash
- gateway
  - base.proto # 网关数据
- message.proto # 消息报文
- sensor
  - atmosphere.proto # 大气传感器
- vehicle
  - attitude.proto # 姿态传感器
  - battery.proto # 电池传感器
  - dronestatus.proto # 无人机状态
  - gnss.proto # 位置传感器
  - signal.proto # 信号传感器
  - velocity.proto # 三维速度
```
## Node.js

[![npm](https://img.shields.io/npm/v/@airx/proto.svg?style=plastic)](https://npmjs.org/package/@airx/proto) [![npm](https://img.shields.io/npm/dm/@airx/proto.svg?style=plastic)](https://npmjs.org/package/@airx/proto) [![npm](https://img.shields.io/npm/dt/@airx/proto.svg?style=plastic)](https://npmjs.org/package/@airx/proto)

### 安装

```bash
yarn add @airx/proto
# or
npm i --save @airx/proto
```

### Encode/Decode 示例

```js
const { Message } = require('@airx/proto');

// example code
const message = Message.create({ did: 'device1' });
const buffer = Message.encode(message).finish();
const decoded = Message.decode(buffer);
```

### google.protobuf.Timestamp 示例

```js
const timestamp = require('@airx/proto/timestamp');
const timestampObject = timestamp.set( new Date() );
// 返回 JSON Mapping 对象
const timestampFromObject = timestamp.get(timestampObject);
// 返回 Date Object
```

## License

Apache 2.0
