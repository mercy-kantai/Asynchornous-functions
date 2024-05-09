

//Question One
async function greetings(message, delayTime) {
  await new Promise(resolve => setTimeout(resolve, delayTime));
  console.log(message);
}

greetings("Hello, There", 2000);




//Question Two
const userIds = [6, 7, 8, 10, 5];

async function fetchAndLogUserData() {
  for (let id of userIds) {
    try {
      const userData = await getUserData(id);
      console.log(userData);
    } catch (error) {
      console.log(`error${id} ${error}`);
    }
  }
}

fetchAndLogUserData();

//Question Three
async function performTaskWithLogging() {
  try {
    await performTask();
    console.log("Task successful!");
  } catch (error) {
    console.log("Task failed:", error);
  }
}

performTaskWithLogging();


//Question 4

function unstableTask(taskName, failureProbability) {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > failureProbability) {
      resolve(`task '${taskName}' successful`);
    } else {
      reject(`task '${taskName}' failed`);
    }
  });
}

async function executeWithRetry(taskName, retries, failureProbability) {
  let attempt = 1;
  while (attempt <= retries) {
    try {
      const result = await unstableTask(taskName, failureProbability);
      console.log(result);
      return; 
    } catch (error) {
      console.log(`Attempt ${attempt} failed ${error}`);
      attempt++;
    }
  }
  console.log(`Task '${taskName}' failed after ${retries} attempts.`);
}

executeWithRetry("Unstable Task", 7, 2);