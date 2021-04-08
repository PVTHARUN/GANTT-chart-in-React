import React from 'react';
import './App.css';
import { GanttComponent, TaskFieldsModel, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { projectData } from './data';
function App() {
  const taskValues: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startTime: "StartTime",
    endTime: "EndTime",
    duration: "Duration",
    progress: "Progress",
    status: "status",
  }
  return (
    <div>
      {/* To change timeline view add timelineSettings={{timelineViewMode: "Day"} in below tag} */}
      <GanttComponent dataSource={projectData}
      taskFields={taskValues}>
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID"></ColumnDirective>
          <ColumnDirective field="TaskName" headerText="Name"></ColumnDirective>
          <ColumnDirective field="StartTime" format="dd-MMM-yy"></ColumnDirective>
          <ColumnDirective field="EndTime" format="dd-MMM-yy"></ColumnDirective>
          <ColumnDirective field="status" headerText="status"></ColumnDirective>
          <ColumnDirective field="Duration" textAlign="Right"></ColumnDirective>
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

export default App;