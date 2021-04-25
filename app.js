const spawn = require("child_process").spawn;
const { PythonShell } = require("python-shell");

let options = {
  mode: "text",
  pythonPath: "python",
  pythonOptions: ["-u"], // get print results in real-time
  scriptPath: "./",
  encoding: "utf8",
  args: ["arg1", "arg2"],
};
PythonShell.run("test.py", options, (err, results) => {
  if (err) throw err;
  console.log(`${results}`);
});

//results: 2
//JSON으로 변환하여 저장 혹은 웹에 노출.
