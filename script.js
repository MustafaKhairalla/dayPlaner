var eventList = $("#eventId");
var events = [];
//events section
var row = $(".row");
var col1 = $(".col");
var col2 = $(".col-10");
var col3 = $(".col");
var time = moment().hour() + ":00";
var time2 = moment().hour()
var clearBtn = $("#clearBtn")

const hours = 24;



$(document).ready(function(){

    console.log(moment().hour() )
    genRow();
    $(".btnClass").click(function(){
        //console.log($(this).attr('id'))
        var inputText = $(this).attr('id');
        var text = $("#event-"+inputText).val()
        //console.log(inputText , text)
        events.push( { id: inputText , value: text})
        localStorage.setItem('events', JSON.stringify(events));

    })
});

function getText(index){

    events = JSON.parse(localStorage.getItem('events')) || [];
    //console.log( events[0].id)
    //var res =''
     for (var i=0 ; i < events.length ; i++){
        
        if(events[i].id == index){
              var  res =  events[i].value;
                //events[i].value;
                //console.log(res + "hi")
                //console.log(res)
                
            }
     }
    return res

}

function genRow(){
    for (var i=9 ; i < 19 ; i++){

        // row = $("div")
        // row.addClass("row", "bg-secondary")
        // col1 =$("div")
        // col1.addClass("col", "bg-info")
        var newRow = $("<div>");
        newRow.addClass("row" ,  "bg-secondary");

        var infoDiv = $("<div>");
        infoDiv.addClass("col bg-info");
        infoDiv.text(i +":00")
        newRow.append(infoDiv)

        var eventDiv = $("<textarea>");
        eventDiv.addClass("col-10"  );
        eventDiv.val(getText(i))
        eventDiv.attr('id', "event-"+i)
        console.log(time)
        if(time == infoDiv.text()){
            eventDiv.addClass("red");
        }else if(time2 > i){
            eventDiv.addClass("grey");
        }
        
        //console.log(events[0])
        //eventDiv.val(events[0])
        //eventDiv.text(eventDiv.val())
        newRow.append(eventDiv)


        var btn = $("<button>")
        btn.text('      save      ')
        btn.attr('id', i);
        btn.addClass("btnClass")
        newRow.append(btn)
     
     
        eventList.append(newRow)
        
        
}
}

$("#clearBtn").click(function(){
    localStorage.clear();
    document.location.reload(true);
})

// function setColor(){
//     console.log(infoDiv.text)
// }