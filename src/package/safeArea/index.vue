<template>
    <div class="package-safe-area"></div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    .package-safe-area {
        width: 100%;
        height: costant(safe-area-inset-bottom);
        height: env(safe-area-inset-bottom);
    }
</style>