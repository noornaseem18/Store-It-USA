import React, { Component , useState, useEffect} from 'react';
import { format, parseISO, subDays } from "date-fns";
import axios from 'axios';

var paidnumber= 0;
var unpaidnumber= 0;
const data = []

function Datafordepositsgenerator() {
  const [users, setUsers] = useState([])
    useEffect(() => {
      axios.get('http://localhost:5000/users/')
      .then(response => {
        console.log('THE USERS ARRAY COMING IN IS',response);
        setUsers(response.data)
        console.log('THE USERS ARRAY IS',users);
      })
      .catch((error) => {
        console.log(error);
      })
    },[])

        for (var i=0; i < users.length; i++) {
            console.log('THE LENGTH OF USERS ARRAY IS', users.legth);
          for (var j=0; j < users[i].items.length; j++) {
            console.log('THE LENGTH OF THIS USERS ITEMS ARRAY IS', users[i].legth);
            if (users[i].items[j].paid === "Paid")
              {
                paidnumber = paidnumber + 1;
                console.log('THE VALUE OF PAID NUMBERS IS',paidnumber);
              } else if (users[i].items[j].paid === "Not Paid"){
                unpaidnumber = unpaidnumber + 1 ;
                console.log('THE VALUE OF UNPAID NUMBERS IS', unpaidnumber);
              } 
          } 
      } 

      data.push({
        name: 'Items',
        PaidNumberOfItems: paidnumber,
        UnpaidNumberOfItems: unpaidnumber,
      });

      var half_length = Math.ceil(data.length / 2);    

      var rightSide = data.splice(half_length, data.length);

    console.log(rightSide);
return rightSide;
}

  export default Datafordepositsgenerator