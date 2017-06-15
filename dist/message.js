/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {string} [did] Message did
     * @property {google.protobuf.ITimestamp} [timestamp] Message timestamp
     * @property {IData} [data] Message data
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message did.
     * @member {string}did
     * @memberof Message
     * @instance
     */
    Message.prototype.did = "";

    /**
     * Message timestamp.
     * @member {(google.protobuf.ITimestamp|null|undefined)}timestamp
     * @memberof Message
     * @instance
     */
    Message.prototype.timestamp = null;

    /**
     * Message data.
     * @member {(IData|null|undefined)}data
     * @memberof Message
     * @instance
     */
    Message.prototype.data = null;

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.did != null && message.hasOwnProperty("did"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.did);
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.data != null && message.hasOwnProperty("data"))
            $root.Data.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.did = reader.string();
                break;
            case 2:
                message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 3:
                message.data = $root.Data.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.did != null && message.hasOwnProperty("did"))
            if (!$util.isString(message.did))
                return "did: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
            if (error)
                return "timestamp." + error;
        }
        if (message.data != null && message.hasOwnProperty("data")) {
            error = $root.Data.verify(message.data);
            if (error)
                return "data." + error;
        }
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
        if (object.did != null)
            message.did = String(object.did);
        if (object.timestamp != null) {
            if (typeof object.timestamp !== "object")
                throw TypeError(".Message.timestamp: object expected");
            message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
        }
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".Message.data: object expected");
            message.data = $root.Data.fromObject(object.data);
        }
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.did = "";
            object.timestamp = null;
            object.data = null;
        }
        if (message.did != null && message.hasOwnProperty("did"))
            object.did = message.did;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = $root.Data.toObject(message.data, options);
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Message;
})();

