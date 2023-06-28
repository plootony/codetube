<template>
  <section class="tag">
    <h2 class="heading-title">Теги</h2>
    <div class="tag__items">
      <span class="tag__item" v-for="tag in tags" :key="tag.id">{{ tag.name }}</span>
    </div>
  </section>
</template>

<script>
import { getTags } from '@/api/getTags.js';

export default {
  name: 'Tag',
  data() {
    return {
      tags: []
    }
  },
  mounted() {
    getTags()
      .then(tags => {
        this.tags = tags;
      })
      .catch(error => {
        console.error(error);
      });
  }
}

</script>