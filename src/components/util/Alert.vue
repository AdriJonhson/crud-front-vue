<template>
    <div>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        props: ['message'],

        name: 'Alert',

        created(){
            if(this.message.text != ''){
                M.toast({html: this.message.text, classes: 'rounded'});
            }
            this.message.text = '';
        },

    }
</script>

<style scoped>

</style>