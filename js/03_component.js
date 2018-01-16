Vue.component('todo-items',{
  template: '#todo-items-template',
  props:['todos'],

  methods:{
    deleteTodo(index){
      /*this.todos.$remove(todo)*/
      this.todos.splice(index,1)
    },
    toggleCompletion(todo){
      todo.completed = ! todo.completed
    }
    // 組件相關的方法移入
  }
})

Vue.component('todo-form',{
  template: '#todo-add-form-template',
  props:['todos'],
  data(){
    return{
      newTodo:{id:null,title:'',completed:false}
    }
  //這裡的data()是方法
  },
  methods:{
    addTodo(newTodo){
      this.todos.push(newTodo)
      this.newTodo = {id:null,title:''}
    }}
})


new Vue({
  el:'#app',
  data:{
    message: 'Hello World',
    todos:[
      {id:1,title:'Learn Vuejs',completed:false}
    ],
    // newTodo:{id:null,title:'',completed:false}
    /*組件搬移可以刪除*/
  },
  computed:{
    todoCount(){
      return this.todos.length;
    }
  }

})
