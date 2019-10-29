//UI ELEMENTS

//console.log(resNode);


// GET REQUEST
function getTodos() {
  // axios({
  //   method: "get",
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   params: {
  //     _limit: 10
  //   }
  // })
  // .then(res => {
  //   showOutput(res);
  //   console.log(res);
  //   //res.data.forEach(data => {console.log(data.title)})
  // })
  // .catch(err => console.log(err));

  axios( "https://jsonplaceholder.typicode.com/posts", {params: {_limit: 20}})
  .then(res => {
    showOutput(res);
    console.log(res);
    //res.data.forEach(data => {console.log(data.title)})
  })
  .catch(err => console.log(err));
}

// POST REQUEST
function addTodo() {
  axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'new title',
    body: 'new body'
  })
  .then(res => showOutput(res))
  .catch(err => console.log(err));

  console.log('POST Request');
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.patch('https://jsonplaceholder.typicode.com/posts/2', {
    title: 'new title',
    body: 'new body'
  })
  .then(res => showOutput(res))
  .catch(err => console.log(err));

  console.log('PUT/PATCH Request');
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/posts/2')
  .then(res => showOutput(res))
  .catch(err => console.log(err))
  console.log('DELETE Request');
}


// SIMULTANEOUS DATA
function getData() {
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/posts', 
    {params: {
      _limit: 5
    }}),
    axios.get('https://jsonplaceholder.typicode.com/todos')
  ])
  .then(
    axios.spread( (posts, todos) => showOutput(posts))
  )
  .catch(err => console.log(err));
  
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config 
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);

