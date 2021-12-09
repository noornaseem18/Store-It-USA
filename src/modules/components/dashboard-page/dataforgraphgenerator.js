import React, { Component , useState, useEffect} from 'react';
import { format, parseISO, subDays } from "date-fns";
import axios from 'axios';

const data = []

const Dataforchartgenerator = () => {
  const [users, setUsers] = useState([])
    useEffect(() => {
      axios.get('http://localhost:5000/users/')
      .then(response => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
    },[])

    var grandtotal= 0;
    var x = 0;

      for (let num = 30; num >= 0; num--) {
        x = subDays(new Date(), num).toISOString().substr(0, 10);
        for (var i=0; i < users.length; i++) {
          for (var j=0; j < users[i].items.length; j++) {
            if ((users[i].items[j].createdAt < x)&&(users[i].items[j].location !== "-")&& (users[i].items[j].location !== "")
              )
              {
                grandtotal = grandtotal + users[i].items[j].palletsquantity;
              } else {
                grandtotal = grandtotal ;
              } 
              console.log(x);
              console.log(users[i].items[j].createdAt);
          } 
      } 
      data.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        OccupiedNumberOfPallets: grandtotal,
      });
    }

    var half_length = Math.ceil(data.length / 2);    

    var rightSide = data.splice(half_length, data.length);

  console.log(rightSide);
return rightSide;
}

  export default Dataforchartgenerator