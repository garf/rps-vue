<template>
  <div class="game-field">

    <div class="game-field__title">ROCK! Paper, scissors!</div>

    <div class="game-field__choices">
      <Choice :choice="choice" @click.native="makeChoice(choice)" v-for="choice in choiceMap" :key="choice"/>
    </div>

    <div class="game-field__result">
      <Result />
    </div>
  </div>
</template>

<script>
import { CHOICE } from '@/constants'
import decider from '@/services/decider'
import Choice from '@/components/Choice'
import Result from '@/components/Result'
import sample from 'lodash-es/sample'

export default {
  name: 'GameField',
  components: { Result, Choice },
  data: () => ({
    choiceMap: [
      CHOICE.ROCK,
      CHOICE.PAPER,
      CHOICE.SCISSORS,
    ]
  }),
  methods: {
    makeChoice (playerOneChoice) {
      const playerTwoChoice = sample(CHOICE)
      const choices = [playerOneChoice, playerTwoChoice]

      const result = decider.decide(choices)

      console.log(result); // eslint-disable-line

      // TODO: Add scores to Store
      // TODO: Show results in result block
    },
  },
}
</script>

<style lang="scss" scoped>
$bg-color: #a7dbd8;

.game-field {
  padding: 15px;
  flex: 1;

  &__result {
    padding: 20px;
  }

  &__title {
    font-size: 1.4rem;
    text-align: center;
  }

  &__choices {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 20px;
  }
}
</style>
