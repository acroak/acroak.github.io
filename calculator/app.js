$(()=>{

let nums =[];
let previousNums = null;
let operator = null;


  $('.num').on('click', ()=>{
    //$("#output").text($(event.currentTarget).html());
    nums.push($(event.currentTarget).html());
    //console.log(nums.join(''));
    $('#output').text(nums.join(''));
  });

  $('.action').on('click', ()=>{
    operator = $(event.currentTarget).text();
    console.log(operator);
    previousNums = nums;
    nums =[];
    $('#output').text('')
  });

  $('#equals').on('click', ()=>{
    console.log(previousNums.join(''));
    console.log(nums.join(''));
    let firstNum = previousNums.join('');
    let op = operator
    let secondNum = nums.join();
    let finalString = firstNum + op + secondNum;
    eval(finalString);
    console.log($('#output').text(eval(finalString)));
  })



        // // console.log('Calculate that shit');
        // let equationHolder =[];
        // let sumHolder;
        //
        // let trueEquation;
        // const runAnEquation = () =>{
        //   console.log('The current equation is: '+ equationHolder);
        //   // console.log(typeof(equationHolder));
        //   //   //STRING
        // //console.log(typeof(+));
        //   // parseInt(equationHolder);
        //   // console.log(equationHolder.reducer());
        //   //
        //   // console.log(typeof(equationHolder));
        // }
        //
        // const displayResult = () =>{
        //
        // }
        //
        //   $('.number').on('click', (event) => {
        //     console.log('Number clicked');
        //   });
        //
        //
        //
        //   $('#0').on('click', ()=>{
        //     console.log();
        //     equationHolder += '0';
        //
        //     console.log('the equation: ' + equationHolder);
        //   });
        //
        //     $('#1').on('click', ()=>{
        //       console.log(1);
        //       equationHolder += '1';
        //
        //       console.log('the equation: ' + equationHolder);
        //     });
        //
        //     $('#2').on('click', ()=>{
        //       console.log(2);
        //       equationHolder += '2';
        //       console.log('the equation: ' + equationHolder);
        //     });
        //
        //     $('#3').on('click', ()=>{
        //       console.log(3);
        //       equationHolder += '3';
        //       console.log('the equation: ' + equationHolder);
        //     });
        //
        //     $('#4').on('click', ()=>{
        //       console.log(4);
        //       equationHolder += '4';
        //       console.log('the equation: ' + equationHolder);
        //     });
        //
        //     $('#5').on('click', ()=>{
        //       console.log(5);
        //       equationHolder += '5';
        //       console.log('the equation: ' + equationHolder);
        //     });
        //
        //     $('#6').on('click', ()=>{
        //       console.log(6);
        //       equationHolder += '6';
        //       console.log('the equation: ' + equationHolder);
        //     });
        //
        //     $('#7').on('click', ()=>{
        //       console.log(7);
        //       equationHolder += '7';
        //       console.log('the equation: ' + equationHolder);
        //     });
        //
        //     $('#8').on('click', ()=>{
        //       console.log(8);
        //       equationHolder += '8';
        //       console.log('the equation: ' + equationHolder);
        //     });
        //
        //     $('#9').on('click', ()=>{
        //       console.log(9);
        //       equationHolder += '9';
        //       console.log('the equation: ' + equationHolder);
        //     });
        //
        //
        //
        //
        //
        //
        //
        //
        //   $('.artitmatic').on('click', (event) => {
        //     console.log('artithmatic clicked');
        //
        //
        //   });
        //
        //   $('#divide').on('click', ()=>{
        //     console.log("/");
        //     equationHolder += '/';
        //   });
        //
        //   $('#multi').on('click', ()=>{
        //     console.log("*");
        //     equationHolder += '*';
        //   });
        //
        //   $('#subtract').on('click', ()=>{
        //     console.log("-");
        //     equationHolder += '-';
        //   });
        //
        //   $('#equals').on('click', ()=>{
        //     console.log("=");
        //     runAnEquation();
        //   });
        //
        //   $('#addition').on('click', ()=>{
        //     console.log("+");
        //     equationHolder += '+';
        //   });
        //
        //   $('#decimal').on('click', ()=>{
        //     console.log(".");
        //     equationHolder += '.';
        //   });
}); //end document ready function
