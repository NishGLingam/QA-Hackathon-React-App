import TalkClub from '../images/talkClub.png';
import Football from '../images/codeclubimg.png'; 


const defaultState = {
    groups: [
        {
            image: TalkClub,
            title: 'Talk Club',
            description: 'Talk Club is a forum to practice presenting! This club is open to all Nationwide employees. Sessions will be held once a month. At each session, we will have one or two presenters. After each presentation, we will discuss how to improve the presentation and learn some presentation tips.'
        },
        {
            image: Football,
            title: 'Code Club',
            description: 'Let’s get coding and innovative to build that app that would propel NBS to the next level! All are invited to this space no prior coding experience required'
        }
    ],
    events: [
        {
            date: '23/12/2020',
            title: 'Christmas Meet Up',
            location: 'Swindon',
            attendees: 'Ali Tariq',
            description: 'It’s that time of the year again! ❄️ The annual Christmas social! ❄️ So line up your sleighs and light up your fireplace for an afternoon full of Christmas songs, trivia, quizzing and festivity 🎄'

        },    
    ],
    filter: '',
};

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_GROUP':
            return {
                ...state,
                groups: state.groups.concat(action.newGroup),
            };
        case 'ADD_EVENT':
            return {
                ...state,
                events: state.events.concat(action.newEvent),
            };
        case 'SEARCH_GROUP':
            return {
                ...state,
                filter: action.searchTerm 
            }
        default:
            return state;
    }
}

export default reducer;