function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                
                if (cases > 255) {
                    color = "rgb(255, 0, 0)";
                }

                else { 
                    color = `rgb(${cases}, 0, 0)`;
                }

                new mapboxgl.Marker({
                    draggable: false,
                    color:null
                    })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

                   
                    var marker =  new mapboxgl.Marker().setLngLat([element.longitude, element.latitude]).addTo(this.map);
                    // use GetElement to get HTML Element from marker and add event
                    marker.getElement().addEventListener('click', () => {
                        coordinates.style.display = 'block';
                        coordinates.innerHTML = `Region Name:${element.name}</br>Total Population: ${element.pop}<br />Infected:${element.infected}</br>Cured:${element.recovered}</br>Death: ${element.dead}</br>As per data of:${element.lastUpdated}` ; 
            });
            });
           
            
        })
       
}

updateMap();