<template>
  <div>
    <page-title :title="page.pageTitle" />

  </div>
</template>

<script>
import PageTitle from '../PageTitle';
import RichTextBlock from '../content_blocks/RichTextBlock';

export default {
  props: ['page'],
  components: {
    PageTitle,
    RichTextBlock
  }
};
</script>
