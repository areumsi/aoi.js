const Interpreter = require("../../../interpreter.js");
module.exports = async (d) => {
  const data = d.util.aoiFunc(d);
  if (data.err) return d.error(data.err);

  const [name, type = "asc"] = data.inside.splits;

  if (!data.arrays[name]) {
    return d.aoiError.fnError(
      d,
      "custom",
      { inside: data.inside },
      "Array With Name '" + name + "' Does Not Exist.",
    );
  }

  d.arrays[name] = d.arrays[name].sort((a, b) =>
    type === "asc" ? a - b : b - a,
  );
    d.data.arrays = d.arrays;
  return {
    code: d.util.setCode(data),
    arrays: d.arrays,
    data: d.data,
  };
};