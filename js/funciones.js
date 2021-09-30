function metodoGet(){
    $.ajax({
        url:"https://g468ced4b1f31f1-dbhotel.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        headers:{'accept':'application/json', 'Access-Control-Allow-Origin' : '*'},
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);

        }
    });
}