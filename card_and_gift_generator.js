serialNumber = 1;

//this function will add leading zero to serial number
function pad(serial) {
    num = serial.toString();
    while (num.length < 6) num = "0" + num;
    return num;
}

//this function will generate card number
function generateCardNumber(district, currentYear, postNo, birthYear){
    cardNumber = district[0] + district[1]   //take first two character from district
    cardNumber = cardNumber.toUpperCase()    //make them upper case
    cardNumber += (currentYear[2] + currentYear[3])
    cardNumber += birthYear
    cardNumber += (postNo[0]+ postNo[0])
    cardNumber += pad(serialNumber)
    return cardNumber
}

function cardSistribution(persons){

    cards_and_gifts = Array(persons.length)

    //loop over persons object and generate card number and gift and put them in cards_and_gifts in a shorted manner
    for(i = 0; i<persons.length; i++){
        p = persons[i]
        cardNumber = generateCardNumber(p.district, p.currentYear.toString(), p.postNo.toString(), p.birthYear.toString())
        last_number = serialNumber%10
        if(last_number%2 == 0){
            gift = 'R'
        }
        else{
            gift = 'W'
        }

        priority = p.priority

        generated_card_gift = {
            cardNumber: cardNumber,
            gift: gift,
            priority: priority
        }

        cards_and_gifts[priority-1] = generated_card_gift  //this will sort according to priority

        serialNumber++


    }


    return cards_and_gifts
}


cardSistrbution = [
    {name: "Mr Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2},
    {name: "Mr Morshed", birthYear: 2001, currentYear: 2022, district: "Rangamati", postNo: 4567, priority: 1}
]

cards_and_gifts = cardSistribution(cardSistrbution)
console.log(cards_and_gifts)