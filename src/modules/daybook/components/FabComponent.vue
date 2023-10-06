<template >
    <button class="btn btn-primary">
        <i class="fa fa-2x fa-plus" :class="icon"></i>
    </button>
</template>
<script>
export default {
    props: {
        icon:{
            type: String,
            default: 'fa fa-2x fa-plus'
            
        }
    }
}
</script>
<style lang="scss" scoped>

    button{
        position: fixed;
        bottom: 20px;
        right: 20px;
        border-radius: 50%;
        width: 50px;
        height: 50px;   
        box-shadow: 0px 5px 10px rgba(#000000,  0.2);
       
        color: white;
        transition: 0.2s all ease-in;
        &:hover{
            background-color: rgb(188, 19, 191);
            transition: 0.2s all ease-in;
            

        }
        
    }
</style>