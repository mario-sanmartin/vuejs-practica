<template>
  <div id="app" class="container">
    <Cabecera></Cabecera>
    <Lista></Lista>
    <cuerpazo class="mt-3"></cuerpazo>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'
import Cuerpazo from './components/Cuerpazo.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    Lista,
    Cuerpazo
  }
}
</script>


