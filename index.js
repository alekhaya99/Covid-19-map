function updateMap(){
    fetch("/data.json")
    .then(response=>response.json())
    .then(rsp=>{
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;

            cases=element.infected;
            if(cases>300){
                color="rgb(0,255,0)";
            }
            else{
                color=`rgb(0,${cases},0)`
            }

            new mapboxgl.Marker({
                draggable:true,
                color:color
            })
            .setLngLat([longitude,latitude])
            .addTo(map);
        });
    })
};

updateMap()