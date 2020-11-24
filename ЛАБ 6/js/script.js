
$("button:first").on("click", function () {
  $("div.class3").nextAll("div").attr("class", "classNew");
});

$("button:last").on("click", function () {
  let numbers = [1, 2, 3, 4, 5, 6];
  let even = [];
  let odd = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      even.push(numbers[i]);
    } else if (numbers[i] % 2 != 0) {
      odd.push(numbers[i]);
    }
  }
  for (let i = 0; i < odd.length; i++) {
    $(`div[class$='${odd[i]}'] p`).toggle(500);
  }
  for (let i = 0; i < even.length; i++) {
    $(`div[class$='${even[i]}'] h2`).toggle(500);
  }
  //$("div p").filter(":even").fadeOut(500);
  //$("div h2").filter(":odd").fadeOut(500);
});