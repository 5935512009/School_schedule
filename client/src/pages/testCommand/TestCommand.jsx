import React from 'react'

function TestCommand() {
    function addCommand(){
        const input = document.getElementById("input_test_command").value;
        console.log(input)
    }
    function clearCommand(){
        document.getElementById("input_test_command").value = '';
    }
  return (
    <div>
        input data :  
      <input className='border-4 border-indigo-500 m-4' type="text" id="input_test_command"/>
      <button className='border-1 p-2 cursor-pointer bg-sky-500 hover:bg-sky-700' onClick={addCommand}>yes</button>
      <button className='border-1 p-2 cursor-pointer bg-red-500 hover:bg-red-700' onClick={clearCommand}>clear</button>
    </div>
  )
}

export default TestCommand
