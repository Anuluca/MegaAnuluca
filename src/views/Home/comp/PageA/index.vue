<script setup lang="ts">
import './index.less'
import temp1 from '@/assets/img/temp1.jpg'
import temp2 from '@/assets/img/temp2.jpg'
import temp3 from '@/assets/img/temp3.jpg'
</script>

<template>
  <div class="home-page-a home-page-container">
    <div class="top-controller"></div>
    <div class="inner-text">
      <h1>WELCOME！</h1>
      <p>My name is Anuluca, a web developer and a Pokemon Trainer.</p>
      <el-carousel trigger="click" ref="carousel" :interval="5000">
        <el-carousel-item
          :style="
            'background-image: url(' + temp1 + ');    background-size: cover;overflow: visible;'
          "
        >
        </el-carousel-item>
        <el-carousel-item
          style="background-color: blue"
          :style="
            'background-image: url(' + temp2 + ');    background-size: cover;overflow: visible;'
          "
        >
        </el-carousel-item>
        <el-carousel-item
          style="background-color: green"
          :style="
            'background-image: url(' + temp3 + ');    background-size: cover;overflow: visible;'
          "
        >
        </el-carousel-item>
        <div class="cas-inner">
          <div class="title">Luca's LiberGarden in MegaEvolution!</div>
          <div class="date">2023. 2. 27</div>
          <div class="module">BLOGS / ByTalk</div>
        </div>
      </el-carousel>
      <div class="TOP">>TOP</div>
    </div>
    <div class="bottom-controller"></div>
  </div>
</template>
