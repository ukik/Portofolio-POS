<template>
    <div class="col-12 wtg-alert wtg-alert-info m-0 mb-2 mt-2">
        <div>
            <i style="font-size:24px;" class="fa fa-lightbulb-o pr-2"></i>
            <span class="font-weight-bold"><slot /></span>
        </div>
        <slot name="alert-text" />
        <!--     <p class="wtg-alert-text">
        Formulir untuk mengisi data menu.
        </p>-->
    </div>
</template>
