// Function to simulate loading progress
alert("Hello World");


var interval;
var speed;
var round_entry;
var CharacterE ={
  'c1': 0,
  'c2': 0,
  'c3': 0,
  'c4': 0,
};
var CharacterA ={
  'c1': 0,
  'c2': 0,
  'c3': 0,
  'c4': 0,
};

var widths = {
  'myInput': 0,
  'myInput1': 0,
  'myInput2': 0,
  'myInput3': 0
};
var pause = false;

var speeds = [0,0,0,0];
var intervals = [null, null, null, null]

function increaseWidth(progressBar) {
  if (pause == false)
  {
    let w = widths[progressBar.id];

    if (progressBar.id == "progress")
    {
        w = widths["myInput"];
    }
    else if (progressBar.id == "progress1")
    {
        w = widths["myInput1"];
    }
    else if (progressBar.id == "progress2")
    {
        w = widths["myInput2"];
    }
    else if (progressBar.id == "progress3")
    {
        w = widths["myInput3"];
    }

    if (w >= 100) {
      progressBar.style.transition = 'width 0s';
      progressBar.style.width = w + '%';
      var met = false;
      var index;
      var points = document.getElementById('points');
      if (progressBar.id == "progress")
      {
        round_entry = document.getElementById('v1');
        met = true;
        index = 1;
      }
      else if (progressBar.id == "progress1")
      {
        round_entry = document.getElementById('v2');
        met = true;
        index = 2;
      }
      else if (progressBar.id == "progress2")
      {
        round_entry = document.getElementById('v3');
        met = true;
        index = 3;
      }
      else if (progressBar.id == "progress3")
      {
        round_entry = document.getElementById('v4');
        met = true;
        index = 4;
      }
      if (met == true)
      {
        var checkbox = document.getElementById('myCheckbox');
        if (checkbox.checked == true)
        {
          progressBar.style.width = w + '%';
          pause = true
          w = 0;
          Swal.fire({
            title: "Character " + index + "'s Turn",
            text: 'Pick Your Movement',
            showCancelButton: true,
            confirmButtonText: 'E',
            cancelButtonText: 'A',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
          }).then((result) => {
              if (result.isConfirmed) {
                pause = false;
                progressBar.style.width = w + '%';
                myData[index-1].value += CharacterE["c"+index];
                points.innerHTML = parseInt(points.innerHTML) - 1;
                chart.data.labels = myData.map(bar => bar.name);
                chart.data.datasets[0].data = myData.map(bar => bar.value);
                chart.update();
              }
              else
              {
                pause = false;
                w = 0;
                progressBar.style.width = w + '%';
                myData[index-1].value += CharacterA["c"+index];
                points.innerHTML = parseInt(points.innerHTML) + 1;
                chart.data.labels = myData.map(bar => bar.name);
                chart.data.datasets[0].data = myData.map(bar => bar.value);
                chart.update();
              }
          });
        }
        else{
          w = 0;
          progressBar.style.width = w + '%';
        }
      }
      round_entry.innerHTML = parseInt(round_entry.innerHTML) + 1;

      
    } else {
      progressBar.style.transition = 'width 0.3s linear';
      w++;
      progressBar.style.width = w + '%';
    }

    if (progressBar.id == "progress")
    {
        widths["myInput"] = w;
    }
    else if (progressBar.id == "progress1")
    {
        widths["myInput1"] = w;
    }
    else if (progressBar.id == "progress2")
    {
        widths["myInput2"] = w;
    }
    else if (progressBar.id == "progress3")
    {
        widths["myInput3"] = w;
    }
  }
}


function checkEvent(event, inputElement) {
  if (event.key === 'Enter') {
    alert("change")

    var bp = document.getElementById('progress');
    var index; 
    if (inputElement.id == "myInput")
    {
      bp = document.getElementById('progress');
      speeds[0] = parseInt(inputElement.value);
      index = 0;
    }
    else if (inputElement.id == "myInput1")
    {
      bp = document.getElementById('progress1');
      speeds[1] = parseInt(inputElement.value);
      index = 1;
    }
    else if (inputElement.id == "myInput2")
    {
      bp = document.getElementById('progress2');
      speeds[2] = parseInt(inputElement.value);
      index = 2;
    }  
    else if (inputElement.id == "myInput3")
    {
      bp = document.getElementById('progress3');
      speeds[3] = parseInt(inputElement.value);
      index = 3;
    }    
    clearInterval(intervals[index]);
    intervals[index] = setInterval(function() {
      increaseWidth(bp);
    }, 10000/speeds[index]);
    console.log(index, speeds[index])
    // Do something with the new value
  }
};




