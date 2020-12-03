$("body").append($("<button>+</button>").on("click", function(){
    $("#risultato").html("Risultato = " + parseInt($("#casella1").val()) + parseInt($("#casella2").val()));
    }));

$("body").append($("<button>-</button>")).on("click", function(){
    $("#risultato").html("Risultato = " + parseInt($("#casella1").val()) - parseInt($("#casella2").val()));
    });

$("body").append($("<button>x</button>").on("click", function(){
    $("#risultato").html("Risultato = " + parseInt($("#casella1").val()) * parseInt($("#casella2").val()));
    }));

$("body").append($("<button>/</button>").on("click", function(){
    $("#risultato").html("Risultato = " + parseInt($("#casella1").val()) / parseInt($("#casella2").val()));
    }));
/*
    function calcola (segno){
        var n1 = parseInt($("#casella1").val());
        var n2 = parseInt($("#casella2").val());
        switch (segno){
            case "+" : risultato = n1+n2;
        }
    }
*/