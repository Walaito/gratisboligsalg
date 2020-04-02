
//search bar
function search_listing() {
    let input = document.getElementById('js-search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName("wrapper");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "wrap";
        }
    }
}	

	show();

	//show filters and no results div
	function show() {
		
		document.getElementById("select-property").addEventListener("click" , () => {
			var a =  document.getElementById("house1");
			var b =  document.getElementById("house2");
			var c =  document.getElementById("house3");
			var d =  document.getElementById("house4");
		
			if( a.style.display === "none" && b.style.display === "none" && c.style.display === "none" && d.style.display === "none" )
			{
				document.getElementById("nothing").style.display = "block";
			}
		
			else {
				document.getElementById("nothing").style.display = "none";
			}
		})
		
		document.getElementById("s-btn").addEventListener("click" , () => {
			var a =  document.getElementById("house1");
			var b =  document.getElementById("house2");
			var c =  document.getElementById("house3");
			var d =  document.getElementById("house4");
		
			if( a.style.display === "none" && b.style.display === "none" && c.style.display === "none" && d.style.display === "none" )
			{
				document.getElementById("nothing").style.display = "block";
			}
		
			else {
				document.getElementById("nothing").style.display = "none";
			}
		})
	
		document.getElementById("search-more-id").addEventListener( "click" , () => {	
			var x = document.getElementById("s-container");
			var y = document.querySelector(".search-more");
			if (x.style.display === "none") {
				x.style.display = "flex";
				y.innerHTML = "hide filters";
			} 
			else {
				x.style.display = "none";
				y.innerHTML = "search by filters";
			}
		})
	}
	
  //house information stored
    var houses =[
        {price:2095000 , year:2018 , size:1284 , rooms:4},
        {price:2600000 , year:2018 , size:914 , rooms:6},
        {price:525000 , year:1990 , size:129 , rooms:3},
        {price:375000 , year:1990 , size:105 , rooms:3}
    ];
	
	//execute filter function
    filter();
    
	//filter functionality
	function filter() 
	{
        document.getElementById("s-btn").addEventListener("click" , () => {
			
			//check if inputs are empty add values if not specified by user
            if (document.getElementById("price-min").value == "") {
                document.getElementById("price-min").value = 1;
            }
            if (document.getElementById("year-min").value == "") {
                document.getElementById("year-min").value = 1900;
            }
            if (document.getElementById("size-min").value == "") {
                document.getElementById("size-min").value = 1;
            }
            if (document.getElementById("room-min").value == "") {
                document.getElementById("room-min").value = 1;
            }

            if (document.getElementById("price-max").value == "") {
                document.getElementById("price-max").value = 99999999;
            }
            if (document.getElementById("year-max").value == "") {
                document.getElementById("year-max").value = 2099;
            }
            if (document.getElementById("size-max").value == "") {
                document.getElementById("size-max").value = 99999;
            }
            if (document.getElementById("room-max").value == "") {
                document.getElementById("room-max").value = 100;
            }
			
			//global variables for input values
            var pmin = document.getElementById("price-min").value;
            var pmax = document.getElementById("price-max").value;

            var ymin = document.getElementById("year-min").value;
            var ymax = document.getElementById("year-max").value;

            var smin = document.getElementById("size-min").value;
            var smax = document.getElementById("size-max").value;

            var rmin = document.getElementById("room-min").value;
            var rmax = document.getElementById("room-max").value;

            let opt = document.getElementById("select-property").value;

			//check if houses data is true of false
            if (
                pmin <= houses[0].price && pmax >= houses[0].price &&
                ymin <= houses[0].year && ymax >= houses[0].year &&
                smin <= houses[0].size && smax >= houses[0].size &&
                rmin <= houses[0].rooms && rmax >= houses[0].rooms &&
                opt == "terracedhouse" ||
				pmin <= houses[0].price && pmax >= houses[0].price &&
                ymin <= houses[0].year && ymax >= houses[0].year &&
                smin <= houses[0].size && smax >= houses[0].size &&
                rmin <= houses[0].rooms && rmax >= houses[0].rooms && opt == ""
            )
            {
                document.getElementById("house1").style.display = "block";
            }
            else
            {
                document.getElementById("house1").style.display = "none";
            }

            if
            (
                pmin <= houses[1].price && pmax >= houses[1].price &&
                ymin <= houses[1].year && ymax >= houses[1].year &&
                smin <= houses[1].size && smax >= houses[1].size &&
                rmin <= houses[1].rooms && rmax >= houses[1].rooms &&
                opt == "villa" || 
				pmin <= houses[1].price && pmax >= houses[1].price &&
                ymin <= houses[1].year && ymax >= houses[1].year &&
                smin <= houses[1].size && smax >= houses[1].size &&
                rmin <= houses[1].rooms && rmax >= houses[1].rooms && opt == ""
            )
            {
                document.getElementById("house2").style.display = "block";
            }
            else
            {
                document.getElementById("house2").style.display = "none";
            }

            if
            (
                pmin <= houses[2].price && pmax >= houses[2].price &&
                ymin <= houses[2].year && ymax >= houses[2].year &&
                smin <= houses[2].size && smax >= houses[2].size &&
                rmin <= houses[2].rooms && rmax >= houses[2].rooms &&
                opt == "terracedhouse" 
				|| pmin <= houses[2].price && pmax >= houses[2].price &&
                ymin <= houses[2].year && ymax >= houses[2].year &&
                smin <= houses[2].size && smax >= houses[2].size &&
                rmin <= houses[2].rooms && rmax >= houses[2].rooms && opt == ""
            )
            {
                document.getElementById("house3").style.display = "block";
            }
            else
            {
                document.getElementById("house3").style.display = "none";
            }

            if
            (
                pmin <= houses[3].price && pmax >= houses[3].price &&
                ymin <= houses[3].year && ymax >= houses[3].year &&
                smin <= houses[3].size && smax >= houses[3].size &&
                rmin <= houses[3].rooms && rmax >= houses[3].rooms &&
                opt == "terracedhouse" 
				|| pmin <= houses[3].price && pmax >= houses[3].price &&
                ymin <= houses[3].year && ymax >= houses[3].year &&
                smin <= houses[3].size && smax >= houses[3].size &&
                rmin <= houses[3].rooms && rmax >= houses[3].rooms && opt == ""
            )
            {
                document.getElementById("house4").style.display = "block";
            }
            else
            {
                document.getElementById("house4").style.display = "none";
            }
        });

        document.getElementById("select-property").addEventListener("change" , () => {

            let opt = document.getElementById("select-property").value;

            if( opt == "")
            {
                document.getElementById("house1").style.display = "block";
                document.getElementById("house3").style.display = "block";
                document.getElementById("house4").style.display = "block"
                document.getElementById("house2").style.display = "block"
            }
			
			if( opt == "terracedhouse")
            {
                document.getElementById("house1").style.display = "block";
                document.getElementById("house3").style.display = "block";
                document.getElementById("house4").style.display = "block"
                document.getElementById("house2").style.display = "none"
            }

            else if (opt == "apartment" )
            {
                document.getElementById("house1").style.display = "none";
                document.getElementById("house2").style.display = "none";
                document.getElementById("house3").style.display = "none";
                document.getElementById("house4").style.display = "none"
            }

            else if (opt == "room" )
            {
                document.getElementById("house1").style.display = "none";
                document.getElementById("house2").style.display = "none";
                document.getElementById("house3").style.display = "none";
                document.getElementById("house4").style.display = "none"
            }

            else if (opt == "garage" )
            {
                document.getElementById("house1").style.display = "none";
                document.getElementById("house2").style.display = "none";
                document.getElementById("house3").style.display = "none";
                document.getElementById("house4").style.display = "none"
            }

            else if (opt == "villa" )
            {
                document.getElementById("house1").style.display = "none";
                document.getElementById("house3").style.display = "none";
                document.getElementById("house4").style.display = "none"
                document.getElementById("house2").style.display = "block"
            }
        })
    }



