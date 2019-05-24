<template>
  <div class="choice" tabIndex="0">
    {{ choice }}
    <ChoiceIcon :choice="choice" />
  </div>
</template>

<script>
import ChoiceIcon from '@/components/ChoiceIcon'
export default {
  name: 'Choice',
  components: { ChoiceIcon },
  props: {
    choice: String,
  }
}
</script>

<style lang="scss" scoped>

.choice {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary;

  &:hover {
    cursor: pointer;
    user-select: none;
    background-color: $info;
  }

  &:focus {
    box-shadow: 0 0 5px 5px $info;
  }
}
</style>
