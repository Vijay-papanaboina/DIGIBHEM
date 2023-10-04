document.getElementById("button").onclick=function(){
    var x=(document.getElementById("room"))
    var y=x.options[x.selectedIndex].text;
    if (y=="Delux-2500/-"){
        room=2500
    }
    else if (y=="suite-4000/-"){
        room=4000
    }
    var days=document.getElementById("days").value
    var TotalRoomCost=room*days;
    document.getElementById("roomcost").value=TotalRoomCost

    var u=(document.getElementById("amenities"))
    var v=u.options[u.selectedIndex].text;
    if (v=="AC-1000/-"){
        amenities=1000
    }
    else if (v=="Locker-300/-"){
        amenities=300
    }
    var days=document.getElementById("days").value
    var TotalAmenitiesCost=amenities*days;
    document.getElementById("amenitiescost").value=TotalAmenitiesCost;

    var extra=document.getElementById("persons").value
    var k=(extra-2)*1000*days
    document.getElementById("Extra").value=k;

    var total=TotalRoomCost+TotalAmenitiesCost+k
    document.getElementById("Total").value=total;

    var advance=document.getElementById("advance").value;
    var balance=total-advance
    document.getElementById("balance").value=balance;




    

}
