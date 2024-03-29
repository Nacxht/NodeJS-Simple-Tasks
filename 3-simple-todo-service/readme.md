# Simple To-Do Service (API)

This API has only three features:

1. **Display all tasks**

   - This endpoint retrieves a list of all tasks stored in the system.
   - The response will be a JSON array containing objects representing each task.
   - Each task object will include information such as the task ID, title, and description.

2. **Create a task**

   - This endpoint allows users to create new tasks.
   - The request body should contain a JSON object with the following properties:
     - **Title:** The title of the task.
     - **Description:** A brief description of the task.
   - The response will be a JSON object representing the newly created task.

3. **Delete a task**
   - This endpoint allows users to delete tasks.
   - The request body should contain the ID of the task to be deleted.
   - The response will be a JSON object with a success message if the task was deleted successfully.
