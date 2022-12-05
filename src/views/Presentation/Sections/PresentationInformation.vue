<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="/DP-Daily.png"
              icon="touch_app"
              title="Know me better"
              description="A simple coder and gamer by heart, driven by mysteries and the unknowns in life or any good stories."
            />

            <RotatingCardBack
              image="/DP-Formal.jpg"
              title="Summary"
              description="Full Stack Developer with years of
              experience, specializing in
              Mobile / Web App Development."
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Let\'s talk',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="person"
              title="Basic Info"
              description="Born in 11 March 1997 Palembang, South Sumatera. Currently resides on Jln. Candi Angsoko No. 393
              Palembang"
            />
            <DefaultInfoCard
              class="mt-3"
              icon="school"
              title="Education"
              description="Bachelor Degree Cumlaude Graduate from STMIK Multi Data Palembang with 3.83 GPA"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              icon="flip_to_front"
              title="Programming Language"
              description="Mainly javascripts such as React, Vue, Node, but i've used golang, java, php and many more depending on the projects at hand.
              I've also worked with many DB such as mongoDB ,Mysql, MSSQL, Oracle, etc"
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Work Ethics"
              description="I'm willing to work remotely / directly, solo / team projects and willing to go extra miles as long as i'm compensated"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
