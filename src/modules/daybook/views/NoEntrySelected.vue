<template >
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center text-muted">No hay nada seleccionado</h1>
    </div>
    <div>
        <FabComponent />
    </div>
</template>
<script>
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        FabComponent: defineAsyncComponent(() => import('../components/FabComponent.vue')),
    }
}
</script>
<style lang="scss" scoped>
    div{
        height: 100vh;
    }
</style>