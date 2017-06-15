const timestamp = {
  set: (input) => {
    const date = new Date(input).toString() === 'Invalid Date' ? new Date() : new Date(input);
    return {
      seconds: parseInt(date / 1000, 10),
      nanos: (date % 1000) * 1000
    };
  },
  get: input => new Date(input.seconds * 1000 + input.nanos / 1000000)
};

module.exports = timestamp;
