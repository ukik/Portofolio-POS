<template>
    <transition name="fade-loading">
        <div class="loading-container d-flex justify-content-center">
            <div class="container h-100">
                <div class="row align-items-center h-100">
                    <div class="col-6 mx-auto text-center">
                        <div class="lds-dual-ring" />
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>


<style scoped>

    .lds-dual-ring {
        display: inline-block;
        width: 64px;
        height: 64px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 60px;
        height: 60px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid #fed;
        border-color: #fed transparent #fed transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading-container {
        height: 100%;
        width: 100%;
        position: fixed;
        background: #00000094;
        z-index: 9999;
        top: 0;
    }
    .fade-loading-enter-active,
    .fade-loading-leave-active {
        transition: opacity .5s;
    }
    .fade-loading-enter,
    .fade-loading-leave-to
    /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
