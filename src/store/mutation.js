export default {
    setCategories: (state, payload) => {
      state.categories = payload
    },
    setQuestions: (state, payload) => {
      state.questions = payload
    },
    setQuestionAnswered: (state, payload) => {
      state.questions[payload[0]][payload[1]].isAnswered = true;
    },
    setScore: (state, payload) => {
      state.score = payload;
    },
    NEW_TODO(state,text){
      state.text = text
    },
    TRUE(state){
      state.trueanswer++
    },
    FALSE(state){
      state.falseanswer =  state.falseanswer + 1
    },
    MINUS_VALUE(state,value){
      state.score = state.score - value
    }
  };
  