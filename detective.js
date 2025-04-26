function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

const missionNum = 20;

const daysIfSuccess = 13;
const daysIfNotSuccess = 1;
const daysForAttendance = 3;

let daysEarned =0;

for (let i = 0; i < missionNum; i++){
	try{
		mysteryOperation();
		daysEarned += daysIfSuccess
	}
	catch (Error){
		daysEarned += daysIfNotSuccess;
	}
	finally{
		daysEarned += daysFor Attendance;
	}
}

console.log('Vacation Days Earned:', daysEarned);
