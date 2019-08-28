<template>
    <!-- <FullPageLoading v-if="$root.request_submit" />

    <Welcome v-if="$root.welcome" />

    <Cache v-else>
        <transition name="fade">
            <component v-if="!$root.offline" :is="$root.component" />
            <component v-else :is="$root.component" />
        </transition>
    </Cache> -->
    <div>
        <Layout>
            <router-view />
        </Layout>
    </div>
</template>

<script>
export default {
    computed: {
        request() {
            return this.$root.request
        }
    }    
}
</script>