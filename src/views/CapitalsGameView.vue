<script>
import countries from "/src/datasets/countries.json";
import CountryComponent from "../components/CountryComponent.vue";

export default {
  name: "CapitalsGameView",
  components: {
    CountryComponent,
  },
  data() {
    return {
      country: {},
      capital: "",
      puntaje: 0,
      pt: true
    };
  },
  created() {
    this.country = countries[Math.floor(Math.random() * countries.length)];
  },
  methods: {
    setCapital(e) {
      //TODO: implementar. fija la capital del input.
      this.capital = e.target.value; //listo
      this.pt = true;
    },
    adivinarCapital() {
      //TODO: implementar. verifica se la adivinanza es correcta. 
      if (this.capital.toLowerCase() === this.country.capital.toLowerCase()) {
        this.puntaje++;
        this.country = countries[Math.floor(Math.random() * countries.length)];
        this.capital = "";
      } else {
        this.country = countries[Math.floor(Math.random() * countries.length)];
        this.capital = "";
        this.puntaje = 0;
        this.pt = false
      }
    },
  },
};
</script>

<template>
  <h1>Puntaje: {{ puntaje }}</h1>
  <div class="countries">
    <!-- TODO: usar los metodos definidos arriba dentro del input para llenar el estado de la capital a adivinar:-->
    <input
      placeholder="Adivina la capital"
      :value="this.capital"
      @input="setCapital"
    />
    <button @click="adivinarCapital">Adivina!</button>

      <!--TODO: CREAR EL COMPONENTE PARA VISUALIZAR EL PAIS-->

      <div class="countries-container">
        <CountryComponent
        :name="country.name"
        :capital="'???'"
        :currency_name="country.currency_name"
        :currency="country.currency"
        :region="country.region"
        :code="country.iso2"

      ></CountryComponent>
    </div>
    <h1>{{puntaje}} punto(s)</h1>
    <h1 v-if="pt==false">Perdiste</h1>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .countries {
    align-items: center;
  }

  input {
    line-height: 2em;
  }

  .countries-container {
    margin-left: 35%;
    align-items: center;
    overflow-y: auto;
    vertical-align: middle;
    padding: 10px;
  }
}
</style>
