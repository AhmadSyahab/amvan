<template>
<div class="container-fluid">
	<nav class="navbar navbar-inverse">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-tasks"></span> Simple Todo!</a>
	    </div>
	    <ul class="nav navbar-nav">
	      <li class="active"><a href="#">Home</a></li>
	      <li><a href="#" data-toggle="modal" data-target="#addKanvan" >Add task</a></li>
	    </ul>
	  </div>
	</nav>
      <!-- Modal -->
      <div class="modal fade" id="addKanvan" tabindex="-1" role="dialog" 
        aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <button type="button" class="close" 
                data-dismiss="modal">
              <span aria-hidden="true">×</span>
              <span class="sr-only">Close</span>
              </button>
              <h4 class="modal-assignto" id="myModalLabel">
                Add Task
              </h4>
            </div>
            <!-- Modal Body -->
            <div class="modal-body">
              <form class="form-horizontal" role="form">
                <div class="form-group">
                  <label for="task_assignto">AsiggnTo:</label>
                  <input v-model="newAmvan.assignto"type="text" class="form-control" placeholder="Assign To"  id="task_assignto" name="task_assignto">
                </div>
                <div class="form-group">
                  <label for="task_details">Task Details:</label>
                  <textarea v-model="newAmvan.desc" class="form-control"  placeholder="Enter task details"  rows="5" id="task_details" name="task_details"></textarea>
                </div>
                <div class="form-group">
                  <label for="point">Point:</label>
                  <input v-model="newAmvan.point" type="text" class="form-control" placeholder="0-1000" id="point" name="point">
                </div>
                <div class="form-group">
                  <label for="task_status">Task Status:</label>
                  <select v-model="newAmvan.status" class="form-control">
                    <option value="backlog">Backlog</option>
                    <option value="todo">Todo </option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                </div>
                <button @click="addTask" class="btn btn-primary">Submit</button>
              </form>
            </div>
            <!-- Modal Footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger"
                data-dismiss="modal">
              Close
              </button>
            </div>
          </div>
        </div>
      </div>
</div>      	
</template>

<script>
import {amvanRef} from '../firebase' 
export default {
	data () {
		return {
			newAmvan: {
				assignto: '',
				desc: '',
				point: '',
				status: ''
			}
		}
	},
	firebase : {
		amvans : amvanRef
	},
	methods : {
		addTask() {
			console.log(this.newAmvan)
			amvanRef.push(this.newAmvan)
		}
	}
}
</script>

<style type="text/css">
 @import url('https://fonts.googleapis.com/css?family=Open+Sans|Shadows+Into+Light+Two');	
</style>