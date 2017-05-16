const protobuf = require('protobufjs');

protobuf.load('src/message.proto', (err, root) => {
  if (err) {
    throw err;
  }
  // Obtain a message type
  const AwesomeMessage = root.lookupType('Message');

  // Exemplary payload
  const payload = { did: 'AwesomeString' };

  // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
  const errMsg = AwesomeMessage.verify(payload);
  if (errMsg) { throw Error(errMsg); }

  // Create a new message
  const message = AwesomeMessage.create(payload); // or use .fromObject if conversion is necessary

  // Encode a message to an Uint8Array (browser) or Buffer (node)
  const buffer = AwesomeMessage.encode(message).finish();
  console.log(buffer);
  // ... do something with buffer

  // Decode an Uint8Array (browser) or Buffer (node) to a message
  // const message = AwesomeMessage.decode(buffer);
  // ... do something with message

  // If the application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.

  // Maybe convert the message back to a plain object
  // const object = AwesomeMessage.toObject(message, {
  //   longs: String,
  //   enums: String,
  //   bytes: String
  //       // see ConversionOptions
  // });
});
