<script>
export default{
    name: "CityComponent",
    props: [
        "name",
        "country_name",
        "country_code",
        "state_name",
        "state_code",
        "latitude",
        "longitude",
],
};
</script>

<template>
    <div class="city">
        <h1>{{name}}</h1>
        <h2>Pais: {{country_name}}</h2>
        <h3>Estado: {{state_name}}</h3>
        <p>Latitud: {{latitude}}</p>
        <p>Longitud: {{longitude}}</p>
        <img src="/src/assets/city.jpg" width="200" height="170" left="true" />


    </div>
</template>

<style scoped>
.city{
    padding: 2px;
    white-space: nowrap;
    width: 350px;
    height: 350px;
    border-style: solid;
    border-radius: 5px;
    border-color: grey;
}   
.city-hover:hover {
  background-color: rgb(49, 49, 49);
  cursor: pointer;
}

h1{
    overflow:hidden;
    text-overflow: ellipsis;
}
</style>
