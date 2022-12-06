<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

defineProps({
  data: {
    type: Array,
    required: true,
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
    },
  },
  col1: {
    type: String,
    default: "col-lg-3",
  },
  col2: {
    type: String,
    default: "col-lg-9",
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">
            <MaterialBadge color="success" class="mb-3"
              >My Projects List</MaterialBadge
            >

            <h2 class="text-dark mb-0">My Collection of projects</h2>
            <p class="lead">
              Here are some of the stuffs that i did while working freelance / contract with many companies or when i just felt like it.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-sm-5 mt-3">
      <div
        v-for="({ heading, description, items,languages,urls,videos }, index) in data"
        :class="`row ${index != 0 && index != -1 ? 'pt-lg-6' : ''}`"
        :key="heading"
      >
        <div :class="`${col1 ?? 'col-lg-3'}`">
          <div
            class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"
            style="top: 100px"
          >
            <div class="row">
              <div
                v-for="(language, index) in languages"
                :class="`${(index+1)%3 == 0?'col-5':'col-3'}`"
                :key="index"
              >
                <MaterialBadge :color="`${(['success','warning','primary','info'])[index % 4]}`" class="mb-3">{{language}}</MaterialBadge>
              </div>
            </div>
            <h3>{{ heading }}</h3>
            <h6 v-html="description" class="text-secondary font-weight-normal pe-3">
            </h6>
            <div class="row pe-4">
              <div
                v-for="({link,label}, idx) in urls"
                class="col-6"
                :key="idx"
              >
                <a
                  :href="link"
                  target="_blank"
                  :class="`btn btn-sm bg-gradient-${(['success','warning','primary','info'])[idx % 4]} mb-0 ms-auto d-block`"
                  >{{label}}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div :class="`${col2 ?? 'col-lg-9'}`">
          <div :class="`row ${index != 0 ? 'mt-3' : ''}`">
            <div v-for="({video,title,subtitle},idx)  in videos"
              :key="idx"
               class="col-md-4 md-0 mt-4 pe-4">
              <div
                class="card move-on-hover"
                :title="title"
              >
                <video class="w-100" controls>
                  <source :src="video" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="mt-2 ms-2">
                <h6 class="mb-0">{{title}}</h6>
                <p class="text-secondary text-sm font-weight-normal">
                  {{subtitle}}
                </p>
              </div>
            </div>
            <div
              class="col-md-4 mt-md-0"
              v-for="{ image, title, subtitle, route, pro } in items"
              :key="title"
            >
              <ExampleCard
                class="min-height-160 shadow-lg mt-4"
                :image="image"
                :title="title"
                :subtitle="subtitle"
                :route="route"
                :pro="pro"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
