const { exec } = require('child_process');

var workerProcess = exec('ls', function (error, stdout, stderr) {
	if (error) {
		console.log(error);
	}
	console.log('stdout: ' + stdout);
	console.log('stderr: ' + stderr);
});

workerProcess.on('exit', function (code) {
	console.log('Child process exited with exit code ' + code);
});