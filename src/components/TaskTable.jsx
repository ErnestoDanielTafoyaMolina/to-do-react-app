import TaskRow from './TaskRow';

const TaskTable = ({ tasks, toggleTask, showCompleted=false, name }) => {

const taskTableRows = ( doneValue ) => {
  
  return(
    tasks
    .filter(task => task.done ===doneValue)
    .map(task=>(
      <TaskRow key={ task.name } task={ task } toggleTask={ toggleTask } />
    ))
  );
};

  return (
      <table className='table table-dark table-striped table-bordered border-second'>
        <thead>
          <tr className='table-primary'>
            <th>{ name }</th>
          </tr>
        </thead>
        <tbody>
          {
            taskTableRows(showCompleted)
          }
        </tbody>
      </table>
  );
};

export default TaskTable
