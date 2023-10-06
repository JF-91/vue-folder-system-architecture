<template >
    <div class="entry-container mb-3 pointer p-2" 
        @click="$router.push({ name: 'entry', params: { id: entry.id }})"
    >
        
        <!-- titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1">Octubre </span>
            <span class="text-muted fs-6">3221</span>
        </div>

        <div class="entry-description">
            {{ shortText }}
        </div>
    </div>
</template>


<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
export default {
    
    props:{
        entry:{
            type: Object,
            required:  true,

        }
    },
    computed:{
        shortText(){
            return (this.entry.text.length > 130)
                ? this.entry.text.substring(0,130) + '...'
                : this.entry.text;
        },

        day(){
            const date = new Date(this.entry.date);
            return days[date.getDay()]
        },
        month(){
            const date = new Date(this.entry.date); 
            return months[date.getMonth()]
        },
        yearDay(){
            const date = new Date(this.entry.date);
            return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
        }
    }

}
</script>
<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;
        &:hover{
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;

        }

    }
    .entry-title{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: medium;
    }

    .entry-description{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    }
</style>