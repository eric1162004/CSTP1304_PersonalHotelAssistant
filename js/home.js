document.addEventListener('DOMContentLoaded', function() {

    $('.carousel').carousel({
        indicators: true
    });

    // Close Popup StayInfo
    document.getElementById("box1Toggle").addEventListener("click", ()=>{
        document.getElementById("box1").style.display = "none";
    });

    // Open Popup StayInfo
    document.getElementById("stayInfoIcon").addEventListener("click", ()=>{
        document.getElementById("box1").style.display = "block";
    });

    // Close Popup Hotel Key
    document.getElementById("box2Toggle").addEventListener("click", ()=>{
        document.getElementById("box2").style.display = "none";
    });

    // Open Popup Hotel Key
    document.getElementById("hotelKeyIcon").addEventListener("click", ()=>{
        document.getElementById("box2").style.display = "block";
    });

    // Close Popup HouseKeeping
    document.getElementById("box3Toggle").addEventListener("click", ()=>{
        document.getElementById("box3").style.display = "none";
    });

    // Open Popup HouseKeeping
    document.getElementById("housekeepingIcon").addEventListener("click", ()=>{
        document.getElementById("box3").style.display = "block";
    });

    // Close Popup Hotel Usage
    document.getElementById("box4Toggle").addEventListener("click", ()=>{
        document.getElementById("box4").style.display = "none";
    });

    // Open Popup Hotel Usage
    document.getElementById("hotelUsageIcon").addEventListener("click", ()=>{
        document.getElementById("box4").style.display = "block";
    });

    // Facility Chart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Restaurant', 'Gym', 'Swimming Pool', 'Spa'],
            datasets: [{
                label: 'percentage of occupancy',
                data: [80, 50, 30, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


});

// toggle volume icon
function toggleVolume(icon) {
    className = icon.classList[1];
    icon.classList = (className === "fa-volume-up")? 
    "fa fa-volume-mute red-text": "fa fa-volume-up";
}

//toggle Speaker on/off
function onMouseDownSpeaker(icon) {
    icon.classList = "fas fa-microphone red-text";
}
function onMouseUpSpeaker(icon) {
    icon.classList = "fas fa-microphone ";
}

// toggle input message control
$("#keyboardIcon").click(function(){
    console.log("hello");
    $("#textMessageBox").slideToggle();
});

