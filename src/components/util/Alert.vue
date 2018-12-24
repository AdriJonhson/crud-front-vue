<template>
    <div>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'Alert',

        created(){
            if(this.store.message != ''){
                M.toast({html: this.store.message, classes: 'rounded'});
            }
        },

        data(){
            return{
                store: this.$store.state,
            }
        }

    }
</script>

<style scoped>

</style>