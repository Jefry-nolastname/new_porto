<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import imgSigninCover from "@/assets/img/signin-cover.png";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <h2 class="">and many more...</h2>
            <p class="lead">
              Since i want to design this homepage to be short and sweet, listing all my projects would not be a good idea.
              So here's simple list of my other projects.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Face Detect Using Golang"
                video="demo_video/Face_detect_Golang.mp4"
                
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Auth PinCode jquery Plugin"
                image="demo_video/custom_plugin_pinBB.png"
                
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="mt-5"
                title="Battle Ragnarok Online Private Server"
                video="demo_video/battleRO-Private Server.mp4"
                
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="shadow-lg"
                title="Asset Management Data"
                video="demo_video/Asset management demo.mp4"
                
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>
              I listed them all in my github
            </h3>
            <h6 class="text-secondary font-weight-normal">
              But they're all just images / screenshot since i can't publish the coding parts due to my clients privacy concerns.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
