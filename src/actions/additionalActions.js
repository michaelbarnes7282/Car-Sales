export const addFeature = () => {
    console.log('it works!')
    return { type: 'ADD_FEATURE' };
};

export const removeFeature = item => {
    console.log('remove is here!')
    return { type: 'REMOVE_FEATURE'}
  };
