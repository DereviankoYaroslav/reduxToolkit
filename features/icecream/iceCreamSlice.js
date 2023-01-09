const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfIceCreames: 10
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreames--;
        },
        restocked: (state, action) => {
            state.numOfIceCreames += action.payload;
        }
    },
    extraReducers: {
        ['cake/ordered']: (state) => {
            state.numOfIceCreames--;
        }
    }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;