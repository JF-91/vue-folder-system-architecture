<template >
    <div class="entry-list-container ">
        <div class="px-2 pt-2">
            <input v-model="term " type="text" class="form-control" placeholder="Buscar entrada">
        </div>

        <div class="entry-scrollarea">
            <EntryComponent  v-for="entry in entriesByTerm" :key="entry.id" :entry="entry"/>
        </div>

    </div>
</template>

<script >
import { defineAsyncComponent } from "vue";
import {mapGetters} from 'vuex'
export default {

    components: {
        EntryComponent: defineAsyncComponent(() => import('./EntryComponent.vue'))
    },
    computed: {
        ...mapGetters('journal', ['getEntriesByTerm']),
        entriesByTerm() {
            return this.getEntriesByTerm(this.term);
        }
    },
    data() {
        return {
            term:""
        }
    },

}
</script>

<style lang="scss" scoped>
input {
    height: 35px;
    border-radius: 5px;
    border: 0.5px solid #2c3e50;
    padding: 0 10px;
}
.entry-list-container {
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}
.entry-scrollarea {
    height: calc(100vh - 120px); 
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>