const calculate = () => {
  const tempValue = document.getElementById("inputTemp").value;
  const selectTemp = document.getElementById("selectTemp");
  let result;

  const celToFah = (cel) => {
    let fahr = Math.round(cel * 1.8 + 32);
    return fahr;
  };

  const FahtoCel = (fahr) => {
    let cel = Math.round((fahr - 32) * 0.55);
    return cel;
  };

  if (selectTemp.options[selectTemp.selectedIndex].value == "celcius") {
    result = celToFah(tempValue);
    document.getElementById("result").innerHTML = `${result} Fahrenhiet`;
  } else {
    result = FahtoCel(tempValue);
    document.getElementById("result").innerHTML = `${result} Celcius`;
  }
};
