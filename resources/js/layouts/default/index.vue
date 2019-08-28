<template>
    <div>
        <Loading v-if="$root.request"/>
        <Navbar />
            <keep-alive>
                <slot />
            </keep-alive>
         <Footer />        
    </div>
</template>