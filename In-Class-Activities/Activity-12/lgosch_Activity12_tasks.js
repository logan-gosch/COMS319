document.addEventListener('DOMContentLoaded', () => {

    const taskElement = document.getElementById('taskResults');

    document.getElementById('btnTask1').addEventListener('click', async () => {
        displayResult('Task 1 started,');

        const result = await simulateAsyncTask(2000, 'Task 1 completed, 2 seconds');
        displayResult(result);
        
    });

    document.getElementById('btnTask2').addEventListener('click', async () => {
        displayResult('Task 2 started,');

        const result = await simulateAsyncTask(4000, 'Task 2 completed, 4 seconds');
        displayResult(result);
    });

    document.getElementById('btnTask3').addEventListener('click', async () => {
        displayResult('Task 3 started,');

        const result = await simulateAsyncTask(6000, 'Task 3 completed, 6 seconds');
        displayResult(result);
    });

    function simulateAsyncTask(delay, result) {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(result);
                }, delay);
            } catch (error) {
                reject('Error in simulateAsyncTask');
            }
        });
    }

    function displayResult(message) {
        const taskResultsDiv = document.getElementById('taskResults');
        taskResultsDiv.innerHTML += `<p>${message}</p>`;
    }
});