// Recursive Counter function
function counter(i) {
    if (i < 10) {
      console.log(i);
      counter(i + 1);
    }
  }
  
  // Main function (to fit the instruction, can just call function counter instead)
  function main(i) {
    counter(i);
  }
  
  // Functions one, two, three, four
  function one() {
    console.log('one');
  }
  
  function two() {
    console.log('two');
  }
  
  function three() {
    console.log('three');
    one();
    two();
  }
  
  function four() {
    console.log('four');
    setTimeout(one, 0);         // schedules the execution of the function 'one' using setTimeout() with a delay of 0 milliseconds
    three();
  }
  
  // Calling main function
  main(0);
  
  // Calling four function
  four();