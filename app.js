
//
// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// });
//
// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'You loaded this page on ' + new Date().toLocaleString()
//   }
// });
//
// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })
//
// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [
//       { text: 'Learn JavaScript' },
//       { text: 'Learn Vue' },
//       { text: 'Build something awesome' }
//     ]
//   }
// })
//
//
//
// var demo = new Vue({
//   el: '#demo',
//   data: {
//     active: false
//   },
//   methods: {
//     mouseOver: function() {
//       this.active = !this.active;
//     }
//   }
// });
//


// <input type="text" class="user-input-title" placeholder="Enter the Title">
//   <textarea class="user-input-body" placeholder="Enter the body of text"></textarea>
//
//   <button class="add-text-btn">add text</button>
// <button class="del-text-btn">delete text</button>
//
//   <div class="display"></div>





const userInput = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [],
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.newTodo, completed: false, edit: false });
      this.newTodo = '';
    },
    deleteToDo(entry) {
      let index = this.todos.findIndex(arrayItem=> {
        return arrayItem.text === entry;
      });
      this.$delete(this.todos, index);
    }
  },
  mounted() {
    if (localStorage.getItem('todos')) { this.todos = JSON.parse(localStorage.getItem('todos')); }
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
});




// $(document).ready(function() {
//
//
//   $('.add-text-btn').on('click', function() {
//
//     // store values
//     let inputKey = $('.user-input-title').val();
//     let inputValue = $('.user-input-body').val();
//
//     // clear values
//     $('.user-input-title').val('');
//     $('.user-input-body').val('');
//
//     console.log(inputKey, inputValue);
//
//     localStorage.setItem(inputKey, inputValue);
//     // data-
//     let itemHtml = '<div class="display-item" data-storage-key="' + inputKey + '"> ' + inputKey + ' ' + localStorage.getItem(inputKey) + '</div>';
//     $('.display').html(itemHtml);
//     //console.log(localStorage);
//     // how can we delegate this event to the outer html node?
//     // https://learn.jquery.com/events/event-delegation/
//
//     $('.display-item').on('click', function(e) {
//       // plop the key:value back into the input boxes
//
//       // get the values from the the divs?
//       console.log('key=> ', e.target.dataset.storageKey); // user-input-title
//       localStorage.getItem(e.target.dataset.storageKey); // user-input-body
//
//       // set those values in the form fields
//       $('.user-input-title').val(e.target.dataset.storageKey);
//       $('.user-input-body').val(localStorage.getItem(e.target.dataset.storageKey));
//     });
//
//   });
//
//
//
//   // TODO add back in later
//   // $(".user-input").on("keyup", function(){
//   //   let inputValue = $(".user-input").val();
//   //   localStorage.setItem("testStorage", inputValue);
//   //   $(".display").text(localStorage.getItem("testStorage"));
//   // });
//
//   $('.del-text-btn').on('click', function() {
//     alert('item deleted? check the console'); // maybe change to a window.confirm
//     localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
//     $('.user-input-title').val('');
//     $('.user-input-body').val('');
//     // clearing display? what if I have multiple items?
//     // after item is removed from local storage, redisplay items from local storage
//     // refresh from storage?
//   });
//
//
//   // iterative approach to adding items
//   // store data as stringified array of objects
//   // store data with individual keys
//   // how do we get keys? research Object.keys
//
//
//
// });