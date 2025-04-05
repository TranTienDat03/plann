const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo, toggleDoneToDo, updateToDoStatus,getStats } = require("../controllers/ToDoController");

const router = Router()

router.get('/todos', getToDo )
router.post('/todos', saveToDo )
router.put('/todos/:todoId', updateToDo )
router.delete('/todos/:todoId', deleteToDo )
// router.put("/toggle-done/:id", toggleDoneToDo);
router.patch('/todos/:todoId/status', updateToDoStatus);
router.get('/todos/stats', getStats); 

module.exports= router;   