$root.Data = (function() {

    /**
     * Properties of a Data.
     * @exports IData
     * @interface IData
     * @property {IGateway} [gateway] Data gateway
     * @property {IAttitude} [attitude] Data attitude
     * @property {IBattery} [battery] Data battery
     * @property {IBattery} [batteryController] Data batteryController
     * @property {IDronestatus} [dronestatus] Data dronestatus
     * @property {IGNSS} [gnss] Data gnss
     * @property {ISignal} [signal] Data signal
     * @property {ISignal} [signalImage] Data signalImage
     * @property {IVelocity} [velocity] Data velocity
     * @property {IAtmosphere} [atmosphere] Data atmosphere
     * @property {Array.<ICustom>} [custom] Data custom
     */

    /**
     * Constructs a new Data.
     * @exports Data
     * @classdesc Represents a Data.
     * @constructor
     * @param {IData=} [properties] Properties to set
     */
    function Data(properties) {
        this.custom = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Data gateway.
     * @member {(IGateway|null|undefined)}gateway
     * @memberof Data
     * @instance
     */
    Data.prototype.gateway = null;

    /**
     * Data attitude.
     * @member {(IAttitude|null|undefined)}attitude
     * @memberof Data
     * @instance
     */
    Data.prototype.attitude = null;

    /**
     * Data battery.
     * @member {(IBattery|null|undefined)}battery
     * @memberof Data
     * @instance
     */
    Data.prototype.battery = null;

    /**
     * Data batteryController.
     * @member {(IBattery|null|undefined)}batteryController
     * @memberof Data
     * @instance
     */
    Data.prototype.batteryController = null;

    /**
     * Data dronestatus.
     * @member {(IDronestatus|null|undefined)}dronestatus
     * @memberof Data
     * @instance
     */
    Data.prototype.dronestatus = null;

    /**
     * Data gnss.
     * @member {(IGNSS|null|undefined)}gnss
     * @memberof Data
     * @instance
     */
    Data.prototype.gnss = null;

    /**
     * Data signal.
     * @member {(ISignal|null|undefined)}signal
     * @memberof Data
     * @instance
     */
    Data.prototype.signal = null;

    /**
     * Data signalImage.
     * @member {(ISignal|null|undefined)}signalImage
     * @memberof Data
     * @instance
     */
    Data.prototype.signalImage = null;

    /**
     * Data velocity.
     * @member {(IVelocity|null|undefined)}velocity
     * @memberof Data
     * @instance
     */
    Data.prototype.velocity = null;

    /**
     * Data atmosphere.
     * @member {(IAtmosphere|null|undefined)}atmosphere
     * @memberof Data
     * @instance
     */
    Data.prototype.atmosphere = null;

    /**
     * Data custom.
     * @member {Array.<ICustom>}custom
     * @memberof Data
     * @instance
     */
    Data.prototype.custom = $util.emptyArray;

    /**
     * Creates a new Data instance using the specified properties.
     * @function create
     * @memberof Data
     * @static
     * @param {IData=} [properties] Properties to set
     * @returns {Data} Data instance
     */
    Data.create = function create(properties) {
        return new Data(properties);
    };

    /**
     * Encodes the specified Data message. Does not implicitly {@link Data.verify|verify} messages.
     * @function encode
     * @memberof Data
     * @static
     * @param {IData} message Data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Data.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.gateway != null && message.hasOwnProperty("gateway"))
            $root.Gateway.encode(message.gateway, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.attitude != null && message.hasOwnProperty("attitude"))
            $root.Attitude.encode(message.attitude, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.battery != null && message.hasOwnProperty("battery"))
            $root.Battery.encode(message.battery, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.batteryController != null && message.hasOwnProperty("batteryController"))
            $root.Battery.encode(message.batteryController, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.dronestatus != null && message.hasOwnProperty("dronestatus"))
            $root.Dronestatus.encode(message.dronestatus, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.gnss != null && message.hasOwnProperty("gnss"))
            $root.GNSS.encode(message.gnss, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        if (message.signal != null && message.hasOwnProperty("signal"))
            $root.Signal.encode(message.signal, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        if (message.signalImage != null && message.hasOwnProperty("signalImage"))
            $root.Signal.encode(message.signalImage, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.velocity != null && message.hasOwnProperty("velocity"))
            $root.Velocity.encode(message.velocity, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
        if (message.atmosphere != null && message.hasOwnProperty("atmosphere"))
            $root.Atmosphere.encode(message.atmosphere, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
        if (message.custom != null && message.custom.length)
            for (var i = 0; i < message.custom.length; ++i)
                $root.Custom.encode(message.custom[i], writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Data message, length delimited. Does not implicitly {@link Data.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Data
     * @static
     * @param {IData} message Data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Data.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Data message from the specified reader or buffer.
     * @function decode
     * @memberof Data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Data} Data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Data.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Data();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.gateway = $root.Gateway.decode(reader, reader.uint32());
                break;
            case 21:
                message.attitude = $root.Attitude.decode(reader, reader.uint32());
                break;
            case 22:
                message.battery = $root.Battery.decode(reader, reader.uint32());
                break;
            case 23:
                message.batteryController = $root.Battery.decode(reader, reader.uint32());
                break;
            case 24:
                message.dronestatus = $root.Dronestatus.decode(reader, reader.uint32());
                break;
            case 25:
                message.gnss = $root.GNSS.decode(reader, reader.uint32());
                break;
            case 26:
                message.signal = $root.Signal.decode(reader, reader.uint32());
                break;
            case 27:
                message.signalImage = $root.Signal.decode(reader, reader.uint32());
                break;
            case 28:
                message.velocity = $root.Velocity.decode(reader, reader.uint32());
                break;
            case 31:
                message.atmosphere = $root.Atmosphere.decode(reader, reader.uint32());
                break;
            case 99:
                if (!(message.custom && message.custom.length))
                    message.custom = [];
                message.custom.push($root.Custom.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Data message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Data} Data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Data.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Data message.
     * @function verify
     * @memberof Data
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Data.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.gateway != null && message.hasOwnProperty("gateway")) {
            var error = $root.Gateway.verify(message.gateway);
            if (error)
                return "gateway." + error;
        }
        if (message.attitude != null && message.hasOwnProperty("attitude")) {
            error = $root.Attitude.verify(message.attitude);
            if (error)
                return "attitude." + error;
        }
        if (message.battery != null && message.hasOwnProperty("battery")) {
            error = $root.Battery.verify(message.battery);
            if (error)
                return "battery." + error;
        }
        if (message.batteryController != null && message.hasOwnProperty("batteryController")) {
            error = $root.Battery.verify(message.batteryController);
            if (error)
                return "batteryController." + error;
        }
        if (message.dronestatus != null && message.hasOwnProperty("dronestatus")) {
            error = $root.Dronestatus.verify(message.dronestatus);
            if (error)
                return "dronestatus." + error;
        }
        if (message.gnss != null && message.hasOwnProperty("gnss")) {
            error = $root.GNSS.verify(message.gnss);
            if (error)
                return "gnss." + error;
        }
        if (message.signal != null && message.hasOwnProperty("signal")) {
            error = $root.Signal.verify(message.signal);
            if (error)
                return "signal." + error;
        }
        if (message.signalImage != null && message.hasOwnProperty("signalImage")) {
            error = $root.Signal.verify(message.signalImage);
            if (error)
                return "signalImage." + error;
        }
        if (message.velocity != null && message.hasOwnProperty("velocity")) {
            error = $root.Velocity.verify(message.velocity);
            if (error)
                return "velocity." + error;
        }
        if (message.atmosphere != null && message.hasOwnProperty("atmosphere")) {
            error = $root.Atmosphere.verify(message.atmosphere);
            if (error)
                return "atmosphere." + error;
        }
        if (message.custom != null && message.hasOwnProperty("custom")) {
            if (!Array.isArray(message.custom))
                return "custom: array expected";
            for (var i = 0; i < message.custom.length; ++i) {
                error = $root.Custom.verify(message.custom[i]);
                if (error)
                    return "custom." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Data message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Data
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Data} Data
     */
    Data.fromObject = function fromObject(object) {
        if (object instanceof $root.Data)
            return object;
        var message = new $root.Data();
        if (object.gateway != null) {
            if (typeof object.gateway !== "object")
                throw TypeError(".Data.gateway: object expected");
            message.gateway = $root.Gateway.fromObject(object.gateway);
        }
        if (object.attitude != null) {
            if (typeof object.attitude !== "object")
                throw TypeError(".Data.attitude: object expected");
            message.attitude = $root.Attitude.fromObject(object.attitude);
        }
        if (object.battery != null) {
            if (typeof object.battery !== "object")
                throw TypeError(".Data.battery: object expected");
            message.battery = $root.Battery.fromObject(object.battery);
        }
        if (object.batteryController != null) {
            if (typeof object.batteryController !== "object")
                throw TypeError(".Data.batteryController: object expected");
            message.batteryController = $root.Battery.fromObject(object.batteryController);
        }
        if (object.dronestatus != null) {
            if (typeof object.dronestatus !== "object")
                throw TypeError(".Data.dronestatus: object expected");
            message.dronestatus = $root.Dronestatus.fromObject(object.dronestatus);
        }
        if (object.gnss != null) {
            if (typeof object.gnss !== "object")
                throw TypeError(".Data.gnss: object expected");
            message.gnss = $root.GNSS.fromObject(object.gnss);
        }
        if (object.signal != null) {
            if (typeof object.signal !== "object")
                throw TypeError(".Data.signal: object expected");
            message.signal = $root.Signal.fromObject(object.signal);
        }
        if (object.signalImage != null) {
            if (typeof object.signalImage !== "object")
                throw TypeError(".Data.signalImage: object expected");
            message.signalImage = $root.Signal.fromObject(object.signalImage);
        }
        if (object.velocity != null) {
            if (typeof object.velocity !== "object")
                throw TypeError(".Data.velocity: object expected");
            message.velocity = $root.Velocity.fromObject(object.velocity);
        }
        if (object.atmosphere != null) {
            if (typeof object.atmosphere !== "object")
                throw TypeError(".Data.atmosphere: object expected");
            message.atmosphere = $root.Atmosphere.fromObject(object.atmosphere);
        }
        if (object.custom) {
            if (!Array.isArray(object.custom))
                throw TypeError(".Data.custom: array expected");
            message.custom = [];
            for (var i = 0; i < object.custom.length; ++i) {
                if (typeof object.custom[i] !== "object")
                    throw TypeError(".Data.custom: object expected");
                message.custom[i] = $root.Custom.fromObject(object.custom[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Data message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Data
     * @static
     * @param {Data} message Data
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Data.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.custom = [];
        if (options.defaults) {
            object.gateway = null;
            object.attitude = null;
            object.battery = null;
            object.batteryController = null;
            object.dronestatus = null;
            object.gnss = null;
            object.signal = null;
            object.signalImage = null;
            object.velocity = null;
            object.atmosphere = null;
        }
        if (message.gateway != null && message.hasOwnProperty("gateway"))
            object.gateway = $root.Gateway.toObject(message.gateway, options);
        if (message.attitude != null && message.hasOwnProperty("attitude"))
            object.attitude = $root.Attitude.toObject(message.attitude, options);
        if (message.battery != null && message.hasOwnProperty("battery"))
            object.battery = $root.Battery.toObject(message.battery, options);
        if (message.batteryController != null && message.hasOwnProperty("batteryController"))
            object.batteryController = $root.Battery.toObject(message.batteryController, options);
        if (message.dronestatus != null && message.hasOwnProperty("dronestatus"))
            object.dronestatus = $root.Dronestatus.toObject(message.dronestatus, options);
        if (message.gnss != null && message.hasOwnProperty("gnss"))
            object.gnss = $root.GNSS.toObject(message.gnss, options);
        if (message.signal != null && message.hasOwnProperty("signal"))
            object.signal = $root.Signal.toObject(message.signal, options);
        if (message.signalImage != null && message.hasOwnProperty("signalImage"))
            object.signalImage = $root.Signal.toObject(message.signalImage, options);
        if (message.velocity != null && message.hasOwnProperty("velocity"))
            object.velocity = $root.Velocity.toObject(message.velocity, options);
        if (message.atmosphere != null && message.hasOwnProperty("atmosphere"))
            object.atmosphere = $root.Atmosphere.toObject(message.atmosphere, options);
        if (message.custom && message.custom.length) {
            object.custom = [];
            for (var j = 0; j < message.custom.length; ++j)
                object.custom[j] = $root.Custom.toObject(message.custom[j], options);
        }
        return object;
    };

    /**
     * Converts this Data to JSON.
     * @function toJSON
     * @memberof Data
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Data.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Data;
})();

$root.Custom = (function() {

    /**
     * Properties of a Custom.
     * @exports ICustom
     * @interface ICustom
     * @property {string} [key] Custom key
     * @property {google.protobuf.IAny} [val] Custom val
     */

    /**
     * Constructs a new Custom.
     * @exports Custom
     * @classdesc Represents a Custom.
     * @constructor
     * @param {ICustom=} [properties] Properties to set
     */
    function Custom(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Custom key.
     * @member {string}key
     * @memberof Custom
     * @instance
     */
    Custom.prototype.key = "";

    /**
     * Custom val.
     * @member {(google.protobuf.IAny|null|undefined)}val
     * @memberof Custom
     * @instance
     */
    Custom.prototype.val = null;

    /**
     * Creates a new Custom instance using the specified properties.
     * @function create
     * @memberof Custom
     * @static
     * @param {ICustom=} [properties] Properties to set
     * @returns {Custom} Custom instance
     */
    Custom.create = function create(properties) {
        return new Custom(properties);
    };

    /**
     * Encodes the specified Custom message. Does not implicitly {@link Custom.verify|verify} messages.
     * @function encode
     * @memberof Custom
     * @static
     * @param {ICustom} message Custom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Custom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && message.hasOwnProperty("key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        if (message.val != null && message.hasOwnProperty("val"))
            $root.google.protobuf.Any.encode(message.val, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Custom message, length delimited. Does not implicitly {@link Custom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Custom
     * @static
     * @param {ICustom} message Custom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Custom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Custom message from the specified reader or buffer.
     * @function decode
     * @memberof Custom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Custom} Custom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Custom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Custom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.key = reader.string();
                break;
            case 2:
                message.val = $root.google.protobuf.Any.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Custom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Custom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Custom} Custom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Custom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Custom message.
     * @function verify
     * @memberof Custom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Custom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.val != null && message.hasOwnProperty("val")) {
            var error = $root.google.protobuf.Any.verify(message.val);
            if (error)
                return "val." + error;
        }
        return null;
    };

    /**
     * Creates a Custom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Custom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Custom} Custom
     */
    Custom.fromObject = function fromObject(object) {
        if (object instanceof $root.Custom)
            return object;
        var message = new $root.Custom();
        if (object.key != null)
            message.key = String(object.key);
        if (object.val != null) {
            if (typeof object.val !== "object")
                throw TypeError(".Custom.val: object expected");
            message.val = $root.google.protobuf.Any.fromObject(object.val);
        }
        return message;
    };

    /**
     * Creates a plain object from a Custom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Custom
     * @static
     * @param {Custom} message Custom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Custom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.key = "";
            object.val = null;
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.val != null && message.hasOwnProperty("val"))
            object.val = $root.google.protobuf.Any.toObject(message.val, options);
        return object;
    };

    /**
     * Converts this Custom to JSON.
     * @function toJSON
     * @memberof Custom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Custom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Custom;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long} [seconds] Timestamp seconds
             * @property {number} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long}seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number}nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string} [type_url] Any type_url
             * @property {Uint8Array} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string}type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array}value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    object.value = options.bytes === String ? "" : [];
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

$root.Gateway = (function() {

    /**
     * Properties of a Gateway.
     * @exports IGateway
     * @interface IGateway
     * @property {string} [name] Gateway name
     */

    /**
     * Constructs a new Gateway.
     * @exports Gateway
     * @classdesc Represents a Gateway.
     * @constructor
     * @param {IGateway=} [properties] Properties to set
     */
    function Gateway(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Gateway name.
     * @member {string}name
     * @memberof Gateway
     * @instance
     */
    Gateway.prototype.name = "";

    /**
     * Creates a new Gateway instance using the specified properties.
     * @function create
     * @memberof Gateway
     * @static
     * @param {IGateway=} [properties] Properties to set
     * @returns {Gateway} Gateway instance
     */
    Gateway.create = function create(properties) {
        return new Gateway(properties);
    };

    /**
     * Encodes the specified Gateway message. Does not implicitly {@link Gateway.verify|verify} messages.
     * @function encode
     * @memberof Gateway
     * @static
     * @param {IGateway} message Gateway message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Gateway.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified Gateway message, length delimited. Does not implicitly {@link Gateway.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Gateway
     * @static
     * @param {IGateway} message Gateway message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Gateway.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Gateway message from the specified reader or buffer.
     * @function decode
     * @memberof Gateway
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Gateway} Gateway
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Gateway.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Gateway();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Gateway message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Gateway
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Gateway} Gateway
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Gateway.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Gateway message.
     * @function verify
     * @memberof Gateway
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Gateway.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a Gateway message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Gateway
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Gateway} Gateway
     */
    Gateway.fromObject = function fromObject(object) {
        if (object instanceof $root.Gateway)
            return object;
        var message = new $root.Gateway();
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a Gateway message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Gateway
     * @static
     * @param {Gateway} message Gateway
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Gateway.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this Gateway to JSON.
     * @function toJSON
     * @memberof Gateway
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Gateway.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Gateway;
})();

$root.Attitude = (function() {

    /**
     * Properties of an Attitude.
     * @exports IAttitude
     * @interface IAttitude
     * @property {number} [pitch] 俯仰
     * desc: 俯仰角，绕x轴，对应欧拉角γ。抬头为正
     * unit: °
     * range: [-180, 180]
     * @property {number} [roll] 横滚
     * desc: 翻滚角，绕z轴，对应欧拉角β。右滚为正
     * unit: °
     * range: [-180, 180]
     * @property {number} [yaw] 偏航
     * desc: 方向/航向角，绕y轴，对应欧拉角α。0为指向真北，顺时针旋转增加数值
     * unit: °
     * range: [-180, 180]
     */

    /**
     * Constructs a new Attitude.
     * @exports Attitude
     * @classdesc Represents an Attitude.
     * @constructor
     * @param {IAttitude=} [properties] Properties to set
     */
    function Attitude(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * 俯仰
     * desc: 俯仰角，绕x轴，对应欧拉角γ。抬头为正
     * unit: °
     * range: [-180, 180]
     * @member {number}pitch
     * @memberof Attitude
     * @instance
     */
    Attitude.prototype.pitch = 0;

    /**
     * 横滚
     * desc: 翻滚角，绕z轴，对应欧拉角β。右滚为正
     * unit: °
     * range: [-180, 180]
     * @member {number}roll
     * @memberof Attitude
     * @instance
     */
    Attitude.prototype.roll = 0;

    /**
     * 偏航
     * desc: 方向/航向角，绕y轴，对应欧拉角α。0为指向真北，顺时针旋转增加数值
     * unit: °
     * range: [-180, 180]
     * @member {number}yaw
     * @memberof Attitude
     * @instance
     */
    Attitude.prototype.yaw = 0;

    /**
     * Creates a new Attitude instance using the specified properties.
     * @function create
     * @memberof Attitude
     * @static
     * @param {IAttitude=} [properties] Properties to set
     * @returns {Attitude} Attitude instance
     */
    Attitude.create = function create(properties) {
        return new Attitude(properties);
    };

    /**
     * Encodes the specified Attitude message. Does not implicitly {@link Attitude.verify|verify} messages.
     * @function encode
     * @memberof Attitude
     * @static
     * @param {IAttitude} message Attitude message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Attitude.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pitch != null && message.hasOwnProperty("pitch"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.pitch);
        if (message.roll != null && message.hasOwnProperty("roll"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.roll);
        if (message.yaw != null && message.hasOwnProperty("yaw"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.yaw);
        return writer;
    };

    /**
     * Encodes the specified Attitude message, length delimited. Does not implicitly {@link Attitude.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Attitude
     * @static
     * @param {IAttitude} message Attitude message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Attitude.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Attitude message from the specified reader or buffer.
     * @function decode
     * @memberof Attitude
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Attitude} Attitude
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Attitude.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Attitude();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.pitch = reader.float();
                break;
            case 2:
                message.roll = reader.float();
                break;
            case 3:
                message.yaw = reader.float();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Attitude message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Attitude
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Attitude} Attitude
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Attitude.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Attitude message.
     * @function verify
     * @memberof Attitude
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Attitude.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pitch != null && message.hasOwnProperty("pitch"))
            if (typeof message.pitch !== "number")
                return "pitch: number expected";
        if (message.roll != null && message.hasOwnProperty("roll"))
            if (typeof message.roll !== "number")
                return "roll: number expected";
        if (message.yaw != null && message.hasOwnProperty("yaw"))
            if (typeof message.yaw !== "number")
                return "yaw: number expected";
        return null;
    };

    /**
     * Creates an Attitude message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Attitude
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Attitude} Attitude
     */
    Attitude.fromObject = function fromObject(object) {
        if (object instanceof $root.Attitude)
            return object;
        var message = new $root.Attitude();
        if (object.pitch != null)
            message.pitch = Number(object.pitch);
        if (object.roll != null)
            message.roll = Number(object.roll);
        if (object.yaw != null)
            message.yaw = Number(object.yaw);
        return message;
    };

    /**
     * Creates a plain object from an Attitude message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Attitude
     * @static
     * @param {Attitude} message Attitude
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Attitude.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.pitch = 0;
            object.roll = 0;
            object.yaw = 0;
        }
        if (message.pitch != null && message.hasOwnProperty("pitch"))
            object.pitch = options.json && !isFinite(message.pitch) ? String(message.pitch) : message.pitch;
        if (message.roll != null && message.hasOwnProperty("roll"))
            object.roll = options.json && !isFinite(message.roll) ? String(message.roll) : message.roll;
        if (message.yaw != null && message.hasOwnProperty("yaw"))
            object.yaw = options.json && !isFinite(message.yaw) ? String(message.yaw) : message.yaw;
        return object;
    };

    /**
     * Converts this Attitude to JSON.
     * @function toJSON
     * @memberof Attitude
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Attitude.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Attitude;
})();

$root.Battery = (function() {

    /**
     * Properties of a Battery.
     * @exports IBattery
     * @interface IBattery
     * @property {number} [percent] 电量
     * desc: 电量百分比
     * unit: %
     * range: [0, 100]
     * @property {boolean} [charging] 正在充电
     * desc: 是否正在充电
     * @property {number} [voltage] 电压
     * desc: 电池组总电压
     * unit: mV
     * range: [0, +∞)
     * @property {number} [current] 电流
     * desc: 正为放电，负为充电
     * unit: mA
     * @property {number} [temperature] 温度
     * desc: 温度
     * range: (-∞, +∞)
     */

    /**
     * Constructs a new Battery.
     * @exports Battery
     * @classdesc Represents a Battery.
     * @constructor
     * @param {IBattery=} [properties] Properties to set
     */
    function Battery(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * 电量
     * desc: 电量百分比
     * unit: %
     * range: [0, 100]
     * @member {number}percent
     * @memberof Battery
     * @instance
     */
    Battery.prototype.percent = 0;

    /**
     * 正在充电
     * desc: 是否正在充电
     * @member {boolean}charging
     * @memberof Battery
     * @instance
     */
    Battery.prototype.charging = false;

    /**
     * 电压
     * desc: 电池组总电压
     * unit: mV
     * range: [0, +∞)
     * @member {number}voltage
     * @memberof Battery
     * @instance
     */
    Battery.prototype.voltage = 0;

    /**
     * 电流
     * desc: 正为放电，负为充电
     * unit: mA
     * @member {number}current
     * @memberof Battery
     * @instance
     */
    Battery.prototype.current = 0;

    /**
     * 温度
     * desc: 温度
     * range: (-∞, +∞)
     * @member {number}temperature
     * @memberof Battery
     * @instance
     */
    Battery.prototype.temperature = 0;

    /**
     * Creates a new Battery instance using the specified properties.
     * @function create
     * @memberof Battery
     * @static
     * @param {IBattery=} [properties] Properties to set
     * @returns {Battery} Battery instance
     */
    Battery.create = function create(properties) {
        return new Battery(properties);
    };

    /**
     * Encodes the specified Battery message. Does not implicitly {@link Battery.verify|verify} messages.
     * @function encode
     * @memberof Battery
     * @static
     * @param {IBattery} message Battery message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Battery.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.percent != null && message.hasOwnProperty("percent"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.percent);
        if (message.charging != null && message.hasOwnProperty("charging"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.charging);
        if (message.voltage != null && message.hasOwnProperty("voltage"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.voltage);
        if (message.current != null && message.hasOwnProperty("current"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.current);
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.temperature);
        return writer;
    };

    /**
     * Encodes the specified Battery message, length delimited. Does not implicitly {@link Battery.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Battery
     * @static
     * @param {IBattery} message Battery message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Battery.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Battery message from the specified reader or buffer.
     * @function decode
     * @memberof Battery
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Battery} Battery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Battery.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Battery();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.percent = reader.uint32();
                break;
            case 2:
                message.charging = reader.bool();
                break;
            case 3:
                message.voltage = reader.uint32();
                break;
            case 4:
                message.current = reader.int32();
                break;
            case 5:
                message.temperature = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Battery message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Battery
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Battery} Battery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Battery.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Battery message.
     * @function verify
     * @memberof Battery
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Battery.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.percent != null && message.hasOwnProperty("percent"))
            if (!$util.isInteger(message.percent))
                return "percent: integer expected";
        if (message.charging != null && message.hasOwnProperty("charging"))
            if (typeof message.charging !== "boolean")
                return "charging: boolean expected";
        if (message.voltage != null && message.hasOwnProperty("voltage"))
            if (!$util.isInteger(message.voltage))
                return "voltage: integer expected";
        if (message.current != null && message.hasOwnProperty("current"))
            if (!$util.isInteger(message.current))
                return "current: integer expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (!$util.isInteger(message.temperature))
                return "temperature: integer expected";
        return null;
    };

    /**
     * Creates a Battery message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Battery
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Battery} Battery
     */
    Battery.fromObject = function fromObject(object) {
        if (object instanceof $root.Battery)
            return object;
        var message = new $root.Battery();
        if (object.percent != null)
            message.percent = object.percent >>> 0;
        if (object.charging != null)
            message.charging = Boolean(object.charging);
        if (object.voltage != null)
            message.voltage = object.voltage >>> 0;
        if (object.current != null)
            message.current = object.current | 0;
        if (object.temperature != null)
            message.temperature = object.temperature | 0;
        return message;
    };

    /**
     * Creates a plain object from a Battery message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Battery
     * @static
     * @param {Battery} message Battery
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Battery.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.percent = 0;
            object.charging = false;
            object.voltage = 0;
            object.current = 0;
            object.temperature = 0;
        }
        if (message.percent != null && message.hasOwnProperty("percent"))
            object.percent = message.percent;
        if (message.charging != null && message.hasOwnProperty("charging"))
            object.charging = message.charging;
        if (message.voltage != null && message.hasOwnProperty("voltage"))
            object.voltage = message.voltage;
        if (message.current != null && message.hasOwnProperty("current"))
            object.current = message.current;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = message.temperature;
        return object;
    };

    /**
     * Converts this Battery to JSON.
     * @function toJSON
     * @memberof Battery
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Battery.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Battery;
})();

$root.Dronestatus = (function() {

    /**
     * Properties of a Dronestatus.
     * @exports IDronestatus
     * @interface IDronestatus
     * @property {boolean} [motors] 电机状态
     * desc: 电机是否启动
     * @property {boolean} [flying] 飞行状态
     * desc: 是否正在飞行
     */

    /**
     * Constructs a new Dronestatus.
     * @exports Dronestatus
     * @classdesc Represents a Dronestatus.
     * @constructor
     * @param {IDronestatus=} [properties] Properties to set
     */
    function Dronestatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * 电机状态
     * desc: 电机是否启动
     * @member {boolean}motors
     * @memberof Dronestatus
     * @instance
     */
    Dronestatus.prototype.motors = false;

    /**
     * 飞行状态
     * desc: 是否正在飞行
     * @member {boolean}flying
     * @memberof Dronestatus
     * @instance
     */
    Dronestatus.prototype.flying = false;

    /**
     * Creates a new Dronestatus instance using the specified properties.
     * @function create
     * @memberof Dronestatus
     * @static
     * @param {IDronestatus=} [properties] Properties to set
     * @returns {Dronestatus} Dronestatus instance
     */
    Dronestatus.create = function create(properties) {
        return new Dronestatus(properties);
    };

    /**
     * Encodes the specified Dronestatus message. Does not implicitly {@link Dronestatus.verify|verify} messages.
     * @function encode
     * @memberof Dronestatus
     * @static
     * @param {IDronestatus} message Dronestatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Dronestatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.motors != null && message.hasOwnProperty("motors"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.motors);
        if (message.flying != null && message.hasOwnProperty("flying"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.flying);
        return writer;
    };

    /**
     * Encodes the specified Dronestatus message, length delimited. Does not implicitly {@link Dronestatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Dronestatus
     * @static
     * @param {IDronestatus} message Dronestatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Dronestatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Dronestatus message from the specified reader or buffer.
     * @function decode
     * @memberof Dronestatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Dronestatus} Dronestatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Dronestatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Dronestatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.motors = reader.bool();
                break;
            case 2:
                message.flying = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Dronestatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Dronestatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Dronestatus} Dronestatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Dronestatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Dronestatus message.
     * @function verify
     * @memberof Dronestatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Dronestatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.motors != null && message.hasOwnProperty("motors"))
            if (typeof message.motors !== "boolean")
                return "motors: boolean expected";
        if (message.flying != null && message.hasOwnProperty("flying"))
            if (typeof message.flying !== "boolean")
                return "flying: boolean expected";
        return null;
    };

    /**
     * Creates a Dronestatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Dronestatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Dronestatus} Dronestatus
     */
    Dronestatus.fromObject = function fromObject(object) {
        if (object instanceof $root.Dronestatus)
            return object;
        var message = new $root.Dronestatus();
        if (object.motors != null)
            message.motors = Boolean(object.motors);
        if (object.flying != null)
            message.flying = Boolean(object.flying);
        return message;
    };

    /**
     * Creates a plain object from a Dronestatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Dronestatus
     * @static
     * @param {Dronestatus} message Dronestatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Dronestatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.motors = false;
            object.flying = false;
        }
        if (message.motors != null && message.hasOwnProperty("motors"))
            object.motors = message.motors;
        if (message.flying != null && message.hasOwnProperty("flying"))
            object.flying = message.flying;
        return object;
    };

    /**
     * Converts this Dronestatus to JSON.
     * @function toJSON
     * @memberof Dronestatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Dronestatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Dronestatus;
})();

$root.GNSS = (function() {

    /**
     * Properties of a GNSS.
     * @exports IGNSS
     * @interface IGNSS
     * @property {number} [satellite] 卫星数
     * desc: 3颗：2D定位，4颗：3D定位
     * range: [0, 65535]
     * @property {number} [latitude] 纬度
     * desc: 纬度，十进制，北纬为正，南纬为负
     * unit: °
     * range: [-90, 90]
     * @property {number} [longitude] 经度
     * desc: 经度，十进制，东经为正，西经为负
     * unit: °
     * range: [-90, 90]
     * @property {number} [amsl] 海拔高度
     * desc: 海拔高度（AMSL）
     * unit: m
     * @property {number} [ato] 相对地面高度
     * desc: 相对起飞点高度（ATO），只有飞行器或潜艇需要此参数
     * unit: m
     * @property {google.protobuf.ITimestamp} [timestamp] GPS 时间
     * desc: GPS 时间,可选参数
     */

    /**
     * Constructs a new GNSS.
     * @exports GNSS
     * @classdesc Represents a GNSS.
     * @constructor
     * @param {IGNSS=} [properties] Properties to set
     */
    function GNSS(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * 卫星数
     * desc: 3颗：2D定位，4颗：3D定位
     * range: [0, 65535]
     * @member {number}satellite
     * @memberof GNSS
     * @instance
     */
    GNSS.prototype.satellite = 0;

    /**
     * 纬度
     * desc: 纬度，十进制，北纬为正，南纬为负
     * unit: °
     * range: [-90, 90]
     * @member {number}latitude
     * @memberof GNSS
     * @instance
     */
    GNSS.prototype.latitude = 0;

    /**
     * 经度
     * desc: 经度，十进制，东经为正，西经为负
     * unit: °
     * range: [-90, 90]
     * @member {number}longitude
     * @memberof GNSS
     * @instance
     */
    GNSS.prototype.longitude = 0;

    /**
     * 海拔高度
     * desc: 海拔高度（AMSL）
     * unit: m
     * @member {number}amsl
     * @memberof GNSS
     * @instance
     */
    GNSS.prototype.amsl = 0;

    /**
     * 相对地面高度
     * desc: 相对起飞点高度（ATO），只有飞行器或潜艇需要此参数
     * unit: m
     * @member {number}ato
     * @memberof GNSS
     * @instance
     */
    GNSS.prototype.ato = 0;

    /**
     * GPS 时间
     * desc: GPS 时间,可选参数
     * @member {(google.protobuf.ITimestamp|null|undefined)}timestamp
     * @memberof GNSS
     * @instance
     */
    GNSS.prototype.timestamp = null;

    /**
     * Creates a new GNSS instance using the specified properties.
     * @function create
     * @memberof GNSS
     * @static
     * @param {IGNSS=} [properties] Properties to set
     * @returns {GNSS} GNSS instance
     */
    GNSS.create = function create(properties) {
        return new GNSS(properties);
    };

    /**
     * Encodes the specified GNSS message. Does not implicitly {@link GNSS.verify|verify} messages.
     * @function encode
     * @memberof GNSS
     * @static
     * @param {IGNSS} message GNSS message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GNSS.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.satellite != null && message.hasOwnProperty("satellite"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.satellite);
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.latitude);
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.longitude);
        if (message.amsl != null && message.hasOwnProperty("amsl"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.amsl);
        if (message.ato != null && message.hasOwnProperty("ato"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.ato);
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GNSS message, length delimited. Does not implicitly {@link GNSS.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GNSS
     * @static
     * @param {IGNSS} message GNSS message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GNSS.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GNSS message from the specified reader or buffer.
     * @function decode
     * @memberof GNSS
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GNSS} GNSS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GNSS.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GNSS();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.satellite = reader.uint32();
                break;
            case 2:
                message.latitude = reader.double();
                break;
            case 3:
                message.longitude = reader.double();
                break;
            case 4:
                message.amsl = reader.double();
                break;
            case 5:
                message.ato = reader.double();
                break;
            case 6:
                message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GNSS message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GNSS
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GNSS} GNSS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GNSS.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GNSS message.
     * @function verify
     * @memberof GNSS
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GNSS.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.satellite != null && message.hasOwnProperty("satellite"))
            if (!$util.isInteger(message.satellite))
                return "satellite: integer expected";
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            if (typeof message.latitude !== "number")
                return "latitude: number expected";
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            if (typeof message.longitude !== "number")
                return "longitude: number expected";
        if (message.amsl != null && message.hasOwnProperty("amsl"))
            if (typeof message.amsl !== "number")
                return "amsl: number expected";
        if (message.ato != null && message.hasOwnProperty("ato"))
            if (typeof message.ato !== "number")
                return "ato: number expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
            if (error)
                return "timestamp." + error;
        }
        return null;
    };

    /**
     * Creates a GNSS message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GNSS
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GNSS} GNSS
     */
    GNSS.fromObject = function fromObject(object) {
        if (object instanceof $root.GNSS)
            return object;
        var message = new $root.GNSS();
        if (object.satellite != null)
            message.satellite = object.satellite >>> 0;
        if (object.latitude != null)
            message.latitude = Number(object.latitude);
        if (object.longitude != null)
            message.longitude = Number(object.longitude);
        if (object.amsl != null)
            message.amsl = Number(object.amsl);
        if (object.ato != null)
            message.ato = Number(object.ato);
        if (object.timestamp != null) {
            if (typeof object.timestamp !== "object")
                throw TypeError(".GNSS.timestamp: object expected");
            message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
        }
        return message;
    };

    /**
     * Creates a plain object from a GNSS message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GNSS
     * @static
     * @param {GNSS} message GNSS
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GNSS.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.satellite = 0;
            object.latitude = 0;
            object.longitude = 0;
            object.amsl = 0;
            object.ato = 0;
            object.timestamp = null;
        }
        if (message.satellite != null && message.hasOwnProperty("satellite"))
            object.satellite = message.satellite;
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
        if (message.amsl != null && message.hasOwnProperty("amsl"))
            object.amsl = options.json && !isFinite(message.amsl) ? String(message.amsl) : message.amsl;
        if (message.ato != null && message.hasOwnProperty("ato"))
            object.ato = options.json && !isFinite(message.ato) ? String(message.ato) : message.ato;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
        return object;
    };

    /**
     * Converts this GNSS to JSON.
     * @function toJSON
     * @memberof GNSS
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GNSS.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GNSS;
})();

$root.Signal = (function() {

    /**
     * Properties of a Signal.
     * @exports ISignal
     * @interface ISignal
     * @property {number} [percent] 信号强度
     * desc: 信号强度百分比
     * unit: %
     * range: [0, 100]
     * @property {Signal.Type} [type] 类型
     * desc: 连接方式类型
     * range: [ UNDEFINED, OTHER, TELE2G, TELE3G, TELE4G, TELE5G, BAND24GHZ, BAND58GHZ]
     * @property {string} [protocal] 协议
     * desc: 链路协议，大多数情况下仅当选择具体频率或Other时有效
     * examples: ["Lightbridge 2","NB-IoT","ZigBee"]
     * @property {number} [rssi] RSSI
     * desc: 接收信号强度指示
     * unit: dBm
     * range: (-∞, 0]
     */

    /**
     * Constructs a new Signal.
     * @exports Signal
     * @classdesc Represents a Signal.
     * @constructor
     * @param {ISignal=} [properties] Properties to set
     */
    function Signal(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * 信号强度
     * desc: 信号强度百分比
     * unit: %
     * range: [0, 100]
     * @member {number}percent
     * @memberof Signal
     * @instance
     */
    Signal.prototype.percent = 0;

    /**
     * 类型
     * desc: 连接方式类型
     * range: [ UNDEFINED, OTHER, TELE2G, TELE3G, TELE4G, TELE5G, BAND24GHZ, BAND58GHZ]
     * @member {Signal.Type}type
     * @memberof Signal
     * @instance
     */
    Signal.prototype.type = 0;

    /**
     * 协议
     * desc: 链路协议，大多数情况下仅当选择具体频率或Other时有效
     * examples: ["Lightbridge 2","NB-IoT","ZigBee"]
     * @member {string}protocal
     * @memberof Signal
     * @instance
     */
    Signal.prototype.protocal = "";

    /**
     * RSSI
     * desc: 接收信号强度指示
     * unit: dBm
     * range: (-∞, 0]
     * @member {number}rssi
     * @memberof Signal
     * @instance
     */
    Signal.prototype.rssi = 0;

    /**
     * Creates a new Signal instance using the specified properties.
     * @function create
     * @memberof Signal
     * @static
     * @param {ISignal=} [properties] Properties to set
     * @returns {Signal} Signal instance
     */
    Signal.create = function create(properties) {
        return new Signal(properties);
    };

    /**
     * Encodes the specified Signal message. Does not implicitly {@link Signal.verify|verify} messages.
     * @function encode
     * @memberof Signal
     * @static
     * @param {ISignal} message Signal message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Signal.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.percent != null && message.hasOwnProperty("percent"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.percent);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.protocal != null && message.hasOwnProperty("protocal"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.protocal);
        if (message.rssi != null && message.hasOwnProperty("rssi"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rssi);
        return writer;
    };

    /**
     * Encodes the specified Signal message, length delimited. Does not implicitly {@link Signal.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Signal
     * @static
     * @param {ISignal} message Signal message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Signal.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Signal message from the specified reader or buffer.
     * @function decode
     * @memberof Signal
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Signal} Signal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Signal.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Signal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.percent = reader.uint32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.protocal = reader.string();
                break;
            case 4:
                message.rssi = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Signal message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Signal
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Signal} Signal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Signal.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Signal message.
     * @function verify
     * @memberof Signal
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Signal.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.percent != null && message.hasOwnProperty("percent"))
            if (!$util.isInteger(message.percent))
                return "percent: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
        if (message.protocal != null && message.hasOwnProperty("protocal"))
            if (!$util.isString(message.protocal))
                return "protocal: string expected";
        if (message.rssi != null && message.hasOwnProperty("rssi"))
            if (!$util.isInteger(message.rssi))
                return "rssi: integer expected";
        return null;
    };

    /**
     * Creates a Signal message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Signal
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Signal} Signal
     */
    Signal.fromObject = function fromObject(object) {
        if (object instanceof $root.Signal)
            return object;
        var message = new $root.Signal();
        if (object.percent != null)
            message.percent = object.percent >>> 0;
        switch (object.type) {
        case "UNDEFINED":
        case 0:
            message.type = 0;
            break;
        case "OTHER":
        case 1:
            message.type = 1;
            break;
        case "TELE2G":
        case 2:
            message.type = 2;
            break;
        case "TELE3G":
        case 3:
            message.type = 3;
            break;
        case "TELE4G":
        case 4:
            message.type = 4;
            break;
        case "TELE5G":
        case 5:
            message.type = 5;
            break;
        case "BAND24GHZ":
        case 6:
            message.type = 6;
            break;
        case "BAND58GHZ":
        case 7:
            message.type = 7;
            break;
        }
        if (object.protocal != null)
            message.protocal = String(object.protocal);
        if (object.rssi != null)
            message.rssi = object.rssi | 0;
        return message;
    };

    /**
     * Creates a plain object from a Signal message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Signal
     * @static
     * @param {Signal} message Signal
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Signal.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.percent = 0;
            object.type = options.enums === String ? "UNDEFINED" : 0;
            object.protocal = "";
            object.rssi = 0;
        }
        if (message.percent != null && message.hasOwnProperty("percent"))
            object.percent = message.percent;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.Signal.Type[message.type] : message.type;
        if (message.protocal != null && message.hasOwnProperty("protocal"))
            object.protocal = message.protocal;
        if (message.rssi != null && message.hasOwnProperty("rssi"))
            object.rssi = message.rssi;
        return object;
    };

    /**
     * Converts this Signal to JSON.
     * @function toJSON
     * @memberof Signal
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Signal.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * 枚举类型说明:
     * 未知(默认值): UNDEFINED
     * 其他类型: OTHER
     * 2G: TELE2G
     * 3G: TELE3G
     * 4G: TELE4G
     * 5G: TELE5G
     * 2.4GHz: BAND24GHZ
     * 5.8GHz: BAND58GHZ
     * @enum {string}
     * @property {number} UNDEFINED=0 UNDEFINED value
     * @property {number} OTHER=1 OTHER value
     * @property {number} TELE2G=2 TELE2G value
     * @property {number} TELE3G=3 TELE3G value
     * @property {number} TELE4G=4 TELE4G value
     * @property {number} TELE5G=5 TELE5G value
     * @property {number} BAND24GHZ=6 BAND24GHZ value
     * @property {number} BAND58GHZ=7 BAND58GHZ value
     */
    Signal.Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNDEFINED"] = 0;
        values[valuesById[1] = "OTHER"] = 1;
        values[valuesById[2] = "TELE2G"] = 2;
        values[valuesById[3] = "TELE3G"] = 3;
        values[valuesById[4] = "TELE4G"] = 4;
        values[valuesById[5] = "TELE5G"] = 5;
        values[valuesById[6] = "BAND24GHZ"] = 6;
        values[valuesById[7] = "BAND58GHZ"] = 7;
        return values;
    })();

    return Signal;
})();

$root.Velocity = (function() {

    /**
     * Properties of a Velocity.
     * @exports IVelocity
     * @interface IVelocity
     * @property {number} [x] x速度
     * desc: 载具在x方向上的速度，使用N-E-D (North-East-Down)，以米为单位
     * unit: m
     * @property {number} [y] y速度
     * desc: 载具在y方向上的速度，使用N-E-D (North-East-Down)，以米为单位
     * unit: m
     * @property {number} [z] z速度
     * desc: 载具在z方向上的速度，使用N-E-D (North-East-Down)，以米为单位
     * unit: m
     */

    /**
     * Constructs a new Velocity.
     * @exports Velocity
     * @classdesc Represents a Velocity.
     * @constructor
     * @param {IVelocity=} [properties] Properties to set
     */
    function Velocity(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * x速度
     * desc: 载具在x方向上的速度，使用N-E-D (North-East-Down)，以米为单位
     * unit: m
     * @member {number}x
     * @memberof Velocity
     * @instance
     */
    Velocity.prototype.x = 0;

    /**
     * y速度
     * desc: 载具在y方向上的速度，使用N-E-D (North-East-Down)，以米为单位
     * unit: m
     * @member {number}y
     * @memberof Velocity
     * @instance
     */
    Velocity.prototype.y = 0;

    /**
     * z速度
     * desc: 载具在z方向上的速度，使用N-E-D (North-East-Down)，以米为单位
     * unit: m
     * @member {number}z
     * @memberof Velocity
     * @instance
     */
    Velocity.prototype.z = 0;

    /**
     * Creates a new Velocity instance using the specified properties.
     * @function create
     * @memberof Velocity
     * @static
     * @param {IVelocity=} [properties] Properties to set
     * @returns {Velocity} Velocity instance
     */
    Velocity.create = function create(properties) {
        return new Velocity(properties);
    };

    /**
     * Encodes the specified Velocity message. Does not implicitly {@link Velocity.verify|verify} messages.
     * @function encode
     * @memberof Velocity
     * @static
     * @param {IVelocity} message Velocity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Velocity.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && message.hasOwnProperty("x"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
        if (message.y != null && message.hasOwnProperty("y"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
        if (message.z != null && message.hasOwnProperty("z"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
        return writer;
    };

    /**
     * Encodes the specified Velocity message, length delimited. Does not implicitly {@link Velocity.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Velocity
     * @static
     * @param {IVelocity} message Velocity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Velocity.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Velocity message from the specified reader or buffer.
     * @function decode
     * @memberof Velocity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Velocity} Velocity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Velocity.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Velocity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.x = reader.float();
                break;
            case 2:
                message.y = reader.float();
                break;
            case 3:
                message.z = reader.float();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Velocity message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Velocity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Velocity} Velocity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Velocity.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Velocity message.
     * @function verify
     * @memberof Velocity
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Velocity.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        if (message.z != null && message.hasOwnProperty("z"))
            if (typeof message.z !== "number")
                return "z: number expected";
        return null;
    };

    /**
     * Creates a Velocity message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Velocity
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Velocity} Velocity
     */
    Velocity.fromObject = function fromObject(object) {
        if (object instanceof $root.Velocity)
            return object;
        var message = new $root.Velocity();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        if (object.z != null)
            message.z = Number(object.z);
        return message;
    };

    /**
     * Creates a plain object from a Velocity message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Velocity
     * @static
     * @param {Velocity} message Velocity
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Velocity.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
            object.z = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        if (message.z != null && message.hasOwnProperty("z"))
            object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
        return object;
    };

    /**
     * Converts this Velocity to JSON.
     * @function toJSON
     * @memberof Velocity
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Velocity.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Velocity;
})();

$root.Atmosphere = (function() {

    /**
     * Properties of an Atmosphere.
     * @exports IAtmosphere
     * @interface IAtmosphere
     * @property {number} [pm25] PM2.5
     * desc: PM2.5浓度
     * range: [0, +∞)
     * @property {number} [co] 一氧化碳
     * desc: 一氧化碳浓度
     * range: [0, +∞)
     * @property {number} [so2] 二氧化硫
     * desc: 二氧化硫浓度
     * range: [0, +∞)
     * @property {number} [no2] 二氧化氮
     * desc: 二氧化氮浓度
     * range: [0, +∞)
     * @property {number} [o3] 臭氧
     * desc: 臭氧浓度
     * range: [0, +∞)
     * @property {number} [temperature] 温度
     * desc: 温度
     * range: (-∞, +∞)
     * @property {number} [humidity] 湿度
     * desc: 湿度
     * range: [0, 100]
     * @property {number} [pm10] PM10
     * desc: PM1.0浓度
     * range: [0, +∞)
     */

    /**
     * Constructs a new Atmosphere.
     * @exports Atmosphere
     * @classdesc Represents an Atmosphere.
     * @constructor
     * @param {IAtmosphere=} [properties] Properties to set
     */
    function Atmosphere(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PM2.5
     * desc: PM2.5浓度
     * range: [0, +∞)
     * @member {number}pm25
     * @memberof Atmosphere
     * @instance
     */
    Atmosphere.prototype.pm25 = 0;

    /**
     * 一氧化碳
     * desc: 一氧化碳浓度
     * range: [0, +∞)
     * @member {number}co
     * @memberof Atmosphere
     * @instance
     */
    Atmosphere.prototype.co = 0;

    /**
     * 二氧化硫
     * desc: 二氧化硫浓度
     * range: [0, +∞)
     * @member {number}so2
     * @memberof Atmosphere
     * @instance
     */
    Atmosphere.prototype.so2 = 0;

    /**
     * 二氧化氮
     * desc: 二氧化氮浓度
     * range: [0, +∞)
     * @member {number}no2
     * @memberof Atmosphere
     * @instance
     */
    Atmosphere.prototype.no2 = 0;

    /**
     * 臭氧
     * desc: 臭氧浓度
     * range: [0, +∞)
     * @member {number}o3
     * @memberof Atmosphere
     * @instance
     */
    Atmosphere.prototype.o3 = 0;

    /**
     * 温度
     * desc: 温度
     * range: (-∞, +∞)
     * @member {number}temperature
     * @memberof Atmosphere
     * @instance
     */
    Atmosphere.prototype.temperature = 0;

    /**
     * 湿度
     * desc: 湿度
     * range: [0, 100]
     * @member {number}humidity
     * @memberof Atmosphere
     * @instance
     */
    Atmosphere.prototype.humidity = 0;

    /**
     * PM10
     * desc: PM1.0浓度
     * range: [0, +∞)
     * @member {number}pm10
     * @memberof Atmosphere
     * @instance
     */
    Atmosphere.prototype.pm10 = 0;

    /**
     * Creates a new Atmosphere instance using the specified properties.
     * @function create
     * @memberof Atmosphere
     * @static
     * @param {IAtmosphere=} [properties] Properties to set
     * @returns {Atmosphere} Atmosphere instance
     */
    Atmosphere.create = function create(properties) {
        return new Atmosphere(properties);
    };

    /**
     * Encodes the specified Atmosphere message. Does not implicitly {@link Atmosphere.verify|verify} messages.
     * @function encode
     * @memberof Atmosphere
     * @static
     * @param {IAtmosphere} message Atmosphere message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Atmosphere.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pm25 != null && message.hasOwnProperty("pm25"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pm25);
        if (message.co != null && message.hasOwnProperty("co"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.co);
        if (message.so2 != null && message.hasOwnProperty("so2"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.so2);
        if (message.no2 != null && message.hasOwnProperty("no2"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.no2);
        if (message.o3 != null && message.hasOwnProperty("o3"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.o3);
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.temperature);
        if (message.humidity != null && message.hasOwnProperty("humidity"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.humidity);
        if (message.pm10 != null && message.hasOwnProperty("pm10"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.pm10);
        return writer;
    };

    /**
     * Encodes the specified Atmosphere message, length delimited. Does not implicitly {@link Atmosphere.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Atmosphere
     * @static
     * @param {IAtmosphere} message Atmosphere message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Atmosphere.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Atmosphere message from the specified reader or buffer.
     * @function decode
     * @memberof Atmosphere
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Atmosphere} Atmosphere
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Atmosphere.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Atmosphere();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.pm25 = reader.uint32();
                break;
            case 2:
                message.co = reader.uint32();
                break;
            case 3:
                message.so2 = reader.uint32();
                break;
            case 4:
                message.no2 = reader.uint32();
                break;
            case 5:
                message.o3 = reader.uint32();
                break;
            case 6:
                message.temperature = reader.int32();
                break;
            case 7:
                message.humidity = reader.uint32();
                break;
            case 8:
                message.pm10 = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Atmosphere message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Atmosphere
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Atmosphere} Atmosphere
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Atmosphere.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Atmosphere message.
     * @function verify
     * @memberof Atmosphere
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Atmosphere.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pm25 != null && message.hasOwnProperty("pm25"))
            if (!$util.isInteger(message.pm25))
                return "pm25: integer expected";
        if (message.co != null && message.hasOwnProperty("co"))
            if (!$util.isInteger(message.co))
                return "co: integer expected";
        if (message.so2 != null && message.hasOwnProperty("so2"))
            if (!$util.isInteger(message.so2))
                return "so2: integer expected";
        if (message.no2 != null && message.hasOwnProperty("no2"))
            if (!$util.isInteger(message.no2))
                return "no2: integer expected";
        if (message.o3 != null && message.hasOwnProperty("o3"))
            if (!$util.isInteger(message.o3))
                return "o3: integer expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (!$util.isInteger(message.temperature))
                return "temperature: integer expected";
        if (message.humidity != null && message.hasOwnProperty("humidity"))
            if (!$util.isInteger(message.humidity))
                return "humidity: integer expected";
        if (message.pm10 != null && message.hasOwnProperty("pm10"))
            if (!$util.isInteger(message.pm10))
                return "pm10: integer expected";
        return null;
    };

    /**
     * Creates an Atmosphere message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Atmosphere
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Atmosphere} Atmosphere
     */
    Atmosphere.fromObject = function fromObject(object) {
        if (object instanceof $root.Atmosphere)
            return object;
        var message = new $root.Atmosphere();
        if (object.pm25 != null)
            message.pm25 = object.pm25 >>> 0;
        if (object.co != null)
            message.co = object.co >>> 0;
        if (object.so2 != null)
            message.so2 = object.so2 >>> 0;
        if (object.no2 != null)
            message.no2 = object.no2 >>> 0;
        if (object.o3 != null)
            message.o3 = object.o3 >>> 0;
        if (object.temperature != null)
            message.temperature = object.temperature | 0;
        if (object.humidity != null)
            message.humidity = object.humidity >>> 0;
        if (object.pm10 != null)
            message.pm10 = object.pm10 >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an Atmosphere message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Atmosphere
     * @static
     * @param {Atmosphere} message Atmosphere
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Atmosphere.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.pm25 = 0;
            object.co = 0;
            object.so2 = 0;
            object.no2 = 0;
            object.o3 = 0;
            object.temperature = 0;
            object.humidity = 0;
            object.pm10 = 0;
        }
        if (message.pm25 != null && message.hasOwnProperty("pm25"))
            object.pm25 = message.pm25;
        if (message.co != null && message.hasOwnProperty("co"))
            object.co = message.co;
        if (message.so2 != null && message.hasOwnProperty("so2"))
            object.so2 = message.so2;
        if (message.no2 != null && message.hasOwnProperty("no2"))
            object.no2 = message.no2;
        if (message.o3 != null && message.hasOwnProperty("o3"))
            object.o3 = message.o3;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = message.temperature;
        if (message.humidity != null && message.hasOwnProperty("humidity"))
            object.humidity = message.humidity;
        if (message.pm10 != null && message.hasOwnProperty("pm10"))
            object.pm10 = message.pm10;
        return object;
    };

    /**
     * Converts this Atmosphere to JSON.
     * @function toJSON
     * @memberof Atmosphere
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Atmosphere.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Atmosphere;
})();

module.exports = $root;
