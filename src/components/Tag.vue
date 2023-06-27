<template>
  <section class="tag">
    <h2 class="heading-title">Теги</h2>
    <div class="tag__items">
      <span class="tag__item" v-for="tag in tags">{{ tag }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tag',
  data() {
    return {
      tags: ['JavaScript', 'Английский', 'Unity', 'Unreal', 'C#', 'C++', 'Кулинария']
    }
  }
}

</script>