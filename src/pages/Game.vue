<template>
  <MainLayout>
    <GameField/>
    <Scoreboard slot="sidebar"/>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import GameField from '@/components/GameField'
import Scoreboard from '@/components/Scoreboard'
export default {
  name: 'Game',
  components: { Scoreboard, GameField, MainLayout },
}
</script>
