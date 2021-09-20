/* eslint-disable */
import axios from "axios";

export default {
  // getUsers({commit}) {
  //   axios.get('https://jservice.io/api/clues')
  //       .then(response => {
  //           commit('setCategories', response.data)
  //       })
  //     },
  //     async getFetch (){
  //       await fetch('https://jservice.io/api/clues')
  //       .then(res =>  res.json())
  //       .then(res => console.log(res))
  //     },
  getQuestions:  ({ commit }) => {
    const arr = [1,2,3,4,5];
    arr.forEach((id) => {
        axios.get(`https://jservice.io//api/category.json?id=${id}` )
      .then(res =>  console.log(res.data(id)))
      .catch(err => {
        return err.message;
      });
    })  
   
  },

  // postAnswer: ({ commit, state }, { question, guess, answer, value }) => {
  //   if (guess === answer) {
  //     commit("setScore", state.score + value );
  //   }
  //   for (let i = 0; i < 6; i++) {
  //     if (state.questions[value / 100 - 1][i].question === question) {
  //       commit("setQuestionAnswered", [value / 100 - 1, i]);
  //     }
  //   }
  // },
  // minusValue:({commit,state},{value,guess,question,answer}) => {
  //   if (guess === answer) {
  //     commit("setScore", state.score - value );
  //   }
  //   for (let i = 0; i < 6; i++) {
  //     if (state.questions[value / 100 - 1][i].question === question) {
  //       commit("setQuestionAnswered", [value / 100 - 1, i]);
  //     }
  //   }
  // },

  addnewTodo: ({commit},text) => {
    commit('NEW_TODO',text)
  }
}
