<template>
    <div>
        <form>
            <div class="row">
                <div class="input-field col s12">
                    <input id="name" type="text" class="validate">
                    <label for="name">Título</label>
                </div>
            </div>
            <button class="btn waves-effect waves-light green" type="submit">Salvar
                <i class="material-icons left">send</i>
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'form-category',
        props: {
            update: {
                require: false,
                type: Boolean,
                default: false
            },
            category: {
                require: false,
                type: Object,
                default: () => {
                    return {
                        title: '',
                        slug: ''
                    }
                }
            }
        }
    }
</script>
