<script>
import countries from "/src/datasets/countries.json";

export default {
  name: "CountryView",
  components: {},
  data() {
    return {
      country: {},
    };
  },
  created() {
    this.country = countries.find(
      (country) => country.iso2 === this.$route.params.code
    );
  },
  methods: {},
};
</script>

<template>
  <div class="country">
    <!--TODO: Poblar el HTML con las propiedades. Usar https://countryflagsapi.com para la bandera: LISTO-->
    <h1>{{ country.name }}</h1>
    <p>Capital: {{ country.capital }}</p>
    <p>Moneda: {{ country.currency_name }} ({{ country.currency}})</p>
    <p>Región: {{ country.region }}</p>
    <img :src="'https://www.countryflagicons.com/'" />
    
    <img
      width="400"
      height="400"
    />
    <div class="traducciones">
      <h2>Traducciones</h2>
      <h3
        v-for="(translation, index) in Object.keys(country.translations)"
        :key="index"
      >
        {{ `${translation}: ${country.translations[translation]}` }}
      </h3>
    </div>
  </div>
</template>

<style scoped>
.country {
  font-size: large;
}

@media (min-width: 1024px) {
}

.traducciones {
  color: white;
  display: grid;
}

.nombre {
  font-size: 50px;
}
</style>
