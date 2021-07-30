const addGroup = (newGroup) => ({
    type: 'ADD_GROUP',
    newGroup
});

const addEvent = (newEvent) => ({
    type: 'ADD_EVENT',
    newEvent
})

const searchGroup = (searchTerm) => ({
    type: 'SEARCH_GROUP',
    searchTerm,
})

export { addGroup, addEvent, searchGroup };