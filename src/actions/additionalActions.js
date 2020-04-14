export const addFeature = item => {
    console.log('it works!', item)
    return {
        type: 'ADD_FEATURE',
        payload: item
    };
};

export const removeFeature = item => {
    console.log('removed')
    return {
        type: 'REMOVE_FEATURE',
        payload: item
    }
  };
