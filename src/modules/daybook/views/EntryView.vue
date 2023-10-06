<template >
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-3">Oktober</span>
            <span class="mx-2 fs-4 fw-light">2332</span>

        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-info mx-2">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea name="...notes" id="" 
            class="form-control"  cols="30" rows="10" placeholder="Añade una nota">

        </textarea>
    </div>

    <FabComponent />
    <div class="d-flex justify-content-left">

        <img src="https://api.time.com/wp-content/uploads/2014/07/space-photos-july-4th-red-white-blue017.jpg" 
            class="img-fluid mt-5"  alt="entry-picture">
    </div>
</template>
<script>
import {defineAsyncComponent} from 'vue'
import {mapGetters} from 'vuex'
export default {
    props:{
        id:{
            type: String,
            required: true, 
        }
    },
    components: {
        FabComponent: defineAsyncComponent(() => import('../components/FabComponent.vue')),
        
    },
    computed:{
        ...mapGetters('journal',['getEntriesById'])
    },
    methods: {
      loadEntry(){
        const entry = this.getEntriesById(this.id);
        if(!entry){
            this.$router.push({name: 'no-entry'})
        }   

      }  
    },
    created() {
        this.id 
        
    }
}
</script>
<style lang="scss" scoped>

    textarea{
        font-size: 20px;
        border: none;
        height: 100%;
        &:focus{
            outline: none;
        }
    }

    img{
        width: 200px;   
        height: 200px;
        object-fit: cover;
        border-radius: 20px;

    }

</style>