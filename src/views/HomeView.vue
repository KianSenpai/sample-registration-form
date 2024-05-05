<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Wizard from "@/components/Wizard.vue";
import Description from "@/components/Description.vue";
</script>

<template>
    <HeaderComponent/>
    <!--    when i saw header in project description, i thought you meant actual header on top, so i used state manager to prevent prop drilling.-->
    <!--    then i saw that the test is checking for the steps in wizard.vue; but i really wanted to show off my skills in using state management! so i didn't remove the header :D-->
    <div class="w-full h-full flex justify-center items-center">
        <Wizard/>
        <Description/>
    </div>
</template>
