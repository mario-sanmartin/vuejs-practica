<template>
    <div>
        <ul class="list-group">
<!-- el tema de la :key="item.id" es para decir que tendremos id unicas -->
            <li v-for="(item,index) of arrayOrdenado" :key="item.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
              {{index}} - {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.edad}}</span>
            </li>
        </ul>
    
       <button class="btn btn-danger btn-block mt-3" @click="reiniciar">Reiniciar</button>
    </div>

</template>

<script>
import {mapState,mapMutations} from 'vuex';

export default {
        name: 'Lista',
        computed:{
            ...mapState(['integrantes']),
//    Ordenar la lista , cada vez que   trabajamos en los computed debo devolver algo con return,con el sort es un punto de comparación      
            arrayOrdenado(){
                return this.integrantes.sort( (a,b)=> b.edad - a.edad)
            }
        },
        methods:{
            ...mapMutations(['aumentar','reiniciar'])
        }
}
</script>