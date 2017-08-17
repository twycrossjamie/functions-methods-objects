/*the script is placed inside an immediately invoked function expression which helps protect the scope of variables */
(function () {
 //PART ONE: CREATE HOTEL OBJECT AND WHITE OUT THE OFFER DETAILS
 //Create a hotel object using object literal syntax
    var hotel = {
            name: 'Park',
            roomRate: 240, //amount in dollars
            discount: 15, //percentage of discount
            offerPrice: function() {
                var offerRate = this.roomRate * ((100 - this.discount) / 100);
                return offerRate;
            }
        };

//Write out the hotel name, standard rate, and the special rate 
    var hotelName, roomRate, specialRate; //Declare Varibles

    hotelName = document.getElementById('hotelName'); //get elements
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name; //write hotel name
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2); //write room rate
    specialRate.textContent = '$' + hotel.offerPrice(); //write offer price
    
    //PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER    
    var expiryMsg; //message displayed to user 
    var today; //todays date
    var elEnds; // the element that shows the message about the offer ending 
    
    function offerExpires(today) {
        //declare variables eithin function for local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        //Add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        //create arrays to hold names of days / months
        dayNames = ['Sunday','Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        //Collect the parts of the date to show on the page 
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        //create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year +')';
        return expiryMsg;
        }
    today = new Date(); //puts today date in a new variable
    elEnds = document.getElementById('offerEnds'); // get the offerEnds element
    elEnds.innerHTML = offerExpires(today); //Add the expiry message
    //Finish the immediately invoked function expression
    }());
