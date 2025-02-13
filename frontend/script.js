const answer = async(link)=>{
  const response = await fetch(link);
  const ans = await response.json();
  
  return ans.result;
}

async function add() {
  const value1 = document.getElementById("input1").value;
  const value2 = document.getElementById("input2").value;
  const displayScreen = document.getElementById("displayScreen");

  const result = await answer(`http://13.228.225.19:7000/calculate?a=${value1}&b=${value2}&opr=${"add"}`)
  displayScreen.innerHTML = result.toString();
}

async function sub() {
  const value1 = document.getElementById("input1").value;
  const value2 = document.getElementById("input2").value;
  const displayScreen = document.getElementById("displayScreen");

  const result = await answer(`http://13.228.225.19:7000/calculate?a=${value1}&b=${value2}&opr=${"sub"}`)

  displayScreen.innerHTML = result.toString();
}

async function mul() {
  const value1 = document.getElementById("input1").value;
  const value2 = document.getElementById("input2").value;
  const displayScreen = document.getElementById("displayScreen");

  const result = await answer(`http://13.228.225.19:7000/calculate?a=${value1}&b=${value2}&opr=${"mul"}`)

  displayScreen.innerHTML = result.toString();
}

async function div() {
  const value1 = document.getElementById("input1").value;
  const value2 = document.getElementById("input2").value;

  const displayScreen = document.getElementById("displayScreen");
  let result;
  if (parseInt(value2) === 0) {
    displayScreen.innerHTML = "❌";
    return;
  } else {
    result = await answer(`http://13.228.225.19:7000/calculate?a=${value1}&b=${value2}&opr=${"div"}`)
  }

  displayScreen.innerHTML = result.toString();
}

function clearDisplay() {
  document.getElementById("displayScreen").innerHTML = "Output";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
}
