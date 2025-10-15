<template lang="">
    <div>
        <header>
            <h1>Đây là Header</h1>
            <slot name="header"></slot>
        </header>

        <main>
            <h1>Đây là Main Container</h1>
            <slot></slot>
            <section class="one">
                <slot name="one"></slot>
            </section>
            <section class="two">
                <slot name="two"></slot>
            </section>
        </main>

        <footer>
            <h1>Đây là Footer</h1>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>