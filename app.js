const votesInitialState = {
  nominees: [
    { name: "jQuery", votes: 0 },
    { name: "React", votes: 0 },
    { name: "Angular", votes: 0 },
  ],
};

//Example Action Object
const addVoteAction = {
  type: "ADD_VOTE",
  payload: "jQuery",
};

//Action Creator -> creates and returns an action object
const addVote = (nominee) => {
  return {
    type: "ADD_VOTE",
    payload: nominee,
  };
};

const removeVote = (nominee) => {
  return {
    type: "REMOVE_VOTE",
    payload: nominee,
  };
};

//Reducer

function voteReducer(state = votesInitialState, action) {
  //Action - Add to Do Item
  if (action.type === "ADD_VOTE") {
    let newNominees = state.nominees.map((nominee) => {
      if (nominee.name === action.payload) {
        return {
          name: nominee.name,
          votes: nominee.votes + 1,
        };
      } else {
        return nominee;
      }
    });
    return { nominees: newNominees };
  }

  if (action.type === "REMOVE_VOTE") {
    let newNominees = state.nominees.map((nominee) => {
      if (nominee.name === action.payload) {
        return {
          name: nominee.name,
          votes: nominee.votes - 1,
        };
      } else {
        return nominee;
      }
    });
    return { nominees: newNominees };
  }

  // otherwise return the existing state unchanged
  return state;
}

const store = Redux.createStore(voteReducer);

console.log(store.getState());