document.addEventListener('DOMContentLoaded', function() {
  // Function to simulate loading progress
  function simulateProgress() {
    var progressBar = document.getElementById('progress');

    speeds[0] = parseInt(document.getElementById('myInput').value);
    intervals[0] = setInterval(function() {
      increaseWidth(progressBar);
    }, 10000/speeds[0]);
    console.log(speeds[0])
  }

  // Call the simulateProgress function to start the loading
  simulateProgress();
});

document.addEventListener('DOMContentLoaded', function() {
  // Function to simulate loading progress
  function simulateProgress() {
    var progressBar = document.getElementById('progress1');

    speeds[1] = parseInt(document.getElementById('myInput1').value);
    intervals[1] = setInterval(function() {
      increaseWidth(progressBar);
    }, 10000/speeds[1]);
    console.log(speeds[1])
  }

  // Call the simulateProgress function to start the loading
  simulateProgress();
});

document.addEventListener('DOMContentLoaded', function() {
  // Function to simulate loading progress
  function simulateProgress() {
    var progressBar = document.getElementById('progress2');

    speeds[2] = parseInt(document.getElementById('myInput2').value);
    intervals[2] = setInterval(function() {
      increaseWidth(progressBar);
    }, 10000/speeds[2]);
    console.log(speeds[2])
  }

  // Call the simulateProgress function to start the loading
  simulateProgress();
});


var myChart;
var chart; 
let myData = [
  {name: "Character1", value: 0},
  {name: "Character2", value: 0},
  {name: "Character3", value: 0},
  {name: "Character4", value: 0}
];
document.addEventListener('DOMContentLoaded', function() {
  // Function to simulate loading progress
  function simulateProgress() {
    var progressBar = document.getElementById('progress3');

    speeds[3] = parseInt(document.getElementById('myInput3').value);
    intervals[3] = setInterval(function() {
      increaseWidth(progressBar);
    }, 10000/speeds[3]);
    console.log(speeds[3])
  }

  // Call the simulateProgress function to start the loading
  simulateProgress();
});
document.addEventListener('DOMContentLoaded', function() {
  // Function to simulate loading progress
  myChart = document.getElementById('myChart').getContext('2d');

  // Assuming you have an array like this for your data:

  
  chart = new Chart(myChart, {
      type: 'pie',  // Specify that you want a pie chart
      data: {
          // Map the names and values to the labels and data arrays
          labels: myData.map(bar => bar.name),
          datasets: [{
              data: myData.map(bar => bar.value),
              // Add some colors for each section of the pie chart
              backgroundColor: ['red', 'blue', 'yellow', 'green']
          }]
      },
      options: {}
  });
});


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('csvFile').addEventListener('change', function(e) {
      var file = e.target.files[0];
      var reader = new FileReader();

      reader.onload = function(e) {
          var contents = e.target.result;
          var lines = contents.split('\n');
          var line_number = 0;
          var parts;
          lines.forEach(function(line) {
            if (line_number == 2)
            {
              parts = line.split(',');
              CharacterE["c1"] = parts[12];
            }
            else if (line_number == 4)
            {
              parts = line.split(',');
              CharacterA["c1"] = parts[12];
            }
            else if (line_number == 6)
            {
              parts = line.split(',');
              CharacterE["c2"] = parts[12];
            }
            else if (line_number == 8)
            {
              parts = line.split(',');
              CharacterA["c2"] = parts[12];
            }

            line_number ++;
          });

      };

      reader.readAsText(file);
  });
});

function reset(){
  myData = [
    {name: "Character1", value: 0},
    {name: "Character2", value: 0},
    {name: "Character3", value: 0},
    {name: "Character4", value: 0}
  ];
  
  widths = {
    'myInput': 0,
    'myInput1': 0,
    'myInput2': 0,
    'myInput3': 0
  };
  chart.data.labels = myData.map(bar => bar.name);
  chart.data.datasets[0].data = myData.map(bar => bar.value);
  chart.update();
  points = 3;
  var round_entry;
  var bar;
  for (let i = 1; i <= 4; i++)
  {
    if (i == 1)
      bar = document.getElementById("progress");
    else
      bar = document.getElementById("progress" + (i-1).toString());
    bar.style.transition = 'width 0s';
    bar.style.width = 0 + '%';
    bar.style.transition = 'width 0.3s linear';
    round_entry = document.getElementById('v' + i.toString());
    round_entry.innerHTML = 0;
  }
};

var button;
function pause2(){
  pause = true;
  button = document.getElementById("pause");
  button.onclick = continue2;
  button.textContent = "Continue";
};

function continue2(){
  pause = false;
  button = document.getElementById("pause");
  button.onclick = pause2;
  button.textContent = "Pause";


}




