const pickObject = (
  object: any,
  keys: any
) => {
  return keys.reduce(
    (obj: any, key: any) => {
      if (
        object &&
        Object.prototype.hasOwnProperty.call(
          object,
          key
        )
      ) {
        obj[key] = object[key];
      }
      return obj;
    },
    {}
  );
};

module.exports = pickObject;
