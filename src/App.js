import logo from './logo.svg';
import './App.css';

function App() {
  // promises
  // status:
  // 1,pending
  // 2,fullfill
  // 3, reject
  var promise = new Promise(function(resolve, reject){
    resolve();
    reject('Error');
});

promise.then(function(){
return 1})
.then(function(data){
  console.log(data);
  return data
})
.then(function(data){
  console.log(data+1);
})
.finally(()=>
{
  console.log("done")
})
  return (
   <div className="">
      learn reactjs
   </div>
  );
}

export default App;
