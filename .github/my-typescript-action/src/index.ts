import * as core from '@actions/core';

async function run() {
  try {
    // Get the input parameter
    const name = core.getInput('name');

    // Print a message
    console.log(`Hello, ${name}!`);

    // Set the output value
    core.setOutput('greeting', `Hello, ${name}!`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
