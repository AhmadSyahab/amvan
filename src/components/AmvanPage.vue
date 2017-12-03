<template>
  <div class="hello">
    <div class="container-fluid">
        <div class="row">
          <div class="panel-group">
            <Backlog :amvans="amvans"/>
            <Todo :amvans="amvans"/>                 
            <Doing :amvans="amvans"/>
            <Done :amvans="amvans"/>                        
          </div>
        </div> <!-- /.row -->
    </div> <!-- /.container -->
  </div>


</template>

<script>
import {amvanRef} from '../firebase'
import Backlog from '@/components/Backlog'
import Todo from '@/components/Todo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'
export default {
  components: {
    Backlog,
    Todo,
    Doing,
    Done
  },
  data () {
    return {

    }
  },
  firebase: {
    amvans : amvanRef
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  border-radius: 0 !important;
}
body{
  font-family: 'Open Sans', sans-serif;
}
.panel-heading 
{
  font-family: 'Shadows Into Light Two', cursive;
  font-size:20px;
  font-weight: bolder;
}
.panelspace
{
  padding-bottom:5px;
}
.trash { color:rgb(209, 91, 71); }
.flag { color:rgb(248, 148, 6); }
.panel-body { padding:0px; }
.panel-footer .pagination { margin: 0; }
.panel .glyphicon,.list-group-item .glyphicon { margin-right:5px; }
.panel-body .radio, .checkbox { display:inline-block;margin:0px; }
.panel-body input[type=checkbox]:checked + label { text-decoration: line-through;color: rgb(128, 144, 160); }
.list-group-item:hover, a.list-group-item:focus {text-decoration: none;background-color: rgb(245, 245, 245);}
.list-group { margin-bottom:0px; }
.checkbox input[type=checkbox], .checkbox-inline input[type=checkbox], .radio input[type=radio], .radio-inline input[type=radio] 
{
margin-left: 0px;
}
</style>
