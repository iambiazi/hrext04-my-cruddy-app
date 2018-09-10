chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: chrome.runtime.getURL("index.html"),
    type: "popup",
    height: 800,
    width: 300
  });
})

Vue.component('todo-item', {
  props: ['todo'],
  template: `
    <article class="message is-success">
      <span class="message-header">
        <p>Success</p>
        <button class="delete" aria-label="delete" @click="deleteToDo(todo.text)"></button>
      </span>
      <span class="message-body">
        <li :class="{ completed: todo.completed }" >
            <input class="checkbox"
                   type="checkbox"
                   v-model="todo.completed" 
                   @click.middle="deleteToDo(todo.text)">
            <span v-show ="todo.edit === false">
              <label @dblclick="todo.edit = true"> {{todo.text}} </label>
            </span>
            <input v-show="todo.edit === true" v-model="todo.text" type="text"
                   @blur="todo.edit=false"
                   @keyup.enter ="todo.edit=false"
                   @keyup.esc="todo.edit=false"
                   v-todo-focus="todo.edit === true">
         </li>
       </span>
    </article>`,
  methods: {
    deleteToDo(entry) {
      let index = userInput.todos.findIndex(arrayItem => {
        return arrayItem.text === entry;
      });
      userInput.$delete(userInput.todos, index);
    }
  },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }

})

const userInput = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [],
  },
  methods: {
    addTodo() {
      this.todos.push({text: this.newTodo, completed: false, edit: false});
      this.newTodo = '';
    }
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true,
    },
  }

});