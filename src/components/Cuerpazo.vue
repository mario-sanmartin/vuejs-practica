<template>
    <div>
        <div class="table text-center">
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Poder</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of integrantes" :key="item.id">
                        <td>{{item.nombre}}</td>
                        <td>{{item.edad}}</td>                       
                        <td>{{item.poder}}</td>
                    </tr>      
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import {mapState,mapMutations} from "vuex";
export default {
    name: 'cuerpazo',
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
